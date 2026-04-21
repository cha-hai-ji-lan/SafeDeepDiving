<template>
    <div id="main">
        <canvas id="main-canvas"></canvas>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
#main {
    display: flex;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: rgba(var(--background), var(--b-transparent));
}
#main-canvas{
    position: absolute; /* 绝对定位 */
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;  /* 占满宽度 */
    height: 100%; /* 占满高度 */
}
</style>