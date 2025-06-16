import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    https: {
      key: process.env.SSL_KEY_PATH,
      cert: process.env.SSL_CERT_PATH,
      passphrase: process.env.SSL_PASSPHRASE
    },
    http2: true // 启用 HTTP/2
  }
})
