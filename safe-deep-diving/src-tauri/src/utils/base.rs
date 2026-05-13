use std::fs;
use open;
use serde_json::Value;
use tauri::Manager;
///
/// ### 获取app路径
///
#[tauri::command]
pub async fn get_app_path(app_handle: tauri::AppHandle) -> Result<String, String> {
    // std::env::current_exe().unwrap().parent().unwrap().to_str().unwrap().to_string()
    let resource_dir = app_handle
        .path()
        .resource_dir()
        .map_err(|e| e.to_string())?;
    let resource_path_str = resource_dir.display().to_string();
    // 修复：正确处理Option类型并返回Result
    let resources_path = resource_path_str
        .get(4..resource_path_str.len())
        .ok_or_else(|| "Failed to extract resource path".to_string())?
        .to_string();

    Ok(resources_path)
}
///
/// 默认浏览器打开 URL
///
#[tauri::command]
pub fn open_url(url: &str) -> Result<(), String> {
    match open::that(url) {
        Ok(_) => Ok(()),
        Err(e) => Err(format!("无法打开 URL: {e}")),
    }
}
///
/// ### 读取json文件
///
#[tauri::command]
pub async fn read_json_file(file_path: String) -> Result<Value, String> {
    let content = fs::read_to_string(file_path).map_err(|e| e.to_string())?;
    let json: Value = serde_json::from_str(&content).map_err(|e| e.to_string())?;
    Ok(json)
}

///
/// ### 写入json文件
///
#[tauri::command]
pub async fn write_json_file(file_path: String, data: Value) -> Result<(), String> {
    let content = serde_json::to_string_pretty(&data).map_err(|e| e.to_string())?;
    fs::write(file_path, content).map_err(|e| e.to_string())?;
    Ok(())
}


///
/// ### 设置窗口穿透
///
#[tauri::command]
pub fn set_click_through(window: tauri::Window, ignore: bool) {
    let _ = window.set_ignore_cursor_events(ignore);
}
