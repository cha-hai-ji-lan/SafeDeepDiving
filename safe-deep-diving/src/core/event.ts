import { listen, UnlistenFn } from '@tauri-apps/api/event'
import { invoke } from '@tauri-apps/api/core';

let unlisten_cfg_init_start: UnlistenFn | null = null    // 开始监听配置项加载
let unlisten_cfg_init_ready: UnlistenFn | null = null    // 监听配置项加载完成
let unlisten_cfg_init_fail: UnlistenFn | null = null     // 监听配置项加载失败
let unlisten_three_init_start: UnlistenFn | null = null    // 开始监听配置项加载
let unlisten_three_init_ready: UnlistenFn | null = null    // 监听配置项加载完成
let unlisten_three_init_fail: UnlistenFn | null = null     // 监听配置项加载失败
let unlisten_oc_init_start: UnlistenFn | null = null    // 开始监听opencascade.js初始化
let unlisten_oc_init_ready: UnlistenFn | null = null    // 监听opencascade.js初始化完成
let unlisten_oc_init_fail: UnlistenFn | null = null     // 监听opencascade.js初始化失败

/**
 * 监听配置项加载
*/
export const listen_cfg_init_start = async () => {
    if (unlisten_cfg_init_start) {
        return // 避免重复注册
    }
    unlisten_cfg_init_start = await listen('cfg-init-start', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust 配置项加载消息:', event.payload.data)
        if (unlisten_cfg_init_start) {  // 确保监听器存在 时响应了监听就卸载监听
            unlisten_cfg_init_start()
        }
    })
}
/**
 * 监听配置项加载完成
*/
export const listen_cfg_init_ready = async () => {
    if (unlisten_cfg_init_ready) {
        return // 避免重复注册
    }
    unlisten_cfg_init_ready = await listen('cfg-init-ready', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust 配置项加载完成消息:', event.payload.data)
        if (unlisten_cfg_init_ready) {  // 确保监听器存在 时响应了监听就卸载监听
            unlisten_cfg_init_ready()
            unlisten_cfg_init_ready = null
        }
    })
}

/**
 * 监听配置项加载失败
*/
export const listen_cfg_init_fail = async () => {
    if (unlisten_cfg_init_fail) {
        return // 避免重复注册
    }
    unlisten_cfg_init_fail = await listen('cfg-init-fail', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust 配置项加载失败消息:', event.payload.data)
        if (unlisten_cfg_init_fail) {  // 确保监听器存在 时响应了监听就卸载监听
            unlisten_cfg_init_fail()
            unlisten_cfg_init_fail = null
        }
    })
}

/**
 * 监听three.js初始化
*/
export const listen_three_init_start = async () => {
    if (unlisten_three_init_start) {
        return // 避免重复注册
    }
    unlisten_three_init_start = await listen('three-init-start', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust three.js初始化消息:', event.payload.data)
        if (unlisten_three_init_start) {  // 确保监听器存在 时响应了监听就卸载监听
            unlisten_three_init_start()
            unlisten_three_init_start = null
        }
    })
}

