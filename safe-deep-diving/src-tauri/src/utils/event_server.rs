use crate::utils::event;
use event::{get_app_handle, send_oc_init_ready};

pub fn set_broadcast(event_name: &str) {
    let app_handle = get_app_handle().unwrap();
    match event_name {
        "oc-init-ready" => send_oc_init_ready(app_handle),
        _ => {}
    }
}
