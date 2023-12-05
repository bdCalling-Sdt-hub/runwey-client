import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from "vite-plugin-rewrite-all";


export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  server: {
    host: "192.168.10.17",
    port: "3004",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});