import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ប្រើ base: './' ដើម្បីឱ្យដើរលើគ្រប់ Repo (Webyansh, NovaStore)
  base: './',
})
