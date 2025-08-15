import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/le-peril/',  // <-- 🔴 change this to your repo name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})