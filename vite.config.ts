import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_PUBLIC_PATH } = env
  return {
    base: VITE_PUBLIC_PATH,
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
      extensions: ['.js', '.json', '.mjs', '.ts', '.vue'],
    },
    build: {
      minify: 'esbuild',
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
          },
          plugins: [],
        },
      },
      target: 'esnext',
    },
    optimizeDeps: {
      include: [],
    },
  }
})
