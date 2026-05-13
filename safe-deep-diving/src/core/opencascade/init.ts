import { readFile } from '@tauri-apps/plugin-fs';
import { occtWorker } from "../worker/cache";
import { oc } from "./cache";

export const init_opencascade = async () => {
    if (!occtWorker.value) {
        occtWorker.value = new Worker(new URL("../worker/opencascade.worker.ts", import.meta.url), {
            type: "module"
        });
        occtWorker.value.onmessage = (e) => {
            const { type, data, error } = e.data;
            if (type === 'INIT_SUCCESS') {
                console.log("OCCT 在后台线程初始化完成！");
                if(!oc.value){
                    console.log(oc.value, "oc没有初始化")
                } else {
                    console.log(oc.value)
                }
                // 此时可以通知 Vue 组件更新 UI，显示“就绪”状态
            } else if (type === 'INIT_ERROR') {
                console.log("OCCT 初始化失败", error);
                // 此时可以通知 Vue 组件更新 UI，显示“就绪”状态
            } else {
                console.log("未知线程内容回显回显", type, data);
            }
        };

        // 发送初始化指令
        occtWorker.value.postMessage({ type: 'INIT' });
    }
}

export const load_step = async (stepFilePath: string): Promise<any> => {
    if (!oc.value) {
        console.error("OpenCascade 未初始化")
        return
    }

    console.log("开始加载STEP文件:", stepFilePath)

    // try {
    const fileData = await readFile(stepFilePath);
    console.log("文件读取成功，大小:", fileData.length, "bytes")

    const reader = new oc.value.STEPControl_Reader_1();
    console.log("开始处理格式")
    // 将 Uint8Array 转换为 OpenCascade 可以处理的格式

    console.log("开始解析STEP文件")
    const readStatus = reader.ReadFile(stepFilePath);
    console.log("读取状态:", readStatus)

    if (readStatus !== oc.value.IFSelect_ReturnStatus.IFSelect_RetDone) {
        throw new Error(`无法读取STEP文件，错误码: ${readStatus}`);
    }

    reader.TransferRoots(null as any);
    const shape = reader.OneShape();

    console.log("形状加载成功");


    return shape;

    // } catch (error) {
    //     console.error("加载STEP模型时出错:", error);
    //     throw error;
    // }
}