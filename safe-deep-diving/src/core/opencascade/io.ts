import { readFile } from '@tauri-apps/plugin-fs';
import * as THREE from 'three';
import { oc } from "./cache";

export const load_step = async (stepFilePath: string): Promise<any> => {
    try{
        if (!oc.value) {
            console.error("OpenCascade 未初始化")
            return
        }
    
        console.log("开始加载STEP文件:", stepFilePath)
    
        // try {
        const fileData: Uint8Array = await readFile(stepFilePath);
        console.log("文件读取成功，大小:", fileData.length, "bytes")
    
        const reader = new oc.value.STEPControl_Reader_1();
        console.log("开始处理格式")
        oc.value.FS.writeFile("/model.stp", fileData); // 写入虚拟文件系统
        // 将 Uint8Array 转换为 OpenCascade 可以处理的格式
    
        console.log("开始解析STEP文件")
        const readStatus = reader.ReadFile("/model.stp");
        console.log("读取状态:", readStatus)
    
        if (readStatus !== oc.value.IFSelect_ReturnStatus.IFSelect_RetDone) {
            throw new Error(`无法读取STEP文件，错误码: ${readStatus}`);
        }
        const progress = new oc.value.Message_ProgressRange_1();
        reader.TransferRoots(progress);
        const shape = reader.OneShape();
    
        if (!shape) {
            throw new Error("未能获取形状对象");
        }
    
        console.log("形状加载成功");
        console.log("形状类型枚举值:", shape.ShapeType());
        
        // 获取边界框信息
        const box = new oc.value.Bnd_Box_1();
        oc.value.BRepBndLib.Add(shape, box, false);
        
        if (!box.IsVoid()) {
            const minPt = box.CornerMin();
            const maxPt = box.CornerMax();
            console.log("边界框信息:");
            console.log(`  最小点: (${minPt.X().toFixed(3)}, ${minPt.Y().toFixed(3)}, ${minPt.Z().toFixed(3)})`);
            console.log(`  最大点: (${maxPt.X().toFixed(3)}, ${maxPt.Y().toFixed(3)}, ${maxPt.Z().toFixed(3)})`);
            console.log(`  尺寸: (${(maxPt.X()-minPt.X()).toFixed(3)} x ${(maxPt.Y()-minPt.Y()).toFixed(3)} x ${(maxPt.Z()-minPt.Z()).toFixed(3)})`);
        } else {
            console.warn("边界框为空，可能形状有问题");
        }
    
    
        return shape;
    } catch (error) {
        console.error("加载STEP模型时出错:", error);
    }
}

// interface NurbsSurfaceData {
//     controlPoints: THREE.Vector4[][];
//     degreeU: number;
//     degreeV: number;
//     knotsU: number[];
//     knotsV: number[];
// }

// const extract_nurbs_from_face = (face: any): NurbsSurfaceData | null => {
//     if (!oc.value) {
//         return null;
//     }

//     try {
//         const surface = oc.value.BRep_Tool.Surface_1(face);
        
//         if (surface.IsNull()) {
//             return null;
//         }

//         const geomType = surface.GetType();
        
//         if (geomType !== oc.value.GeomAbs_BSplineSurface && 
//             geomType !== oc.value.GeomAbs_BezierSurface) {
//             console.log("跳过非NURBS/Bezier曲面类型:", geomType);
//             return null;
//         }

//         let bsplineSurface;
//         if (geomType === oc.value.GeomAbs_BezierSurface) {
//             const bezierSurface = oc.value.Handle_Geom_BezierSurface.DownCast(surface);
//             bsplineSurface = bezierSurface.ToBSpline();
//         } else {
//             bsplineSurface = oc.value.Handle_Geom_BSplineSurface.DownCast(surface);
//         }

//         if (!bsplineSurface || bsplineSurface.IsNull()) {
//             return null;
//         }

//         const degreeU = bsplineSurface.UDegree();
//         const degreeV = bsplineSurface.VDegree();
//         const numPolesU = bsplineSurface.NbUPoles();
//         const numPolesV = bsplineSurface.NbVPoles();

//         console.log(`提取NURBS曲面: 度数(${degreeU}, ${degreeV}), 控制点(${numPolesU}x${numPolesV})`);

//         const controlPoints: THREE.Vector4[][] = [];
        
//         for (let i = 1; i <= numPolesU; i++) {
//             const row: THREE.Vector4[] = [];
//             for (let j = 1; j <= numPolesV; j++) {
//                 const pole = bsplineSurface.Pole(i, j);
//                 const weight = bsplineSurface.Weight(i, j);
//                 row.push(new THREE.Vector4(pole.X(), pole.Y(), pole.Z(), weight));
//             }
//             controlPoints.push(row);
//         }

//         const knotsU: number[] = [];
//         const numKnotsU = bsplineSurface.NbUKnots();
//         for (let i = 1; i <= numKnotsU; i++) {
//             knotsU.push(bsplineSurface.UKnot(i));
//         }

//         const knotsV: number[] = [];
//         const numKnotsV = bsplineSurface.NbVKnots();
//         for (let i = 1; i <= numKnotsV; i++) {
//             knotsV.push(bsplineSurface.VKnot(i));
//         }

//         bsplineSurface.delete();
//         surface.delete();

//         return {
//             controlPoints,
//             degreeU,
//             degreeV,
//             knotsU,
//             knotsV
//         };

//     } catch (error) {
//         console.error("提取NURBS数据失败:", error);
//         return null;
//     }
// }

