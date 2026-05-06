/**
 * 层级 0
 * 作为程序缓存脚本,只能被调用
*/
import { ref, reactive } from "vue";

/**
 * 软件内联文件路径
*/
export const appPath = ref<string>("__APP_PATH__")                              // 软件所在路径
export const binPath = ref<string>("__BIN_PATH__")                              // 软件资源路径
export const i18nPath = ref<string>("__I18N_PATH__")                            // 软件国际化资源路径
export const configPath = ref<string>("__CONFIG_PATH__")                        // 配置文件所在目录路径
export const configPathF = ref<string>("__CONFIG_FILE_PATH__")                  // 配置文件路径
export const defaultConfigPathF = ref<string>("__DEFAULT_CONFIG_FILE_PATH__")   // 默认配置文件路径

export const lang = ref<any>("__CURRENT_LANGUAGE__")                            // 当前语言

/**
 * config相关对象
*/
export const cfg = ref<any>()                   // 配置文件
export const dcfg = ref<any>()                  // 默认配置
export const appConfig = ref<any>()             // 软件配置
export const coreConfig = ref<any>()            // 核心配置
export const i18nConfig = ref<any>()            // 国际化配置
export const themeConfig = ref<any>()           // 主题配置
export const interfaceConfig = ref<any>()       // 界面配置

/**
 * 状态参数
 * 
 * 用于保存 一些状态标志 
 * 
 * 例如: 某个按钮的打开与关闭
*/
export const welcome_inter_ctr = reactive({ "show-inter": true , "delay-hide": false})
export const base_icon_ctr = reactive({ "maximize": "maximize-0", "pin": "pin-0" })  // 控制窗口最大化和钉住屏幕图标 用于[App.vue]
export const ele_state = reactive({ "enter-title-bar": false })  // 控制当前是否悬停在关闭栏 用于[App.vue]

export const tools_state = reactive({ 
    "show-tool": false, 
    "rw-file": {
        "show":false,
        "moved": false,  // 是否移动过
        "icon-size":1,    // 未移动前图标大小
        "delay-hide": false  // 延迟隐藏
    }})  // 控制 tools 的状态 用于[Tools.vue]

/**
 * 工具栏位置参数
 * 
 * 为保证能跟随屏幕变化 都以 vmin 做单位 有特殊单位则在后续标注
*/
export const tool_bar_state = reactive({
    "rw-file":{"x-vmin":0, "y-vmin":0}
})