<template>
    <svg v-if=" Type === " xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path d="M528 512l480-256v512l-480 256z" fill="#74aff6" stroke-linejoin="round" stroke-linecap="round" />
        <path d="M512 496l-480-256L512 0l480 240z" fill="#d3e3ee" stroke-linejoin="round" stroke-linecap="round" />
        <path d="M496 512l-480-256v512l480 256z" fill="#071226" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>
<script setup lang="ts">
defineProps<{
    Type: string
}>()
</script>
<style scoped></style>