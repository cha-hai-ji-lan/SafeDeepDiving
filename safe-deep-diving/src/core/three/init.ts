import { Ref } from 'vue';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js'; 

let renderer: THREE.WebGLRenderer;  // 渲染器
let scene: THREE.Scene;  // 场景
let camera: THREE.PerspectiveCamera;  // 相机
let animationId: number;  // 动画帧 ID
let edges: THREE.LineSegments; // 保存边线引用
let axesHelper: THREE.AxesHelper;  // 坐标轴
let track_controller : OrbitControls;

let scene_width: number
let scene_height: number


export const init_three = (threeContainer: Ref<HTMLDivElement | null>) => {
    if (!threeContainer.value) return;

    scene_width = threeContainer.value.clientWidth;
    scene_height = threeContainer.value.clientHeight;

    // 1. 创建场景
    scene = new THREE.Scene();
    // 【关键】设置背景为 null，使其透明
    scene.background = null;

    // 2. 创建相机
    camera = new THREE.PerspectiveCamera(75, scene_width / scene_height, 0.1, 1000);
    camera.position.z = 5;  // 设置相机位置
    camera.lookAt(0,0,0)

    // 3. 创建渲染器
    // 【关键】设置 alpha: true
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    // 添加坐标辅助器
    axesHelper = new THREE.AxesHelper(5);

    // 添加轨道控制器
    track_controller = new OrbitControls(camera, renderer.domElement)
    track_controller.enableDamping = true  // 启用阻尼

    renderer.setSize(scene_width, scene_height);
    // 可选：确保 canvas 没有额外的背景色
    renderer.setClearColor(0x000000, 0);

    threeContainer.value.appendChild(renderer.domElement);  // 将渲染器的 canvas 添加到 DOM 中

    // 4. 添加一个物体测试
    const geometry = new THREE.BoxGeometry();  // 立方体几何体
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);  // 网格对象

    const edgesGeometry = new THREE.EdgesGeometry(geometry); 
    // 创建黑色线材质
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }); 
    // 创建线段对象
    edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    
    // 将边线作为子对象添加到立方体中，这样它们会一起旋转
    cube.add(edges); 

    scene.add(axesHelper);
    scene.add(cube);

    // 5. 动画循环
    function animate() {
        animationId = requestAnimationFrame(animate);  // 循环调用自身
        track_controller.update()
        renderer.render(scene, camera);  // 渲染场景和相机
    }
    animate();
}

export const clean_three = (threeContainer: Ref<HTMLDivElement | null>) => {
    if (animationId) cancelAnimationFrame(animationId);
    if (renderer) {
        renderer.dispose();
        // 清理 DOM
        if (threeContainer.value && renderer.domElement.parentNode === threeContainer.value) {
            threeContainer.value.removeChild(renderer.domElement);
        }
    }
}