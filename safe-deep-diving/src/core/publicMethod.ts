/**
 *  层级 1
 *  公共方法脚本, 用于各组件间使用共性的方法
*/
import { coreConfig, interface_state, tools_state, tool_bar_state } from './cache';
import { file_path, open_file_dialog } from './io';
import { PathUtils } from "./path";
// 存在环
import { load_obj } from './three/io'
import { load_step } from './opencascade/init'

let clickTimer: number | null = null;  // 单双击切换计时器
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
                console.log(ext.toLowerCase())
                if(!coreConfig.value['support-import-format'].includes(ext.toLowerCase())){
                    console.error("不支持的导入格式")
                    return
                }
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

/**
 * 关闭欢迎界面
*/
export const close_inter = () => {
    interface_state['welcome']["delay-hide"] = true;
    setTimeout(() => {
        interface_state['welcome']["show"] = false;
        interface_state['welcome']["delay-hide"] = false;

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

export const handleClick = (callback: () => void) => {
    if (clickTimer) {
        // 如果定时器存在，说明这是第二次点击，清除定时器，等待 dblclick 触发
        clearTimeout(clickTimer);
        clickTimer = null;
    } else {
        // 第一次点击，设置定时器
        clickTimer = window.setTimeout(() => {
            callback()  // 回调传递的方法
            console.log('确认为单击');
            // 执行单击逻辑
            clickTimer = null;
        }, 250); // 延迟时间略小于浏览器默认双击间隔
    }
};

export const handleDoubleClick = (callback: () => void) => {
    // 双击触发时，清除单击的定时器，防止单击逻辑执行
    if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
    }
    callback()  // 回调传递的方法
    console.log('确认为双击');
    // 执行双击逻辑
};