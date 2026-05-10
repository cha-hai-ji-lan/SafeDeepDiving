/**
 * 层级 1
 * 读写  模型数据 脚本
*/
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { readTextFile } from '@tauri-apps/plugin-fs';
import { scene, edgesMaterial, entity_edges, entitys } from "./init.ts"
import { close_inter } from '../publicMethod.ts';


export const load_obj = async (obj_path: string) => {
    try {
        // 1. 通过 Tauri 读取文件内容为字符串
        const objData = await readTextFile(obj_path);

        // 2. 使用 OBJLoader 解析字符串
        const loader = new OBJLoader();
        const object = loader.parse(objData);

        // 3. 处理模型（材质、缩放等）
        object.traverse((child: any) => {
            if (child.isMesh) {
                console.log("模型是网格")
                // 如果 OBJ 没有附带 MTL 文件，可能需要手动指定材质
                if (!child.material) {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x9ca9b9,
                        roughness: 0.5,
                        metalness: 0.1,
                        side: THREE.DoubleSide // 防止背面剔除导致的视觉问题
                    });
                    console.log("模型无材质")
                }
                console.log("模型材质:", child.material)
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

        // 4. 添加到场景
        entitys.value.push(object)
        scene.add(object);

        console.log('从本地文件系统加载 OBJ');
        close_inter('welcome')
    } catch (error) {
        console.error('未能从文件系统加载OBJ：', error);
    }
}