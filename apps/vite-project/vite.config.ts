import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        api: "legacy"
      }
    }
  },
  build: {
    cssCodeSplit: true
  },
  resolve: {
    alias: {
      "@acme/ui": path.resolve(__dirname, "../../packages/ui"),
    },
  },
})
