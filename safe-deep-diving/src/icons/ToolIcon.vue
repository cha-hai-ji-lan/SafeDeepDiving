<template>
    <svg v-if="Type === 'normal-coloring'" class="tool-icon" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <path class="m-fill" d="M528 512l480-256v512l-480 256z" stroke-linejoin="round" stroke-linecap="round" />
        <path class="l-fill" d="M512 496l-480-256L512 0l480 240z" stroke-linejoin="round" stroke-linecap="round" />
        <path class="d-fill" d="M496 512l-480-256v512l480 256z" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'sideline-coloring'" class="tool-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <path class="m-fill" d="M512 496l480-256v512l-480 256z" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" />
        <path class="l-fill" d="M512 496l-480-256L512 16 992 240z" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" />
        <path class="d-fill" d="M512 496l-480-256v512l480 256z" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="64" />
    </svg>
    <svg v-if="Type === 'wireframe'" class="tool-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path d="M512 496l480-256v512l-480 256z" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64"  />
        <path d="M512 496l-480-256L512 16 992 240z" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64"  />
        <path d="M512 496l-480-256v512l480 256z" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="64"  />
        <path
            d="M512 16v64m0 75v64m0 75v64m0 75v64l-95 50m-95 50-95 50m-95 50-95 50M512 497l95 50m95 50 95 50m95 50 95 50"
            stroke-width="64"  stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
<script setup lang="ts">
defineProps<{
    Type: string
}>()
</script>
<style scoped>
.tool-icon {
    width: 2.5vmin;
    height: 2.5vmin;
    max-width: 25px;
    max-height: 25px;

    &:active {
        animation: act-icon 200ms ease;
    }
}
</style>