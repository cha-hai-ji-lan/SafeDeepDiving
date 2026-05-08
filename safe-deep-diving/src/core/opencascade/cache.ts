/**
 * 层级 0
 * 用于储存 Opencascade.js 动态数据
*/
import { ref } from 'vue';
import type { OpenCascadeInstance } from 'opencascade.js';


export const oc  = ref<OpenCascadeInstance>() // 全局变量，存储 OpenCascade 实例