import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  unocss: false,
  vue: false,
  react: false,
  type: "app",
  ignores: [
    "**/fixtures", // 忽略所有 fixtures 文件夹
    // ... 你可以继续加：dist、node_modules 等
    // 你也可以忽略特定的文件/文件夹
    "**/dist",
    "**/node_modules",
    ".pnpm-store/**", // pnpm 缓存
    "**/migrations/*", // 数据库迁移文件
  ],
  stylistic: {
    indent: 2,
    quotes: "double", // 使用双引号
    semi: true, // 关闭行尾分号
  },
  typescript: true,
});
