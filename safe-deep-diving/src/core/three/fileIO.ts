import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { readTextFile } from '@tauri-apps/plugin-fs';
import {scene} from "./init.ts"
export const load_obj = async (obj_path: string) =>{
    try {
        // 1. 通过 Tauri 读取文件内容为字符串
        const objData = await readTextFile(obj_path);
        
        // 2. 使用 OBJLoader 解析字符串
        const loader = new OBJLoader();
        const object = loader.parse(objData);
        
        // 3. 处理模型（材质、缩放等）
        object.traverse((child: any) => {
            if (child.isMesh) {
                // 如果 OBJ 没有附带 MTL 文件，可能需要手动指定材质
                if (!child.material) {
                    child.material = new THREE.MeshStandardMaterial({ color: 0xcccccc });
                }
            }
        });

        // 4. 添加到场景
        scene.add(object);
        console.log('从本地文件系统加载 OBJ');
        
    } catch (error) {
        console.error('未能从文件系统加载OBJ：', error);
    }
}