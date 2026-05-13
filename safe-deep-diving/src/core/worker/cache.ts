import { ref } from "vue";
/**
 * 多线程操作对象
 * 注意子线程无法操作 DOM 树
 * 所以所有直接或间接操作 DOM 树的操作都需要放在 Worker 外即放在主线程中操作
*/
export let occtWorker = ref<Worker | null>(null);  // 用于opencascade.js的子线程