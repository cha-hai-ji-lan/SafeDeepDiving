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
/// ### 服务端启动事件
///
/// cli-connect
///
/// 用于在前端提示开始连接CAD实例
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
