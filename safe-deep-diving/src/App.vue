<template>
  <main id="container">
    <div data-tauri-drag-region class="title-bar"></div>
    <Main></Main>
  </main>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Main from "./interface/Main.vue";
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
  box-shadow: 0 0 0 1px rgba(var(--border), var(--w-transparent)); 
  border-radius: 10px;
  /* background-color: rgba(var(--border), 1); */
  & .title-bar {
    position: fixed;
    top: 2vmin;
    right: 2vmin;
    background-color: #fff;
    width: 16vmin;
    height: 5vmin;
    border-radius: 1vmin;

  }
}
</style>
<style>
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