<template>
    <div class="main-logo" >
        <div class="sdd-logo" @click="handleClick(open_acc_bar)" @dblclick="handleDoubleClick(open_welcom_inter)">
            <BaseIcon Type="logo"></BaseIcon>
        </div>
        <div v-if="tools_state['accessibility-bar']['show']" class="accessibility-bar">
            <div class="acc-icon">
                <BaseIcon Type="tool-reform"></BaseIcon>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
import BaseIcon from '../../icons/BaseIcon.vue';
import { interface_state, tools_state } from "../../core/cache"
import { handleClick, handleDoubleClick } from "../../core/publicMethod";

const open_welcom_inter = () => {
    if (interface_state['welcome']["show"]) {
        interface_state['welcome']["show"] = false
    } else {
        interface_state['welcome']["show"] = true
    }
}

const open_acc_bar = () => {
    tools_state['accessibility-bar']['show'] = !tools_state['accessibility-bar']['show']
}
</script>
<style scoped>
.main-logo {
    display: flex;
    flex-direction: row;
    justify-content: start;
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
    transition: width 200ms, height 200ms;

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

    & .accessibility-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        & .acc-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0.5vmin;
        }
    }

}
</style>