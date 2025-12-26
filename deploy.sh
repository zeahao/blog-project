#!/bin/bash

# 构建项目
echo "Building project..."
npx vite build --base=/blog-project/

# 部署到GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d dist

echo "Deployment complete!"
echo "Your site should be available at: https://zeahao.github.io/blog-project/"