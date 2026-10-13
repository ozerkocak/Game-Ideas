#!/bin/sh
# Mac'te: oyunu uygulamaya kopyalar ve Xcode'u açar. Kullanım: uygulamalar/kum-sisesi klasöründe "sh scripts/ios-hazirla.sh"
set -e
cd "$(dirname "$0")/.."
npm ci
npm run build
npx cap sync ios
npx cap open ios
