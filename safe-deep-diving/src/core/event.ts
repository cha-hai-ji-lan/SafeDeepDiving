import { listen, UnlistenFn } from '@tauri-apps/api/event'
import { invoke } from '@tauri-apps/api/core';

let unlisten_oc_init_start: UnlistenFn | null = null    // 开始监听opencascade.js初始化
let unlisten_oc_init_ready: UnlistenFn | null = null    // 监听opencascade.js初始化完成
let unlisten_oc_init_fail: UnlistenFn | null = null     // 监听opencascade.js初始化失败

/**
 * 监听opencascade.js初始化
*/
export const listen_oc_init_start = async () => {
    if (unlisten_oc_init_start) {
        return // 避免重复注册
    }
    unlisten_oc_init_start = await listen('oc-init-start', (event: any) => {
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
*/
export const clean_init_listening_group = () => {
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