/**
 * 层级 2
 * three.js 初始化装载脚本
*/
// import { Ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { init_opencascade } from "../opencascade/init"
import { threeContainer, miniContainer, sceneSize, frustumSize, animationId, entity_edges, entitys } from "./cache"
import { coreConfig } from '../cache';


export let scene: THREE.Scene;  // 场景
export let renderer: THREE.WebGLRenderer;  // 渲染器
export let camera: THREE.OrthographicCamera | THREE.PerspectiveCamera;  // 当前使用的相机
export let orthoCamera: THREE.OrthographicCamera;  // 正交相机实例
export let perspectiveCamera: THREE.PerspectiveCamera;  // 透视相机实例
export let edgesMaterial: THREE.LineBasicMaterial;  // 边线材质
export let axesHelper: THREE.AxesHelper;  // 坐标轴
export let track_controller: OrbitControls;  // 轨道控制器



// 添加小坐标系场景内容
export let miniScene: THREE.Scene;  // 小坐标系场景
export let miniCamera: THREE.OrthographicCamera;  // 小坐标系相机
export let miniRenderer: THREE.WebGLRenderer;  // 小坐标系渲染器
export let miniAxesHelper: THREE.AxesHelper;  // 小坐标系坐标轴

/**
 * 插件加载项
 * 
 * 用于加载非 基础Three.js内容
 */
const add_in = () => {
    init_opencascade()
}
/**
 * 初始化 Three.js 基础场景
*/
const init_basic_scenario = () => {
    if (!threeContainer.value) {
        console.error('threeContainer is null');
        return false
    };
    if (!miniContainer.value) {
        console.error('miniContainer is null');
        return false
    };
    sceneSize.scene_width = threeContainer.value.clientWidth;
    sceneSize.scene_height = threeContainer.value.clientHeight;
    // 创建场景
    scene = new THREE.Scene();  // 创建场景
    scene.background = null;  // 设置背景为 null,使其透明

    // 创建相机

    const aspect = sceneSize.scene_width / sceneSize.scene_height;  // 宽高比
    // 正交相机
    orthoCamera = new THREE.OrthographicCamera(
        frustumSize.value * aspect / -2,
        frustumSize.value * aspect / 2,
        frustumSize.value / 2,
        frustumSize.value / -2,
        0.001,
        100000
    );
    orthoCamera.position.set(1000, 1000, 1000);
    orthoCamera.lookAt(0, 0, 0);

    // 透视相机
    perspectiveCamera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100000);
    perspectiveCamera.position.set(1000, 1000, 1000);
    perspectiveCamera.lookAt(0, 0, 0);

    // 默认使用正交相机
    camera = orthoCamera;

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({
        alpha: true,  // 设置 alpha: true 以启用透明背景
        antialias: true  // 启用抗锯齿
    });
    renderer.setSize(sceneSize.scene_width, sceneSize.scene_height);  // 设置渲染器的尺寸
    renderer.setClearColor(0x000000, 0);  // 设置清除颜色为透明

    // 创建坐标轴
    axesHelper = new THREE.AxesHelper(2);
    scene.add(axesHelper); // 将坐标轴添加到场景中

    // 添加环境光 (基础亮度,防止死黑)
    const ambientLight = new THREE.AmbientLight(0xffffff, coreConfig.value["scenes"]["ambient-light-intensity"]); // 强度 0.5
    scene.add(ambientLight);  //  将环境光添加到场景中

    // 添加方向光 (主光源,产生立体感)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(500, 1000, 750); // 设置光源位置
    scene.add(directionalLight);  // 将方向光添加到场景中

    // 3. 添加补光（从另一侧照亮暗部）
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-500, 500, -750);
    scene.add(fillLight);

    // 4. 添加底部反光（模拟地面反射）
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.2);
    rimLight.position.set(0, -500, 0);
    scene.add(rimLight);

    // 添加轨道控制器
    track_controller = new OrbitControls(camera, renderer.domElement)  // 创建轨道控制器
    track_controller.enableDamping = true  // 启用阻尼
    track_controller.dampingFactor = 0.1  // 修改阻尼系数
    track_controller.enableZoom = true;       // 确保启用缩放
    track_controller.zoomSpeed = 2.0;         // 缩放速度,可根据需要调整
    track_controller.screenSpacePanning = false; // 设为 false 让平移更自然,通常不影响缩放中心
    track_controller.target.set(0, 0, 0);  // 设置控制器的目标点为场景中心
    track_controller.object = camera;  // 设置控制器对象为相机
    threeContainer.value.appendChild(renderer.domElement);  // 将渲染器的 canvas 添加到 DOM 中
    return true
}
/**
 * 初始化创建内联材质
*/
const init_inline_material = () => {
    edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 1 });  // 创建边线材质
}


