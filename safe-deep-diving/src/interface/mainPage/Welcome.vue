<template>
    <div v-if="interface_state['welcome']['show']">
        <div class="mesh"
            :class="{ 'opacity-show': interface_state['welcome']['delay-hide'] === false, 'opacity-hide': interface_state['welcome']['delay-hide'] }">
        </div>
        <div class="gradient-border"
            :class="{ 'opacity-show': interface_state['welcome']['delay-hide'] === false, 'opacity-hide': interface_state['welcome']['delay-hide'] }">
            <div class="contain0">
                <div class="contain1">
                    <div class="contain2">
                        <div class="svg-background">
                            <BaseIcon Type="three-d-ball" :State="3"></BaseIcon>
                        </div>
                        <div class="welcome"
                            :class="{ 'opacity-show': interface_state['welcome']['delay-hide'] === false, 'opacity-hide': interface_state['welcome']['delay-hide'] }">

                            <div class="main-logo">
                                <BaseIcon Type="logo" :State=3></BaseIcon>
                            </div>
                            <div class="brief-description">
                                <div class="wel-title ban-select">{{ lang?.["welcome"]?.["wel-tit"] ?? "__WELCOME__" }}
                                </div>
                                <div class=" wel-info ban-select">{{ lang?.["welcome"]?.["wel-msg"] ?? "__WELCOME_MSG__"
                                }}
                                </div>
                                <div class="methoad-bar">
                                    <div class="method-but" @click="() => { module_loader() }">
                                        <ToolIcon Type="import" :State="1"></ToolIcon>
                                    </div>
                                    <div class="method-but" @click="creat">
                                        <ToolIcon Type="new-part" :State="1"></ToolIcon>
                                    </div>
                                    <div class="method-but" @click="">
                                        <ToolIcon Type="new-asm" :State="1"></ToolIcon>
                                    </div>
                                    <div class="method-but" @click="() => { click_but('setting')}">
                                        <BaseIcon Type="setting" :State="1"></BaseIcon>
                                    </div>
                                    <div class="method-but" @click="open_url(appConfig?.['repository'])">
                                        <BaseIcon Type="github" :State="1"></BaseIcon>
                                    </div>
                                    <a href="mailto:shi2760992374@outlook.com?subject=BUG反馈&body=请发送反馈内容">
                                        <div class="method-but">
                                            <BaseIcon Type="bug-mail" :State="1"></BaseIcon>
                                        </div>
                                    </a>
                                    <div class="method-but" @click="() => { close_inter('welcome') }">
                                        <BaseIcon Type="close" :State="1"></BaseIcon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>
</template>
<script setup lang="ts">
import ToolIcon from '../../icons/ToolIcon.vue';
import BaseIcon from '../../icons/BaseIcon.vue';
import { interface_state, lang, appConfig } from '../../core/cache.ts';
import { close_inter, module_loader } from '../../core/publicMethod.ts';

import { invoke } from '@tauri-apps/api/core';
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';


const open_url = (url: string) => {
    invoke("open_url", { url: url })
}

const click_but = (whitch: string) => {
    switch (whitch) {
        case "setting":
            if (interface_state['setting']['show']) {
                close_inter('setting');
            } else {
                interface_state['setting']['show'] = true;
            }
            break;

        default:
            break;
    }
}

const creat = async () => {
    console.log("打开界面")
    const webview = await new WebviewWindow('splashScreen', {
        url: "/page/splashScreen.html",
        title: "splashScreen",
        width: 800,
        height: 600,
        resizable: true,
        decorations: true,
    })
    console.log(webview)
    // since the webview window is created asynchronously,
    // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
    webview.once('tauri://window-created', function () {
        webview.show()
        // webview window successfully created
    })
    webview.once('tauri://window-created', function () {
        webview.show()
        // webview window successfully created
    })
    webview.once('tauri://error', function (e) {
        console.log(e)
        // an error occurred during webview window creation
    })
}


</script>
<style scoped>
.load-spin {
    animation: spin linear infinite
}

