# tao-studio

涛-设计 / T-design — 个人室内设计作品集网站。

基于 [Astro](https://astro.build/) + Tailwind CSS,双语(中文/英文)。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 生产构建到 ./dist
npm run preview  # 预览生产构建
```

## 目录结构

- `src/pages/zh/` — 中文页面
- `src/pages/en/` — 英文页面
- `src/components/` — 复用组件(Nav、HomeSlideshow、WorksList ...)
- `src/data/projects.ts` — 项目数据
- `src/data/i18n.ts` — 双语文案
- `src/styles/global.css` — 全站样式
- `public/works/<slug>/` — 各项目图片资源
