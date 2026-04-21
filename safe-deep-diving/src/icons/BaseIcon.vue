<template>
    <svg v-if="Type === 'setting'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <g>
            <path class="m-fill" d="M383 288.5h258l129 223.5-129 223.5h-258l-129-223.5z" />
            <path class="m-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" />
            <path class="l-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(60 512 512)" />
            <path class="m-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(120 512 512)" />
            <path class="l-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(180 512 512)" />
            <path class="m-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(240 512 512)" />
            <path class="l-fill" d="M448 32h128l64 256h-256z" stroke-width="64" stroke-linejoin="round"
                stroke-linecap="round" transform="rotate(300 512 512)" />
            <circle class="l-fill" r="128" cx="512" cy="512" stroke-width="64" />
        </g>
    </svg>
    <svg v-if="Type === 'minimize'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <path class="l-fill" d="M96 448a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64" />
    </svg>
    <svg v-if="Type === 'maximize-0'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        viewBox="0 0 1024 1024" height="1024">
        <rect class="m-fill" width="896" height="768" rx="128" ry="128" x="64" y="128" stroke-width="64" />
        <rect class="l-fill" width="384" height="240" x="192" y="528" rx="48" ry="48" stroke-opacity="1"
            stroke-width="64" />
    </svg>
    <svg v-if="Type === 'maximize-1'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        viewBox="0 0 1024 1024" height="1024">
        <rect class="m-fill" width="896" height="768" rx="128" ry="128" x="64" y="128" stroke-width="64" />
        <rect class="l-fill" width="768" height="640" x="64" y="256" fill="#d3e3ee" rx="128" ry="128" stroke-opacity="1"
            stroke-width="64" />
    </svg>
    <svg v-if="Type === 'close'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <path class="m-fill" d="M96 448a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64"
            transform="rotate(45 512 512)" />
        <path class="l-fill" d="M96 448a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64"
            transform="rotate(135 512 512)" />
    </svg>
    <svg v-if="Type === 'pin-0'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <g transform="rotate(50 512 512) translate(16 128)">
            <rect class="m-fill" width="384" height="512" rx="64" ry="64" stroke-linejoin="round" x="320" y="192"
                stroke-width="64" />
            <rect class="l-fill" width="768" height="128" x="128" y="64" rx="64" ry="64" stroke-width="64" />
            <line x2="512" x1="512" y1="704" y2="960" stroke-width="64" stroke-linecap="round" />
        </g>

    </svg>
    <svg v-if="Type === 'pin-1'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <g>
            <rect class="m-fill" width="384" height="512" rx="64" ry="64" stroke-linejoin="round" x="320" y="192"
                stroke-width="64" />
            <rect class="l-fill" width="768" height="128" x="128" y="64" rx="64" ry="64" stroke-width="64" />
            <line x2="512" x1="512" y1="704" y2="960" stroke-width="64" stroke-linecap="round" />
        </g>
    </svg>
    <svg v-if="Type === 'omit'" class="base-icon d-stroke l-fill" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
	<circle r="92" cx="512" cy="512" stroke-width="64"  />
	<circle r="92" cx="512" cy="128" stroke-width="64"  />
	<circle r="92" cx="512" cy="896" stroke-width="64"  />
</svg>
</template>
<script setup lang="ts">
defineProps<{
    Type: string
}>()
</script>
<style scoped>
.base-icon {
    width: 2.5vmin;
    height: 2.5vmin;
    max-width: 25px;
    max-height: 25px;

    &:active {
        animation: act-icon 200ms ease;
    }
}
</style>