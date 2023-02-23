import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { //<--- this is the config for vitest
    environment: 'happy-dom'
  }
})