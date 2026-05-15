<template>
    <svg v-if="Type === 'logo'" class="logo-icon" :class="{ 'logo-icon3': State === 3 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
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
    <svg v-if="Type === 'setting'" class="base-icon d-stroke" :class="{ 'base-icon1': State === 1 }" xmlns="http://www.w3.org/2000/svg" width="1024"
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
    <svg v-if="Type === 'close'" class="base-icon d-stroke" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class="m-fill" d="M96 448a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64"
            transform="rotate(45 512 512)" />
        <path class="l-fill" d="M96 448a1 1 0 0 0 0 128h832a1 1 0 0 0 0-128z" stroke-opacity="1" stroke-width="64"
            transform="rotate(135 512 512)" />
    </svg>
    <svg v-if="Type === 'pin-0'" class="base-icon d-stroke" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g transform="rotate(50 512 512) translate(16 128)">
            <rect class="m-fill" width="384" height="512" rx="64" ry="64" stroke-linejoin="round" x="320" y="192"
                stroke-width="64" />
            <rect class="l-fill" width="768" height="128" x="128" y="64" rx="64" ry="64" stroke-width="64" />
            <line x2="512" x1="512" y1="704" y2="960" stroke-width="64" stroke-linecap="round" />
        </g>

    </svg>
    <svg v-if="Type === 'pin-1'" class="base-icon d-stroke" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <g>
            <rect class="m-fill" width="384" height="512" rx="64" ry="64" stroke-linejoin="round" x="320" y="192"
                stroke-width="64" />
            <rect class="l-fill" width="768" height="128" x="128" y="64" rx="64" ry="64" stroke-width="64" />
            <line x2="512" x1="512" y1="704" y2="960" stroke-width="64" stroke-linecap="round" />
        </g>
    </svg>
    <svg v-if="Type === 'omit'" class="base-icon d-stroke l-fill" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <circle r="92" cx="512" cy="512" stroke-width="64" />
        <circle r="92" cx="512" cy="128" stroke-width="64" />
        <circle r="92" cx="512" cy="896" stroke-width="64" />
    </svg>
    <svg v-if="Type === 'drag-block'" class="base-icon d-stroke" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" />
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" transform="rotate(90 512 512)" />
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" transform="rotate(180 512 512)" />
        <path d="M512 512 128 128v192M128 128h192" fill="none" stroke-linejoin="round" stroke-linecap="round"
            stroke-width="64" transform="rotate(270 512 512)" />
        <rect class="l-fill m-stroke" width="384" height="384" x="320" y="320" ry="64" rx="64" stroke-width="96"
            stroke-linejoin="round" />
    </svg>
    <svg v-if="Type === 'github'" class="base-icon d-fill" :class="{ 'base-icon1': State === 1 }"
        viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
        <path
            d="M20.48 518c0 214.4256 137.4208 396.73856 328.94976 463.6672 25.8048 6.5536 21.87264-11.8784 21.87264-24.33024v-85.07392c-148.93056 17.44896-154.86976-81.1008-164.94592-97.52576-20.23424-34.52928-67.91168-43.33568-53.69856-59.76064 33.91488-17.44896 68.48512 4.42368 108.46208 63.61088 28.95872 42.88512 85.44256 35.6352 114.15552 28.4672a138.8544 138.8544 0 0 1 38.0928-66.7648c-154.25536-27.60704-218.60352-121.77408-218.60352-233.79968 0-54.31296 17.94048-104.2432 53.0432-144.54784-22.36416-66.43712 2.08896-123.24864 5.3248-131.6864 63.81568-5.7344 130.00704 45.6704 135.168 49.68448 36.2496-9.78944 77.57824-14.9504 123.82208-14.9504 46.4896 0 88.064 5.3248 124.5184 15.23712 12.288-9.4208 73.80992-53.53472 133.12-48.128 3.15392 8.43776 27.0336 63.93856 6.02112 129.4336 35.59424 40.38656 53.69856 90.76736 53.69856 145.24416 0 112.18944-64.7168 206.4384-219.42272 233.71776a140.0832 140.0832 0 0 1 41.7792 99.9424v123.4944c.86016 9.87136 0 19.6608 16.50688 19.6608 194.31424-65.49504 334.2336-249.15968 334.2336-465.5104 0-271.31904-219.91424-491.02848-490.98752-491.02848-271.40096-.12288-491.1104 219.62752-491.1104 490.94656z"
            opacity="0.9" />
    </svg>
    <svg v-if="Type === 'bug-mail'" class="base-icon d-fill" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <rect class=" d-stroke m-fill" width="896" height="640" x="64" y="192" ry="128" rx="128" stroke-width="64" />
        <path class=" d-stroke l-fill" d="M112 224 512 512 912 224" stroke-width="64" stroke-linejoin="round"
            stroke-linecap="round" />
        <circle class=" l-stroke m-fill" r="192" cx="768" cy="256" stroke-width="32" />
        <rect class="  d-fill" width="32" height="192" x="752" y="128" rx="32" ry="32" />
        <circle class="  d-fill" r="16" cx="768" cy="368" />
    </svg>
    <svg v-if="Type === 'option-bar-ide'" class="base-icon d-fill" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke m-fill" :class="{ 'l-fill': StateSty === 'change' }" d="M512 64 128 448h768Z"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
        <path class=" d-stroke l-fill" :class="{ 'm-fill': StateSty === 'change' }" d="M512 64 128 448h768Z"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="32" transform="rotate(180 512 512)" />
    </svg>
    <svg v-if="Type === 'tool-reform'" class="base-icon d-fill" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <circle class="d-stroke" r="384" cx="512" cy="512" stroke-width="64" fill="none" />
        <path class="m-stroke" d="M288 288l192 192M736 288l-192 192M736 736l-192-192M288 736l192-192" stroke-width="24"
            stroke-linejoin="round" stroke-linecap="round" transform="rotate(45 512 512)" />
        <rect class="d-stroke l-fill" width="128" height="128" x="448" y="448" rx="32" ry="32"
            transform="rotate(45 512 512)" stroke-width="8" />
        <path class="d-stroke" d="M512 32v320M512 992v-320M32 512h320M992 512h-320" stroke-width="48"
            stroke-linecap="round" transform="rotate(45 512 512)" />
    </svg>
    <svg v-if="Type === 'three-d-ball'" class="base-icon" :class="{ 'base-icon1': State === 1, 'base-icon2': State === 2, 'base-icon3': State ===3 }"  xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"
        viewBox="0 0 1024 1024">
        <g>
            <radialGradient id="ball-shadow" cx="50%" cy="55%">
                <stop class="d-stop-color"  offset="0.25" />
                <stop class="d-stop-color"  offset="0.5" stop-opacity="0.75" />
                <stop class="d-stop-color"  offset="0.75" stop-opacity="0.25" />
                <stop class="d-stop-color"  offset="0.9" stop-opacity="0" />
            </radialGradient>
            <radialGradient id="ball1-shadow" cx="10%" cy="10%">
                <stop class="l-stop-color"  offset="0.45" />
                <stop class="m-stop-color"  offset="0.9" stop-opacity="0.35" />
            </radialGradient>
            <ellipse rx="426" ry="229" cx="475" cy="800" fill="url(#ball-shadow)" />
            <circle class="d-fill" r="320" cx="335" cy="554"  />
            <circle class="l-fill" r="320" cx="335" cy="554"  fill-opacity="0.19" />
            <circle class="d-stroke" r="320" cx="335" cy="554" fill="url(#ball1-shadow)" stroke-width="2" />
        </g>
    </svg>
    <!-- 提示性图标 -->
    <svg v-if="Type === 'question'" class="base-icon" :class="{ 'base-icon1': State === 1 }" viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
        <circle class=" d-stroke m-fill" r="448" cx="512" cy="512" stroke-width="32" />
        <path class=" d-stroke l-fill"
            d="M500.382.006c-177.646 19.719-276.341 96.721-296.085 230.93-3.949 43.437 17.757 67.13 65.143 71.066 23.667 3.961 43.411-13.808 59.207-53.296 23.692-82.9 80.862-124.35 171.735-124.35 110.479 7.885 169.698 63.156 177.671 165.8 0 94.759-64.313 110.202-99.248 138.774-44.267 36.218-73.217 72.952-108.655 135.216-29.779 52.314-34.91 164.227-34.91 164.227 0 47.373 21.655 71.066 65.143 71.066 39.413 0 61.194-23.693 65.155-71.066 0 0 5.219-125.594 55.925-181.129 57.472-62.942 194.749-107.071 198.698-268.922C804.365 108.561 697.772 15.789 500.382.006zM500.382 859.162c-45.524 0-82.409 36.91-82.409 82.41 0 45.523 36.885 82.422 82.409 82.422s82.422-36.898 82.422-82.422c0-45.5-36.898-82.41-82.422-82.41z"
            transform="scale(0.7 0.7) translate(224 224)" stroke-width="32" />
    </svg>
    <svg v-if="Type === 'notice'" class="base-icon" :class="{ 'base-icon1': State === 1 }" viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
        <circle class=" d-stroke m-fill" r="448" cx="512" cy="512" stroke-width="32" />
        <path class=" d-stroke l-fill"
            d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z"
            stroke-width="32" />
    </svg>
    <svg v-if="Type === 'general-warn'" class="base-icon" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" d-stroke wa-fill"
            d="M128 928c-56.9-6.1-94.1-68.4-64-128l373-684c30.9-53.6 108.8-65.47 150 0l373 684c39.7 76.4-31.31 130.67-76 128z"
            stroke-width="32" fill-opacity="0.35" />
        <path class=" d-stroke wa-fill"
            d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z"
            stroke-width="16" />
    </svg>
    <svg v-if="Type === 'serious-warn'" class="base-icon" :class="{ 'base-icon1': State === 1 }"
        xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
        <path class=" wa-stroke wa-fill"
            d="M128 928c-56.9-6.1-94.1-68.4-64-128l373-684c30.9-53.6 108.8-65.47 150 0l373 684c39.7 76.4-31.31 130.67-76 128z"
            stroke-width="32" fill-opacity="0.35" />
        <path class="wa-fill"
            d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z" />
    </svg>
    <svg v-if="Type === 'general-error'" class="base-icon" :class="{ 'base-icon1': State === 1 }"
        viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
        <circle class=" d-stroke er-fill" r="448" cx="512" cy="512" stroke-width="32" fill-opacity="0.35" />
        <path class=" d-stroke er-fill"
            d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z"
            stroke-width="16" />
    </svg>
    <svg v-if="Type === 'serious-error'" class="base-icon" :class="{ 'base-icon1': State === 1 }"
        viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024">
        <circle class=" er-stroke er-fill" r="448" cx="512" cy="512" stroke-width="32" fill-opacity="0.35" />
        <path class=" er-fill"
            d="M468.114286 621.714286c7.314286 21.942857 21.942857 36.571429 43.885714 36.571428s36.571429-14.628571 43.885714-36.571428L585.142857 219.428571c0-43.885714-36.571429-73.142857-73.142857-73.142857-43.885714 0-73.142857 36.571429-73.142857 80.457143l29.257143 394.971429zM512 731.428571c-43.885714 0-73.142857 29.257143-73.142857 73.142858s29.257143 73.142857 73.142857 73.142857 73.142857-29.257143 73.142857-73.142857-29.257143-73.142857-73.142857-73.142858z" />
    </svg>
