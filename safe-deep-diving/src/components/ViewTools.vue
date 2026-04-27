<template>
    <div class="view-tool"  ref="floatingWindowElement">
        <div class="view-tool-icon grab-cursor" :class="{'grabbing-cursor': isDragging}" @mousedown="startDrag">
            <BaseIcon :Type="icon_type['drag-block']"></BaseIcon>
        </div>
        <div class="view-tool-icon">
            <ToolIcon :Type="icon_type['normal-coloring']"></ToolIcon>
        </div>
        <div class="view-tool-icon">
            <ToolIcon :Type="icon_type['sideline-coloring']"></ToolIcon>
        </div>
        <div class="view-tool-icon">
            <ToolIcon :Type="icon_type['wireframe']"></ToolIcon>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref , onUnmounted} from 'vue';
import ToolIcon from '../icons/ToolIcon.vue';
import BaseIcon from '../icons/BaseIcon.vue';
const icon_type = reactive({
    "drag-block": "drag-block",
    "normal-coloring": "normal-coloring",
    "sideline-coloring": "sideline-coloring",
    "wireframe": "wireframe",
})

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
    // 计算新的位置
    const newX = event.clientX - dragOffset.value.x;
    const newY = event.clientY - dragOffset.value.y;

    // 应用新位置
    floatingWindowElement.value.style.left = `${newX}px`;
    floatingWindowElement.value.style.top = `${newY}px`;
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
    top: 10vmin;
    left: 50vmin;
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
        justify-content: start;
        margin: 0.5vmin;
    }
}
</style>