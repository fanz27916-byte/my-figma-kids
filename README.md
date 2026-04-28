# Kids Toys & Games Store Website

基于 Figma 设计的高保真 Vue 3 项目

## 🎨 Figma 设计规范

### 颜色系统 (来自 Figma 设计令牌)
- **主色**: `#FF7B4D` (橙色 - Vector 2)
- **辅色**: `#60BFB2` (青色 - Vector 3)
- **强调色**: `#FFB54A` (黄色 - Vector 6)
- **背景色**: `#FFE1CC` (浅橙色 - BG)
- **文字主色**: `#332623` (深棕色 - Lorem ipsum)
- **文字深色**: `#000000` (黑色 - CONTACT/SERVICES/ABOUT US)
- **文字浅色**: `#FFFFFF` (白色)

### 设计令牌
```json
{
  "Lorem ipsum dolor sit amet...": "#332623",
  "Kids": "#332623",
  "CONTACT": "#000000",
  "SERVICES": "#000000",
  "ABOUT US": "#000000",
  "TOYS & GAMES STORE": "#332623",
  "BG": "#FFE1CC",
  "Vector 2": "#FF7B4D",
  "Vector 3": "#60BFB2",
  "Vector 4": "#FF7B4D",
  "Vector 6": "#FFB54A"
}
```

### 字体系统
- **标题字体**: 'Comic Neue', cursive (儿童友好字体)
- **正文字体**: 'Poppins', sans-serif (清晰易读)
- **字体大小**: 响应式设计，适配所有设备

### 设计特点
- **儿童友好配色**: 橙色、青色、黄色组合，营造活泼氛围
- **响应式布局**: 移动端优先，适配所有屏幕尺寸
- **交互效果**: 悬停动画、按钮反馈、卡片动画
- **组件化设计**: 模块化组件，易于维护和扩展

## 🚀 技术栈
- **Vue 3** - Composition API
- **TypeScript** - 类型安全
- **Vite** - 快速构建工具
- **Vue Router** - 路由管理
- **CSS3** - 现代样式 (Flexbox, Grid, CSS Variables)
- **Font Awesome** - 图标库

## 📱 响应式设计
- **桌面端**: 1200px+
- **平板端**: 768px - 1199px
- **手机端**: 480px - 767px
- **小手机**: < 480px

## 🎯 功能特性
1. **响应式导航栏** - 适配所有设备
2. **英雄区域** - 吸引人的主视觉，基于 Figma 设计令牌
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
│   │   ├── figma-mock-data.ts       # Figma 设计数据
│   │   └── figma-design-system.json # Figma 设计系统
│   ├── router/         # 路由配置
│   ├── styles/         # 样式文件
│   │   ├── main.css            # 主样式文件
│   │   └── design-system.css   # 设计系统 CSS 变量
│   ├── types/          # TypeScript 类型定义
│   │   └── design-system.ts   # 设计系统类型
│   ├── views/          # 页面组件
│   │   └── HomeView.vue # 主页组件
│   ├── App.vue         # 根组件
│   └── main.ts         # 应用入口
├── scripts/
│   └── fetch-figma-design.js  # Figma 数据获取脚本
├── figma-design-tokens.json   # Figma 设计令牌文件
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

## 🎨 设计系统集成

### CSS 变量
项目使用 CSS 变量实现设计系统：
```css
:root {
  --color-primary: #FF7B4D;
  --color-secondary: #60BFB2;
  --color-accent: #FFB54A;
  --color-background: #FFE1CC;
  --color-text-primary: #332623;
  --color-text-dark: #000000;
  --color-text-light: #FFFFFF;
  /* ... 更多变量 */
}
```

### 组件样式
- **按钮**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-accent`
- **卡片**: `.card` 带悬停效果
- **图标**: `.icon`, `.icon-primary`, `.icon-secondary`, `.icon-accent`
- **导航**: `.nav-link` 带激活状态
- **间距**: 使用 `--spacing-*` 变量

### 响应式设计
- 使用 CSS Grid 和 Flexbox 实现响应式布局
- 移动端优先的设计理念
- 平滑的过渡动画和交互效果

## 🔧 开发说明

### Figma 设计令牌解析
项目包含一个脚本用于解析 Figma 设计令牌：
```bash
node scripts/parse-figma-tokens.js
```

该脚本会：
1. 解析 `figma-design-tokens.json` 文件
2. 生成设计系统配置 (`src/data/figma-design-system.json`)
3. 创建 CSS 变量文件 (`src/styles/design-system.css`)
4. 生成 TypeScript 类型定义 (`src/types/design-system.ts`)

### 设计系统更新
当 Figma 设计令牌更新时：
1. 替换 `figma-design-tokens.json` 文件
2. 运行解析脚本
3. 检查并更新组件样式

### 性能优化
- 按需加载组件
- CSS 代码分割
- 生产环境构建优化
- 图片懒加载

## 📁 文件说明

### `figma-design-tokens.json`
Figma 设计令牌文件，包含：
- 颜色值
- 文本样式
- 设计规范

### `src/data/figma-design-system.json`
自动生成的设计系统配置，包含：
- 颜色系统
- 字体系统
- 间距系统
- 圆角系统
- 阴影系统

### `src/styles/design-system.css`
基于设计系统生成的 CSS 变量，确保设计一致性。

### `src/types/design-system.ts`
TypeScript 类型定义，提供类型安全的设计系统访问。

## 🚀 部署

### GitHub Pages
```bash
npm run build
# 将 dist 目录部署到 GitHub Pages
```

### Vercel / Netlify
- 连接 GitHub 仓库
- 自动部署主分支
- 使用默认构建命令

## 📝 许可证

MIT License - 详见 LICENSE 文件

## 📞 联系信息

如有问题或建议，请通过以下方式联系：
- **GitHub Issues**: [提交问题](https://github.com/fanz27916-byte/my-figma-kids/issues)
- **邮箱**: hello@kidstoysstore.com
- **电话**: (123) 456-7890

---

**注意**: 此项目基于 Figma 设计稿创建，设计版权归原作者所有。本项目仅用于学习和演示目的。

## 🎯 下一步开发

### 待完成功能
1. **购物车功能** - 添加商品到购物车
2. **产品筛选** - 按类别、价格、评分筛选
3. **搜索功能** - 产品搜索
4. **用户认证** - 登录/注册系统
5. **结账流程** - 完整的购物流程

### 设计改进
1. **添加实际图片** - 替换占位符为真实玩具图片
2. **动画效果** - 添加更多微交互
3. **暗色模式** - 支持暗色主题
4. **无障碍访问** - 提升可访问性

### 性能优化
1. **图片优化** - 使用 WebP 格式和懒加载
2. **代码分割** - 按路由分割代码
3. **服务端渲染** - 考虑 SSR 提升首屏加载
4. **PWA 支持** - 添加离线功能