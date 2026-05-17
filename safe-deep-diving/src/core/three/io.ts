/**
 * 层级 1
 * 读写  模型数据 脚本
*/
import { readTextFile } from '@tauri-apps/plugin-fs';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { scene, edgesMaterial } from "./init"
import { entity_edges, entitys } from "./cache"

export const load_obj = async (obj_path: string): Promise<boolean> => {
    try {
        let startTime = performance.now();
        const fileContent = await readTextFile(obj_path)
        let endTime = performance.now();
        let duration = endTime - startTime;
        console.log(`读取文件: ${duration.toFixed(2)} ms`);
        startTime = endTime
        const loader = new OBJLoader();
        const mesh_data = loader.parse(fileContent);
        endTime = performance.now();
        duration = endTime - startTime;
        console.log(`载入文件: ${duration.toFixed(2)} ms`);
        startTime = endTime
        mesh_data.traverse((child: any) => {
            if (child.isMesh) {
                // 如果 OBJ 没有附带 MTL 文件，可能需要手动指定材质
                if (!child.material) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x9ca9b9,
                        roughness: 0.5,
                        metalness: 0.1,
                        side: THREE.DoubleSide // 防止背面剔除导致的视觉问题
                    });
                }
                // 【修复点】：提取 geometry 并创建 EdgesGeometry
                if (child.geometry) {
                    // 使用 EdgesGeometry 只提取轮廓边缘，避免显示内部三角网
                    const edgesGeometry = new THREE.EdgesGeometry(child.geometry);
                    const lineSegments = new THREE.LineSegments(edgesGeometry, edgesMaterial);

                    // 将边缘线添加到场景
                    scene.add(lineSegments);

                    // 记录引用，方便后续清理
                    entity_edges.value.push(lineSegments);
                }
            }
        });
        // 3. 处理模型（材质、缩放等）


        // 4. 添加到场景
        entitys.value.push(mesh_data)  // 添加到实体组
        scene.add(mesh_data);  // 将整个 OBJ 对象添加到场景中
        endTime = performance.now();
        duration = endTime - startTime;
        console.log(`添加场景: ${duration.toFixed(2)} ms`);
        return true
    } catch (error) {
        console.error('未能从文件系统加载OBJ：', error);
        return false
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
    if (entitys.value) {
        entitys.value.forEach(material => {
            material.transparent = true; // 确保启用透明
            material.opacity = visible ? 1 : 0; // 1为不透明，0为完全透明
            material.needsUpdate = true; // 通知 Three.js 更新材质
            material.visible = visible
        });
    }
}