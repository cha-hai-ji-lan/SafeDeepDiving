/**
 * 层级 0
 * 作为程序缓存脚本,只能被调用
*/
import { ref } from "vue";

/**
 * 软件内联文件路径
*/
export const appPath = ref<string>("__APP_PATH__")
export const binPath = ref<string>("__BIN_PATH__")
export const configPath = ref<string>("__CONFIG_PATH__")
export const configPathF = ref<string>("__CONFIG_FILE_PATH__")
export const defaultConfigPathF = ref<string>("__DEFAULT_CONFIG_FILE_PATH__")

/**
 * config相关对象
*/
export const cfg = ref<any>()                   // 配置文件
export const dcfg = ref<any>()                  // 默认配置
export const appConfig = ref<any>()             // 软件配置
export const coreConfig = ref<any>()            // 核心配置
export const themeConfig = ref<any>()           // 主题配置
export const interfaceConfig = ref<any>()       // 界面配置
