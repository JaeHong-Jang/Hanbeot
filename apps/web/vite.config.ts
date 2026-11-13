/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: {
    proxy: { '/api': { target: 'http://localhost:8000', changeOrigin: true, rewrite: (p) => p.replace(/^\/api/, '') } },
    // WSL에서 Windows 디스크(/mnt/c)의 파일은 inotify 알림이 오지 않아 폴링으로 감시해야 바뀐 코드가 반영된다
    watch: process.cwd().startsWith('/mnt/') ? { usePolling: true, interval: 700 } : undefined,
  },
  test: { environment: 'jsdom', globals: true, setupFiles: ['./src/test-setup.ts'], css: false },
});
