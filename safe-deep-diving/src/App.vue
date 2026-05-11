<!-- 
  @contextmenu 是 Vue 中绑定右键点击事件的指令
  .prevent 是事件修饰符,用于阻止浏览器默认的右键菜单弹出 
-->
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
          <BaseIcon :Type="base_icon_ctr['pin']"></BaseIcon>
        </div>
        <div data-tauri-drag-region class="base-ico" @click="() => { title_bar_click('setting') }">
          <BaseIcon Type="setting"></BaseIcon>
        </div>
        <div data-tauri-drag-region @click="() => { title_bar_click('minimize') }" class="base-ico minimize">
          <BaseIcon Type="minimize"></BaseIcon>
        </div>
        <div data-tauri-drag-region @click="() => { title_bar_click('maximize') }" class="base-ico maximize">
          <BaseIcon :Type="base_icon_ctr['maximize']"></BaseIcon>
        </div>
        <div data-tauri-drag-region @click="() => { title_bar_click('close') }" class="base-ico close">
          <BaseIcon Type="close"></BaseIcon>
        </div>
      </div>
    </div>
    <Welcome></Welcome>
    <Setting></Setting>
    <MainLogo></MainLogo>
    <MainThree></MainThree>
    <ViewTools></ViewTools>
    <!-- 工具模块 -->
    <Tools></Tools>
    <ReadWriteTool></ReadWriteTool>
    <SketchTool></SketchTool>
    <FeatureTool></FeatureTool>
    <RibLayout></RibLayout>
    <CurvedSurface></CurvedSurface>
    <!-- 内联界面 -->
    <RLPreProcess></RLPreProcess>
    <RLPostProcess></RLPostProcess>
  </main>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { Window, getCurrentWindow } from "@tauri-apps/api/window";
import { listen, UnlistenFn } from '@tauri-apps/api/event';
import BaseIcon from "./icons/BaseIcon.vue"                         // 引入基础图标组件
import MainThree from "./interface/MainThree.vue";                  // 引入主界面模块

import Welcome from "./interface/Welcome.vue";                      // 引入欢迎界面
import Setting from "./interface/Setting.vue";                      // 引入欢迎界面
import MainLogo from "./components/MainLogo.vue";                   // 引入主logo
// 模块
import Tools from "./components/Tools.vue";                         // 引入工具组模块
import ViewTools from "./components/ViewTools.vue";                 // 引入视图工具模块
import ReadWriteTool from "./components/ReadWriteTool.vue";         // 引入读写工具模块
import SketchTool from "./components/SketchTool.vue";               // 引入草绘工具模块
import FeatureTool from "./components/FeatureTool.vue";             // 引入特征工具模块
import RibLayout from "./components/RibLayout.vue";                 // 引入特征工具模块
import CurvedSurface from "./components/CurvedSurface.vue";                 // 引入特征工具模块
// 内联页面
import RLPreProcess from "./interface/RLPreProcess.vue";            // 引入预处理界面
import RLPostProcess from "./interface/RLPostProcess.vue";          // 引入后处理界面
// 初始化关联脚本
import { init_app } from "./core/init.ts";                          // 初始化应用脚本
import { base_icon_ctr, ele_state , interface_state} from "./core/cache.ts";         // 引入缓存数据动态脚本
import { close_inter} from './core/publicMethod.ts';
const appWindow = Window.getCurrent()

// const base_icon_ctr = ref({ "maximize": "maximize-0", "pin": "pin-0" })  // 控制窗口最大化和钉住屏幕图标
// const ele_state = reactive({ "enter-title-bar": false })

let resize_unlisten: UnlistenFn | null = null

const title_bar_mouse_enter = () => {
  ele_state['enter-title-bar'] = true
}
const title_bar_mouse_leave = () => {
  ele_state['enter-title-bar'] = false
}
const title_bar_click = (mode: string) => {

  switch (mode) {
    case 'close':
      appWindow.close();
      break;
    case 'minimize':
      appWindow.minimize()
      break;
    case 'maximize':
      if (base_icon_ctr["maximize"] === "maximize-1") {
        base_icon_ctr["maximize"] = "maximize-0"
        appWindow.toggleMaximize();
      } else if (base_icon_ctr["maximize"] === "maximize-0") {
        base_icon_ctr["maximize"] = "maximize-1"
        appWindow.toggleMaximize();
      }
      break;
    case 'pin':
      if (base_icon_ctr["pin"] === "pin-0") {
        base_icon_ctr["pin"] = "pin-1"
        appWindow.setAlwaysOnTop(true);
      } else if (base_icon_ctr["pin"] === "pin-1") {
        base_icon_ctr["pin"] = "pin-0"
        appWindow.setAlwaysOnTop(false);

      }
      break;
    case "setting":
      console.log("点击设置")
      if (interface_state['setting']['show']){
        close_inter('setting');
      } else {
        interface_state['setting']['show'] = true ;
      }
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
      base_icon_ctr["maximize"] = "maximize-1"
    } else {
      base_icon_ctr["maximize"] = "maximize-0"
    }
  });
})

onUnmounted(() => {
  if (resize_unlisten) {
    resize_unlisten()
  }
})
</script>

<style scoped>
#container {
  position: relative;
  width: 100vw;
  height: 100vh;
  border: 3px solid rgba(var(--border), 1);
  outline: 3px solid rgba(var(--border), 1);
  border-radius: 10px;
  box-sizing: border-box;

  /* background-color: rgba(var(--border), 1); */
  & .title {
    position: fixed;
    z-index: 30;
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
@import "./style/font.css";
@import "./style/setting.css";

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  font: 1.75vmin "楷体", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: rgba(var(--font), 1);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>