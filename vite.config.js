import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For Netlify deployment (root domain)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
