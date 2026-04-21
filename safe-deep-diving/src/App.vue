<template>
  <main id="container">
    <div data-tauri-drag-region class="title">
      <div data-tauri-drag-region class="title-frame">
      </div>
      <div data-tauri-drag-region class="title-bar">
        <div class="base-ico">
          <BaseIcon Type="setting"></BaseIcon>
        </div>

      </div>
    </div>

    <Main></Main>
  </main>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Main from "./interface/Main.vue";
import BaseIcon from "./icons/BaseIcon.vue"
import { init_app } from "./core/init.ts";

onMounted(() => {
  init_app()
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
    height: 5vmin;

    & .title-frame {
      display: flex;
      align-items: center;
      justify-self: start;
      flex-direction: row;
      flex: 1;
      height: 5vmin;
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
      display: flex;
      align-items: center;
      justify-content: start;
      border: 0.25vmin solid rgba(var(--menu), var(--b-transparent));
      background-color: rgba(var(--menu), var(--w-transparent));
      width: 16vmin;
      height: 5vmin;
      border-radius: 1vmin;

      & .base-ico {
        margin: 0 0.5vmin;
        width: 3.5vmin;
        height: 3.5vmin;
      }

    }
  }

}
</style>
<style>
@import "./style/animation.css";
@import "./style/setting.css";

html {
  padding: 0;
  margin: 0;
  font: 1.75vmin "宋体", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: rgba(var(--font), 1);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

body {
  padding: 0;
  margin: 0;
}
</style>