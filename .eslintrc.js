/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],
  plugins: ['simple-import-sort'],
  rules: {
    'prettier/prettier': 1,
    'func-style': [1, 'declaration', { allowArrowFunctions: true }],
    'no-unused-vars': 1,
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-named-as-default': 0,
    'import/no-duplicates': [1, { 'prefer-inline': true }],

    'sort-imports': 0,
    'import/order': 0,
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'no-console': [1, { allow: ['warn', 'error'] }],
    curly: 1,
    eqeqeq: [1, 'always']
  },
  ignorePatterns: ['node_modules', '!.*.js', '!.*.cjs']
}
