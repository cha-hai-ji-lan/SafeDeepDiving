<template>
    <div class="main-logo">
        <div class="sdd-logo">
            <BaseIcon Type="logo"></BaseIcon>
        </div>
    </div>

</template>
<script setup lang="ts">
import BaseIcon from '../icons/BaseIcon.vue';
</script>
<style scoped>
.main-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 5.75vmin;
    left: 2vmin;
    z-index: 11;
    /* 工具放在第11层 */
    width: fit-content;
    height: fit-content;
    border-radius: 1vmin;
    border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
    background-color: rgba(var(--menu), var(--w-transparent));

    & .sdd-logo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* 修改点 2: 向左平移自身宽度的 50%，实现完美居中 */
        height: 5vmin;
        max-height: 35px;
        width: 5vmin;
        max-height: 35px;
        margin: 0.5vmin;

    }
}
</style>