import { invoke } from '@tauri-apps/api/core';
import initOpenCascade from "opencascade.js";
import { readFile } from '@tauri-apps/plugin-fs';
import { oc } from "./cache";
import { init_listening_group, clean_init_listening_group } from "../event";

export const init_opencascade = async () => {
    init_listening_group()
    try {
        await invoke("set_event_broadcast", { eventName: "oc-init-start" })
        oc.value = await initOpenCascade();
        if (oc.value) {
            await invoke("set_event_broadcast", { eventName: "oc-init-ready" })
        } else {
            await invoke("set_event_broadcast", { eventName: "oc-init-fail" })
        }
    } catch (error) {
        console.error("OpenCascade 初始化失败:", error);
        await invoke("set_event_broadcast", {eventName:"oc-init-fail"})
    } finally {
        clean_init_listening_group()

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