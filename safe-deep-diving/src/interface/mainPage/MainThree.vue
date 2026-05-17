<template>
  <div ref="threeCtr" class="three-container">
    <div ref="miniCtr" class="mini-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref} from 'vue';

// import { init_three, clean_three } from '../../core/three/init'
import { threeContainer, miniContainer } from '../../core/three/cache'

const threeCtr = ref<HTMLDivElement | null>(null);
const miniCtr = ref<HTMLDivElement | null>(null);

onMounted(() => {
  threeContainer.value = threeCtr.value;
  miniContainer.value = miniCtr.value;
});

onUnmounted(() => {
});

</script>

<style scoped>
.three-container {
  position: relative;
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
  & .mini-container{
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 100px;
    height: 100px;
    z-index: 17;
  }
}
</style>