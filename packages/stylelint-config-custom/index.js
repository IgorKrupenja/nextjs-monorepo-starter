module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'declaration-no-important': true,
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': [
      // camelCase
      '^[a-z][a-zA-Z0-9]+$',
      {
        resolveNestedSelectors: true,
      },
    ],
  },
};
