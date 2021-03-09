const path = require('path')
import vue from '@vitejs/plugin-vue'

module.exports = {
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-hotkey-v3": path.resolve(__dirname, "./dist/vue-hotkey-v3.es.js"),
    }
  },
  build: {
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, './src/libs/hotkeys.ts'),
      name: 'VueHotkeys',
      formats: ['es','cjs','umd', 'iife']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
}