.gradient-border {
    position: fixed;
    top: 10%;
    left: 9.5%;
    z-index: 20;
    /* 内联页面放在第20层 */
    width: 80%;
    height: 45%;
    padding: 1vmin;
    background-image: linear-gradient(to top right, rgba(var(--but-0), 1), rgba(var(--border), 1), rgba(var(--but-1), 1), rgba(var(--but-2), 2));
    z-index: 18;
    border-radius: 5vmin;

    & .contain0 {
        width: 100%;
        height: 100%;
        border-radius: 4.5vmin;

        background-image: linear-gradient(to bottom right,
                transparent calc(2.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(2.5%),
                transparent calc(5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(5%),
                transparent calc(7.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(7.5%),
                transparent calc(10% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(10%),
                transparent calc(12.5% - 2px),

                rgba(var(--font), 1) 4px,
                transparent calc(12.5% + 2px),
                transparent calc(15% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(15%),
                transparent calc(17.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(17.5%),
                transparent calc(20% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(20%),
                transparent calc(22.5% - 2px),

                rgba(var(--font), 1) 4px,
                transparent calc(22.5% + 2px),
                transparent calc(25% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(25%),
                transparent calc(27.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(27.5%),
                transparent calc(30% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(30%),
                transparent calc(32.5% - 2px),

                rgba(var(--font), 1) 4px,
                transparent calc(32.5% + 2px),
                transparent calc(35% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(35%),
                transparent calc(37.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(37.5%),
                transparent calc(40% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(40%),
                transparent calc(42.5% - 2px),

                rgba(var(--font), 1) 4px,
                transparent calc(42.5% + 2px),
                transparent calc(45% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(45%),
                transparent calc(47.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(47.5%),
                transparent calc(50% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(50%),
                transparent calc(52.5% - 2px),

                rgba(var(--font), 1) 4px,
                transparent calc(52.5% + 2px),
                transparent calc(55% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(55%),
                transparent calc(57.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(57.5%),
                transparent calc(60% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(60%),
                transparent calc(62.5% - 2px),

                rgba(var(--font), 1) 4px,
                transparent calc(62.5% + 2px),
                transparent calc(65% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(65%),
                transparent calc(67.5% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(67.5%),
                transparent calc(70% - 2px),
                rgba(var(--font), 1) 2px,
                transparent calc(70%),
                transparent calc(72.5% - 2px),

                rgba(var(--but-2), 1) 100%);
        /* background-size: 50vmin 50vmin; */
        overflow: hidden;

        & .contain1 {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to top right,
                    rgba(var(--but-0), 1) 0%,
                    transparent calc(35% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(35%),
                    transparent calc(37.5% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(37.5%),
                    transparent calc(40% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(40%),
                    transparent calc(42.5% - 2px),

                    rgba(var(--font), 1) 4px,
                    transparent calc(42.5% + 2px),
                    transparent calc(45% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(45%),
                    transparent calc(47.5% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(47.5%),
                    transparent calc(50% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(50%),
                    transparent calc(52.5% - 2px),

                    rgba(var(--font), 1) 4px,
                    transparent calc(52.5% + 2px),
                    transparent calc(55% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(55%),
                    transparent calc(57.5% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(57.5%),
                    transparent calc(60% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(60%),
                    transparent calc(62.5% - 2px),

                    rgba(var(--font), 1) 4px,
                    transparent calc(62.5% + 2px),
                    transparent calc(65% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(65%),
                    transparent calc(67.5% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(67.5%),
                    transparent calc(70% - 2px),
                    rgba(var(--font), 1) 2px,
                    transparent calc(70%),
                    transparent calc(72.5% - 2px),
                    rgba(var(--but-2), 1) 100%);

            & .contain2 {
                position: relative;

                & .svg-background {
                    position: absolute;
                    top: 40%;
                    left: 61%;
                    width: 20%;
                    height: 20%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                }
            }



            & .welcome {
                display: flex;
                display: flex;
                flex-direction: row;
                /* 内联页面放在第20层 */
                z-index: 20;
                width: 100%;
                height: 100%;

                & .main-logo {
                    display: flex;
                    justify-self: center;
                    align-self: center;
                    width: 35vmin;
                    height: 35vmin;
                    margin-left: 5vmin;

                }

                & .brief-description {
                    flex: 1;
                    display: flex;
                    flex-direction: column;

                    & .wel-title {
                        position: relative;
                        font: 5.5vw "Helvetica Neue", Helvetica, Arial, sans-serif;
                        font-weight: 900;
                        margin-top: 3vmin;
                        background-color: rgba(var(--but-2), 0.2);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                        -webkit-text-stroke: 0.15vmin rgb(var(--but-2));
                        text-shadow:
                            -0.25vmin -0.25vmin 0.5vmin rgba(var(--but-0), 0.5),
                            0.25vmin 0.25vmin 0.5vmin rgba(var(--but-2), 0.5);

                        &::before {
                            content: '';
                            position: absolute;
                            top: -1vmin;
                            left: -1vmin;
                            right: -1vmin;
                            bottom: -1vmin;
                            background-color: rgba(var(--but-2), 0.15);

                            border-radius: 2vmin;
                            z-index: -1;
                            border: 1px solid rgba(var(--but-2), 0.2);
                        }
                    }

                    & .wel-info {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font: 2.5vmin "LXGW", "Helvetica Neue", Helvetica, Arial, sans-serif;
                        font-weight: 400;
                        margin-top: 3vmin;
                        margin-bottom: 4vmin;
                        width: 20vmin;
                        background-color: rgba(var(--but-2), 1);
                        -webkit-background-clip: text;
                        background-clip: text;
                        color: transparent;
                        /* -webkit-text-stroke: 1px rgb(var(--but-2)); */
                        text-shadow:
                            0.25vmin 0.25vmin 0.5vmin rgba(var(--but-2), 0.5);
                        border: 0.25vmin solid rgba(var(--but-0), var(--w-transparent));
                        /* background-color: rgba(var(--border), var(--w-transparent)); */
                        border-radius: 1vmin;
                        backdrop-filter: blur(2px);
                        box-shadow:
                            -0.25vmin -0.25vmin 0.5vmin rgba(var(--but-0), 0.5),
                            0.25vmin 0.25vmin 0.5vmin rgba(var(--but-2), 0.5);
                    }

                    & .methoad-bar {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: row;
                        flex-wrap: wrap;
                        /* 允许换行 */
                        height: fit-content;
                        width: fit-content;
                        border: 0.25vmin solid rgba(var(--but-0), var(--w-transparent));
                        /* background-color: rgba(var(--border), var(--w-transparent)); */
                        border-radius: 1vmin;
                        backdrop-filter: blur(2px);
                        box-shadow:
                            -0.25vmin -0.25vmin 0.5vmin rgba(var(--but-0), 0.5),
                            0.25vmin 0.25vmin 0.5vmin rgba(var(--but-2), 0.5);

                        /* 添加媒体查询 */
                        @media (max-width: 768px) {
                            width: 60%;
                        }

                        & .method-but {
                            height: fit-content;
                            width: fit-content;
                            margin: 0.5vmin 1vmin;
                        }

                    }


                }
            }



        }


    }



}



.mesh {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0vmin;
    left: 0;
    z-index: 18;
    width: 100%;
    height: 100%;
    background-color: rgba(var(--font), var(--w-transparent));
    border-radius: 6px;
}
</style>