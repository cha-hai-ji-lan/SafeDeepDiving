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
    <svg v-if="Type === 'rw-file'" class="tool-group-icon" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
        viewBox="0 0 1024 1024">
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
    <svg v-if="Type === 'shrink'" class="tool-group-icon d-stroke l-fill" xmlns="http://www.w3.org/2000/svg"
        width="1024" height="1024" viewBox="0 0 1024 1024">
        <rect width="640" height="96" x="192" y="192" rx="48" ry="48" stroke-width="32" />
        <rect width="640" height="96" x="192" y="448" rx="48" ry="48" stroke-width="32" />
        <rect width="640" height="96" x="192" y="704" rx="48" ry="48" stroke-width="32" />
    </svg>
    <!-- 读写模块图标 -->
    <svg v-if="Type === 'import'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }" viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
        <g>
            <rect class="d-fill" width="1024" height="868" x="0" y="64" rx="128" ry="128" />
            <rect class="m-fill" width="896" height="740" x="64" y="128" rx="96" ry="96" />
            <rect class="l-fill" width="640" height="64" x="160" y="192" rx="24" ry="24" />
            <path class="d-stroke l-fill"
                d="M399 671.9V733.3C398.9 752.6 421.3 763.3 436.3 751.2L665.4 565.9C676.8 556.7 676.7 539.4 665.3 530.2L437.3 325.1C422.3 313.1 399 323.7 398.9 342.9V405C398.9 416.7 390.9 425.1 379.5 427.7-80.2 432 14.3 755.2 3.8 1023.4 100 784.4 230.8 689 376.7 648.9 389.3 649.6 399.1 659.4 399 671.9Z"
                stroke-width="8" />
        </g>
    </svg>
    <svg v-if="Type === 'export'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }" viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
        <g>
            <rect class="d-fill" width="1024" height="868" x="0" y="64" rx="128" ry="128" />
            <rect class="m-fill" width="896" height="740" x="64" y="128" rx="96" ry="96" />
            <rect class="l-fill" width="640" height="64" x="160" y="192" rx="24" ry="24" />
            <path class="d-stroke l-fill"
                d="M749 940V1001.4C748.9 1020.7 771.3 1031.4 786.3 1019.3L1015.4 834C1026.8 824.8 1026.7 807.5 1015.3 798.3L787.3 593.2C772.3 581.2 749 591.8 748.9 611V673.1C748.9 684.8 740.9 693.2 729.5 695.8 541 693 473 689 350 320 198 909 521 912 726.7 917 739.3 917.7 749.1 927.5 749 940Z"
                stroke-width="8" />
        </g>
    </svg>
    <svg v-if="Type === 'save'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class="d-stroke m-fill"
            d="M128 64Q64 64 64 128V896Q64 960 128 960H896Q960 960 960 896V384Q960 320 896 256L768 128Q704 64 640 64z"
            stroke-width="32" />
        <path class="d-stroke l-fill"
            d="M200 160Q160 160 160 200V812Q160 860 208 860H812q48 0 48-48V384q0-24-24-48L704 184q-40-24-64-24Z"
            stroke-width="32" />
        <path class="d-stroke m-fill" d="M256 160q64 0 64 64v64q0 64 64 64h96q64 0 64-64v-64q0-64 64-64Z"
            stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
        <rect class="d-stroke m-fill" width="432" height="152" x="288" y="700" ry="32" rx="32" stroke-width="48" />
    </svg>
    <svg v-if="Type === 'save-as'" class="tool-icon d-stroke" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g transform="scale(0.9 0.9) translate(-32 -32)">
            <path class="m-fill"
                d="M128 64Q64 64 64 128V896Q64 960 128 960H896Q960 960 960 896V384Q960 320 896 256L768 128Q704 64 640 64z"
                stroke-width="32" />
            <path class="l-fill"
                d="M200 160Q160 160 160 200V812Q160 860 208 860H812q48 0 48-48V384q0-24-24-48L704 184q-40-24-64-24Z"
                stroke-width="32" />
            <path class="m-fill" d="M256 160q64 0 64 64v64q0 64 64 64h96q64 0 64-64v-64q0-64 64-64Z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <rect class="m-fill" width="432" height="152" x="288" y="700" ry="32" rx="32" stroke-width="48" />
        </g>
        <g transform="scale(0.8 0.8) translate(288 288)" fill-opacity="0.75">
            <path class="m-fill"
                d="M128 64Q64 64 64 128V896Q64 960 128 960H896Q960 960 960 896V384Q960 320 896 256L768 128Q704 64 640 64z"
                stroke-width="32" />
            <path class="l-fill"
                d="M200 160Q160 160 160 200V812Q160 860 208 860H812q48 0 48-48V384q0-24-24-48L704 184q-40-24-64-24Z"
                stroke-width="32" />
            <path class="m-fill" d="M256 160q64 0 64 64v64q0 64 64 64h96q64 0 64-64v-64q0-64 64-64Z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <rect class="m-fill" width="432" height="152" x="288" y="700" ry="32" rx="32" stroke-width="48" />
        </g>
    </svg>
    <!-- 实体模块 -->
    <svg v-if="Type === 'new-part'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g>
            <path class=" d-stroke m-fill" d="M973 863l-630-188v-639.98L653 159V479L973 575Z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M713 992l-614-178v-640L393 288V608L713 704Z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M99.001 174.001 343 35.03 652.999 158.999 393.001 288.001Z"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M713.001 704l259.999-129.001-.001 288.003-259.998 128.996z"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M393.001 608.002 653 479.001 972.999 575.003 713.001 703.999z"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
    <svg v-if="Type === 'new-asm'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g>
            <path class="d-stroke l-fill" d="M896 896l-576-128v-640l288 64v288l288 64z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class="d-stroke m-fill" d="M640 960l-576-128v-640L352 256V544.27L639.958 608.03z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class="d-stroke d-fill" d="M440.56 660.92 998 517v-298.4L440.5 379z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class="d-stroke m-fill" d="M998.05 218.55 790 145 190.507 298.273 440.492 378.995Z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class="d-stroke l-fill" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"
                d="M440.503 378.995v281.875l-249.999-84.6v-278z" />
            <path class="d-stroke l-fill" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"
                d="M896 544.002v351.998l-256.04 64.04v-352.01z" />
            <path class="d-stroke l-fill" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"
                d="M320.003 128.003l287.998 63.997-256.04 64.04-287.959-64.038z" />
        </g>
    </svg>
    <svg v-if="Type === 'part-transparency'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g fill-opacity="1" stroke-linecap="round" stroke-linejoin="round">
            <path class=" d-stroke d-fill" d="M640 640l-256-128v256l256 128z" stroke-width="16" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M640 640l-256-128 256-128 256 128z" stroke-width="16"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M640 640l256-128v256l-256 128z" stroke-width="16" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
        <g fill-opacity="0.6" transform="scale(0.75 0.75) translate(298.75 -85.25)" stroke-linecap="round"
            stroke-linejoin="round">
            <path class=" d-stroke d-fill" d="M640 640l-256-128v256l256 128z" stroke-width="16" stroke-linejoin="round"
                stroke-linecap="round" />
            <path class=" d-stroke l-fill" d="M640 640l-256-128 256-128 256 128z" stroke-width="16"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M640 640l256-128v256l-256 128z" stroke-width="16" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
        <rect class=" d-stroke m-fill" width="128" height="768" x="128" y="128" rx="64" ry="64" stroke-width="32"
            stroke-linejoin="round" />
        <rect class=" d-stroke l-fill" width="128" height="512" x="128" y="384" rx="64" ry="64" stroke-width="32"
            stroke-linejoin="round" />
        <circle class=" l-stroke m-fill" r="64" cx="192" cy="448" stroke-width="32" />
        <g>
            <path class=" d-stroke m-fill" d="M512 196l64-196L704 335z" stroke-width="8" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M512 196 320 256 704 335Z" stroke-width="8" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
    </svg>
    <!-- 草绘编辑模块 -->
    <svg v-if="Type === 'sketch'" class="tool-group-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <rect class="d-stroke m-fill" width="896" height="896" x="64" y="64" rx="128" stroke-width="32"
            stroke-dasharray="65,75" fill-opacity="0.35" stroke-linejoin="round" ry="128" />
        <path class="d-stroke d-fill" d="M64 512h896M512 64v896" stroke-width="16" stroke-dasharray="65,75"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class="d-stroke" d="M768 768A1 1 0 0 0 768 512L512 256s256 512-256 256a1 1 0 0 0 10 355 1 1 0 0 0-10-355"
            stroke-width="64" fill="none" stroke-linecap="round" stroke-linejoin="round" />
        <circle class="d-stroke l-fill" r="64" cx="256" cy="512" stroke-width="32" />
        <circle class="d-stroke l-fill" r="64" cx="512" cy="256" stroke-width="32" />
        <circle class="d-stroke l-fill" r="64" cx="768" cy="512" stroke-width="32" />
        <circle class="d-stroke l-fill" r="64" cx="768" cy="768" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'sketch-straight-line'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke -fill" d="M128 896 896 128" stroke-width="64" stroke-linecap="round"
            stroke-linejoin="round" />
        <circle class=" d-stroke l-fill" r="64" cx="128" cy="896" stroke-width="32" />
        <circle class=" d-stroke m-fill" r="64" cx="896" cy="128" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'sketch-rectangle'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke -fill" d="M80 128h864v768h-864z" stroke-width="64" stroke-linecap="round"
            stroke-linejoin="round" fill="none" />
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="512" stroke-width="32" />
        <circle class=" d-stroke m-fill" r="64" cx="944" cy="128" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'sketch-circles'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <circle class=" d-stroke " r="480" cx="512" cy="512" stroke-width="64" fill="none" />
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="512" stroke-width="32" />
        <circle class=" d-stroke m-fill" r="64" cx="875" cy="198.1" stroke-width="32" />
        <circle class=" d-stroke m-fill" r="64" cx="875" cy="198.1" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'sketch-3p-arc'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke " d="M189.819 867.779a1 1 0 0 1 646.247-709.797" fill="none" stroke-width="64"
            stroke-linecap="round" stroke-linejoin="round" />
        <circle class=" d-stroke " r="480" cx="512" cy="512" stroke-width="64" fill="none" stroke-dasharray="20,120"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="64" cx="836.067" cy="157.984" stroke-width="32" />
        <circle class=" d-stroke m-fill" r="64" cx="189.819" cy="867.776" stroke-width="32" />
        <line class=" d-stroke" x2="511.999" y2="512.001" x1="189.82" y1="867.779" stroke-linecap="round"
            stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="512" stroke-width="32" />
    </svg>
    <!-- 特征编辑模块 -->
    <svg v-if="Type === 'feature'" class="tool-group-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class="d-stroke l-fill" d="M512 960 960 768v-512l-224 96v256l-224 96z" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class="d-stroke l-fill" d="M512 704 64 512V768L512 960z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class="d-stroke m-fill" d="M736 352l-448-192 224-96L960 256z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class="d-stroke l-fill" d="M288 608 512 512V256q-241 81-224 352Z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class="d-stroke m-fill" d="M288 608 512 512l224 96-224 96z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class="d-stroke l-fill" d="M512 512l0-256L736 352 736 608z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class="-stroke m-fill" d="M288 608 64 512Q69.5 260.7 288 160L512 256Q271 337.002 288 608z"
            stroke-width="32" />
    </svg>
    <svg v-if="Type === 'feature-stretch'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g>
            <path class=" d-stroke l-fill" d="M512 800l-448-64 448-64 448 64z" stroke-width="32" />
            <path class=" d-stroke l-fill" d="M512 928l-448-64v-128l448 64z" stroke-linejoin="round"
                stroke-linecap="round" stroke-width="32" />
            <path class=" d-stroke l-fill" d="M512 928l448-64v-128l-448 64z" stroke-linejoin="round"
                stroke-linecap="round" stroke-width="32" />
        </g>
        <g>
            <path class=" d-stroke m-fill" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"
                d="M512 180l-224-28 224-32 224 32z" />
            <path class=" d-stroke m-fill" d="M512 756l224-28v-576l-224 28z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M512 756l-224-28v-576l224 28z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
    </svg>
    <!-- 通用功能 -->
    <svg v-if="Type === 'drag-hand'" class="tool-icon d-stroke l-fill" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g>
            <circle r="64" cx="384" cy="256" stroke-width="32" rw-tool />
            <circle r="64" cx="384" cy="512" stroke-width="32" rw-tool />
            <circle r="64" cx="384" cy="768" stroke-width="32" rw-tool />
        </g>
        <g>
            <circle r="64" cx="640" cy="256" stroke-width="32" rw-tool />
            <circle r="64" cx="640" cy="512" stroke-width="32" rw-tool />
            <circle r="64" cx="640" cy="768" stroke-width="32" rw-tool />
        </g>
    </svg>
</template>
<script setup lang="ts">
defineProps(
    {
        Type: String,
        State: {
            type: Number,
            default: 0,
        }
    }
)
</script>
<style scoped>
.tool-icon {
    width: 2.5vmin;
    height: 2.5vmin;
    max-width: 25px;
    max-height: 25px;
    transition: width 500ms, height 500ms;

    &.tool-icon1 {
        width: 5vmin;
        height: 5vmin;
        max-width: 60px;
        max-height: 60px;
    }

    &:active {
        animation: act-icon 200ms ease;
    }


}

.tool-main-icon {
    width: 5vmin;
    height: 5vmin;
    max-width: 60px;
    max-height: 60px;
    transition: width 500ms, height 500ms;

    &:active {
        animation: act-icon 200ms ease;
    }
}

.tool-group-icon {
    width: 4vmin;
    height: 4vmin;
    max-width: 45px;
    max-height: 45px;
    transition: width 500ms, height 500ms;

    &:active {
        animation: act-icon 200ms ease;
    }
}
</style>