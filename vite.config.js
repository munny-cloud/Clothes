import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // កំណត់ base សម្រាប់ GitHub Pages (Repository: Technova)
  // ការប្រើ './' ធានាថា assets ដើរទាំងនៅលើ GitHub Pages និង Local
  base: process.env.GITHUB_PAGES ? '/Technova/' : './',
})
