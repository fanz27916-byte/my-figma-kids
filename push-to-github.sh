#!/bin/bash

# 推送代码到 GitHub 的脚本
# 使用方法: ./push-to-github.sh

set -e

echo "🚀 开始推送代码到 GitHub..."

# 检查是否在项目目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 检查 Git 状态
echo "📊 检查 Git 状态..."
git status

# 添加所有更改
echo "📁 添加所有更改..."
git add .

# 提交更改
echo "💾 提交更改..."
git commit -m "feat: update with Figma design tokens and complete design system

- Integrated Figma design tokens (#FF7B4D, #60BFB2, #FFB54A, #FFE1CC)
- Updated all components to match Figma design
- Added responsive design system
- Fixed CSS variables and typography
- Added Font Awesome icons
- Improved mobile responsiveness" || echo "没有更改需要提交"

# 尝试推送
echo "📤 推送到 GitHub..."
MAX_RETRIES=3
RETRY_COUNT=0

while [ $RETRY_COUNT -lt $MAX_RETRIES ]; do
    echo "尝试 #$((RETRY_COUNT + 1))..."
    if git push origin main; then
        echo "✅ 推送成功!"
        break
    else
        RETRY_COUNT=$((RETRY_COUNT + 1))
        if [ $RETRY_COUNT -eq $MAX_RETRIES ]; then
            echo "❌ 推送失败，已达到最大重试次数"
            
            # 显示错误信息
            echo ""
            echo "📋 手动推送指南:"
            echo "1. 检查网络连接"
            echo "2. 验证 GitHub 令牌权限"
            echo "3. 运行以下命令手动推送:"
            echo "   git push origin main"
            echo ""
            echo "📁 项目文件已准备好，您也可以:"
            echo "1. 下载 ZIP 文件: my-figma-kids-deploy.zip"
            echo "2. 在本地运行: npm install && npm run dev"
            echo "3. 稍后手动推送到 GitHub"
            exit 1
        fi
        echo "等待 5 秒后重试..."
        sleep 5
    fi
done

echo ""
echo "🎉 项目已成功更新!"
echo ""
echo "📋 项目详情:"
echo "- 基于 Figma 设计令牌 (#FF7B4D, #60BFB2, #FFB54A)"
echo "- 完整的响应式设计"
echo "- TypeScript 类型安全"
echo "- CSS 变量设计系统"
echo ""
echo "🚀 运行项目:"
echo "cd my-figma-kids"
echo "npm install"
echo "npm run dev"
echo ""
echo "🌐 访问: http://localhost:5173"