module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'react-compiler'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    'react/react-in-jsx-scope': 0,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-compiler/react-compiler': 'error',
    'react/prefer-stateless-function': 0,
    '@typescript-eslint/naming-convention': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-props-no-spreading': 0,
    'no-nested-ternary': 'off',
    'prefer-object-spread': 0,
    'jsx-a11y/label-has-associated-control': 'off',
    'react-refresh/only-export-components': 0,
  },
};