// const create_three_nurbs_surface = (nurbsData: NurbsSurfaceData, samplesU: number = 50, samplesV: number = 50): THREE.Mesh | null => {
//     try {
//         const { controlPoints, degreeU, degreeV, knotsU, knotsV } = nurbsData;

//         const numU = controlPoints.length;
//         const numV = controlPoints[0].length;

//         console.log(`创建Three.js NURBS曲面: ${numU}x${numV} 控制点, 采样 ${samplesU}x${samplesV}`);

//         const geometry = new THREE.BufferGeometry();
//         const vertices: number[] = [];
//         const normals: number[] = [];
//         const indices: number[] = [];

//         const tempVector = new THREE.Vector3();
//         const tempVector1 = new THREE.Vector3();
//         const tempVector2 = new THREE.Vector3();
//         const tempVector3 = new THREE.Vector3();

//         for (let i = 0; i <= samplesU; i++) {
//             const u = i / samplesU;
//             for (let j = 0; j <= samplesV; j++) {
//                 const v = j / samplesV;

//                 const point = NURBSUtils.calcSurfacePoint(
//                     degreeU,
//                     degreeV,
//                     knotsU,
//                     knotsV,
//                     controlPoints,
//                     u,
//                     v,
//                     tempVector
//                 );

//                 vertices.push(point.x, point.y, point.z);

//                 if (i > 0 && j > 0) {
//                     const a = (i - 1) * (samplesV + 1) + (j - 1);
//                     const b = i * (samplesV + 1) + (j - 1);
//                     const c = i * (samplesV + 1) + j;
//                     const d = (i - 1) * (samplesV + 1) + j;

//                     indices.push(a, b, d);
//                     indices.push(b, c, d);
//                 }
//             }
//         }

//         geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
//         geometry.setIndex(indices);
//         geometry.computeVertexNormals();

//         const material = new THREE.MeshStandardMaterial({
//             color: 0x9ca9b9,
//             roughness: 0.5,
//             metalness: 0.1,
//             side: THREE.DoubleSide,
//             transparent: true,
//             opacity: 0.9,
//             flatShading: false
//         });

//         const mesh = new THREE.Mesh(geometry, material);

//         const edgesGeometry = new THREE.EdgesGeometry(geometry, 15);
//         const lineSegments = new THREE.LineSegments(edgesGeometry, edgesMaterial);
//         mesh.add(lineSegments);

//         entity_edges.value.push(lineSegments);

//         geometry.dispose();

//         return mesh;

//     } catch (error) {
//         console.error("创建Three.js NURBS曲面失败:", error);
//         return null;
//     }
// }

// export const convert_shape_to_nurbs_surfaces = (shape: any, samplesU: number = 50, samplesV: number = 50): THREE.Group => {
//     if (!oc.value) {
//         throw new Error("OpenCascade 未初始化");
//     }

//     const group = new THREE.Group();

//     console.log("开始提取NURBS曲面...");
//     const faceExplorer = new oc.value.TopExp_Explorer_1(shape, oc.value.TopAbs_FACE);

//     let faceCount = 0;
//     let nurbsCount = 0;

//     while (faceExplorer.More()) {
//         const face = oc.value.TopoDS_Face.Cast(faceExplorer.Current());
        
//         const nurbsData = extract_nurbs_from_face(face);
        
//         if (nurbsData) {
//             const mesh = create_three_nurbs_surface(nurbsData, samplesU, samplesV);
            
//             if (mesh) {
//                 mesh.name = `NURBS_Surface_${nurbsCount++}`;
//                 group.add(mesh);
//             }
//         } else {
//             console.log(`Face ${faceCount} 不是NURBS曲面，跳过`);
//         }

//         faceExplorer.Next();
//         face.delete();
//         faceCount++;
//     }

//     faceExplorer.delete();

//     console.log(`转换完成: 共 ${faceCount} 个面，其中 ${nurbsCount} 个NURBS曲面`);
//     return group;
// }

// export const load_and_render_step_as_nurbs = async (
//     stepFilePath: string, 
//     samplesU: number = 50, 
//     samplesV: number = 50
// ): Promise<THREE.Group | null> => {
//     try {
//         const shape = await load_step(stepFilePath);
        
//         if (!shape) {
//             console.error("未能加载STEP形状");
//             return null;
//         }

//         const threeGroup = convert_shape_to_nurbs_surfaces(shape, samplesU, samplesV);

//         if (threeGroup.children.length === 0) {
//             console.warn("未找到NURBS曲面，可能需要使用三角剖分方式");
//             return null;
//         }

//         scene.add(threeGroup);
//         entitys.value.push(threeGroup);

//         console.log("STEP模型(NURBS)已添加到场景");
//         return threeGroup;
//     } catch (error) {
//         console.error("加载并渲染STEP模型(NURBS)时出错:", error);
//         return null;
//     }
// }
// // 使用方法：
// // typescript
// // import { load_and_render_step_as_nurbs } from '@/core/opencascade/io';

// // // 加载STEP文件并以NURBS曲面形式渲染
// // const handleLoadStepAsNurbs = async () => {
// //     const stepPath = '/path/to/your/model.step';
    
// //     // samplesU和samplesV控制采样密度，数值越大越平滑但性能开销越大
// //     const modelGroup = await load_and_render_step_as_nurbs(stepPath, 80, 80);
    
// //     if (modelGroup) {
// //         console.log("NURBS模型加载成功", modelGroup);
// //     } else {
// //         console.warn("模型中未包含NURBS曲面，请检查STEP文件");
// //     }
// // };