<template>
    <!-- 模型显示方式图标 -->
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
    <svg v-if="Type === 'wireframe'" class="tool-icon d-stroke" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <path d="M512 496l480-256v512l-480 256z" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" />
        <path d="M512 496l-480-256L512 16 992 240z" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" />
        <path d="M512 496l-480-256v512l480 256z" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="64" />
        <path
            d="M512 16v64m0 75v64m0 75v64m0 75v64l-95 50m-95 50-95 50m-95 50-95 50M512 497l95 50m95 50 95 50m95 50 95 50"
            stroke-width="64" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <!-- 工具栏图标 -->
    <svg v-if="Type === 'tools'" class="tool-main-icon " xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
        viewBox="0 0 1024 1024">
        <g>
            <path class="d-stroke d-fill" d="M640 640l-256-128 0 320 256 128z" stroke-opacity="1" stroke-width="32"
                stroke-linejoin="round" />
            <path class="d-stroke l-fill" d="M640 640l-256-128 256-112 256 112z" stroke-opacity="1" stroke-width="32"
                stroke-linejoin="round" />
            <path class="d-stroke d-fill" d="M576 456Q432 188 199 128L170.74 139.73Q393 215 576 456z"
                stroke-linejoin="round" stroke-linecap="round" />
            <path class="m-fill d-stroke" stroke-width="8"
                d="M59.4 62.902Q79.9 58.6 146 93 96.52 57.81 98.9 54.8 98.97 46.82 191.33 44.1 212.7 46.7 253.4 131.3 248.99 64.44 216.4 44.5 224.62 37.06 278.87 50.63 302.6 58.7 336.5 169.7 318.7 64.3 307.1 57.21 348.8 57.8 417 112.3 426.1 127.3 429.2 230.3 447.3 171.1 437.2 142 454.2 146 482.7 222.6 475.9 257 480.2 291 484.1 251.1 490.6 245.3 501.8 255.8 512.001 353.243 388.1 179.7 199.001 128.001L183.06 134.065" />
            <path class="l-fill d-stroke" stroke-width="8"
                d="M183.055 134.06Q121.2275 98.48 59.4 62.9 77.66 97.23 113.7 102.5 108.42 110.57 80.3 101.1 75.85 120.1 116.1 153.4 142.13 173.74 225 184 196.2 195.5 148.4 192.1 159.9 228.3 204.7 248.7 275.7 225.7 355.8 239 275.7 247.1 236.1 273.2 277.4 315.7 300.8 311.5 351.5 296.1 396.8 301.7 335 311.4 325.5 322.7 332.3 336.8 381.8 345.6 426.1 325.2 450.2 334.7 422.4 342.2 420.8 350.5 441.5 357.6 463.8 357.2 480.642 360.193 497.484 363.186 343.8 197.6 170.8 139.7" />
            <path d="M59.4 62.9Q472-32 508.6 359.9 214 353 59.401 62.902" fill="none" />
            <path class="m-stroke"
                d="M798.64751 805.385761Q756.797343 886.191476 704.25704 910.696916A179.185221 391.282985 0 0 1 704.25704 128.130946q68.090779 20.511086 102.027283 135.62978"
                fill="none" stroke-dasharray="65,75" stroke-linecap="round" stroke-width="32"
                transform="rotate(40 512 512)" />
            <path class="d-stroke m-fill" d="M640 640l256-128 0 320-256 128z" stroke-opacity="1" stroke-width="32"
                stroke-linejoin="round" />
            <path class="d-stroke" d="M621.3 655.7S629 795 718 759A100 367 0 0 0 647 29.4Q593 85 598 139.4" fill="none"
                stroke-dasharray="45,50" stroke-linecap="round" stroke-width="24" transform="rotate(90 512 512)" />
        </g>
    </svg>
    <svg v-if="Type === 'read-write-file'" class="tool-main-icon" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <g>
            <path class="d-stroke l-fill"
                d="M1280 928V989.4C1279.9 1008.7 1302.3 1019.4 1317.3 1007.3L1546.4 822C1557.8 812.8 1557.7 795.5 1546.3 786.3L1318.3 581.2C1303.3 569.2 1280 579.8 1279.9 599V661.1C1279.9 672.8 1271.9 681.2 1260.5 683.8Q923.205068 768.160979 548.476294 524.497132 842.956502 1027.814062 1257.7 905C1270.3 905.7 1280.1 915.5 1280 928Z"
                stroke-width="32" transform="rotate(35 512 512) scale(0.75 0.75)" />
            <path class="d-stroke l-fill" d="M64 768 64 448 609 32 609 352Z" stroke-opacity="1" stroke-width="32"
                stroke-linejoin="round" />
            <path class="d-stroke l-fill" d="M609 352l0-320L928 224 928 544z" stroke-opacity="1" stroke-width="32"
                stroke-linejoin="round" />
            <path class="d-stroke d-fill" d="M384 640l-320-192 0 320 320 192z" stroke-opacity="1" stroke-width="32"
                stroke-linejoin="round" />
            <path class="d-stroke m-fill" d="M384 640l544-416L928 544 384 960Z" stroke-opacity="1" stroke-width="32"
                stroke-linejoin="round" />
            <path class="d-stroke m-fill"
                d="M320 736V797.4C319.9 816.7 342.3 827.4 357.3 815.3L586.4 630C597.8 620.8 597.7 603.5 586.3 594.3L358.3 389.2C343.3 377.2 320 387.8 319.9 407V469.1C319.9 480.8 311.9 489.2 300.5 491.8Q-11.525993 435.443624-167.152239 855.129522 97.405253 640.36917 297.7 713C310.3 713.7 320.1 723.5 320 736Z"
                stroke-width="32" transform="rotate(60 512 512) scale(0.75 0.75)" />
            <rect class="" width="450" height="48" x="421" rx="16" ry="16" transform="skewY(-37.5)" y="1006.246255"
                fill="#c8d7e0" />
            <rect class="" width="64" height="64" x="428" rx="16" ry="16" transform="skewY(-37.5)" y="1141.260202"
                fill="#c8d7e0" />
        </g>
    </svg>
    <svg v-if="Type === 'shrink'" class="tool-main-icon d-stroke l-fill" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path d="M96 128a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64" 
             />
        <path d="M96 448a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64" 
             />
        <path d="M96 768a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64" 
             />
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

.tool-main-icon {
    width: 5vmin;
    height: 5vmin;
    max-width: 60px;
    max-height: 60px;

    &:active {
        animation: act-icon 200ms ease;
    }
}
</style>