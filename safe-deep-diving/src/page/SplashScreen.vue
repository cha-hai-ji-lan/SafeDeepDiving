<template>
    <main class="main">
        <Welcome></Welcome>
    </main>
</template>

<script setup lang="ts">
import Welcome from "../interface/SplashScreenPage/Welcome.vue";
import { onMounted } from 'vue';
import { init_app } from '../core/init';

onMounted(() => {
    init_app()
})
</script>
<style>
@import "../style/animation.css";
@import "../style/font.css";
@import "../style/setting.css";
html,
body,
#splashScreen {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.main{
    width: 100%;
    height: 100%;
}
</style>