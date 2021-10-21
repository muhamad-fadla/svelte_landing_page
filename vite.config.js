import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';
import htmlMinimize from '@sergeymakinen/vite-plugin-html-minimize'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		htmlMinimize({
	      filter: /\.x?html?$/
	    })
	],
	build: {
		minify: process.env.NODE_ENV == "production",
		assetsInlineLimit: 0,
	    // outDir: path.join(__dirname, 'dist', '__berselancar')
	},

  	optimizeDeps: { exclude: ["svelte-navigator"] },

  	resolve: {
	    alias: {
	      	'@': path.resolve(__dirname, '/src'),
	      	'@component': path.resolve(__dirname, '/src/components'),
	      	'@asset': path.resolve(__dirname, '/src/assets'),
	      	'@view': path.resolve(__dirname, '/src/views')
	    },
  	}
})
