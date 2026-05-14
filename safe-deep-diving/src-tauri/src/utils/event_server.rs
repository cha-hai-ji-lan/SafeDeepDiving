use tauri::Manager;
use tauri::Emitter;
use crate::utils::event;
use event::{get_app_handle, send_oc_init_fail, send_oc_init_ready, send_oc_init_start};

///
/// 设置事件触发广播
/// @param event_name 要触发的事件名称
#[tauri::command]
pub fn set_event_broadcast(event_name: &str) {
    let app_handle = get_app_handle().unwrap();
    match event_name {
        "oc-init-start" => send_oc_init_start(app_handle), //  开始初始化OC
        "oc-init-ready" => send_oc_init_ready(app_handle), //  OC初始化完成
        "oc-init-fail" => send_oc_init_fail(app_handle),   //  OC初始化失败
        _ => {}
    }
}

///
/// 显示主窗口
/// 当启动画面加载完成后调用此命令
#[tauri::command]
pub fn show_main_window() {
    let app_handle = get_app_handle().unwrap();

    // 获取主窗口并显示
    if let Some(main_window) = app_handle.get_webview_window("main") {
        main_window.show().unwrap();
        main_window.set_focus().unwrap();
    }

    // 关闭启动画面窗口
    if let Some(splash_window) = app_handle.get_webview_window("splashScreen") {
        splash_window.close().unwrap();
    }
}

///
/// 向特定窗口发送事件
/// @param target_label 目标窗口标签
/// @param event_name 事件名称
/// @param payload 事件数据
#[tauri::command]
pub fn emit_to_window(target_label: String, event_name: String, payload: serde_json::Value) {
    let app_handle = get_app_handle().unwrap();

    if let Some(window) = app_handle.get_webview_window(&target_label) {
        window.emit(&event_name, payload).unwrap();
    }
}
