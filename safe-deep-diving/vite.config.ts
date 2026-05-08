import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import wasm from 'vite-plugin-wasm'; // 引入插件
import topLevelAwait from 'vite-plugin-top-level-await'; // 很多 wasm 需要 top-level awai

// @ts-expect-error process is a nodejs global
const host = process.env.TAURI_DEV_HOST;

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [
    vue(),
    // wasm(),
    topLevelAwait() // 添加这个插件，通常与 vite-plugin-wasm 配合使用
  ],// 使用插件
  optimizeDeps: {
    exclude: ['opencascade.js'], // 如果有特定的 opencascade 包，可能需要排除预构建
    // 强制预构建时忽略 wasm 文件的深度分析
    needsInterop: ['opencascade.js']
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  build: {
    target: 'esnext', // 确保支持顶层 await，如果后续需要
    rollupOptions: {
      external: [],
      output: {
        manualChunks: {
          opencascade: ['opencascade.js']
        }
      }
    },
    // 关键：将 .wasm 文件视为资产，而不是模块
    assetsInlineLimit: 0,
  },
  // 关键：告诉 Vite 如何处理 .wasm 文件
  assetsInclude: ['**/*.wasm'],
}));
