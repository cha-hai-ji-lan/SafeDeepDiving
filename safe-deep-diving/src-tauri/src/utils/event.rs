//! # 事件模块
//!
//! 分为 初始化事件  运行时事件 清理时事件
//!
//! 初始化事件有:  软件配置项加载事件 three.js初始化事件 opencascade相关事件
//!
use once_cell::sync::OnceCell;
use std::sync::Arc;
use tauri::AppHandle;
use tauri::Emitter;

static APP_HANDLE: OnceCell<Arc<AppHandle>> = OnceCell::new(); // app handle全局实例

///
/// ### 设置app handle
///
/// 用于后续rust向typeScript发送事件
pub fn set_app_handle(handle: AppHandle) {
    let _ = APP_HANDLE.set(Arc::new(handle));
}

///
/// ### 获取app handle
///
/// 用于事件获取软件运行句柄
pub fn get_app_handle() -> Result<&'static Arc<AppHandle>, &'static str> {
    APP_HANDLE.get().ok_or("AppHandle not initialized")
}

// 定义事件负载数据结构
#[derive(Clone, serde::Serialize)]
pub struct SomePayload {
    pub data: String,
}

///
/// ### 配置项初始化事件
///
pub fn send_cfg_init_start(app: &AppHandle) {
    app.emit(
        "cfg-init-start",
        SomePayload {
            data: "配置项开始载入...".to_string(),
        },
    )
        .unwrap();
}
///
/// ### 配置项初始化完成事件
///
pub fn send_cfg_init_ready(app: &AppHandle) {
    app.emit(
        "cfg-init-ready",
        SomePayload {
            data: "配置项载入完成".to_string(),
        },
    )
        .unwrap();
}
///
/// ### 配置项初始化失败事件
///
pub fn send_cfg_init_fail(app: &AppHandle) {
    app.emit(
        "cfg-init-fail",
        SomePayload {
            data: "配置项载入失败".to_string(),
        },
    )
        .unwrap();
}

///
/// ### three.js初始化事件
///
pub fn send_three_init_start(app: &AppHandle) {
    app.emit(
        "three-init-start",
        SomePayload {
            data: "three.js开始初始化...".to_string(),
        },
    )
        .unwrap();
}

///
/// ### three.js初始化完成事件
///
pub fn send_three_init_ready(app: &AppHandle) {
    app.emit(
        "three-init-ready",
        SomePayload {
            data: "three.js初始化完成".to_string(),
        },
    )
        .unwrap();
}
///
/// ### three.js初始化失败事件
///
pub fn send_three_init_fail(app: &AppHandle) {
    app.emit(
        "three-init-fail",
        SomePayload {
            data: "three.js初始化失败".to_string(),
        },
    )
        .unwrap();
}

///
/// ### opencascade 初始化事件
///
pub fn send_oc_init_start(app: &AppHandle) {
    app.emit(
        "oc-init-start",
        SomePayload {
            data: "OpenCasCades 内核开始初始化...".to_string(),
        },
    )
        .unwrap();
}
pub fn send_oc_init_ready(app: &AppHandle) {
    app.emit(
        "oc-init-ready",
        SomePayload {
            data: "OpenCasCades 内核已初始化完毕".to_string(),
        },
    )
        .unwrap();
}
pub fn send_oc_init_fail(app: &AppHandle) {
    app.emit(
        "oc-init-fail",
        SomePayload {
            data: "OpenCasCades 内核初始化失败".to_string(),
        },
    )
        .unwrap();
}
