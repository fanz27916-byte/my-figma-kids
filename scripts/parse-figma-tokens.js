#!/usr/bin/env node

/**
 * 解析 Figma 设计令牌 JSON 文件
 * 生成 Vue 项目所需的设计系统
 */

const fs = require('fs');
const path = require('path');

// 读取设计令牌文件
const tokensPath = path.join(__dirname, '..', 'figma-design-tokens.json');
const tokens = require(tokensPath);

console.log('🎨 分析 Figma 设计令牌...');

// 提取颜色系统
const colors = {};
const textStyles = {};

tokens.forEach(token => {
  const key = Object.keys(token)[0];
  const value = token[key].value;
  
  if (key.includes('BG') || key.includes('Vector')) {
    // 这是背景或形状颜色
    colors[key] = value;
  } else if (key.includes('CONTACT') || key.includes('SERVICES') || key.includes('ABOUT US')) {
    // 这是导航链接
    textStyles[key] = {
      color: value,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    };
  } else if (key.includes('Kids') || key.includes('TOYS & GAMES STORE')) {
    // 这是标题
    textStyles[key] = {
      color: value,
      fontWeight: 'bold',
      fontSize: key === 'Kids' ? '3rem' : '2rem'
    };
  } else if (key.includes('Lorem ipsum')) {
    // 这是正文文本
    textStyles['body'] = {
      color: value,
      fontSize: '1rem',
      lineHeight: '1.6'
    };
  }
});

