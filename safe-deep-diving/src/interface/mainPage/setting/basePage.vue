<template>
    <div class="setting-base">
        <div class="left-frame scroll-bar-0">左</div>
        <div class="right-frame scroll-bar-0">右</div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.setting-base {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;

    & .left-frame {
        height: 100%;
        width: 20%;
        background-color: rgba(var(--menu), var(--w-transparent));
        border: 2px solid rgba(var(--border), var(--b-transparent));
        box-sizing: border-box;
        overflow: auto;
    }

    & .right-frame {
        height: 100%;
        flex: 1;
        background-color: rgba(var(--background), var(--w-transparent));
        border: 2px solid rgba(var(--border), var(--w-transparent));
        box-sizing: border-box;
        overflow: auto;
    }
}
</style>