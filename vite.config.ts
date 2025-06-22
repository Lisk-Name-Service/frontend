import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import Sitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';


const routes = ['/', '/dev-portal']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		react(),
		createHtmlPlugin({
      inject: {
        data: {
          title: 'Lisk Name Service',
          description: 'LNS makes blockchain identity readable and usable across the Lisk Ecosystem',
        },
      },
    }),
    Sitemap({
      hostname: 'https://lisk-name-server.vercel.app',
      dynamicRoutes: routes,
      generateRobotsTxt: true,
    }),
	],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
	rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
	},
  },
})
