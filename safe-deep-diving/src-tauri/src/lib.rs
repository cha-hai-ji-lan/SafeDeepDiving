mod utils;

use utils::{
    base::{get_app_path, open_url, read_json_file, write_json_file, set_click_through},
    event::set_app_handle,
    event_server::{set_event_broadcast, show_main_window, emit_to_window},
};
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            set_app_handle(app.handle().clone());
            Ok(())
        })
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            get_app_path,           // 获取应用路径
            open_url,               // 默认浏览器打开链接
            read_json_file,         // 读取 json 文件
            write_json_file,        // 写入 json 文件
            set_click_through,      // 设置点击窗口穿透
            set_event_broadcast,    // 设置事件广播 用于触发某项事件
            show_main_window,       // 显示主窗口
            emit_to_window,         // 向对应窗口传递信息
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
