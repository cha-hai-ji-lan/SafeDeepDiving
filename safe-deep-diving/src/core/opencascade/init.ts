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
    

    // } catch (error) {
    //     console.error("加载STEP模型时出错:", error);
    //     throw error;
    // }
}