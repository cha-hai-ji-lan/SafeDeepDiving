/**
 * 层级 1
 * 作为程序载入时做基本缓存配置的执行脚本
*/
import { invoke } from "@tauri-apps/api/core";
import {
    appPath, binPath,
    i18nPath, configPath,
    configPathF, defaultConfigPathF,
    cfg, dcfg, appConfig, i18nConfig, coreConfig,
    themeConfig, interfaceConfig,
    lang
} from "./cache.ts";
import { PathUtils, PATH_CONSTANTS } from "./path.ts";

/**
 * 写入配置文件
*/
export const write_config = async () => {
    await invoke("write_json_file", { filePath: configPathF.value, data: cfg.value })
}
/**
 * 重置配置文件
 * 将默认配置文件的内容写入到配置文件中，覆盖原有配置
*/
export const replace_config = async () => {
    dcfg.value = await invoke("read_json_file", { filePath: defaultConfigPathF.value })
    await invoke("write_json_file", { filePath: configPathF.value, data: dcfg.value })
}

export const init_app = async () => {
    await init_app_path()
    await init_config()
    await init_i18n()
    init_color_palette()
}
/**
 * 初始化程序路径
 * 通过调用 Rust 端的 API 获取程序路径，并构建相关的资源路径
 * appPath : 程序根路径
 * binPath : 程序资源路径
 * configPath : 配置文件所在目录路径
 * configPathF : 配置文件路径
 * defaultConfigPathF : 默认配置文件路径
*/
export const init_app_path = async () => {
    appPath.value = await invoke<string>("get_app_path", {})
    binPath.value = await PathUtils.buildResourcePath(appPath.value, PATH_CONSTANTS.BIN_DIR)
    i18nPath.value = await PathUtils.buildResourcePath(binPath.value, PATH_CONSTANTS.I18N_DIR)
    configPath.value = await PathUtils.buildResourcePath(binPath.value, PATH_CONSTANTS.CONFIG_DIR)
    configPathF.value = await PathUtils.buildResourcePath(configPath.value, PATH_CONSTANTS.CONFIG_FILE);
    defaultConfigPathF.value = await PathUtils.buildResourcePath(binPath.value, PATH_CONSTANTS.DEFAULT_CONFIG_FILE);
}

/**
 * 初始化配置
*/
export const init_config = async () => {
    cfg.value = await invoke("read_json_file", { filePath: configPathF.value })
    // 获取软件配置
    appConfig.value = cfg.value["app"]
    // 获取软件核心设置
    coreConfig.value = appConfig.value["core"]
    // 获取软件国际化设置
    i18nConfig.value = appConfig.value["i18n"]
    // 获取主题配置
    themeConfig.value = cfg.value["theme"]
    // 获取界面配置
    interfaceConfig.value = cfg.value["interface"]
}
/**
 * 载入国际化资源
*/
export const init_i18n = async () => {
    let temp_path = await  PathUtils.buildResourcePath(i18nPath.value, `${i18nConfig.value["current-lang"]}.json`)
    lang.value = await invoke("read_json_file", { filePath: temp_path})
}

/**
 * 初始化调色板
*/
export const init_color_palette = async () => {
    // 主题颜色
    document.documentElement.style.setProperty("--ready", `${themeConfig.value["-base"]["ready"]}`)
    document.documentElement.style.setProperty("--normal", `${themeConfig.value["-base"]["normal"]}`)
    document.documentElement.style.setProperty("--warn", `${themeConfig.value["-base"]["warn"]}`)
    document.documentElement.style.setProperty("--err", `${themeConfig.value["-base"]["err"]}`)
    document.documentElement.style.setProperty("--background", `${themeConfig.value[themeConfig.value["current"]]["back-ground"]}`)
    document.documentElement.style.setProperty("--font", `${themeConfig.value[themeConfig.value["current"]]["font"]}`)
    document.documentElement.style.setProperty("--border", `${themeConfig.value[themeConfig.value["current"]]["border"]}`)
    document.documentElement.style.setProperty("--menu", `${themeConfig.value[themeConfig.value["current"]]["menu"]}`)
    document.documentElement.style.setProperty("--but-0", `${themeConfig.value[themeConfig.value["current"]]["button-pro"]}`)
    document.documentElement.style.setProperty("--but-1", `${themeConfig.value[themeConfig.value["current"]]["button-mid"]}`)
    document.documentElement.style.setProperty("--but-2", `${themeConfig.value[themeConfig.value["current"]]["button-bgc"]}`)
    // 界面样式
    document.documentElement.style.setProperty("--b-transparent", `${interfaceConfig.value["base-transparency"]}`)
    document.documentElement.style.setProperty("--w-transparent", `${interfaceConfig.value["weak-transparency"]}`)

}