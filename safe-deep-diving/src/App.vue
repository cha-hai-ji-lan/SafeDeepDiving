<template>
  <main id="container">
    <div data-tauri-drag-region class="title">
      <div data-tauri-drag-region class="title-frame">
      </div>
      <div data-tauri-drag-region class="title-bar" :class="{ 'enter-title-bar': ele_state['enter-title-bar'] }"
        @mouseenter="title_bar_mouse_enter" @mouseleave="title_bar_mouse_leave">
        <div v-if="ele_state['enter-title-bar'] === false" data-tauri-drag-region
          @click="() => { title_bar_click('omit') }" class="base-ico">
          <BaseIcon Type="omit"></BaseIcon>
        </div>
        <div data-tauri-drag-region @click="() => { title_bar_click('pin') }" class="base-ico">
          <BaseIcon :Type="baseIconCtr['pin']"></BaseIcon>
        </div>
        <div data-tauri-drag-region class="base-ico">
          <BaseIcon Type="setting"></BaseIcon>
        </div>
        <div data-tauri-drag-region @click="() => { title_bar_click('minimize') }" class="base-ico minimize">
          <BaseIcon Type="minimize"></BaseIcon>
        </div>
        <div data-tauri-drag-region @click="() => { title_bar_click('maximize') }" class="base-ico maximize">
          <BaseIcon :Type="baseIconCtr['maximize']"></BaseIcon>
        </div>
        <div data-tauri-drag-region @click="() => { title_bar_click('close') }" class="base-ico close">
          <BaseIcon Type="close"></BaseIcon>
        </div>
      </div>
    </div>
    <MainThree></MainThree>
    <ViewTools></ViewTools>
  </main>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive } from "vue";
import { Window, getCurrentWindow } from "@tauri-apps/api/window";
import { listen, UnlistenFn } from '@tauri-apps/api/event';
import MainThree from "./interface/MainThree.vue";
import BaseIcon from "./icons/BaseIcon.vue"
import ViewTools from "./components/ViewTools.vue";
import { init_app } from "./core/init.ts";
const appWindow = Window.getCurrent()

const baseIconCtr = ref({ "maximize": "maximize-0", "pin": "pin-0" })  // 控制窗口最大化和钉住屏幕图标
const ele_state = reactive({ "enter-title-bar": false })

let resize_unlisten: UnlistenFn | null = null

const title_bar_mouse_enter = () => {
  ele_state['enter-title-bar'] = true
}
const title_bar_mouse_leave = () => {
  ele_state['enter-title-bar'] = false
}
const title_bar_click = (mode: string) => {

  switch (mode) {
    case 'minimize':
      appWindow.minimize()
      break;
    case 'maximize':
      if (baseIconCtr.value["maximize"] === "maximize-1") {
        baseIconCtr.value["maximize"] = "maximize-0"
        appWindow.toggleMaximize();
      } else if (baseIconCtr.value["maximize"] === "maximize-0") {
        baseIconCtr.value["maximize"] = "maximize-1"
        appWindow.toggleMaximize();
      }
      break;
    case 'pin':
      if (baseIconCtr.value["pin"] === "pin-0") {
        baseIconCtr.value["pin"] = "pin-1"
        appWindow.setAlwaysOnTop(true);
      } else if (baseIconCtr.value["pin"] === "pin-1") {
        baseIconCtr.value["pin"] = "pin-0"
        appWindow.setAlwaysOnTop(false);

      }
      break;
    case 'close':
      appWindow.close();
      break;
    default:

      break;
  }

}

onMounted(async () => {
  init_app()
  // 监听窗口调整大小事件，并在回调中检查状态
  resize_unlisten = await listen('tauri://resize', async () => {
    const currentWindow = getCurrentWindow();
    const isMaximized = await currentWindow.isMaximized();
    console.log('窗口是否最大化:', isMaximized);

    if (isMaximized) {
      baseIconCtr.value["maximize"] = "maximize-1"
    } else {
      baseIconCtr.value["maximize"] = "maximize-0"
    }
  });
})

onUnmounted(() => {
  if(resize_unlisten){
    resize_unlisten()
  }
})
</script>

<style scoped>
#container {
  position: relative;
  width: calc(100vw - 6px);
  height: calc(100vh - 6px);
  border: 3px solid rgba(var(--border), 1);
  outline: 3px solid rgba(var(--border), 1);
  border-radius: 10px;

  /* background-color: rgba(var(--border), 1); */
  & .title {
    position: fixed;
    z-index: 10;
    top: 2vmin;
    left: 2vmin;
    display: flex;
    align-self: center;
    justify-self: center;
    flex-direction: row;
    width: calc(100vw - 4vmin);
    height: fit-content;

    & .title-frame {
      display: flex;
      align-items: center;
      justify-self: start;
      flex-direction: row;
      flex: 1;
      height: 3.25vmin;
      margin-right: 1vmin;
      border-radius: 1vmin;
      border: 0.25vmin solid transparent;
      transition:
        border 100ms,
        background-color 200ms;

      &:hover {
        border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
        background-color: rgba(var(--menu), var(--w-transparent));
        filter: brightness(1.25);
      }
    }

    & .title-bar {
      position: relative;
      /* 用于后续收缩框定位 */
      display: flex;
      align-items: center;
      justify-content: start;
      border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
      background-color: rgba(var(--menu), var(--w-transparent));
      width: 3.5vmin;
      /* width: 22.5vmin; */
      height: 3vmin;
      border-radius: 1vmin;
      overflow-x: hidden;
      transition: width 200ms;

      &.enter-title-bar {
        width: 22.5vmin;
      }

      & .base-ico {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.5vmin;
        width: 3.5vmin;
        height: 100%;
        max-width: 30px;
        transition: background-color 300ms;

        &.minimize {
          &:hover {
            background-color: rgba(var(--ready), var(--w-transparent));
          }
        }

        &.maximize {
          &:hover {
            background-color: rgba(var(--warn), var(--w-transparent));
          }
        }

        &.close {
          &:hover {
            background-color: rgba(var(--err), var(--w-transparent));
          }
        }
      }

    }
  }

}
</style>
<style>
@import "./style/animation.css";
@import "./style/setting.css";

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
html {
  font: 1.75vmin "宋体", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: rgba(var(--font), 1);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>