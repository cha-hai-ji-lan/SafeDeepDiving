<template>
    <div v-if="interface_state['setting']['show']" class="setting"
        :class="{ 'opacity-show': interface_state['setting']['delay-hide'] === false, 'opacity-hide': interface_state['setting']['delay-hide'] }"
        ref="floatingWindowElement">
        <div class="title" @mousedown="startDrag">
            <div class="title-base-icon title-icon">
                <BaseIcon Type="setting"></BaseIcon>
            </div>
            
            <div class="switch-but ban-select">基础设置</div>
            <div class="switch-but ban-select">主题设置</div>
            <div class="title-close-icon" @click="()=>{close_inter('setting')}">
                <BaseIcon Type="close"></BaseIcon>
            </div>
        </div>
        <div class="main">
            <basePage v-if="setting_ctr['current-page'] === 'base-page'"></basePage>
        </div>
        <div class="foot">
            这是设置页脚
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import BaseIcon from "../../icons/BaseIcon.vue";
import { close_inter} from '../../core/publicMethod';
import { interface_state, setting_ctr } from "../../core/cache";
import basePage from "./setting/basePage.vue";
const floatingWindowElement = ref<HTMLElement | null>(null);
const isDragging = ref(false);  // 鼠标是否正在拖拽
const dragOffset = ref({ x: 0, y: 0 });  // 鼠标拖拽的偏移量


// 开始拖拽
const startDrag = (event: MouseEvent) => {
    if (!floatingWindowElement.value) return;

    isDragging.value = true;

    // 计算鼠标相对于悬浮窗左上角的偏移量
    const rect = floatingWindowElement.value.getBoundingClientRect();
    dragOffset.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };

    // 添加全局事件监听器
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
};

// 拖拽过程
const drag = (event: MouseEvent) => {
    if (!isDragging.value || !floatingWindowElement.value) return;


    // 1. 计算新的位置 (像素)
    const newX_px = event.clientX - dragOffset.value.x;
    const newY_px = event.clientY - dragOffset.value.y;

    // 2. 获取当前视口的 vmin 基准像素值
    // vmin 是 vw 和 vh 中较小的那个，1vmin = 1% * min(width, height)
    const vmin_px = Math.min(window.innerWidth, window.innerHeight) / 100;

    // 3. 将像素转换为 vmin
    // 防止除以0的情况，虽然理论上 vmin_px 不会为0
    const newX_vmin = vmin_px > 0 ? newX_px / vmin_px : 0;
    const newY_vmin = vmin_px > 0 ? newY_px / vmin_px : 0;

    // 4. 应用新位置，使用 vmin 单位
    floatingWindowElement.value.style.left = `${newX_vmin}vmin`;
    floatingWindowElement.value.style.top = `${newY_vmin}vmin`;
};

// 停止拖拽
const stopDrag = () => {
    isDragging.value = false;
    // 移除全局事件监听器
    document.removeEventListener('mousemove', drag);  // 移除拖拽调节位置事件
    document.removeEventListener('mouseup', stopDrag);
};
</script>
<style scoped>
.setting {
    position: fixed;
    display: flex;
    justify-items: start;
    align-items: start;
    flex-direction: column;
    z-index: 20;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
    border: 0.2vmin solid rgba(var(--border), var(--w-transparent));
    border-radius: 3vmin;
    background-color: rgba(var(--but-0), var(--b-transparent));
    overflow: hidden;

    & .title {
        display: flex;
        justify-items: start;
        align-items: center;
        flex-direction: row;

        width: 100%;
        height: 7.5%;
        border-top-left-radius: 2.5vmin;
        border-top-right-radius: 2.5vmin;
        background-color: rgba(var(--menu), var(--b-transparent));

        & .title-base-icon {
            margin: 0 1.5vmin;
            width: 2.5vmin;
            height: 2.5vmin;
        }
        & .title-close-icon{
            margin-left: auto;
            margin-right: 1.5vmin;
            width: 2.5vmin;
            height: 2.5vmin;
        }

        & .switch-but{
            margin: 1vmin;
        }
    }

    & .main {
        width: 100%;
        flex: 1;
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        
    }
    & .foot {
        width: 100%;
        height: 12.5%;
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(var(--background), var(--w-transparent));
        border: 0.2vmin solid rgba(var(--border), var(--w-transparent));
        box-sizing: border-box;
        border-bottom-left-radius: 2.75vmin;
        border-bottom-right-radius: 2.75vmin;
    }
}
</style>