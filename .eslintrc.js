module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8 },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['import'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    camelcase: 0,
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      },
    ],
    'import/extensions': 0,

    // Next.js compatibility
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
