<template>
    <div v-if="welcome_inter_ctr['show-inter']">
        <div class="welcome"
            :class="{ 'show-welcome': welcome_inter_ctr['delay-hide'] === false, 'hide-welcome': welcome_inter_ctr['delay-hide']}">
            <div class="main-logo">
                <BaseIcon Type="logo" :State=3></BaseIcon>
            </div>
            <div class="brief-description">
                <div class="wel-title">{{ lang?.["welcome"]?.["wel-tit"] ?? "__WELCOME__" }}
                </div>
                <div class=" wel-info">{{ lang?.["welcome"]?.["wel-msg"] ?? "__WELCOME__" }}</div>
                <div class="methoad-bar">
                    <div class="method-but" @click="import_model_file">
                        <ToolIcon Type="import" :State="1"></ToolIcon>
                    </div>
                    <div class="method-but">
                        <ToolIcon Type="new-part" :State="1"></ToolIcon>
                    </div>
                    <div class="method-but">
                        <ToolIcon Type="new-asm" :State="1"></ToolIcon>
                    </div>
                    <div class="method-but" @click="open_url(appConfig?.['repository'])">
                        <BaseIcon Type="github" :State="1"></BaseIcon>
                    </div>
                    <a href="mailto:shi2760992374@outlook.com?subject=BUG反馈&body=请发送反馈内容">
                        <div class="method-but">
                            <BaseIcon Type="bug-mail" :State="1"></BaseIcon>
                        </div>
                    </a>
                    <div class="method-but" @click="close_inter">
                        <BaseIcon Type="close" :State="1"></BaseIcon>
                    </div>
                </div>
            </div>
        </div>
        <div class="gradient-border"
            :class="{ 'show-welcome': welcome_inter_ctr['delay-hide'] === false, 'hide-welcome': welcome_inter_ctr['delay-hide'] }">
        </div>
        <div class="mesh"
            :class="{ 'show-welcome': welcome_inter_ctr['delay-hide'] === false, 'hide-welcome': welcome_inter_ctr['delay-hide'] }">
        </div>
    </div>
</template>
<script setup lang="ts">
import BaseIcon from '../icons/BaseIcon.vue';
import { welcome_inter_ctr, lang, appConfig } from '../core/cache';
import { import_model_file, close_inter } from '../core/publicMethod.ts';

import ToolIcon from '../icons/ToolIcon.vue';
import { invoke } from '@tauri-apps/api/core';

const open_url = (url: string) => {
    invoke("open_url", { url: url })
}


</script>
<style scoped>
.show-welcome {
    animation: interface-show 250ms ease;
}

.hide-welcome {
    animation: interface-hide 250ms ease;
}

.load-spin {
    animation: spin linear infinite
}

.gradient-border {
    position: fixed;
    top: 19.5%;
    left: 9.5%;
    z-index: 20;
    /* 内联页面放在第20层 */
    width: 81%;
    height: 46%;
    background-image: conic-gradient(rgba(var(--border), 1), rgba(var(--but-0), 1), rgba(var(--border), 1));
    z-index: 18;
    border-radius: 5vmin;
}

.welcome {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 20%;
    left: 10%;
    z-index: 20;
    /* 内联页面放在第20层 */
    width: 80%;
    height: 45%;
    background-image: linear-gradient(to bottom right, rgba(var(--border), 1), rgba(var(--but-0), 1), rgba(var(--but-1), 1), rgba(var(--border), 1));
    border-radius: 5vmin;

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
            font: 10vmin "LXGW", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 900;
            margin-top: 3vmin;
            background-image: linear-gradient(to bottom right, rgba(var(--font), 1), rgba(var(--but-2), 1));

            /* 2. 关键：将背景裁剪限制在文字区域内 */
            -webkit-background-clip: text;
            /* Safari/Chrome 兼容 */
            background-clip: text;

            /* 3. 将文字颜色设为透明，以显示背景 */
            color: transparent;
            text-shadow:
                0 0 0.5vmin rgba(var(--but-0), 0.8),
                0 0 0.75vmin rgba(var(--font), 0.4);
        }

        & .wel-info {
            font: 3.5vmin "楷体", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: 600;
            margin-top: 3vmin;
            background-image: linear-gradient(to bottom right, rgba(var(--font), 1), rgba(var(--but-2), 1));
            /* 将背景裁剪限制在文字区域内 */
            -webkit-background-clip: text;
            /* Safari/Chrome 兼容 */
            background-clip: text;
            /* 将文字颜色设为透明，以显示背景 */
            color: transparent;
            text-shadow:
                0 0 0.5vmin rgba(var(--but-0), 0.8),
                0 0 0.75vmin rgba(var(--font), 0.4);
            margin-bottom: 4vmin;
        }

        & .methoad-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            height: fit-content;
            width: fit-content;
            border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
            background-color: rgba(var(--border), var(--w-transparent));
            border-radius: 1vmin;

            & .method-but {
                height: fit-content;
                width: fit-content;
                margin: 0.5vmin 1vmin;
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

}
</style>