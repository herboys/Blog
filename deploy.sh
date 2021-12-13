#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vitepress/dist

git config --global user.email "2132665463@qq.com"
git config --global user.name "herboys"

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/herboys/blog.git master:pages

cd -
