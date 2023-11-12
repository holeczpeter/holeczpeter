#!/usr/bin/env sh

set -e

npm run build

cp .github/workflows/deploy.yml dist/github/workflows/deploy.yml
mv deploy.yml .github/workflows/

cd dist
git init
git add -A
git commit -m 'New Deployment'
# git push -f git@github.com:holeczpeter/test.git master:gh-pages
git push -f https://github.com/holeczpeter/holeczpeter.git master:gh-pages
cd -