import { Plugin } from "vite";
import fs from "fs";

function viteBundlerKit(): Plugin {
  return {
    name: "woqie-react-plugin-bundler-kit",
    config(config) {

      const outDir = "/build";

      // fixme: allow user to config manifest path
      const manifest = JSON.parse(
        fs.readFileSync("./manifest.json", "utf8")
      );

      return {
        ...config,
        define: {
          "process.env": process.env,
        },
        build: {
          outDir,
          emptyOutDir: true,
          lib: {
            entry: "src/main.tsx",
            name: manifest.metadata.name,
            formats: ["iife"],
            fileName: () => "main.js",
          },
          rollupOptions: {
            external: [
              'react', 'react-dom'
            ],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
              extend: true,
            },
          },
        },
      };
    },
  } as Plugin;
}

export { viteBundlerKit };