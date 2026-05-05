import {ref } from 'vue';
import { open } from '@tauri-apps/plugin-dialog';
import { coreConfig } from "./cache.ts";
export const file_path = ref<string | null>("__NULL_FILE_PATH__")
export const files_path = ref<string[] | null>(["__NULL_FILES_PATH__"])
export const folder_path = ref<string | null>("__NULL_FOLDER_PATH__")
export const folders_path = ref<string[] | null>(["__NULL_FOLDERS_PATH__"])

export const open_file_dialog = async () =>{
    file_path.value = await open({
        title: "选取文件",
        multiple: false,
        directory: false,
        filters: [{
          name: 'All Files',
          extensions: ['*']
        }],
        defaultPath: coreConfig.value["input-path"]
      });

}
export const open_files_dialog = async () =>{
    files_path.value = await open({
        title: "选取文件",
        multiple: true,
        directory: false,
        filters: [{
          name: 'All Files',
          extensions: ['*']
        }],
        defaultPath: coreConfig.value["input-path"]
      });

}
export const open_folder_dialog = async () =>{
    folder_path.value = await open({
        title: "选取文件",
        multiple: false,
        directory: true,
        filters: [{
          name: 'All Files',
          extensions: ['*']
        }],
        defaultPath: coreConfig.value["input-path"]
      });

}
export const open_folders_dialog = async () =>{
    folders_path.value = await open({
        title: "选取文件",
        multiple: true,
        directory: true,
        filters: [{
          name: 'All Files',
          extensions: ['*']
        }],
        defaultPath: coreConfig.value["input-path"]
      });

}
