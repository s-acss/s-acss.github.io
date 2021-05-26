# deploy website
set -e

# 提交 gh-pages
yarn build
cd build
git init
git co -b gh-pages
git add -A
git commit -m 'docs: update docs to gh-pages'

git push -f git@github.com:s-acss/s-acss.github.io.git gh-pages

# 提交 当前代码
cd ..
git add -A
git commit -m 'docs: update docs to gh-pages'
git push

cd -
