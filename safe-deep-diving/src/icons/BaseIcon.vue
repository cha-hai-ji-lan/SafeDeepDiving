<template>
    <svg v-if="Type === 'setting'" class="base-icon" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
        viewBox="0 0 1024 1024">
        <g>
            <path class="d-fill" d="M383 288.5h258l129 223.5-129 223.5h-258l-129-223.5z" />
            <path class="d-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" />
            <path class="l-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(60 512 512)" />
            <path class="d-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(120 512 512)" />
            <path class="l-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(180 512 512)" />
            <path class="d-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(240 512 512)" />
            <path class="l-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(300 512 512)" />
            <circle class="l-fill" r="128" cx="512" cy="512" stroke-width="64" />
        </g>
    </svg>
</template>
<script setup lang="ts">
defineProps<{
    Type: string
}>()
</script>
<style scoped>
.base-icon {
    width: 3.5vmin;
    height: 3.5vmin;
    stroke: rgba(var(--font), var(--b-transparent));
    &:active {
        animation: act-icon 200ms ease;
    }
}
</style>