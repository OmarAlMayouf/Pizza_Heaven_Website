import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Pizza_Heaven_Website/',
  plugins: [react()],
})
