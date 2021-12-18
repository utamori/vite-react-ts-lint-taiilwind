# vite reaxt ts + lint

- ESLint
- StyleLint
- Prettier


- eslint-plugin-react
- eslint-plugin-react-hooks
- @typescript-eslint/eslint-plugin
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- @typescript-eslint/parser”


## prettier 導入

npm install prettier eslint-config-prettier --save-dev

衝突するルールがないか確認
npx eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'

    "int": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
    "lint:conflict": "eslint --print-config .eslintrc.js | eslint-config-prettier-check",
    "preinstall": "typesync”

## stylelint 導入

npm install stylelint stylelint-config-standard stylelint-order stylelint-config-recess-order stylelint-config-prettier --save-dev


"lint": "npm run -s lint:style; npm run -s lint:es",
"lint:fix": "npm run -s lint:style:fix && npm run -s lint:es:fix",
"lint:es": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
"lint:es:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx}'",
"lint:conflict": "eslint-config-prettier 'src/**/*.{js,jsx,ts,tsx}'",
"lint:style": "stylelint 'src/**/*.{css,less,sass,scss}'",
"lint:style:fix": "stylelint --fix 'src/**/*.{css,less,sass,scss}'"

# アロー関数を強制する

npm install eslint-plugin-prefer-arrow --save-dev



# パス解決について

tscondig.jsonの`compilerOptions.path`は、実際にパス解決はしてくれない
`vite.config.ts`で設定する必要がある

```json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
```

npm install eslint-import-resolver-typescript --save-dev
