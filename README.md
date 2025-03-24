# React plugin bundler kit

React插件打包套件

## Install

- pnpm

  ```bash
  pnpm add -D @woqie-dev/react-plugin-bundler-kit
  ```
- yarn

  ```bash
  yarn add -D @woqie-dev/react-plugin-bundler-kit
  ```
- npm

  ```bash
  npm i -D @woqie-dev/react-plugin-bundler-kit
  ```

## Usages


- vite

  ```typescript
  // vite.config.ts
  import { defineConfig } from "vite";
  import { viteBundlerKit } from "@woqie-dev/react-plugin-bundler-kit"; // 1. import the plugin
    
  export default defineConfig({
    plugins: [react(), viteBundlerKit()],
  });
  ```
## Deploy

> 在您的项目中为您的插件执行打包之后会在根结点创建 `build` 文件夹 其中 `main.js` 就是 `一个完整的 React 前端插件`.