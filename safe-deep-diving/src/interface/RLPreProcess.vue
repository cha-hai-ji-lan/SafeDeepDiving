<template>
    <div v-if="tools_state['rib-layout']['pre-process-show']" class="pl-pre-process" ref="floatingWindowElement">
        <div class="title ban-select" @mousedown="startDrag">
            <div class="title-icon" @click="">
                <ToolIcon Type="rl-pre-process"></ToolIcon>
            </div>

            <div class="title-msg">{{ lang?.["rib-layout"]?.["pre-process"]?.["title"] }}</div>
            <div class="title-close-icon" @click="close_pre_process">
                <BaseIcon Type="close"></BaseIcon>
            </div>
        </div>
        <div class="main scroll-bar-1">
            <div class="item">
                <div class="item-title">
                    <!-- 外压直接接触面 -->
                    {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["ext-p-sur"] }}
                </div>
                <div class="item-contain">
                    <input class="nor-input input-sty-0" type="text">
                    <div class="burron">
                        <ToolIcon Type="arrow"></ToolIcon>
                    </div>
                </div>

            </div>
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["inn-p-sur"] }}
                </div>
                <div class="item-contain">
                    <input class="nor-input input-sty-0" type="text">
                    <div class="burron">
                        <ToolIcon Type="arrow"></ToolIcon>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["Work-cond"] }}
                </div>
                <div class="item-contain">
                    <div class="unit ban-select" :class="{ 'cur-unit': dive_state['start'] }"
                        @click="() => { focus_unit(3, 0) }">
                        {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["wc-ashore"] }}</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': dive_state['exe'] }"
                        @click="() => { focus_unit(3, 1) }">
                        {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["wc-dive"] }}</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': dive_state['fin'] }"
                        @click="() => { focus_unit(3, 2) }">
                        {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["wc-f-dive"] }}</div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["div-depth"] }}
                </div>
                <div class="item-contain">
                    <input class="nor-input-1 input-sty-0" type="number"
                        :placeholder="lang?.['universal']?.['self-resol']">
                    <div class="unit ban-select" :class="{ 'cur-unit': unit_m === 0 }"
                        @click="() => { focus_unit(2, 0) }">
                        m</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': unit_m === 1 }"
                        @click="() => { focus_unit(2, 1) }">
                        Km</div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["ext-p"] }}
                </div>
                <div class="item-contain">
                    <input class="nor-input-1 input-sty-0" type="number"
                        :placeholder="lang?.['universal']?.['self-resol']">
                    <div class="unit ban-select" :class="{ 'cur-unit': unit_pa === 0 }"
                        @click="() => { focus_unit(0, 0) }">
                        Pa</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': unit_pa === 1 }"
                        @click="() => { focus_unit(0, 1) }">
                        KPa</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': unit_pa === 2 }"
                        @click="() => { focus_unit(0, 2) }">
                        MPa</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': unit_pa === 3 }"
                        @click="() => { focus_unit(0, 3) }">
                        Gpa</div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["inn-p"] }}
                </div>
                <div class="item-contain">
                    <input class="nor-input-1 input-sty-0" type="number">
                    <div class="unit ban-select" :class="{ 'cur-unit': unit1_pa === 0 }"
                        @click="() => { focus_unit(1, 0) }">
                        Pa</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': unit1_pa === 1 }"
                        @click="() => { focus_unit(1, 1) }">
                        KPa</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': unit1_pa === 2 }"
                        @click="() => { focus_unit(1, 2) }">
                        MPa</div>
                    <div class="unit ban-select" :class="{ 'cur-unit': unit1_pa === 3 }"
                        @click="() => { focus_unit(1, 3) }">
                        Gpa</div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["pre-process"]?.["info"]["ori-wall-thick"] }}
                </div>
                <div class="item-contain">
                    <input class="nor-input-1 input-sty-0" type="number"
                        placeholder="10">
                    <div>mm</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import BaseIcon from "../icons/BaseIcon.vue";
import ToolIcon from "../icons/ToolIcon.vue";
import { lang, tools_state } from "../core/cache";

const floatingWindowElement = ref<HTMLElement | null>(null);
const isDragging = ref(false);  // 鼠标是否正在拖拽
const dragOffset = ref({ x: 0, y: 0 });  // 鼠标拖拽的偏移量

