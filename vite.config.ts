/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin'
import { VitePluginFonts } from 'vite-plugin-fonts'
import { createHtmlPlugin } from 'vite-plugin-html'

import config from './config.js'
import postcss from './postcss.config.js'

const { imagemin } = config

export default defineConfig({
  plugins: [
    react(),
    viteImagemin(imagemin),
    createHtmlPlugin({
      minify: true,
      entry: 'src/main.tsx'
    }),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'CascadiaCodePL',
            src: 'src/assets/fonts/*.woff2'
          }
        ],
        display: 'swap',
        preload: true,
        prefetch: false,
        injectTo: 'head-prepend'
      }
    })
  ],
  css: {
    postcss
  },
  resolve: {
    alias: [
      {
        find: '@/assets',
        replacement: '/src/assets/'
      },
      {
        find: '@',
        replacement: '/src/'
      }
    ]
  }
})