// 创建设计系统配置
const designSystem = {
  name: "Kids Toys & Games Store",
  colors: {
    primary: colors['Vector 2'] || '#FF7B4D', // 橙色
    secondary: colors['Vector 3'] || '#60BFB2', // 青色
    accent: colors['Vector 6'] || '#FFB54A', // 黄色
    background: colors['BG'] || '#FFE1CC', // 浅橙色背景
    textPrimary: textStyles['Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.']?.color || '#332623',
    textSecondary: textStyles['Kids']?.color || '#332623',
    textDark: '#000000',
    textLight: '#FFFFFF'
  },
  typography: {
    fontFamily: {
      heading: "'Comic Neue', cursive, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      body: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    },
    sizes: {
      h1: '3rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem',
      body: '1rem',
      small: '0.875rem'
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px'
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  components: {
    button: {
      primary: {
        backgroundColor: colors['Vector 2'] || '#FF7B4D',
        color: '#FFFFFF',
        padding: '12px 24px',
        borderRadius: '8px'
      },
      secondary: {
        backgroundColor: colors['Vector 3'] || '#60BFB2',
        color: '#FFFFFF',
        padding: '12px 24px',
        borderRadius: '8px'
      }
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },
    header: {
      backgroundColor: '#FFFFFF',
      textColor: textStyles['CONTACT']?.color || '#000000'
    }
  },
  layout: {
    container: {
      maxWidth: '1200px',
      padding: '0 16px',
      margin: '0 auto'
    },
    grid: {
      columns: 12,
      gap: '24px'
    }
  }
};

// 保存设计系统
const outputPath = path.join(__dirname, '..', 'src', 'data', 'figma-design-system.json');
fs.writeFileSync(outputPath, JSON.stringify(designSystem, null, 2), 'utf8');

console.log('✅ 设计系统已生成:');
console.log(`📁 文件路径: ${outputPath}`);
console.log('\n🎨 颜色系统:');
Object.entries(designSystem.colors).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});

console.log('\n📝 文本样式:');
Object.entries(textStyles).forEach(([key, value]) => {
  console.log(`  ${key}: ${JSON.stringify(value)}`);
});

console.log('\n🚀 下一步:');
console.log('1. 更新 CSS 变量以匹配设计系统');
console.log('2. 修改 Vue 组件使用正确的颜色');
console.log('3. 调整字体和间距');
console.log('4. 实现响应式布局');

// 生成 CSS 变量文件
const cssVariables = `
/* Figma 设计系统 CSS 变量 */
:root {
  /* 颜色系统 */
  --color-primary: ${designSystem.colors.primary};
  --color-secondary: ${designSystem.colors.secondary};
  --color-accent: ${designSystem.colors.accent};
  --color-background: ${designSystem.colors.background};
  --color-text-primary: ${designSystem.colors.textPrimary};
  --color-text-secondary: ${designSystem.colors.textSecondary};
  --color-text-dark: ${designSystem.colors.textDark};
  --color-text-light: ${designSystem.colors.textLight};
  --color-white: #FFFFFF;
  --color-light: #F9F9F9;
  
  /* 字体系统 */
  --font-heading: ${designSystem.typography.fontFamily.heading};
  --font-body: ${designSystem.typography.fontFamily.body};
  
  /* 字体大小 */
  --font-size-h1: ${designSystem.typography.sizes.h1};
  --font-size-h2: ${designSystem.typography.sizes.h2};
  --font-size-h3: ${designSystem.typography.sizes.h3};
  --font-size-h4: ${designSystem.typography.sizes.h4};
  --font-size-body: ${designSystem.typography.sizes.body};
  --font-size-small: ${designSystem.typography.sizes.small};
  
  /* 字体粗细 */
  --font-weight-regular: ${designSystem.typography.weights.regular};
  --font-weight-medium: ${designSystem.typography.weights.medium};
  --font-weight-bold: ${designSystem.typography.weights.bold};
  
  /* 间距系统 */
  --spacing-xs: ${designSystem.spacing.xs};
  --spacing-sm: ${designSystem.spacing.sm};
  --spacing-md: ${designSystem.spacing.md};
  --spacing-lg: ${designSystem.spacing.lg};
  --spacing-xl: ${designSystem.spacing.xl};
  --spacing-2xl: ${designSystem.spacing['2xl']};
  --spacing-3xl: ${designSystem.spacing['3xl']};
  --spacing-4xl: ${designSystem.spacing['4xl']};
  
  /* 圆角 */
  --radius-sm: ${designSystem.borderRadius.sm};
  --radius-md: ${designSystem.borderRadius.md};
  --radius-lg: ${designSystem.borderRadius.lg};
  --radius-xl: ${designSystem.borderRadius.xl};
  --radius-full: ${designSystem.borderRadius.full};
  
  /* 阴影 */
  --shadow-sm: ${designSystem.shadows.sm};
  --shadow-md: ${designSystem.shadows.md};
  --shadow-lg: ${designSystem.shadows.lg};
  --shadow-xl: ${designSystem.shadows.xl};
  
  /* 布局 */
  --container-max-width: ${designSystem.layout.container.maxWidth};
  --container-padding: ${designSystem.layout.container.padding};
  --grid-gap: ${designSystem.layout.grid.gap};
}

/* 响应式断点 */
@media (max-width: 768px) {
  :root {
    --font-size-h1: 2.5rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.75rem;
    --font-size-h4: 1.25rem;
    --container-padding: 0 12px;
  }
}

@media (max-width: 480px) {
  :root {
    --font-size-h1: 2rem;
    --font-size-h2: 1.75rem;
    --font-size-h3: 1.5rem;
    --font-size-h4: 1.125rem;
    --container-padding: 0 8px;
  }
}
`;

const cssPath = path.join(__dirname, '..', 'src', 'styles', 'design-system.css');
fs.writeFileSync(cssPath, cssVariables, 'utf8');
console.log(`\n🎨 CSS 变量已生成: ${cssPath}`);

// 生成 TypeScript 类型定义
const typeScriptPath = path.join(__dirname, '..', 'src', 'types', 'design-system.ts');
const typeScriptContent = `
export interface DesignSystem {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    textPrimary: string;
    textSecondary: string;
    textDark: string;
    textLight: string;
  };
  typography: {
    fontFamily: {
      heading: string;
      body: string;
    };
    sizes: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      body: string;
      small: string;
    };
    weights: {
      regular: number;
      medium: number;
      bold: number;
    };
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}

export const designSystem: DesignSystem = ${JSON.stringify(designSystem, null, 2)};
`;

// 确保 types 目录存在
const typesDir = path.join(__dirname, '..', 'src', 'types');
if (!fs.existsSync(typesDir)) {
  fs.mkdirSync(typesDir, { recursive: true });
}

fs.writeFileSync(typeScriptPath, typeScriptContent, 'utf8');
console.log(`📘 TypeScript 类型定义已生成: ${typeScriptPath}`);

console.log('\n✅ 设计系统生成完成！');
console.log('💡 现在您可以:');
console.log('1. 导入设计系统到 Vue 组件');
console.log('2. 更新样式以使用 CSS 变量');
console.log('3. 根据实际设计调整布局和内容');