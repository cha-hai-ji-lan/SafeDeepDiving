/**
 * 层级 2
 * three.js 初始化装载脚本
*/
import { Ref, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
// import { init_opencascade} from "../opencascade/init"

export let renderer: THREE.WebGLRenderer;  // 渲染器
export let scene: THREE.Scene;  // 场景
// export let camera: THREE.PerspectiveCamera;  // 相机 透视
export let camera: THREE.OrthographicCamera;  // 相机 透视
export let edgesMaterial: THREE.LineBasicMaterial;  // 边线材质

export const entity_edges = ref<any>([])  // 边线组
export const entitys = ref<any>([])  // 实体组


let animationId: number;  // 动画帧 ID
// let geometry: THREE.BoxGeometry;
// let cube: THREE.Mesh;
// let edges: THREE.LineSegments; // 保存边线引用
let axesHelper: THREE.AxesHelper;  // 坐标轴
let track_controller: OrbitControls;  // 轨道控制器



let scene_width: number  // 场景宽度
let scene_height: number  // 场景高度


// 添加小坐标系相关变量
let miniScene: THREE.Scene;
let miniCamera: THREE.OrthographicCamera;
let miniRenderer: THREE.WebGLRenderer;
let miniAxesHelper: THREE.AxesHelper;
let miniContainer: HTMLDivElement;

/**
 * 插件加载项
 * 
 * 用于加载非 基础Three.js内容
 */
const add_in = async () =>{
    // await init_opencascade()
}
export const init_three = async (threeContainer: Ref<HTMLDivElement | null>) => {
    if (!threeContainer.value) return;

    scene_width = threeContainer.value.clientWidth;
    scene_height = threeContainer.value.clientHeight;

    // 1. 创建场景
    scene = new THREE.Scene();
    // 【关键】设置背景为 null,使其透明
    scene.background = null;

    // 2. 创建相机
    // camera = new THREE.PerspectiveCamera(75, scene_width / scene_height, 0.1, 1000);  透视相机
    const frustumSize = 100;  // 视锥体大小，控制视野范围
    const aspect = scene_width / scene_height;
    camera = new THREE.OrthographicCamera(
        frustumSize * aspect / -2,  // left
        frustumSize * aspect / 2,   // right
        frustumSize / 2,            // top
        frustumSize / -2,           // bottom
        0.01,                        // near
        10000                        // far
    );
    camera.position.z = 100;  // 设置相机位置

    // 3. 创建渲染器
    // 【关键】设置 alpha: true
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    // 添加坐标辅助器
    axesHelper = new THREE.AxesHelper(2);

    // 1. 添加环境光 (基础亮度,防止死黑)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // 强度 0.5
    scene.add(ambientLight);

    // 2. 添加方向光 (主光源,产生立体感)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5); // 位置很重要
    scene.add(directionalLight);

    // 添加轨道控制器
    track_controller = new OrbitControls(camera, renderer.domElement)
    track_controller.enableDamping = true  // 启用阻尼
    track_controller.dampingFactor = 0.1  // 修改阻尼系数

    // 确保缩放行为符合预期
    track_controller.enableZoom = true;       // 确保启用缩放
    track_controller.zoomSpeed = 2.0;         // 缩放速度,可根据需要调整
    track_controller.screenSpacePanning = false; // 设为 false 让平移更自然,通常不影响缩放中心
    track_controller.target.set(0, 0, 0);  // 设置控制器的目标点为场景中心


    renderer.setSize(scene_width, scene_height);
    // 可选:确保 canvas 没有额外的背景色
    renderer.setClearColor(0x000000, 0);

    threeContainer.value.appendChild(renderer.domElement);  // 将渲染器的 canvas 添加到 DOM 中
    
    // 创建边线材质
    edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1 });

    // 导入加载项
    add_in()

    // 初始化小坐标系
    initMiniCoordinateSystem(threeContainer.value);

    // 4. 添加一个物体测试
    // geometry = new THREE.BoxGeometry();  // 立方体几何体
    // const material = new THREE.MeshBasicMaterial({
    //     color: 0x9ca9b9,
    //     transparent: true,
    //     opacity: 1
    // });
    // cube = new THREE.Mesh(geometry, material);  // 网格对象

    // const edgesGeometry = new THREE.EdgesGeometry(geometry);
    // // 创建黑色线材质
    
    // // 创建线段对象
    // edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    // entity_edges.value.push(edges)
    // // 将边线作为子对象添加到立方体中，这样它们会一起旋转
    // cube.add(edges);

    scene.add(axesHelper);
    // scene.add(cube);


    // 5. 动画循环
    function animate() {
        animationId = requestAnimationFrame(animate);  // 循环调用自身
        track_controller.update()
        renderer.render(scene, camera);  // 渲染场景和相机

        // 更新小坐标系
        updateMiniCoordinateSystem();
    }
    animate();

    // 监听画布变化
    window.addEventListener("resize", () => {
        // 重置渲染器宽高比
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 重置相机宽高比
        if (camera instanceof THREE.PerspectiveCamera) {
            camera.aspect = window.innerWidth / window.innerHeight;
            // 更新相机投影矩阵
            camera.updateProjectionMatrix();
        }
        
        // 更新小坐标系尺寸
        updateMiniCoordinateSystemSize();
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
    // 清理小坐标系
    if (miniRenderer) {
        miniRenderer.dispose();
        if (miniContainer && miniContainer.parentNode) {
            miniContainer.parentNode.removeChild(miniContainer);
        }
    }
}

export const edge_visible = (visible: boolean) => {
    if (entity_edges.value) {
        entity_edges.value.forEach(edges => {
            edges.visible = visible;
        });
    }
}
export const object_visible = (visible: boolean) => {
    if(entitys.value){
        entitys.value.forEach(material => {
            material.transparent = true; // 确保启用透明
            material.opacity = visible ? 1 : 0; // 1为不透明，0为完全透明
            material.needsUpdate = true; // 通知 Three.js 更新材质
            material.visible = visible
        });
    }
    // if (cube.material) {
    //     const material = cube.material as THREE.MeshBasicMaterial;
    //     if (material) {
    //         material.transparent = true; // 确保启用透明
    //         material.opacity = visible ? 1 : 0; // 1为不透明，0为完全透明
    //         material.needsUpdate = true; // 通知 Three.js 更新材质
    //     }
    // }
}



const initMiniCoordinateSystem = (container: HTMLElement) => {
    // 创建小坐标系的容器
    miniContainer = document.createElement('div');
    miniContainer.style.position = 'absolute';
    miniContainer.style.right = '20px';
    miniContainer.style.bottom = '20px';
    miniContainer.style.width = '100px';
    miniContainer.style.height = '100px';
    miniContainer.style.zIndex = '1000';
    miniContainer.style.pointerEvents = 'none'; // 不响应鼠标事件
    container.appendChild(miniContainer);

    // 创建小场景
    miniScene = new THREE.Scene();
    miniScene.background = null;

    // 创建正交相机
    const size = 100;
    miniCamera = new THREE.OrthographicCamera(-size, size, size, -size, 0.1, 1000);
    miniCamera.position.set(20, 20, 20);
    miniCamera.lookAt(0, 0, 0);

    // 创建小渲染器
    miniRenderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    miniRenderer.setSize(100, 100);
    miniRenderer.setClearColor(0x000000, 0);
    miniContainer.appendChild(miniRenderer.domElement);

    // 添加坐标轴
    miniAxesHelper = new THREE.AxesHelper(120);
    miniScene.add(miniAxesHelper);

    // 添加标签
    addAxisLabels();
}

/**
 * 添加坐标轴标签
 */
const addAxisLabels = () => {
    const createLabel = (text: string, position: THREE.Vector3, color: string) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = 64;
        canvas.height = 64;
        context.font = 'Bold 20vmin Arial';
        context.fillStyle = color;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, 32, 32);

        const texture = new THREE.CanvasTexture(canvas);
        const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.position.copy(position);
        sprite.scale.set(1, 1, 1);
        miniScene.add(sprite);
    };

    // 坐标轴标签
    createLabel('X', new THREE.Vector3(18, 0, 0), '#ff0000');
    createLabel('Y', new THREE.Vector3(0, 18, 0), '#00ff00');
    createLabel('Z', new THREE.Vector3(0, 0, 18), '#0000ff');

    // 平面标签
    createLabel('X-Y', new THREE.Vector3(100, 100, 0), '#ffaa00');
    createLabel('X-Z', new THREE.Vector3(100, 0, 100), '#aa00ff');
    createLabel('Y-Z', new THREE.Vector3(0, 100, 100), '#00aaff');
}


/**
 * 更新小坐标系
 */
const updateMiniCoordinateSystem = () => {
    if (!miniCamera || !track_controller) return;

    // 同步主相机的旋转
    const quaternion = new THREE.Quaternion();
    camera.getWorldQuaternion(quaternion);
    
    // 设置小相机位置,保持固定距离但跟随旋转
    const distance = 30;
    const direction = new THREE.Vector3(1, 1, 1).normalize();
    direction.applyQuaternion(quaternion);
    
    miniCamera.position.copy(direction.multiplyScalar(distance));
    miniCamera.lookAt(0, 0, 0);

    // 渲染小场景
    miniRenderer.render(miniScene, miniCamera);
}

/**
 * 更新小坐标系尺寸
 */
const updateMiniCoordinateSystemSize = () => {
    if (!miniRenderer) return;
    
    const size = 100;
    miniRenderer.setSize(size, size);
    miniCamera.left = -size;
    miniCamera.right = size;
    miniCamera.top = size;
    miniCamera.bottom = -size;
    miniCamera.updateProjectionMatrix();
}

