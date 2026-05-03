<template>
    <div class="view-tool" ref="floatingWindowElement">
        <div class="view-tool-icon grab-cursor" :class="{ 'grabbing-cursor': isDragging }" @mousedown="startDrag">
            <BaseIcon :Type="icon_type['drag-block']"></BaseIcon>
        </div>
        <div class="view-tool-icon" :class="{ 'active-icon': view_mode === viewMode.NormalColoring }"
            @click="normal_coloring">
            <ToolIcon :Type="icon_type['normal-coloring']"></ToolIcon>
        </div>
        <div class="view-tool-icon" :class="{ 'active-icon': view_mode === viewMode.SidelineColoring }" @click="sideline_coloring">
            <ToolIcon :Type="icon_type['sideline-coloring']"></ToolIcon>
        </div>
        <div class="view-tool-icon" :class="{ 'active-icon': view_mode === viewMode.Wireframe }" @click="wireframe">
            <ToolIcon :Type="icon_type['wireframe']"></ToolIcon>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref, onUnmounted } from 'vue';
import ToolIcon from '../icons/ToolIcon.vue';
import BaseIcon from '../icons/BaseIcon.vue';
import {edge_visible, object_visible} from '../core/three/init.ts'
const icon_type = reactive({
    "drag-block": "drag-block",
    "normal-coloring": "normal-coloring",
    "sideline-coloring": "sideline-coloring",
    "wireframe": "wireframe",
})

const floatingWindowElement = ref<HTMLElement | null>(null);
const isDragging = ref(false);  // 鼠标是否正在拖拽
const dragOffset = ref({ x: 0, y: 0 });  // 鼠标拖拽的偏移量

const enum viewMode {
    NormalColoring,
    SidelineColoring,
    Wireframe
}

const view_mode = ref<viewMode>(viewMode.SidelineColoring)
onUnmounted(() => {
    stopDrag()
})

const normal_coloring = () => {
    edge_visible(false)
    object_visible(true)
    view_mode.value = viewMode.NormalColoring
}
const sideline_coloring = () => {
    edge_visible(true)
    object_visible(true)
    view_mode.value = viewMode.SidelineColoring

}
const wireframe = () => {
    edge_visible(true)
    object_visible(false)
    view_mode.value = viewMode.Wireframe
}
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
.view-tool {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 5.75vmin;
    left: calc(50% - 8vmin);
    z-index: 11;  /* 工具放在第11层 */
    /* 修改点 2: 向左平移自身宽度的 50%，实现完美居中 */
    height: fit-content;
    width: fit-content;
    border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
    background-color: rgba(var(--menu), var(--w-transparent));
    border-radius: 1vmin;

    & .view-tool-icon {
        width: 3vmin;
        height: 3vmin;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5vmin;
        &.active-icon{
            filter: brightness(1.25);
            border-radius: 0.5vmin;
            outline: 0.25vmin solid rgba(var(--border), var(--b-transparent));
        }
    }
}
</style>