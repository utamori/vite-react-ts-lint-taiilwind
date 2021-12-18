module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prefer-arrow",
    "react",
    "react-hooks",
    "tailwindcss",
  ],
  root: true,
  rules: {
    "react/react-in-jsx-scope": "off",
    // void 演算子の（式としての）使用を禁ずるルール。
    // 非同期処理の場合void文を記述する場合があるので、文としての使用のみを許可している
    "no-void": [
      "error",
      {
        allowAsStatement: true,
      },
    ],
    // すぐに使わない変数は_をつける
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        argsIgnorePattern: "_",
        ignoreRestSiblings: false,
        varsIgnorePattern: "_",
      },
    ],
    // importの際に拡張子つけるか
    "import/extensions": [
      "error",
      // 以下は拡張子つけなくて良い
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    // アロー関数を強制する
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {},
    },
  },
};
