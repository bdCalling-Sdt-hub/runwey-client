import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from "vite-plugin-rewrite-all";


export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  server: {
    host: "103.145.138.78",
    port: "3004",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});