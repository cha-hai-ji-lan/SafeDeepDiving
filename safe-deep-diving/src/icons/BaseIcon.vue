<template>
    <svg v-if="Type === 'logo'" class="logo-icon" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
        viewBox="0 0 1024 1024">
        <g transform="scale(0.9 0.9) translate(51 51)">
            <circle class="l-fill" r="256" cx="256" cy="768" />
            <path class="l-fill" d="M895.597 128.404l-319.598-128.409L688.867 335.133z" opacity="1" />
            <path class="l-fill" d="M895.595 128.408 576.002-.007 623.322 400.684Z" opacity="0.75" />
            <path class="l-fill" d="M623.323 400.684 1024.004 448.005 895.596 128.406z" opacity="0.75" />
            <path class="l-fill" d="M688.87 335.13 1024.003 448.003 895.596 128.406z" opacity="1" />
            <path class="m-fill" d="M749.009 274.995 1024 0l-194.79 382.35z" />
            <path class="l-fill" d="M647.179 212.667 1024 0l-274.987 274.995z" />
            <path class="m-fill" d="M647.179 212.667 1024 0l-274.99 274.998z" opacity="0.5" />
            <path class="l-fill" d="M100.124 564.952l441.176-304.352A1 1 0 0 1 780.3 498.2L445.2 940.9z" />
            <path class="d-stroke" fill="none"
                d="M192 832Q408.873 901.314 512 768L796.9 452.9C875.3 342.1 703.3 139.3 571.2 259L256 512Q146.509 615.488 192 832z"
                stroke-width="16" stroke-linecap="round" stroke-linejoin="round" opacity="1" />
            <path class="m-fill"
                d="M192 832q-45.49-216.513 64-320.003c-181.4 2.303-247.4 166.803-247.281 189.909C-27.6 850 60.1 1016 256 1024c152 7.7 259.4-133.3 256.002-256.002q-103.125 133.32-319.902 63.942z"
                opacity="0.75" />
            <path class="m-fill d-stroke"
                d="M192 832Q408.877 901.311 512 768L789.5 453.2C870 375 733 146.8 571.2 259L256 512Q146.507 615.487 192 832z"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" opacity="0.35" />
            <path class="d-stroke" d="M585.8 249.5a1 1 0 0 0 218.2 192.7" stroke-width="16" stroke-linecap="round"
                opacity="1" fill="none" />
            <path class="d-stroke" d="M456.73 350.9a1 1 0 0 0 240.17 212.3" stroke-width="16" stroke-linecap="round"
                opacity="1" fill="none" />
            <path class="d-stroke" d="M296.67 479.71A1 1 0 0 0 584.6 687.7" stroke-width="16" stroke-linecap="round"
                opacity="1" fill="none" />
            <path class="d-stroke" d="m198.61 824.75C684.5 448.5 719.4 400.9 752.1 262.8" stroke-width="32"
                stroke-linecap="butt" opacity="1" fill="none" />
            <path class="d-stroke" stroke-width="32" stroke-linecap="round" opacity="1" fill="none"
                d="M1024 0l-186.3 105.14-261.65-105.1 26.098 221.415q-37.648 22.045-60.851 39.143l-437.297 300.402q-85.6 68.6-95.19 141.01-20.11 152.99 64.49 245.29 68.794026 75.055421 180 76.7 126.3-12 191.1-83.4l335.901-442.399q28.199-34.401 42.936-73.904l200.768 23.711-100.647-250.48zm0 0-194.727 382.419m194.727-382.419-387.2 220.9"
                stroke-linejoin="round" />
        </g>
    </svg>
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
        <rect class="l-fill" width="768" height="640" x="64" y="256" rx="128" ry="128" stroke-opacity="1"
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
    <svg v-if="Type === 'omit'" class="base-icon d-stroke l-fill" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <circle r="92" cx="512" cy="512" stroke-width="64" />
        <circle r="92" cx="512" cy="128" stroke-width="64" />
        <circle r="92" cx="512" cy="896" stroke-width="64" />
    </svg>
    <svg v-if="Type === 'drag-block'" class="base-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" />
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" transform="rotate(90 512 512)" />
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" transform="rotate(180 512 512)" />
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" transform="rotate(270 512 512)" />
        <rect class="l-fill m-stroke" width="384" height="384" x="320" y="320" stroke="#74aff6" ry="64" rx="64"
            stroke-width="96" stroke-linejoin="round" />
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

.logo-icon {
    width: 4vmin;
    height: 4vmin;
    max-width: 35px;
    max-height: 35px;

    &:active {
        animation: act-icon 200ms ease;
    }
}
</style>