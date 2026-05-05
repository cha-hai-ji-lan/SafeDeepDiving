<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import { init_three, clean_three} from '../core/three/init.ts'
import { load_obj} from '../core/three/fileIO.ts'
// import { loadSTEPFile } from '../core/opencascade/loaderStep.ts'

const threeContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  init_three(threeContainer);
  load_obj()
  // loadExampleSTEP();
});

onUnmounted(() => {
  clean_three(threeContainer)
});

// async function loadExampleSTEP() {
//   // try {
//   const filePath = await open({
//     title: "选取文件",
//     multiple: false,
//     directory: false,
//     filters: [{
//       name: 'All Files',
//       extensions: ['*']
//     }],
//     defaultPath: 'D:\\Desktop\\prt0001(1).stp'
//   });
//   // 使用 buffer 加载方法
//   if (filePath !== null) {
//     await loadSTEPFile(filePath);
//     // addModelToScene(modelGroup);
//   }
//   // } catch (error) {
//   //   console.error('Failed to load STEP file:', error);
//   // }
// }
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