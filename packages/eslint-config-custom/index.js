/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ['eslint:recommended', 'next'],
  plugins: ['prettier', 'simple-import-sort', 'testing-library', 'unused-imports'],
  rules: {
    'no-return-await': 'warn',
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    // Ignore various JS config files
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'no-unused-vars': 'off',
        // Disabling the base rule as it can report incorrect errors
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      // Prevent ESLint from giving errors in JS config files https://github.com/vercel/next.js/issues/40687
      files: ['*.js'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
  ],
};
