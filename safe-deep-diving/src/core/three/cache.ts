import { ref } from 'vue';
export const threeContainer = ref<HTMLDivElement | null>(null);  // three.js 渲染器容器
export const miniContainer = ref<HTMLDivElement | null>(null);  // 小坐标系容器
export let sceneSize = {
    scene_width: 0,
    scene_height: 0,
}  // 场景尺寸
export let frustumSize = ref<number>(100);  // 视锥体大小，控制视野范围
export const animationId = ref<number>();  // 动画帧 ID  用于记录主场景的渲染动画编号

/// 基础场景内容
export const entity_edges = ref<any>([])  // 边线组
export const entitys = ref<any>([])  // 实体组