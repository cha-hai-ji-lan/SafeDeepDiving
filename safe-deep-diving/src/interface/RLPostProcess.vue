<template>
    <div v-if="interface_state['rib-layout']['post-process']['show']" class="pl-post-process"
    :class="{ 'opacity-show': interface_state['rib-layout']['post-process']['delay-hide'] === false, 'opacity-hide': interface_state['rib-layout']['post-process']['delay-hide'] }"
     ref="floatingWindowElement">
        <div class="title ban-select" @mousedown="startDrag">

            <div class="title-icon" @click="">
                <ToolIcon Type="rl-post-process"></ToolIcon>
            </div>
            <div class="title-msg">{{ lang?.["rib-layout"]?.["post-process"]?.["title"] }}</div>
            <div class="title-close-icon" @click="()=>{close_inter('rib-layout/post-process')}">
                <BaseIcon Type="close"></BaseIcon>
            </div>
        </div>
        <div class="main">
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["post-process"]?.["info"]["cur-sol-depth"] }}
                </div>
                <div class="item-contain">
                    <div>3000m</div><div class="attention">目标:6500m</div>
                </div>
            </div>
            <div class="item">
                <div class="item-title">
                    {{ lang?.["rib-layout"]?.["post-process"]?.["info"]["sol-echo"] }}
                </div>
                <div class="item-contain echo-frame scroll-bar-0">
                    <p>[echo1]:SDD Core 初始化中</p>
                    <p>[echo2]:SDD Core 就绪</p>
                    <p>[echo3]:SDD Core 开始解算</p>
                    <p>[echo4]:开始粗大解算逼近</p>
                    <p>[echo5]:插值解算 500m 外压</p>
                    <p>[echo6]:The layout of the 500m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo7]:插值解算 1000m 外压</p>
                    <p>[echo8]:The layout of the 1000m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo9]:插值解算 1500m 外压</p>
                    <p>[echo10]:The layout of the 1500m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo11]:插值解算 2000m 外压</p>
                    <p>[echo12]:The layout of the 2000m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo13]:插值解算 2500m 外压</p>
                    <p>[echo14]:The layout of the 2500m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo15]:插值解算 3000m 外压</p>
                    <p>[echo16]:The layout of the 3000m depth external pressure limit reinforcement structure is completed</p>
                    <!-- <p>[echo17]:插值解算 3500m 外压</p>
                    <p>[echo18]:The layout of the 3500m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo19]:插值解算 4000m 外压</p>
                    <p>[echo20]:The layout of the 4000m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo21]:插值解算 4500m 外压</p>
                    <p>[echo22]:The layout of the 4500m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo23]:插值解算 5000m 外压</p>
                    <p>[echo24]:The layout of the 5000m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo25]:插值解算 5500m 外压</p>
                    <p>[echo26]:The layout of the 5500m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo27]:插值解算 6000m 外压</p>
                    <p>[echo28]:The layout of the 6000m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo29]:插值解算 6500m 外压</p>
                    <p>[echo30]:The layout of the 6500m depth external pressure limit reinforcement structure is completed</p>
                    <p>[echo31]:解算完成</p> -->

                </div>
            </div>
            <div class="item">
                <div class="item-contain">
                    <div class="opr-button">{{ lang?.['universal']?.['export-rec'] }}</div><div class="opr-w-button">{{ lang?.['universal']?.['close'] }}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "../icons/BaseIcon.vue";
import ToolIcon from "../icons/ToolIcon.vue";
import { lang, tools_state, interface_state } from "../core/cache";
import { close_inter } from "../core/publicMethod";

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
.pl-post-process {
    position: fixed;
    top: 15vmin;
    left: 60vmin;
    display: flex;
    flex-direction: column;
    width: 30vmin;
    height: 60vmin;
    border: 0.25vmin solid rgba(var(--border),var(--w-transparent));
    background-color: rgba(var(--but-0), var(--b-transparent));
    border-radius: 3vmin;
    overflow: hidden;

    & .title {
        display: flex;
        align-items: center;
        justify-items: start;
        flex-direction: row;

        width: 100%;
        height: 5vmin;
        border-top-left-radius: 2.5vmin;
        border-top-right-radius: 2.5vmin;
        background-color: rgba(var(--menu), var(--b-transparent));

        & .title-icon {
            margin: 0 1.5vmin;
            width: fit-content;
            height: fit-content;
        }

        & .title-close-icon {
            margin-left: auto;
            margin-right: 1.5vmin;
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

        & .item {
            display: flex;
            align-items: start;
            justify-items: center;
            flex-direction: column;
            width: 95%;
            height: fit-content;
            border-bottom: 0.25vmin solid rgba(var(--but-1), 1);
            overflow: hidden;

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
                min-height: 4vmin;
                display: flex;
                align-items: center;
                justify-items: start;
                flex-direction: row;
                font-size: 2vmin;
                font-weight: 400;
                font-family: "LXGW", "楷体", 'Courier New', Courier, monospace;
                overflow: hidden;

                & .attention{
                    margin-left: 2vmin;
                    padding: 0 0.75vmin;
                    color: rgb(var(--warn));
                    border-radius: 0.75vmin;
                    border: 0.25vmin solid rgba(var(--warn), 1);
                    background-color: rgba(var(--warn), var(--w-transparent));
                }
                & .opr-button{
                    margin-left: 2.5vmin;
                    padding: 0 0.75vmin;
                    border-radius: 0.75vmin;
                    border: 0.25vmin solid rgba(var(--normal), 1);
                    background-color: rgba(var(--normal), var(--w-transparent));
                }
                & .opr-w-button{
                    margin-left: 2.5vmin;
                    padding: 0 0.75vmin;
                    border-radius: 0.75vmin;
                    border: 0.25vmin solid rgba(var(--warn), 1);
                    background-color: rgba(var(--warn), var(--w-transparent));
                }
            }

            & .echo-frame {
                display: flex;
                align-items: start;
                justify-items: start;
                flex-direction: column;
                font-size: 1vmin;
                height: 15vmin;
                width: 100%;
                padding: 0.25vmin 0.25vmin 0 0.5vmin;
                border: 0.25vmin solid rgba(var(--but-1), 1);
                background-color: rgba(var(--menu), var(--w-transparent));
                border-radius: 1.25vmin;
                margin-bottom: 0.25vmin;
                overflow: auto;
                box-sizing: border-box;
                & p {
                    margin: 0.1vmin;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>