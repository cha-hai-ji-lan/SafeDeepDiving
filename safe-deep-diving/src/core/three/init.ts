import { Ref } from 'vue';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

let renderer: THREE.WebGLRenderer;  // 渲染器
let scene: THREE.Scene;  // 场景
let camera: THREE.PerspectiveCamera;  // 相机
let animationId: number;  // 动画帧 ID
let geometry: THREE.BoxGeometry;
let cube: THREE.Mesh;
let edges: THREE.LineSegments; // 保存边线引用
let axesHelper: THREE.AxesHelper;  // 坐标轴
let track_controller: OrbitControls;  // 轨道控制器

let scene_width: number  // 场景宽度
let scene_height: number  // 场景高度

let modelGroup: THREE.Group | null = null;


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
    track_controller.dampingFactor  = 0.1  // 修改阻尼系数

    // 确保缩放行为符合预期
    track_controller.enableZoom = true;       // 确保启用缩放
    track_controller.zoomSpeed = 2.0;         // 缩放速度，可根据需要调整
    track_controller.screenSpacePanning = false; // 设为 false 让平移更自然，通常不影响缩放中心
    track_controller.target.set(0, 0, 0);  // 设置控制器的目标点为场景中心
    

    renderer.setSize(scene_width, scene_height);
    // 可选：确保 canvas 没有额外的背景色
    renderer.setClearColor(0x000000, 0);

    threeContainer.value.appendChild(renderer.domElement);  // 将渲染器的 canvas 添加到 DOM 中

    // 4. 添加一个物体测试
    geometry = new THREE.BoxGeometry();  // 立方体几何体
    const material = new THREE.MeshBasicMaterial({ color: 0x9ca9b9,
        transparent: true, 
        opacity: 1
     });
    cube = new THREE.Mesh(geometry, material);  // 网格对象

    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    // 创建黑色线材质
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1 });
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

    // 监听画布变化
    window.addEventListener("resize", ()=>{
        // 重置渲染器宽高比
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 重置相机宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        // 更新相机投影矩阵
        camera.updateProjectionMatrix();  
    })
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

export const edge_visible = (visible: boolean) => {
    if (edges) {
        edges.visible = visible;
    }
}
export const object_visible = (visible: boolean) => {
    if (cube.material ) {
        const material = cube.material as THREE.MeshBasicMaterial;
        if (material) {
            material.transparent = true; // 确保启用透明
            material.opacity = visible ? 1 : 0; // 1为不透明，0为完全透明
            material.needsUpdate = true; // 通知 Three.js 更新材质
        }
    }
}

export const addModelToScene = (group: THREE.Group) => {
    if (modelGroup) {
        scene.remove(modelGroup);
        modelGroup.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.dispose());
                } else {
                    child.material.dispose();
                }
            }
        });
    }
    
    modelGroup = group;
    
    const box = new THREE.Box3().setFromObject(group);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
    cameraZ *= 1.5;
    
    camera.position.set(center.x, center.y, center.z + cameraZ);
    camera.lookAt(center);
    
    track_controller.target.copy(center);
    track_controller.update();
    
    scene.add(group);
}