/**
 * 初始化小坐标系
*/
const init_mini_coordinate_system = () => {
    if (!miniContainer.value) { return false };
    // 创建小场景
    miniScene = new THREE.Scene();
    miniScene.background = null;

    // 创建正交相机
    const size = 100;
    miniCamera = new THREE.OrthographicCamera(-size, size, size, -size, 0.1, 1000);
    // 创建小渲染器
    miniRenderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    miniRenderer.setSize(100, 100);
    miniRenderer.setClearColor(0x000000, 0);
    miniContainer.value.appendChild(miniRenderer.domElement);

    // 添加坐标轴
    miniAxesHelper = new THREE.AxesHelper(60);
    miniScene.add(miniAxesHelper);
    return true
}

/**
 * 更新小坐标系
 */
const update_mini_coordinate_system = () => {
    if (!miniCamera || !track_controller) return;

    // 同步主相机的旋转
    const quaternion = new THREE.Quaternion();
    camera.getWorldQuaternion(quaternion);

    // 设置小相机位置,保持固定距离但跟随旋转
    const distance = 30;
    const direction = new THREE.Vector3(0, 0, 30).normalize();
    direction.applyQuaternion(quaternion);

    miniCamera.position.copy(direction.multiplyScalar(distance));
    miniCamera.lookAt(0, 0, 0);

    // 渲染小场景
    miniRenderer.render(miniScene, miniCamera);
}

/**
 * 更新小坐标系尺寸
 */
const update_mini_coordinate_system_size = () => {
    if (!miniRenderer) return;

    const size = 100;
    miniRenderer.setSize(size, size);
    miniCamera.left = -size;
    miniCamera.right = size;
    miniCamera.top = size;
    miniCamera.bottom = -size;
    miniCamera.updateProjectionMatrix();
}

