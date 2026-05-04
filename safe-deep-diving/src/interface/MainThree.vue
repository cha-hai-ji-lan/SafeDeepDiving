<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import {init_three, clean_three, addModelToScene} from '../core/three/init.ts'
import { loadSTEPFile, loadSTEPFromBuffer } from '../core/opencascade/loaderStep.ts'
import { readFile } from '@tauri-apps/plugin-fs'; 

const threeContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  init_three(threeContainer);
  loadExampleSTEP();
});

onUnmounted(() => {
  clean_three(threeContainer)
});

async function loadExampleSTEP() {
    try {
      // 注意：在 Tauri 中，你需要使用 Tauri 的路径解析或允许的路径
    // 假设你已经配置了 tauri.conf.json 中的 fs 允许范围
    // 这里演示如何读取二进制数据
    const filePath = 'D:\\Desktop\\prt0001(1).stp'; 
    
    // 读取文件为 Uint8Array
    const fileData = await readFile(filePath);
    
    // 使用 buffer 加载方法
    const modelGroup = await loadSTEPFromBuffer(fileData.buffer);
    addModelToScene(modelGroup);
    } catch (error) {
      console.error('Failed to load STEP file:', error);
    }
  }

  async function handleFileUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (!file) return;
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const modelGroup = await loadSTEPFromBuffer(arrayBuffer);
      addModelToScene(modelGroup);
    } catch (error) {
      console.error('Failed to load STEP file:', error);
    }
  }

</script>

<style scoped>
.three-container {
 display: flex;
 justify-self: center;
 align-self: center;
 width: 100%;
 height: 100%;
 border-radius: 8px;
 background-color: rgba(var(--background), var(--b-transparent));
 position: relative;
 overflow: hidden;
}
</style>