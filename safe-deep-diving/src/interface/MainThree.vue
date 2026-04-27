<template>
    <div ref="threeContainer" class="three-container"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
  import {init_three, clean_three} from '../core/three/init.ts'
  const threeContainer = ref<HTMLDivElement | null>(null);  // 容器引用

  
  onMounted(() => {
    init_three(threeContainer);
  });
  
  onUnmounted(() => {
    clean_three(threeContainer)
  });
  </script>
  
  <style scoped>
  .three-container {
   display: flex;
   justify-self: center;
   align-self: center;
   width: 100%;
   height: 100%;
   /* 确保父容器也有高度 */
   border-radius: 8px;
   background-color: rgba(var(--background), var(--b-transparent));
   position: relative;
   overflow: hidden;
  }
  </style>