/**
 * 监听three.js初始化完成
*/
export const listen_three_init_ready = async () => {
    if (unlisten_three_init_ready) {
        return // 避免重复注册
    }
    unlisten_three_init_ready = await listen('three-init-ready', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust three.js初始化完成消息:', event.payload.data)
        if (unlisten_three_init_ready) {  // 确保监听器存在 时响应了监听就卸载监听
            unlisten_three_init_ready()
            unlisten_three_init_ready = null
        }
    })
}
/**
 * 监听three.js初始化失败
*/
export const listen_three_init_fail = async () => {
    if (unlisten_three_init_fail) {
        return // 避免重复注册
    }
    unlisten_three_init_fail = await listen('three-init-fail', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust three.js初始化失败消息:', event.payload.data)
        if (unlisten_three_init_fail) {  // 确保监听器存在 时响应了监听就卸载监听
            unlisten_three_init_fail()
        }
    })
}
/**
 * 监听opencascade.js初始化
*/
export const listen_oc_init_start = async () => {
    if (unlisten_oc_init_start) {
        return // 避免重复注册
    }
    unlisten_oc_init_start = await listen('oc-init-start', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })

        console.log('收到 Rust 消息:', event.payload.data)
        // set_content(`${event.payload.data}`, 1)
        if (unlisten_oc_init_start) {  // 确保监听器存在 时响应了监听就卸载监听
            unlisten_oc_init_start()
            unlisten_oc_init_start = null
        }
    })
}
/**
 * 监听opencascade.js初始化完成
*/
export const listen_oc_init_ready = async () => {
    if (unlisten_oc_init_ready) {
        return // 避免重复注册
    }
    unlisten_oc_init_ready = await listen('oc-init-ready', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust 消息:', event.payload.data)
        invoke("show_main_window")  // 显示主窗口
        if (unlisten_oc_init_ready) {
            unlisten_oc_init_ready()
            unlisten_oc_init_ready = null
        }
    })
}
/**
 * 监听opencascade.js初始化失败
*/
export const listen_oc_init_fail = async () => {
    if (unlisten_oc_init_fail) {
        return // 避免重复注册
    }
    unlisten_oc_init_fail = await listen('oc-init-fail', (event: any) => {
        invoke("emit_to_window", { targetLabel: "splashScreen", eventName: "share-msg", payload: event.payload })
        console.log('收到 Rust 消息:', event.payload.data)
        if (unlisten_oc_init_fail) {
            unlisten_oc_init_fail()
            unlisten_oc_init_fail = null
        }
    })
}

/**
 * 初始化监听组
 * 
 *  监听 opencascade的初始化
*/
export const init_listening_group = () => {
    // 监听配置项加载
    listen_cfg_init_start()
    listen_cfg_init_ready()
    listen_cfg_init_fail()
    // 监听three.js初始化
    listen_three_init_start()
    listen_three_init_ready()
    listen_three_init_fail()
    // 监听opencascade.js的初始化
    listen_oc_init_start()
    listen_oc_init_ready()
    listen_oc_init_fail()

}

/**
 * 监听组清理
 * 
*/
/**
 * 清理初始化监听组
 * 
 * 清理配置项监听组
*/

export const clean_cfg_init_group = () => {
    // 清理 配置项加载监听
    if (unlisten_cfg_init_start) {
        unlisten_cfg_init_start()
        unlisten_cfg_init_start = null
    }
    if (unlisten_cfg_init_ready) {
        unlisten_cfg_init_ready()
        unlisten_cfg_init_ready = null
    }
    if (unlisten_cfg_init_fail) {
        unlisten_cfg_init_fail()
        unlisten_cfg_init_fail = null
    }
}
/**
 * 清理three.js初始化监听组
*/
export const clean_three_init_group = () => {
    // 清理three.js初始化监听
    if (unlisten_three_init_start) {
        unlisten_three_init_start()
        unlisten_three_init_start = null
    }
    if (unlisten_three_init_ready) {
        unlisten_three_init_ready()
        unlisten_three_init_ready = null
    }
    if (unlisten_three_init_fail) {
        unlisten_three_init_fail()
        unlisten_three_init_fail = null
    }
}

/**
 * 清理opencascade.js初始化监听组
*/
export const clean_oc_init_group = () => {
    // 清理opencascade.js初始化监听
    if (unlisten_oc_init_start) {
        unlisten_oc_init_start()
        unlisten_oc_init_start = null
    }
    if (unlisten_oc_init_ready) {
        unlisten_oc_init_ready()
        unlisten_oc_init_ready = null
    }
    if (unlisten_oc_init_fail) {
        unlisten_oc_init_fail()
        unlisten_oc_init_fail = null
    }
}
/**
 * 清理初始化监听组
*/
export const clean_init_listening_group = () => {
    clean_cfg_init_group()
    clean_three_init_group()
    clean_oc_init_group()
}