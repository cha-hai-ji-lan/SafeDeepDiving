mod utils;

use utils::base::{get_app_path, read_json_file, write_json_file};
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_fs::init())
        .invoke_handler(tauri::generate_handler![
            get_app_path,       // 获取应用路径
            read_json_file,     // 读取 json 文件
            write_json_file,    // 写入 json 文件
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
