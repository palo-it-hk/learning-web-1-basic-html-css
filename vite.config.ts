import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        define: {
            __APP_ENV__: env.APP_ENV
        },
        build: {
            rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'src/pages/about/about.html')
            }
            }
        },
        plugins: [handlebars({
            partialDirectory: resolve(__dirname, 'src/partials'),
        })],
    }
})