</template>
<script setup lang="ts">
/**
 * 传递参数
 * StateSty :
 * ---
 * change : 一般变化
 * ---
*/
defineProps(
    {
        Type: String,
        State: {
            type: Number,
            default: 0,
        },
        StateSty: {
            type: String,
            default: "__NOTHING__",
        }
    }
)
</script>
<style scoped>
.base-icon {
    width: 2.5vmin;
    height: 2.5vmin;
    max-width: 25px;
    max-height: 25px;

    &.base-icon1 {
        width: 5vmin;
        height: 5vmin;
        max-width: 60px;
        max-height: 60px;
    }
    &.base-icon2 {
        width: 15vmin;
        height: 15vmin;
        max-width: 200px;
        max-height: 200px;
    }
    &.base-icon3 {
        width: 25vmin;
        height: 25vmin;
        max-width: 300px;
        max-height: 300px;
    }


    &:active {
        animation: act-icon 200ms ease;
    }
}

.logo-icon {
    width: 4vmin;
    height: 4vmin;
    max-width: 35px;
    max-height: 35px;

    &.logo-icon3 {
        width: 35vmin;
        height: 35vmin;
        max-width: 400px;
        max-height: 400px;
    }
   

    &:active {
        animation: act-icon 200ms ease;
    }
}
</style>