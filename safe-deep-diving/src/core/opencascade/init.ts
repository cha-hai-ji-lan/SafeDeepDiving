import { invoke } from '@tauri-apps/api/core';
import initOpenCascade from "opencascade.js";
import { oc } from "./cache";
import {clean_oc_init_group } from "../event";

export const init_opencascade = async () => {
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
        clean_oc_init_group()
    }

}
