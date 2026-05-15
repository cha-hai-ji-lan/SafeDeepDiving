<template>
    <!-- 模型显示方式图标 -->
    <svg v-if="Type === 'normal-coloring'" class="tool-icon" xmlns="http://www.w3.org/2000/svg" width="1024"
        height="1024" viewBox="0 0 1024 1024">
        <path class="m-fill" d="M528 512l480-256v512l-480 256z" stroke-linejoin="round" stroke-linecap="round" />
        <path class="l-fill" d="M512 496l-480-256L512 0l480 240z" stroke-linejoin="round" stroke-linecap="round" />
        <path class="d-fill" d="M496 512l-480-256v512l480 256z" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'sideline-coloring'" class="tool-icon d-stroke" preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
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
    <svg v-if="Type === 'perspective-camera'" class="tool-icon d-stroke" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g transform="translate(-72 4)">
            <path class="l-fill" d="M768 960h-576v-576h576z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class="d-fill" stroke-width="32" d="M768 960l208-416v-492.79l-208 332.79z" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class="m-fill" d="M192 384l301.598-332.79h482.405L768 384z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
    </svg>
    <!-- 草绘编辑模块 -->
    <svg v-if="Type === 'sketch'" class="tool-group-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke "
            d="M64 64h896M64 192h896M64 320h896M64 448h896M64 576h896M64 704h896M64 832h896M64 960h896M64 64v896M192 64v896M320 64v896M448 64v896M576 64v896M704 64v896M832 64v896M960 64v896"
            stroke-width="8" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 60" />
        <path class=" d-stroke " d="M128 192h512l256 256c0 384 0 384-384 384C128 1216 512 320 128 704" stroke-width="64"
            stroke-linejoin="round" stroke-linecap="round" fill="none" />
        <circle class=" d-stroke l-fill" r="64" cx="128" cy="192" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="640" cy="192" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="896" cy="448" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="832" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="128" cy="704" stroke-width="32" />
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
    <svg v-if="Type === 'sketch-polygon'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="512" stroke-width="32" />
        <path class=" d-stroke " d="M128 353v318L353 896h318L896 671v-318L671 128h-318Z" stroke-width="64"
            stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>
    <svg v-if="Type === 'sketch-oval'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <ellipse class=" d-stroke " rx="320" ry="512" cx="512" cy="512" transform="rotate(45 512 512)" stroke-width="64"
            fill="none" />
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="512" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="738.25" cy="738.25" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="150" cy="874" stroke-width="32" />
        <path class=" d-stroke " d="M512 512 150 874M512 512 738.25 738.25" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'sketch-spline'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke " d="M896 896c0-1792-768 1024-768-768" stroke-width="64" fill="none"
            stroke-linecap="round" stroke-linejoin="round" />
        <circle class=" d-stroke l-fill" r="64" cx="896" cy="896" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="128" cy="128" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'sketch-mirror'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <line class=" d-stroke " x2="512" y2="896" x1="512" y1="128" stroke-width="32" stroke-dasharray="30 60"
            stroke-linecap="round" />
        <path class=" d-stroke l-fill" d="M384 832v-640L64 832z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M640 832v-640l320 640z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" stroke-dasharray="30 40" />
    </svg>
    <svg v-if="Type === 'sketch-isometric'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g>
            <path class=" d-stroke " d="M928 96H395Q139 96 107 352V868C512 480 512 1248 928 868" stroke-width="64"
                stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <circle class=" d-stroke l-fill" r="64" cy="96" cx="928" stroke-width="32" />
            <circle class=" d-stroke m-fill" r="64" cy="96" cx="395" stroke-width="32" />
            <circle class=" d-stroke m-fill" r="64" cy="352" cx="107" stroke-width="32" />
            <circle class=" d-stroke m-fill" r="64" cy="868" cx="107" stroke-width="32" />
            <circle class=" d-stroke m-fill" r="64" cy="868" cx="928" stroke-width="32" />
            <path class=" m-stroke" d="M928 320H496Q316 317 320 512V576c338-82 319 297 608 0" stroke-width="64"
                stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>
    </svg>
    <svg v-if="Type === 'sketch-array'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" height="1024" viewBox="0 0 1024 1024" width="1024">
        <path class=" d-stroke " d="M128 128V960" fill="none" stroke-width="32" stroke-dasharray="60"
            stroke-linejoin="round" stroke-linecap="round" />
        <path class=" d-stroke -fill" d="M128 128H960" fill="none" stroke-width="32" stroke-dasharray="60"
            stroke-linejoin="round" stroke-linecap="round" />
        <path class=" d-stroke " d="M128 960l-64-128M128 960l64-128" stroke-width="32" stroke-opacity="1" fill="none" />
        <path class=" d-stroke " d="M960 128l-128-64M960 128l-128 64" stroke-width="32" stroke-opacity="1"
            fill="none" />
        <circle class=" d-stroke l-fill" r="96" cx="320" cy="320" stroke-width="32" />
        <circle class=" d-stroke m-fill" r="96" cx="576" cy="320" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="96" cx="832" cy="320" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="96" cx="832" cy="576" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="96" cx="576" cy="576" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="96" cx="320" cy="576" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="96" cx="320" cy="832" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="96" cx="576" cy="832" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
        <circle class=" d-stroke m-fill" r="96" cx="832" cy="832" stroke-width="32" stroke-dasharray="45"
            stroke-linecap="round" />
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
    <svg v-if="Type === 'feature-rounded-corners'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke l-fill" d="M512 736l384-192L896 768 512 960Z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke l-fill" d="M512 512l-384-192 0 448L512 960z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke l-fill" d="M320 416 128 320 512 128 704 224z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M320 416c192 96 192 96 192 320L896 544c0-224 0-224-192-320z" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'feature-rotating'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g transform="translate(0 96)">
            <path class=" d-stroke m-fill"
                d="M393.299 587.45C395.7 470 634 473 630.697 587.448L992 512C992 64 32 64 32 512Z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <ellipse class=" d-stroke l-fill" rx="192" ry="160" cx="224" cy="512" stroke-width="32" />
            <ellipse class=" d-stroke l-fill" rx="192" ry="160" cx="800" cy="512" stroke-width="32"
                transform="skewX(0)" />
        </g>
        <line class=" d-stroke " x2="512" y2="896" x1="512" y1="128" stroke-width="32" stroke-dasharray="30 60"
            stroke-linecap="round" />
    </svg>
    <svg v-if="Type === 'feature-scan'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <ellipse class=" d-stroke l-fill" rx="192" ry="96" cx="256" cy="768" stroke-width="32" />
        <path class=" d-stroke l-fill" d="M64.08 763.68q26-353 352.42-468.78l191.4 332.3q-179.098 38.751-159.9 140.801"
            stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
        <ellipse class=" d-stroke m-fill" rx="192" ry="96" cx="118.657121" cy="392.654845"
            transform="rotate(60 256 768)" stroke-width="32" stroke-dasharray="20 40" stroke-linecap="round" />
        <path class=" d-stroke " d="M512.391 461.385q408.609-29.385 383.61-333.384" stroke-width="32" fill="none"
            stroke-linecap="round" stroke-linejoin="round" />
        <ellipse class=" d-stroke l-fill" rx="192" ry="96" cx="256" cy="768" stroke-width="16" stroke-dasharray="20 40"
            stroke-linecap="round" />
        <path class=" d-stroke " d="M256 768C256 256 896 640 896 128" fill="none" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20 40" />
    </svg>
    <svg v-if="Type === 'feature-mirror'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <line class=" d-stroke " x2="512" y2="896" x1="512" y1="128" stroke-width="32" stroke-dasharray="30 60"
            stroke-linecap="round" />
        <g>
            <path class=" d-stroke l-fill" d="M256 320l160-32v448l-160 32z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M256 320l-160-32v448l160 32z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M256 320l-160-32 160-32 160 32z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
        <g transform="translate(512 0)" stroke-dasharray="30 40">
            <path class=" d-stroke m-fill" d="M256 320l160-32v448l-160 32z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M256 320l-160-32v448l160 32z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M256 320l-160-32 160-32 160 32z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
    </svg>
    <svg v-if="Type === 'feature-draft'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke l-fill" d="M128 897h512v-385h-512z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M640 512l320-448V640L640 896z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M128 512h512l320-448H256z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'feature-muscles'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <rect class=" d-stroke l-fill" width="416" height="384" transform="skewX(-45)" x="1024" y="480"
            stroke-linejoin="round" stroke-width="32" />
        <path class=" d-stroke l-fill" d="M64 448v512h512v-96h-416v-416z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke l-fill" d="M64 448 448 64h96L160 448z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke l-fill" d="M544 64v416L160 864v-416z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke l-fill" d="M576 864 960 480v96L576 960z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M384 224l416 416h-416z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M256 352l416 416h-416z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M256 352l128-128 416 416-128 128z" stroke-width="32" />
        <path class=" d-stroke -fill" d="M320 288l416 416" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>

    <!-- 曲面模块 -->
    <svg v-if="Type === 'curved-surface'" class="tool-group-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <linearGradient id="reflective">
            <stop class="m-stop-color" offset="0.1" />
            <stop class="l-stop-color" offset="0.3" />
            <stop class="m-stop-color" offset="0.65" />
            <stop class="l-stop-color" offset="0.975" />
        </linearGradient>
        <path class=" d-stroke -fill" d="M64 960C320 576 704 1024 960 640V64C704 448 320 0 64 384Z" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" fill="url(#reflective)" stroke-dasharray="40" />
        <path class=" d-stroke -fill" d="M64 960C320 576 704 1024 960 640" fill="none" stroke-width="64"
            stroke-linecap="round" stroke-linejoin="round" />
        <circle class=" d-stroke l-fill" r="64" cx="80" cy="944" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="944" cy="640" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'curved-border-blend'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <linearGradient id="reflective1">
            <stop class="m-stop-color" offset="0.1" />
            <stop class="l-stop-color" offset="0.45" />
            <stop class="m-stop-color" offset="0.75" />
        </linearGradient>
        <path class=" d-stroke" d="M128 896q384-256 768-128Q1024 448 896.03 128 512 0 128.03 250q128 320 0 640z"
            fill="url(#reflective1)" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke " d="M512 736q128-320 0-640M190 512q384-256 768-128" fill="none" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="40" />
    </svg>
    <svg v-if="Type === 'curved-thicken'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <linearGradient id="reflective">
            <stop class="m-stop-color" offset="0.1" />
            <stop class="l-stop-color" offset="0.3" />
            <stop class="m-stop-color" offset="0.65" />
            <stop class="l-stop-color" offset="0.975" />
        </linearGradient>
        <path class=" d-stroke " d="M32 864c256-384 640 64 832-320l64-512c-256 384-640-64-896 320z" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" fill="url(#reflective)" />
        <path class=" d-stroke m-fill" d="M94 990C288 624 672 1072 928 688L864 544C672 928 288 480 32 864Z"
            stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M928 688l-64-144 64-512 64 144z" stroke-width="32" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'curved-extend'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <linearGradient id="reflective" y2="100%" x2="0%">
            <stop class="m-stop-color" offset="0.1" />
            <stop class="l-stop-color" offset="0.3" />
            <stop class="m-stop-color" offset="0.65" />
            <stop class="l-stop-color" offset="0.975" />
        </linearGradient>
        <path class=" d-stroke " d="M96 64c192 384-192 512 0 896h416c-192-384 192-513 0-896z" stroke-width="32"
            fill="url(#reflective)" stroke-linejoin="round" stroke-linecap="round" />
        <path class=" d-stroke m-fill" d="M512 64c192 384-192 512 0 896h416c-192-384 192-513 0-896z" stroke-width="32"
            stroke-linejoin="round" stroke-linecap="round" fill-opacity="0.75" stroke-dasharray="40" />
        <path class=" d-stroke " d="M512 960C320 576 704 447 512 64" fill="none" stroke-width="64"
            stroke-linecap="round" stroke-linejoin="round" />
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="944" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="64" cx="512" cy="80" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'curved-offset'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <linearGradient id="reflective">
            <stop class="m-stop-color" offset="0.1" />
            <stop class="l-stop-color" offset="0.3" />
            <stop class="m-stop-color" offset="0.65" />
            <stop class="l-stop-color" offset="0.975" />
        </linearGradient>
        <path class=" d-stroke  m-fill" d="M64 960C320 576 704 1024 960 640V64C704 448 320 0 64 384Z" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="40" fill-opacity="0.75" />
        <path class=" d-stroke " d="M72 835.4C320 576 637.4 978 974.6 691.4V155.4C656 402 312 23.4 73.4 326Z"
            stroke-width="64" stroke-linecap="round" stroke-linejoin="round" fill="url(#reflective)"
            transform="scale(0.5 0.5) translate(512 512)" />
    </svg>
    <!-- 筋布局模块 -->
    <svg v-if="Type === 'rib-layout'" class="tool-group-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g transform="translate(-64 0)">
            <path class=" d-stroke l-fill" d="M832 896q-352 128-704-128L192 192q352 256 704 128z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M896 800Q544 928 192 672l64-576Q608 352 960 224z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke l-fill" d="M896 800 832 896q-352 128-704-128L192 672Q544 928 896 800"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M192 192 128 768 192 672 256 96z" stroke-width="32" stroke-linecap="round"
                stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M929 518q-347 123-705.56-128.3l71.78-78.48q362.061 267.53 696.161 125.73z"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke m-fill"
                d="M915.34 625.56Q575.7 705.5 217.099 446.234L289.19 371.87Q643.5 612.5 994 474Z" stroke-width="32"
                stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M990 532q-353 113-704-128l14.264-143.957q352 256 694.336 125.057z"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
            <path class=" d-stroke m-fill" d="M998.8 450.7Q643.5 612.9 331.7 348.1L345 211.7Q663 420 1010 284Z"
                stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <path class=" d-stroke l-fill"
            d="M925.999 532.003q-353.999 117.997-704-128.002l45.661-55.891q313.34 230.89 667.12 102.58z"
            stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke l-fill"
            d="M153.094 446.245 225.2 371.9 222.5 403.9 267.8 348 280.99 211.69 236.266 260.045 231.1 311.1 159.42 389.68z"
            stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'rl-pre-process'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke l-fill"
            d="M288 64q-128 0-128 128v640q0 128 128 128H736q128 0 128-128v-512c-256 0-256 0-256-256z" stroke-width="32"
            stroke-linejoin="round" stroke-linecap="round" />
        <path class=" d-stroke m-fill" d="M864 320l-256-256c0 256 0 256 256 256z" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M374 656l219.8-75.3-93 10.6m93-10.6-78.3 46.8" fill="none" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M441 830l219.8-75.3-93 10.6m93-10.6-78.3 46.8" fill="none" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M323 772l219.8-75.3-93 10.6m93-10.6-78.3 46.8" fill="none" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M736 800q-128-52-128-256l-128 32q0 196 128 256z" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke m-fill" d="M768 768Q640 716 640 512L512 544Q512 740 640 800z" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke l-fill" d="M480 576 512 544Q512 740 640 800L608 832Q480 772 480 576z" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke l-fill" d="M736 800 768 768 640 800 608 832z" stroke-width="16" stroke-linecap="round"
            stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M682 588l-128 64 26.5-26.2m-26.5 26.2 34.5-4.5" fill="none" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M726 673l-128 64 25.2-28.2m-25.2 28.2 35.5-1.8" fill="none" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M757 604l-128 64 25.2-28.2m-25.2 28.2 35.5-1.8" fill="none" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <rect class=" -stroke d-fill" width="256" height="32" x="256" y="128" rx="16" ry="16" />
        <rect class=" -stroke m-fill" width="320" height="32" x="224" y="256" rx="16" ry="16" />
        <rect class=" -stroke m-fill" width="256" height="32" x="224" y="320" rx="16" ry="16" />
        <rect class=" -stroke m-fill" width="320" height="32" x="224" y="384" rx="16" ry="16" />
        <rect class=" -stroke m-fill" width="192" height="32" x="224" y="448" rx="16" ry="16" />
    </svg>
    <svg v-if="Type === 'rl-post-process'" class="tool-icon" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <radialGradient id="out-res" x1="0%" y1="0%" y2="100%">
            <stop stop-color="#d00300" offset="0.1" />
            <stop stop-color="#cac803" offset="0.5" />
            <stop stop-color="#0cba03" offset="0.8" />
            <stop stop-color="#060a55" offset="0.95" />
        </radialGradient>
        <path class=" d-stroke l-fill"
            d="M288 64q-128 0-128 128v640q0 128 128 128H736q128 0 128-128v-512c-256 0-256 0-256-256z" stroke-width="32"
            stroke-linejoin="round" stroke-linecap="round" />
        <path class=" d-stroke m-fill" d="M864 320l-256-256c0 256 0 256 256 256z" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" />
        <rect class=" -stroke m-fill" width="320" height="512" x="224" y="256" rx="16" ry="16" />
        <path class=" d-stroke m-fill" d="M736 800q-128-52-128-256l-128 32q0 196 128 256z" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M768 768Q640 716 640 512L512 544Q512 740 640 800z" fill="url(#out-res)"
            stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
        <path class=" d-stroke -fill" d="M480 576 512 544Q512 740 640 800L608 832Q480 772 480 576z" stroke-width="16"
            stroke-linecap="round" stroke-linejoin="round" fill="url(#out-res)" />
        <path class=" d-stroke -fill" d="M736 800 768 768 640 800 608 832z" stroke-width="16" stroke-linecap="round"
            stroke-linejoin="round" fill="url(#out-res)" />
        <rect class=" -stroke d-fill" width="256" height="32" x="256" y="128" rx="16" ry="16" />
        <rect class=" -stroke l-fill" width="192" height="32" x="256" y="320" rx="16" ry="16" />
        <rect class=" -stroke l-fill" width="256" height="32" x="256" y="384" rx="16" ry="16" />
        <rect class=" -stroke l-fill" width="128" height="32" x="256" y="448" rx="16" ry="16" />
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
    <svg v-if="Type === 'omit'" class="tool-icon d-stroke l-fill" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <circle class=" d-stroke d-fill" r="92" cx="768" cy="512" stroke-width="32" />
        <circle class=" d-stroke m-fill" r="92" cx="512" cy="512" stroke-width="32" />
        <circle class=" d-stroke l-fill" r="92" cx="256" cy="512" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'arrow'" class="tool-icon d-stroke l-fill" :class="{ 'tool-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class="d-stroke m-fill" d="M128 128 986 429 718 561 957 781 928.695 840.811" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" />
        <path class="d-stroke l-fill" d="M128 128 554 900 635 641 889 866 928.698 840.805" stroke-width="32"
            stroke-linecap="round" stroke-linejoin="round" />
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