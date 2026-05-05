<template>
    <div class="tools">
        <!-- 使用 Transition 包裹 v-if 元素 -->
        <Transition name="tool-animate" mode="out-in">
            <div v-if="!tools_state['show-tool']" @click="open_tools_bar" class="tools-bar">
                <ToolIcon Type="tools"></ToolIcon>
            </div>
            <div v-else class="tools-bar open-tools-bar">
                <div class="item" @click="open_tools_bar">
                    <ToolIcon Type="shrink"></ToolIcon>
                </div>
                <div class="item">
                    <ToolIcon Type="read-write-file"></ToolIcon>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import ToolIcon from "../icons/ToolIcon.vue";
import { tools_state } from "../core/cache";

const open_tools_bar = () => {
    if (tools_state['show-tool']) {
        tools_state['show-tool'] = false;
    } else {
        tools_state['show-tool'] = true;
    }
}
</script>

<style scoped>
/* 移除 .tools-bar 上的 transition */
.tools {
    position: fixed;
    z-index: 10;
    left: 2vmin;
    bottom: 2vmin;
    
    & .tools-bar {
        display: flex;
        flex-direction: row;
        margin: 0.5vmin;
        width: 5vmin;
        height: 5vmin;
        border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
        background-color: rgba(var(--menu), var(--w-transparent));
        border-radius: 1vmin;
        /* 这里不需要 transition */

        &.open-tools-bar {
            width: 12vmin;
            height: 6vmin;
        }

        & .item {
            margin: 0.5vmin;
            width: 5vmin;
            height: 5vmin;
        }
    }
}

/* 定义 Vue Transition 动画类 */
.tool-animate-enter-active,
.tool-animate-leave-active {
    transition: all 0.3s ease;
}

.tool-animate-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.tool-animate-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>