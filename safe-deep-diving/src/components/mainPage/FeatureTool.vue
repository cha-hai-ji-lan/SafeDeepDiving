<template>
    <div v-if="tools_state['feature']['show']" class="rw-tool"
        :class="{ 'show-bar': tools_state['feature']['delay-hide'] === false, 'hide-bar': tools_state['feature']['delay-hide'] }"
        ref="floatingWindowElement">
        <div class="rw-tool-icon grab-cursor" :class="{ 'grabbing-cursor': isDragging }" @mousedown="startDrag">
            <ToolIcon Type="drag-hand" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div class="rw-tool-icon" @click="">
            <ToolIcon Type="feature-stretch" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div class="rw-tool-icon" @click="">
            <ToolIcon Type="feature-rounded-corners" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div class="rw-tool-icon" @click="">
            <ToolIcon Type="feature-rotating" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div class="rw-tool-icon" @click="">
            <ToolIcon Type="feature-scan" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div class="rw-tool-icon" @click="">
            <ToolIcon Type="feature-mirror" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div class="rw-tool-icon" @click="">
            <ToolIcon Type="part-transparency" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div v-if="tools_state['feature']['moved']" class="rw-tool-icon" @click="() => { close_bar('feature') }">
            <ToolIcon Type="omit" :State="tools_state['feature']['icon-size']"></ToolIcon>
        </div>
        <div v-if="tools_state['feature']['moved']" class="rw-tool-icon" @click="() => { close_bar('feature') }">
            <BaseIcon Type="close" :State="tools_state['feature']['icon-size']"></BaseIcon>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import ToolIcon from '../../icons/ToolIcon.vue';
import BaseIcon from '../../icons/BaseIcon.vue';
import { tools_state } from '../../core/cache'
import {close_bar } from '../../core/publicMethod';

const floatingWindowElement = ref<HTMLElement | null>(null);
const isDragging = ref(false);  // 鼠标是否正在拖拽
const dragOffset = ref({ x: 0, y: 0 });  // 鼠标拖拽的偏移量


onUnmounted(() => {
    stopDrag()
})

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
    tools_state['feature']['moved'] = true
    tools_state['feature']['icon-size'] = 0
    if (tools_state["current-focus-bar"] === "feature") tools_state["current-focus-bar"] = "__FOCUS_BAR__"


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
.show-bar {
    animation: bar-show 200ms ease-in-out forwards;
}

.hide-bar {
    animation: bar-hide 200ms ease-in-out forwards;
}

.rw-tool {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 5.75vmin;
    left: calc(50% - (7 * 2.5vmin));
    z-index: 11;
    /* 工具放在第11层 */
    /* 修改点 2: 向左平移自身宽度的 50%，实现完美居中 */
    height: fit-content;
    width: fit-content;
    border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
    background-color: rgba(var(--menu), var(--w-transparent));
    border-radius: 1vmin;


    & .rw-tool-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5vmin;


    }
}
</style>