<template>
    <div class="pl-pre-process"ref="floatingWindowElement">
        <div class="title" @mousedown="startDrag"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
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
.pl-pre-process {
    position: fixed;
    top: 6vmin;
    left:5vmin;
}
.title{

}
</style>