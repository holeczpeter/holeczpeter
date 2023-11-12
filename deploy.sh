#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
# git push -f git@github.com:holeczpeter/test.git master:gh-pages
git push -f https://github.com/holeczpeter/holeczpeter.git master:gh-pages
cd -

if [ ! -f ../.github/workflows/deploy.yml ]; then
  # If not, create the deploy.yml file
  echo "name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master  # A fő ág neve, cseréld le az aktuális ág nevére

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: FTP Deploy
      uses: SamKirkland/FTP-Deploy-Action@4.0.0
      with:
        server: \${{ secrets.FTP_SERVER }}
        username: \${{ secrets.FTP_USERNAME }}
        password: \${{ secrets.FTP_PASSWORD }}
        local-dir: .  # A repository tartalmának helye, itt az aktuális könyvtár
        server-dir: /public_html  # Az FTP-szerveren a célmappa" > ../.github/workflows/deploy.yml