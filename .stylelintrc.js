module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order"],
  ignoreFiles: ["**/node_modules/**"],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["tailwind"] }], // こちらの行を追加
  },
};
