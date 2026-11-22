import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages Base URL សម្រាប់ repo: NovaStore
  base: process.env.NODE_ENV === 'production' ? '/NovaStore/' : './',
})
