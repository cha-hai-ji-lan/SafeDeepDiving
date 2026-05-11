<template>
    <div class="tools">
        <!-- 使用 Transition 包裹 v-if 元素 -->
        <Transition name="tool-animate" mode="out-in">
            <div v-if="!tools_state['show-tool']" @click="open_tools_bar" class="tools-bar">
                <ToolIcon Type="tools"></ToolIcon>
            </div>
            <div v-else class="tools-bar open-tools-bar">
                <div class="item" @click="open_tools_bar" @dblclick="">
                    <ToolIcon Type="shrink"></ToolIcon>
                </div>
                <div class="item" @click="() => { handleClick(focus_rw_bar) }"
                    @dblclick="() => { handleDoubleClick(open_rw_bar) }">
                    <ToolIcon Type="rw-file"></ToolIcon>
                </div>
                <div class="item" @click="() => { handleClick(focus_sketch_bar) }"
                    @dblclick="() => { handleDoubleClick(open_sketch_bar) }">
                    <ToolIcon Type="sketch"></ToolIcon>
                </div>
                <div class="item" @click="() => { handleClick(focus_feature_bar) }"
                    @dblclick="() => { handleDoubleClick(open_feature_bar) }">
                    <ToolIcon Type="feature"></ToolIcon>
                </div>
                <div class="item" @click="() => { handleClick(focus_curved_surface_bar) }"
                    @dblclick="() => { handleDoubleClick(open_curved_surface_bar) }">
                    <ToolIcon Type="curved-surface"></ToolIcon>
                </div>
                <div class="item" @click="() => { handleClick(focus_rib_layout_bar) }"
                    @dblclick="() => { handleDoubleClick(open_rib_layout_bar) }">
                    <ToolIcon Type="rib-layout"></ToolIcon>
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import ToolIcon from "../icons/ToolIcon.vue";
import { tools_state } from "../core/cache";
import { close_bar,handleClick, handleDoubleClick } from "../core/publicMethod";

// let clickTimer: number | null = null;
// const handleClick = (callback: () => void) => {
//     if (clickTimer) {
//         // 如果定时器存在，说明这是第二次点击，清除定时器，等待 dblclick 触发
//         clearTimeout(clickTimer);
//         clickTimer = null;
//     } else {
//         // 第一次点击，设置定时器
//         clickTimer = window.setTimeout(() => {
//             callback()  // 回调传递的方法
//             console.log('确认为单击');
//             // 执行单击逻辑
//             clickTimer = null;
//         }, 250); // 延迟时间略小于浏览器默认双击间隔
//     }
// };

// const handleDoubleClick = (callback: () => void) => {
//     // 双击触发时，清除单击的定时器，防止单击逻辑执行
//     if (clickTimer) {
//         clearTimeout(clickTimer);
//         clickTimer = null;
//     }
//     callback()  // 回调传递的方法
//     console.log('确认为双击');
//     // 执行双击逻辑
// };
const open_tools_bar = () => {
    if (tools_state['show-tool']) {
        tools_state['show-tool'] = false;
    } else {
        tools_state['show-tool'] = true;
    }
}
const focus_rw_bar = () => {
    if (!tools_state["has-focus-bar"]) {  // 如果当前无注视工具栏 
        if (!tools_state["rw-file"]["show"]) {
            tools_state["rw-file"]["show"] = true;
            tools_state["current-focus-bar"] = "rw-file"
            tools_state["has-focus-bar"] = true
        }
    } else {  // 当前有注视的工具栏
        if (!tools_state["rw-file"]["show"]) {
            close_bar(tools_state["current-focus-bar"])
            tools_state["rw-file"]["show"] = true;
            tools_state["current-focus-bar"] = "rw-file"
            tools_state["has-focus-bar"] = true
        }
    }
}
const focus_sketch_bar = () => {
    if (!tools_state["has-focus-bar"]) {
        if (!tools_state["sketch"]["show"]) {
            tools_state["sketch"]["show"] = true;
            tools_state["current-focus-bar"] = "sketch"
            tools_state["has-focus-bar"] = true
        }
    } else {
        if (!tools_state["sketch"]["show"]) {
            close_bar(tools_state["current-focus-bar"])
            tools_state["sketch"]["show"] = true;
            tools_state["current-focus-bar"] = "sketch"
            tools_state["has-focus-bar"] = true
        }
    }
}
const focus_feature_bar = () => {
    if (!tools_state["has-focus-bar"]) {
        if (!tools_state["feature"]["show"]) {
            tools_state["feature"]["show"] = true;
            tools_state["current-focus-bar"] = "feature"
            tools_state["has-focus-bar"] = true
        }
    } else {
        if (!tools_state["feature"]["show"]) {
            close_bar(tools_state["current-focus-bar"])
            tools_state["feature"]["show"] = true;
            tools_state["current-focus-bar"] = "feature"
            tools_state["has-focus-bar"] = true
        }
    }
}
const focus_curved_surface_bar = () => {
    if (!tools_state["has-focus-bar"]) {
        if (!tools_state["curved-surface"]["show"]) {
            tools_state["curved-surface"]["show"] = true;
            tools_state["current-focus-bar"] = "curved-surface"
            tools_state["has-focus-bar"] = true
        }
    } else {
        if (!tools_state["curved-surface"]["show"]) {
            close_bar(tools_state["current-focus-bar"])
            tools_state["curved-surface"]["show"] = true;
            tools_state["current-focus-bar"] = "curved-surface"
            tools_state["has-focus-bar"] = true
        }
    }
}
const focus_rib_layout_bar = () => {
    if (!tools_state["has-focus-bar"]) {
        if (!tools_state["rib-layout"]["show"]) {
            tools_state["rib-layout"]["show"] = true;
            tools_state["current-focus-bar"] = "rib-layout"
            tools_state["has-focus-bar"] = true
        }
    } else {
        if (!tools_state["rib-layout"]["show"]) {
            close_bar(tools_state["current-focus-bar"])
            tools_state["rib-layout"]["show"] = true;
            tools_state["current-focus-bar"] = "rib-layout"
            tools_state["has-focus-bar"] = true
        }
    }
}

const open_rw_bar = () => {
    if (!tools_state["rw-file"]["show"]) {
        tools_state["rw-file"]["show"] = true;
        tools_state['rw-file']['moved'] = true
        tools_state['rw-file']['icon-size'] = 0
    }
}
const open_sketch_bar = () => {
    if (!tools_state["sketch"]["show"]) {
        tools_state["sketch"]["show"] = true;
        tools_state['sketch']['moved'] = true
        tools_state['sketch']['icon-size'] = 0
    }
}
const open_feature_bar = () => {
    if (!tools_state["feature"]["show"]) {
        tools_state["feature"]["show"] = true;
        tools_state['feature']['moved'] = true
        tools_state['feature']['icon-size'] = 0

    }
}
const open_curved_surface_bar = () => {
    if (!tools_state["curved-surface"]["show"]) {
        tools_state["curved-surface"]["show"] = true;
        tools_state['curved-surface']['moved'] = true
        tools_state['curved-surface']['icon-size'] = 0

    }
}
const open_rib_layout_bar = () => {
    if (!tools_state["rib-layout"]["show"]) {
        tools_state["rib-layout"]["show"] = true;
        tools_state['rib-layout']['moved'] = true
        tools_state['rib-layout']['icon-size'] = 0

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
            width: fit-content;
            height: fit-content;
        }

        & .item {
            display: flex;
            justify-self: center;
            margin: 0.5vmin;
            width: 4vmin;
            height: 4vmin;
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