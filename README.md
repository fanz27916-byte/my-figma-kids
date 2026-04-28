# Kids Toys & Games Store Website

基于 Figma 设计的高保真 Vue 3 项目

## Figma 设计链接
- **设计文件**: https://www.figma.com/design/DS0PS1MP6l9cYFCqyaryTp/Webpage-Template---Kids-Toys---Games-Store-Website--Community-?node-id=0-1&p=f&t=HpsvtRswMcc2UlIA-0
- **文件ID**: DS0PS1MP6l9cYFCqyaryTp

## 项目特点

### 🎨 设计规范
- **主色**: #FF6B8B (粉色)
- **辅色**: #4ECDC4 (青色)
- **强调色**: #FFD166 (黄色)
- **深色**: #2D3047 (深蓝)
- **背景色**: #F9F9F9 (浅灰)
- **字体**: Poppins (正文) + Comic Neue (标题)

### 🚀 技术栈
- **Vue 3** - Composition API
- **TypeScript** - 类型安全
- **Vite** - 快速构建工具
- **Vue Router** - 路由管理
- **CSS3** - 现代样式 (Flexbox, Grid, CSS Variables)

### 📱 响应式设计
- **桌面端**: 1200px+
- **平板端**: 768px - 1199px
- **手机端**: 480px - 767px
- **小手机**: < 480px

### 🎯 功能特性
1. **响应式导航栏** - 适配所有设备
2. **英雄区域** - 吸引人的主视觉
3. **分类展示** - 4个特色分类卡片
4. **产品展示** - 4个特色产品卡片
5. **关于我们** - 特色服务展示
6. **页脚** - 联系信息和社交媒体链接

## 项目结构

```
my-figma-kids/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 可复用组件
│   ├── data/           # 数据文件
│   │   └── figma-mock-data.ts  # Figma 设计数据
│   ├── router/         # 路由配置
│   ├── styles/         # 样式文件
│   │   └── main.css    # 主样式文件
│   ├── views/          # 页面组件
│   │   └── HomeView.vue # 主页组件
│   ├── App.vue         # 根组件
│   └── main.ts         # 应用入口
├── index.html          # HTML 入口
├── package.json        # 项目配置
├── vite.config.ts      # Vite 配置
├── tsconfig.json       # TypeScript 配置
└── README.md           # 项目说明
```

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## Figma 数据集成

项目包含 Figma 设计数据的模拟结构，可以轻松替换为真实的 Figma API 数据：

```typescript
// src/data/figma-mock-data.ts
export const figmaDesign = {
  name: "Kids Toys & Games Store Website",
  colors: ["#FF6B8B", "#4ECDC4", "#FFD166", "#2D3047"],
  fonts: ["Poppins (400) 16px", "Comic Neue (700) 48px"],
  layout: {
    header: { /* ... */ },
    hero: { /* ... */ },
    categories: [ /* ... */ ],
    products: [ /* ... */ ],
    about: { /* ... */ },
    footer: { /* ... */ }
  }
};
```

## 设计原则

### 1:1 设计还原
- 严格遵循 Figma 设计稿的颜色、字体和间距
- 像素级精度还原设计细节
- 保持设计的一致性和完整性

### 响应式适配
- 使用 CSS Grid 和 Flexbox 实现响应式布局
- 移动端优先的设计理念
- 平滑的过渡动画和交互效果

### 性能优化
- 按需加载组件
- 图片懒加载
- CSS 代码分割
- 生产环境构建优化

## 开发计划

### 第一阶段 ✅
- [x] 项目基础结构
- [x] Vue 3 + TypeScript 配置
- [x] 响应式布局系统
- [x] 设计规范定义

### 第二阶段 🔄
- [ ] 集成 Figma API 获取真实设计数据
- [ ] 替换模拟数据为真实设计数据
- [ ] 添加图片资源
- [ ] 优化性能

### 第三阶段 📋
- [ ] 添加购物车功能
- [ ] 实现产品筛选和搜索
- [ ] 添加用户认证
- [ ] 集成支付网关

## 设计细节

### 色彩系统
```css
:root {
  --color-primary: #FF6B8B;    /* 主色 - 粉色 */
  --color-secondary: #4ECDC4;  /* 辅色 - 青色 */
  --color-accent: #FFD166;     /* 强调色 - 黄色 */
  --color-dark: #2D3047;       /* 深色 - 深蓝 */
  --color-light: #F9F9F9;      /* 浅色 - 浅灰 */
}
```

### 字体系统
```css
:root {
  --font-primary: 'Poppins', sans-serif;      /* 正文字体 */
  --font-secondary: 'Comic Neue', cursive;    /* 标题字体 */
}
```

### 间距系统
```css
:root {
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
}
```

## 许可证

MIT License - 详见 LICENSE 文件

## 联系信息

如有问题或建议，请通过以下方式联系：
- **GitHub Issues**: [提交问题](https://github.com/fanz27916-byte/my-figma-kids/issues)
- **邮箱**: hello@kidztoys.com
- **电话**: (123) 456-7890

---

**注意**: 此项目基于 Figma 设计稿创建，设计版权归原作者所有。本项目仅用于学习和演示目的。