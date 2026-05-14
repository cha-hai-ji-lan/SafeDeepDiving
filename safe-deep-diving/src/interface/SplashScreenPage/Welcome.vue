<template>
    <div class="welcome">
        <div class="contain0">
            <div class="contain1">
                <div class="contain2">
                    <div class="contain3">
                        <div class="inline-inter">
                            <div class="row-item">Safe</div>
                            <div class="row-item1">Deep</div>
                            <div class="row-item2">Diving</div>
                            <div class="row-item3">{{ "v" + appConfig?.["version"] }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="message"><span class="msg">{{ message }}</span></div>

    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { listen, UnlistenFn } from '@tauri-apps/api/event'
import { appConfig, splash_state } from "../../core/cache";
import { invoke } from "@tauri-apps/api/core";
let unlisten_share_msg: UnlistenFn | null = null    // 开始监听opencascade.js初始化


const message = ref<string>("")
onMounted(async () => {
    await invoke('set_click_through', { ignore: splash_state['click-penetrate-ignore'] });
    unlisten_share_msg = await listen('share-msg', (event: any) => {
        message.value = event.payload.data
    })
})
onUnmounted(async () => {
    if (unlisten_share_msg) {
        unlisten_share_msg()
        unlisten_share_msg = null
    }
})
</script>
<style scoped>
.welcome {

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & .contain0 {
        width: 480px;
        height: 270px;

        border-radius: 5vmin;
        background-color: rgb(var(--but-0));
        border: 1px solid rgba(var(--border), 0.2);
        background-image:
            linear-gradient(to right, rgba(var(--but-1), 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(var(--but-1), 0.6) 1px, transparent 1px);
        /* 创建虚线网格 */
        background-size: 3vmin 3vmin;

        & .contain1 {
            width: 100%;
            height: 100%;
            border-radius: 5vmin;
            background-image: linear-gradient(135deg,
                    rgba(var(--but-1), 0) 0%,
                    rgba(var(--but-1), 0.40) 20%,
                    rgba(var(--border), 0.1) 20.5%,
                    rgba(var(--but-1), 0.60) 35%,
                    rgba(var(--border), 0.2) 35.5%,
                    rgba(var(--but-1), 0.70) 50%,
                    rgba(var(--border), 0.4) 50.5%,
                    rgba(var(--but-1), 0.80) 65%,
                    rgba(var(--border), 0.6) 65.5%,
                    rgba(var(--but-1), 0.90) 80%,
                    rgba(var(--border), 0.8) 80.5%,
                    rgba(var(--but-1), 1) 95%);

            & .contain2 {
                width: 100%;
                height: 100%;
                border-radius: 5vmin;
                background-image: linear-gradient(135deg,
                        rgba(var(--border), 0) 30%,
                        rgba(var(--border), 0.40) 45%,
                        rgba(var(--but-2), 0.1) 45.25%,
                        rgba(var(--border), 0.60) 55%,
                        rgba(var(--but-2), 0.2) 55.25%,
                        rgba(var(--border), 0.70) 65%,
                        rgba(var(--but-2), 0.4) 65.25%,
                        rgba(var(--border), 0.80) 75%,
                        rgba(var(--but-2), 0.6) 75.25%,
                        rgba(var(--border), 0.90) 85%,
                        rgba(var(--but-2), 0.8) 85.25%,
                        rgba(var(--border), 1) 95%);

                & .contain3 {
                    width: 100%;
                    height: 100%;
                    border-radius: 5vmin;
                    background-image: linear-gradient(135deg,
                            rgba(var(--but-2), 0) 65%,
                            rgba(var(--but-2), 0.40) 70%,
                            rgba(var(--but-2), 0.55) 70.5%,
                            rgba(var(--but-2), 0.60) 75%,
                            rgba(var(--but-2), 0.65) 75.5%,
                            rgba(var(--but-2), 0.70) 80%,
                            rgba(var(--but-2), 0.75) 80.5%,
                            rgba(var(--but-2), 0.80) 85%,
                            rgba(var(--but-2), 0.85) 85.5%,
                            rgba(var(--but-2), 0.90) 90%,
                            rgba(var(--but-2), 0.95) 90.5%,
                            rgba(var(--but-2), 1) 95%);

                    & .inline-inter {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        font: 14.5vmin Arial, Helvetica, Arial, sans-serif;
                        font-weight: 900;


                        & .row-item {
                            position: absolute;
                            top: 0vmin;
                            left: 6vmin;
                            right: flex;
                            align-items: start;
                            height: 20vmin;
                            width: 18vmin;
                            background: linear-gradient(135deg, rgb(var(--but-0)));

                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            color: transparent;
                            -webkit-text-stroke: 0.25vmin rgb(var(--but-2));

                            /* text-shadow:
                            -2px -2px 0.5vmin rgba(var(--but-0), 0.45),
                            2px 2px 0.75vmin rgba(var(--font), 0.45); */
                        }

                        & .row-item1 {
                            position: absolute;
                            top: 8vmin;
                            left: 18vmin;
                            display: flex;
                            align-items: start;
                            justify-items: start;
                            height: 20vmin;
                            width: 32vmin;
                            background: linear-gradient(135deg, rgb(var(--but-1)));

                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            color: transparent;
                            -webkit-text-stroke: 0.25vmin rgb(var(--but-2));

                            /* text-shadow:
                            -2px -2px 0.5vmin rgba(var(--but-1), 0.75),
                            2px 2px 0.75vmin rgba(var(--but-2), 0.75); */

                        }

                        & .row-item2 {
                            position: absolute;
                            top: 16vmin;
                            left: 30vmin;
                            display: flex;
                            display: flex;
                            align-items: start;
                            justify-items: start;
                            height: 25vmin;
                            width: 42.5vmin;
                            color: rgb(--but-2);
                            background: linear-gradient(135deg, rgb(var(--but-2)));
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            color: transparent;
                            -webkit-text-stroke: 0.25vmin rgb(var(--but-2));

                            /* text-shadow:
                            -2px -2px 0.5vmin rgba(var(--but-2), 0.75),
                            2px 2px 0.75vmin rgba(var(--font), 0.75); */
                        }

                        & .row-item3 {
                            font: 4.5vmin "楷体", Arial, Helvetica, Arial, sans-serif;

                            padding-top: 34.5vmin;
                            margin-left: 42vw;
                        }
                    }

                }

            }
        }
    }

    & .message {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0px;
        font: 12px "LXGW", "Helvetica Neue", Helvetica, Arial, sans-serif;
        margin-top: 4px;
        width: 480px;
        height: 30px;
        /* border-radius: 12px; */
        /* background-color: rgba(var(--border), 0.45); */
        /* border: 8px solid rgba(var(--border), 0.2); */

        background-image: linear-gradient(165deg,
                transparent 17.5%,
                rgba(var(--but-0), 0.35) 25%,
                rgba(var(--border), 1),
                rgba(var(--but-2), 0.35) 75%,
                transparent 82.5%);


        filter: drop-shadow(0px 4px 10px rgba(var(--border), 0.75));

        & .msg {
            margin-left: 8px;
        }
    }

}
</style>