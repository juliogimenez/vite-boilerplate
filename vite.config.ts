import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname: string = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_PUBLIC_PATH } = env
  return {
    base: VITE_PUBLIC_PATH,
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
      include: ['vue', 'vue-router'],
    },
    plugins: [
      vue({
        reactivityTransform: true,
        script: {
          defineModel: true,
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: '~/',
          replacement: `${resolve(__dirname, 'node_modules')}/`,
        },
        {
          find: '@/',
          replacement: `${resolve(__dirname, 'src')}/`,
        },
      ],
      extensions: ['.js', '.json', '.mjs', '.ts', '.vue'],
    },
  }
})
