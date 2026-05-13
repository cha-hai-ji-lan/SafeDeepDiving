<template>
  <div ref="threeContainer" class="three-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import { init_three, clean_three } from '../../core/three/init.ts'

const threeContainer = ref<HTMLDivElement | null>(null);

onMounted(() => {
  init_three(threeContainer);
  // loadExampleSTEP();
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
  border-radius: 6px;
  background-color: rgba(var(--background), var(--b-transparent));
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
</style>