export const init_three = async (): Promise<boolean> => {
    try {
        if (!init_basic_scenario()) return false  //  初始化基础场景
        init_inline_material()  // 初始化内联材质

        // 初始化小坐标系
        if (!init_mini_coordinate_system()) return false

        add_in()  // 加载插件


        // 5. 动画循环
        function animate() {
            animationId.value = requestAnimationFrame(animate);  // 循环调用自身
            track_controller.update()
            renderer.render(scene, camera);  // 渲染场景和相机
            update_mini_coordinate_system(); // 更新小坐标系
        }
        animate();

        // 监听画布变化
        window.addEventListener("resize", () => {
            sceneSize.scene_width = window.innerWidth;
            sceneSize.scene_height = window.innerHeight;
            // 重置渲染器宽高比
            renderer.setSize(window.innerWidth, window.innerHeight);
            // 同时更新两个相机的宽高比
            const aspect = sceneSize.scene_width / sceneSize.scene_height;

            orthoCamera.left = -frustumSize.value * aspect / 2;
            orthoCamera.right = frustumSize.value * aspect / 2;
            orthoCamera.top = frustumSize.value / 2;
            orthoCamera.bottom = -frustumSize.value / 2;
            orthoCamera.updateProjectionMatrix();

            perspectiveCamera.aspect = aspect;
            perspectiveCamera.updateProjectionMatrix();

            // 更新小坐标系尺寸
            update_mini_coordinate_system_size();
        })
        return true
    } catch (e) {
        console.log("初始化 Three.js 失败", e)
        return false
    }


}
/**
 * 清理 Three.js 场景和资源
*/
export const clean_three = () => {
    if (animationId.value) cancelAnimationFrame(animationId.value);  // 停止动画循环
    if (renderer) {  // 清理渲染器
        renderer.dispose();  // 释放 基础渲染器 WebGL 资源
        // 清理 DOM
        if (threeContainer.value && renderer.domElement.parentNode === threeContainer.value) {  // 确保渲染器的 canvas 仍然是 threeContainer 的子节点
            threeContainer.value.removeChild(renderer.domElement); // 从 DOM 中移除渲染器的 canvas
        }
    }
    // 清理小坐标系
    if (miniRenderer) {
        miniRenderer.dispose();  // 释放 小渲染器 WebGL 资源
        if (miniContainer.value && renderer.domElement.parentNode === miniContainer.value) {
            miniContainer.value.removeChild(miniRenderer.domElement);  // 从 DOM 中移除小坐标系容器
        }
    }
}

/**
 * 匹配视觉缩放
 * @param fromCamera 当前相机
 * @param toCamera 目标相机
 * @param target 缩放中心点
 */
const matchVisualScale = (fromCamera: THREE.Camera, toCamera: THREE.Camera, target: THREE.Vector3) => {
    const distance = fromCamera.position.distanceTo(target);

    if (toCamera instanceof THREE.OrthographicCamera && fromCamera instanceof THREE.PerspectiveCamera) {
        // 透视 → 正交:根据视角和距离计算合适的视锥体大小
        const fov = fromCamera.fov * Math.PI / 180;
        const height = 2 * distance * Math.tan(fov / 2);
        const aspect = sceneSize.scene_width / sceneSize.scene_height;

        // 设置正交相机的视锥体大小
        toCamera.top = height / 2;
        toCamera.bottom = -height / 2;
        toCamera.left = -height * aspect / 2;
        toCamera.right = height * aspect / 2;
        toCamera.zoom = 1;
        toCamera.updateProjectionMatrix();

    } else if (toCamera instanceof THREE.PerspectiveCamera && fromCamera instanceof THREE.OrthographicCamera) {
        // 正交 → 透视:保持 fov,调整位置以获得相似的视觉效果
        const orthoHeight = fromCamera.top - fromCamera.bottom;
        const fov = toCamera.fov * Math.PI / 180;
        const newDistance = orthoHeight / (2 * Math.tan(fov / 2));

        // 沿视线方向调整位置
        const direction = new THREE.Vector3().subVectors(fromCamera.position, target).normalize();
        toCamera.position.copy(target).add(direction.multiplyScalar(newDistance));
    }
};

/**
 * 切换相机模式
 * @param type 'ortho' | 'perspective'
 */
export const switch_camera = (type?: 'ortho' | 'perspective') => {
    const currentType = camera === orthoCamera ? 'ortho' : 'perspective';
    const newType = type || (currentType === 'ortho' ? 'perspective' : 'ortho');

    const oldCamera = camera;

    if (newType === 'ortho') {
        camera = orthoCamera;
    } else {
        camera = perspectiveCamera;
    }

    // 同步朝向
    camera.quaternion.copy(oldCamera.quaternion);
    camera.lookAt(track_controller.target);

    // 智能匹配视觉缩放
    matchVisualScale(oldCamera, camera, track_controller.target.clone());

    // 更新控制器
    track_controller.object = camera;

    console.log(`相机已切换到: ${newType === 'ortho' ? '正交' : '透视'}`);
};
