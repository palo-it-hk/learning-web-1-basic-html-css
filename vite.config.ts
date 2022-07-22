import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import handlebars from "vite-plugin-handlebars";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import Icons from 'unplugin-icons/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    "compilerOptions": {
      "types": ["vite/client"]
    },
    // build: {
    //   rollupOptions: {
    //     input: {
    //       main: resolve(__dirname, "index.html"),
    //       about: resolve(__dirname, "about/index.html"),
    //     },
    //   },
    // },
    plugins: [
      ViteMinifyPlugin(),
      Icons({
        compiler: 'raw',
      }),
    ],
  };
});