const dive_state = reactive({ "start": false, "exe": false, "fin": false })
const unit_pa = ref<number>(-1)
const unit1_pa = ref<number>(-1)
const unit_m = ref<number>(-1)


const focus_unit = (type: number, unit: number) => {
    if (type === 0) {
        if (unit_pa.value === unit) {
            unit_pa.value = -1
        } else {
            unit_pa.value = unit
        }
    } else if (type === 1) {
        if (unit1_pa.value === unit) {
            unit1_pa.value = -1
        } else {
            unit1_pa.value = unit
        }
    } else if (type === 2) {
        if (unit_m.value === unit) {
            unit_m.value = -1
        } else {
            unit_m.value = unit
        }
    } else if (type === 3) {
        switch (unit) {
            case 0:
                dive_state["start"] = !dive_state["start"]
                break;
            case 1:
                dive_state["exe"] = !dive_state["exe"]
                break;
            case 2:
                dive_state["fin"] = !dive_state["fin"]
                break;
            default:
                break;
        }
    }

}
const close_pre_process = () => {
    tools_state['rib-layout']['pre-process-show'] = false
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
.pl-pre-process {
    position: fixed;
    top: 15vmin;
    left: 5vmin;
    display: flex;
    flex-direction: column;
    width: 30vmin;
    height: 60vmin;
    border: 0.25vmin solid rgba(var(--border), 1);
    background-color: rgba(var(--but-0), var(--b-transparent));
    border-radius: 3vmin;

    & .title {
        display: flex;
        align-items: center;
        justify-items: start;
        flex-direction: row;
        width: 100%;
        height: 5vmin;
        border-top-left-radius: 3vmin;
        border-top-right-radius: 3vmin;
        background-color: rgba(var(--menu), var(--b-transparent));


        & .title-icon {
            margin: 0 1vmin;
            width: fit-content;
            height: fit-content;
        }

        & .title-close-icon {
            margin-left: auto;
            margin-right: 1vmin;
            width: fit-content;
            height: fit-content;
        }

        & .title-msg {
            font-size: 2vmin;
            font-weight: 900;
        }
    }

    & .main {
        flex: 1;
        display: flex;
        align-items: center;
        justify-items: center;
        flex-direction: column;
        overflow: hidden;
        overflow-y: auto;
        padding: 0 2vmin 0 0;

        & .item {
            display: flex;
            align-items: start;
            justify-items: center;
            flex-direction: column;
            width: 95%;
            height: fit-content;
            border-bottom: 0.25vmin solid rgba(var(--but-1), 1);

            & .item-title {
                font-size: 2vmin;
                font-weight: 600;
                font-family: "LXGW", "楷体", 'Courier New', Courier, monospace;
                display: flex;
                align-items: center;
                justify-items: center;
                min-height: 4vmin;
            }

            & .item-contain {
                display: flex;
                align-items: center;
                justify-items: start;
                flex-direction: row;
                min-height: 4vmin;

                & .burron {
                    display: flex;
                    align-items: start;
                    justify-items: start;
                    margin-left: 0.5vmin;
                    border: 0.25vmin solid rgba(var(--menu), 1);
                    border-radius: 0.5vmin;
                    background-color: rgba(var(--menu), var(--w-transparent));
                }

                & .nor-input {
                    font-family: "LXGW", "楷体", 'Courier New', Courier, monospace;
                    font-size: 2vmin;
                    width: 80%;
                    height: 3vmin;
                }

                & .nor-input-1 {
                    font-family: "LXGW", "楷体", 'Courier New', Courier, monospace;
                    font-size: 2vmin;
                    height: 3vmin;
                    width: 40%;
                }

                & .unit {
                    margin: 0 0.35vmin;
                    padding: 0.1vmin;
                    border-radius: 0.5vmin;
                    color: rgb(var(--normal));
                    border: 0.25vmin solid rgba(var(--normal), 1);
                    background-color: rgba(var(--normal), var(--w-transparent));

                    &.cur-unit {
                        color: rgb(var(--ready));
                        border: 0.25vmin solid rgba(var(--ready), 1);
                        background-color: rgba(var(--ready), var(--w-transparent));
                    }
                }
            }
        }
    }
}
</style>