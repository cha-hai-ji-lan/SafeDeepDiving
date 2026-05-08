/**
 *  层级 1
 *  公共方法脚本, 用于各组件间使用共性的方法
*/
import { welcome_inter_ctr, tools_state, tool_bar_state } from './cache';
import { file_path, open_file_dialog } from './io';
import { PathUtils } from "./path";
import { load_obj } from './three/io'
import { load_step } from './opencascade/init'

/**
 * 导入模型分配器
 * 
 * 支持模型 obj, stp
*/

export const module_loader = async (load_mode: number = 0) => {
    switch (load_mode) {
        case 0:  // 读取单个模型文件
            await open_file_dialog()
            if (file_path.value) {
                let ext = await PathUtils.getFileExt(file_path.value)
                console.log(ext)
                switch (ext) {
                    case "obj":
                        load_obj(file_path.value)
                        break;
                    case "__storage__.stp":  // 暂存 stp读取方法
                        load_step(file_path.value)
                        break;
                    default:
                        break;
                }  
            }
            break;
        default:
            break;
    }
}
// /**
//  * 导入模型 目前支持 OBJ
// */
// export const import_model_file = async () => {
//     await open_file_dialog()
//     if (file_path.value) {
//         load_obj(file_path.value)

//     }
// }
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
    if (bar_name === "__FOCUS_BAR__") return // 这里未来应该有一个报错
    console.log(bar_name)
    tools_state[bar_name]["delay-hide"] = true
    setTimeout(() => {
        tools_state[bar_name]["show"] = false
        tools_state[bar_name]["moved"] = false
        tools_state[bar_name]["icon-size"] = 1
        tools_state[bar_name]["delay-hide"] = false
    }, delay_time)

}

/**
 * 打开对应工具模块
*/

export const open_bar = (bar_name: string) => {
    tool_bar_state[bar_name]["ref-obj"].value.style.left = `${tool_bar_state['queue']['x'][0]}vmin`
    tool_bar_state[bar_name]["ref-obj"].value.style.top = `${tool_bar_state['queue']['y'][0]}vmin`
    tool_bar_state['queue']['y'].push(tool_bar_state['queue']['y'][0] + 5)
    // if(tool_bar_state['queue']['y'][0] > 80){
    //     tool_bar_state['queue']['x'][0] += 10

    // }
}