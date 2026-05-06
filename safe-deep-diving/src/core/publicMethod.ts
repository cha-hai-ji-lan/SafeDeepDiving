/**
 *  层级 1
 *  公共方法脚本, 用于各组件间使用共性的方法
*/
import { welcome_inter_ctr, tools_state } from '../core/cache';
import { file_path, open_file_dialog } from '../core/io';

import { load_obj } from '../core/three/fileIO'
/**
 * 导入模型 目前支持 OBJ
*/
export const import_model_file = async () => {
    await open_file_dialog()
    if (file_path.value) {
        load_obj(file_path.value)

    }
}
/**
 * 关闭欢迎界面
*/
export const close_inter = () => {
    welcome_inter_ctr["delay-hide"] = true;
    setTimeout(() => {
        welcome_inter_ctr["show-inter"] = false;
        welcome_inter_ctr["delay-hide"] = false;

    }, 250)
}

/**
 * 关闭对应工具模块
*/

export const close_bar = (bar_name: string, delay_time: number = 200) => {
    tools_state[bar_name]["delay-hide"] = true
    setTimeout(() => {
        tools_state[bar_name]["show"] = false
        tools_state[bar_name]["moved"] = false
        tools_state[bar_name]["icon-size"] = 1
        tools_state[bar_name]["delay-hide"] = false
    }, delay_time)

}