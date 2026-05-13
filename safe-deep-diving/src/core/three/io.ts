/**
 * 层级 1
 * 读写  模型数据 脚本
*/
import { readTextFile } from '@tauri-apps/plugin-fs';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { scene, edgesMaterial, entity_edges, entitys } from "./init"
import { close_inter } from '../publicMethod';

export const load_obj = async (obj_path: string) => {
    try {
        const fileContent = await readTextFile(obj_path)
        const loader = new OBJLoader();
        const mesh_data = loader.parse(fileContent);
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
        close_inter('welcome')

    } catch (error) {
        console.error('未能从文件系统加载OBJ：', error);
    }
}