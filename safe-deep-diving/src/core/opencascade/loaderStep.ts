import * as THREE from 'three';
// 导入 opencascade 主入口（ESM 版本）
import initOpenCascade from 'opencascade.js/dist/opencascade.wasm.js';
import wasmUrl from 'opencascade.js/dist/opencascade.wasm.wasm?url';
type OpenCascadeInstance = Awaited<ReturnType<typeof initOpenCascade>>;
type TopoDS_Shape = Awaited<ReturnType<typeof initOpenCascade>>;
type STEPControl_Reader = Awaited<ReturnType<typeof initOpenCascade>>;
type BRepMesh_IncrementalMesh = Awaited<ReturnType<typeof initOpenCascade>>;
type TopExp_Explorer = Awaited<ReturnType<typeof initOpenCascade>>;
type TopAbs_FACE = Awaited<ReturnType<typeof initOpenCascade>>;
type TopoDS_Face = Awaited<ReturnType<typeof initOpenCascade>>;
type BRep_Tool = Awaited<ReturnType<typeof initOpenCascade>>;
type Poly_Triangulation = Awaited<ReturnType<typeof initOpenCascade>>;
type gp_Pnt = Awaited<ReturnType<typeof initOpenCascade>>;
let oc: OpenCascadeInstance | null = null;
// 初始化，通过 locateFile 手动指定 wasm 文件的位置

let isInitialized = false;
/**
 * 初始化 OpenCascade
 */
export async function initOpenCascadeInstance(): Promise<OpenCascadeInstance> {
    if (isInitialized && oc) {
        return oc;
    }
    isInitialized = true;
    oc = await initOpenCascade({
        locateFile: (path) => {
            if (path.endsWith('.wasm')) return wasmUrl;
            return path;
        }
    });

    return oc;
}

/**
 * 从 STEP 文件路径读取模型并转换为 Three.js Mesh
 * @param stepFilePath STEP 文件的路径
 * @returns Three.js Group 包含所有网格对象
 */
export async function loadSTEPFile(stepFilePath: string): Promise<THREE.Group> {
    await initOpenCascadeInstance();
    console.log(Object.keys(oc).filter(k => k.includes('STEP')));
    if (!oc) {
        // 如果 oc 未初始化，需要先初始化
        await initOpenCascadeInstance();
      }

    // 创建 STEP 阅读器
    const reader = new oc.STEPControl_Reader();

    // 读取 STEP 文件
    const readResult = reader.ReadFile(stepFilePath);

    if (readResult !== 1) { // IFSelect_RetDone = 1
        throw new Error(`Failed to read STEP file: ${stepFilePath}`);
    }

    // 传输根实体
    reader.TransferRoots();

    // 获取形状
    const shape = reader.OneShape();

    // 转换为 Three.js 网格
    const group = shapeToThreeJS(oc, shape);

    // 清理
    shape.delete();
    reader.delete();

    return group;
}

/**
 * 将 OpenCascade Shape 转换为 Three.js Group
 */
function shapeToThreeJS(oc: OpenCascadeInstance, shape: TopoDS_Shape): THREE.Group {
    const group = new THREE.Group();

    // 对形状进行网格化
    const mesher = new oc.BRepMesh_IncrementalMesh(shape, 0.1, false, 0.5, true);
    mesher.Perform();

    // 遍历所有面
    const faceExplorer = new oc.TopExp_Explorer(shape, oc.TopAbs_FACE);

    let faceCount = 0;

    while (faceExplorer.More()) {
        const face = oc.TopoDS_Face.Cast(faceExplorer.Current());
        const mesh = faceToThreeJSMesh(oc, face);

        if (mesh) {
            mesh.name = `Face_${faceCount++}`;
            group.add(mesh);
        }

        faceExplorer.Next();
        face.delete();
    }

    faceExplorer.delete();
    mesher.delete();

    return group;
}

/**
 * 将单个 Face 转换为 Three.js Mesh
 */
function faceToThreeJSMesh(oc: OpenCascadeInstance, face: TopoDS_Face): THREE.Mesh | null {
    const location = face.Location();
    const triangulation = oc.BRep_Tool.Triangulation(face, location);

    if (triangulation.IsNull()) {
        location.delete();
        return null;
    }

    // 获取顶点和三角形数据
    const nodes = triangulation.get().Nodes();
    const triangles = triangulation.get().Triangles();

    const numNodes = nodes.Length();
    const numTriangles = triangles.Length();

    // 创建顶点数组
    const vertices: number[] = [];
    for (let i = 1; i <= numNodes; i++) {
        const node = nodes.Value(i);
        vertices.push(node.X(), node.Y(), node.Z());
    }

    // 创建索引数组
    const indices: number[] = [];
    for (let i = 1; i <= numTriangles; i++) {
        const triangle = triangles.Value(i);
        let n1: number, n2: number, n3: number;

        // 根据三角形类型获取顶点索引
        if (triangle.HasUVNodes()) {
            n1 = triangle.Value(1) - 1;
            n2 = triangle.Value(2) - 1;
            n3 = triangle.Value(3) - 1;
        } else {
            n1 = triangle.Value(1) - 1;
            n2 = triangle.Value(2) - 1;
            n3 = triangle.Value(3) - 1;
        }

        indices.push(n1, n2, n3);
    }

    // 计算法线
    const normals: number[] = [];
    for (let i = 0; i < numNodes; i++) {
        normals.push(0, 0, 1); // 简化处理，实际应该计算真实法线
    }

    // 创建 Three.js 几何体
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setIndex(indices);

    // 创建材质
    const material = new THREE.MeshPhongMaterial({
        color: 0x9ca9b9,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        shininess: 60
    });

    const mesh = new THREE.Mesh(geometry, material);

    // 添加边线
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 1
    });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    mesh.add(edges);

    // 清理
    location.delete();
    triangulation.delete();
    nodes.delete();
    triangles.delete();

    return mesh;
}

/**
 * 从二进制数据加载 STEP 文件
 * @param stepData STEP 文件的 ArrayBuffer 数据
 * @returns Three.js Group
 */
export async function loadSTEPFromBuffer(stepData: ArrayBuffer): Promise<THREE.Group> {
    const openCascade = await initOpenCascadeInstance();

    // 将数据写入虚拟文件系统
    const fileName = 'temp.step';
    openCascade.FS.writeFile(fileName, new Uint8Array(stepData));

    try {
        const group = await loadSTEPFile(fileName);

        // 清理临时文件
        openCascade.FS.unlink(fileName);

        return group;
    } catch (error) {
        // 确保清理临时文件
        try {
            openCascade.FS.unlink(fileName);
        } catch (e) {
            // 忽略删除错误
        }
        throw error;
    }
}

/**
 * 清理 OpenCascade 资源
 */
export function cleanupOpenCascade(): void {
    if (oc) {
        oc.delete();
        oc = null;
        isInitialized = false;
    }
}
