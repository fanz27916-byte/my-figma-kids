#!/usr/bin/env node

/**
 * Figma 设计数据获取脚本
 * 使用方法: node scripts/fetch-figma-design.js <FIGMA_TOKEN> <FILE_ID>
 * 
 * 示例: node scripts/fetch-figma-design.js your_figma_token DS0PS1MP6l9cYFCqyaryTp
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const FIGMA_TOKEN = process.argv[2];
const FILE_ID = process.argv[3] || 'DS0PS1MP6l9cYFCqyaryTp';

if (!FIGMA_TOKEN) {
  console.error('错误: 请提供 Figma 访问令牌');
  console.error('使用方法: node scripts/fetch-figma-design.js <FIGMA_TOKEN> [FILE_ID]');
  console.error('');
  console.error('如何获取 Figma 令牌:');
  console.error('1. 访问 https://www.figma.com/developers/api');
  console.error('2. 登录您的 Figma 账户');
  console.error('3. 创建个人访问令牌');
  console.error('4. 复制令牌并作为参数传入');
  process.exit(1);
}

const FIGMA_API_URL = `https://api.figma.com/v1/files/${FILE_ID}`;

function fetchFigmaData() {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
        'User-Agent': 'Node.js Figma Fetcher'
      }
    };

    console.log('🎨 正在获取 Figma 设计数据...');
    console.log(`📁 文件ID: ${FILE_ID}`);

    https.get(FIGMA_API_URL, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const figmaData = JSON.parse(data);
            console.log('✅ Figma 数据获取成功');
            resolve(figmaData);
          } catch (error) {
            reject(new Error(`JSON 解析错误: ${error.message}`));
          }
        } else if (res.statusCode === 429) {
          console.log('⚠️  速率限制，请稍后重试');
          reject(new Error('速率限制: 请稍后重试'));
        } else {
          console.error(`❌ HTTP ${res.statusCode}: ${data.substring(0, 200)}`);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    }).on('error', (error) => {
      console.error(`❌ 网络错误: ${error.message}`);
      reject(new Error(`网络错误: ${error.message}`));
    });
  });
}

function saveDesignData(figmaData) {
  const outputDir = path.join(__dirname, '..', 'figma-data');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 保存原始数据
  const rawPath = path.join(outputDir, 'figma-raw.json');
  fs.writeFileSync(rawPath, JSON.stringify(figmaData, null, 2), 'utf8');
  console.log(`✅ 原始数据已保存到: ${rawPath}`);

  // 提取设计摘要
  const summary = {
    name: figmaData.name || '未命名设计',
    lastModified: figmaData.lastModified || '',
    version: figmaData.version || '',
    documentType: figmaData.document?.type || 'unknown',
    thumbnailUrl: figmaData.thumbnailUrl || '',
    link: `https://www.figma.com/design/${FILE_ID}`
  };

  const summaryPath = path.join(outputDir, 'design-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf8');
  console.log(`✅ 设计摘要已保存到: ${summaryPath}`);

  // 生成设计规范文档
  const docPath = path.join(outputDir, 'DESIGN_SPEC.md');
  const designSpec = `# Figma 设计规范

## 设计信息
- **名称**: ${summary.name}
- **最后修改**: ${summary.lastModified}
- **版本**: ${summary.version}
- **设计链接**: ${summary.link}

## 使用说明
1. 将此设计规范与 Vue 3 项目集成
2. 使用提取的颜色、字体和间距系统
3. 确保 1:1 还原设计稿

## 下一步
1. 分析设计中的组件结构
2. 提取颜色系统
3. 提取字体规范
4. 提取间距和布局系统
5. 实现响应式设计

## 注意事项
- 严格遵循 Figma 设计稿
- 保持设计的一致性
- 确保响应式适配
- 优化性能`;

  fs.writeFileSync(docPath, designSpec, 'utf8');
  console.log(`✅ 设计规范文档已保存到: ${docPath}`);

  return { rawPath, summaryPath, docPath };
}

async function main() {
  try {
    console.log('='.repeat(50));
    console.log('🎨 Figma 设计数据提取工具');
    console.log('='.repeat(50));

    const figmaData = await fetchFigmaData();
    const savedFiles = saveDesignData(figmaData);

    console.log('\n✅ 完成！');
    console.log('📊 设计数据已保存到 figma-data/ 目录');
    console.log('📄 文件列表:');
    console.log(`  - ${savedFiles.rawPath}`);
    console.log(`  - ${savedFiles.summaryPath}`);
    console.log(`  - ${savedFiles.docPath}`);

    console.log('\n🚀 下一步:');
    console.log('1. 分析设计数据，提取设计系统');
    console.log('2. 更新 Vue 组件以匹配设计');
    console.log('3. 实现响应式布局');
    console.log('4. 添加交互效果');

  } catch (error) {
    console.error(`\n❌ 错误: ${error.message}`);
    
    // 创建示例数据用于开发
    console.log('\n⚠️  创建示例数据用于开发...');
    const exampleDir = path.join(__dirname, '..', 'figma-data');
    if (!fs.existsSync(exampleDir)) {
      fs.mkdirSync(exampleDir, { recursive: true });
    }

    const exampleData = {
      name: "Kids Toys & Games Store Website",
      lastModified: new Date().toISOString(),
      version: "1.0",
      documentType: "example",
      thumbnailUrl: "",
      link: `https://www.figma.com/design/${FILE_ID}`,
      colors: ["#FF6B8B", "#4ECDC4", "#FFD166", "#2D3047", "#F9F9F9"],
      fonts: ["Poppins", "Comic Neue"],
      note: "这是示例数据，请使用您的 Figma 令牌获取真实数据"
    };

    const examplePath = path.join(exampleDir, 'figma-example.json');
    fs.writeFileSync(examplePath, JSON.stringify(exampleData, null, 2), 'utf8');
    console.log(`✅ 示例数据已保存到: ${examplePath}`);
    console.log('💡 提示: 运行以下命令获取真实数据:');
    console.log(`   node scripts/fetch-figma-design.js <YOUR_FIGMA_TOKEN> ${FILE_ID}`);
  }
}

main();