module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
  ],
  plugins: [
    'stylelint-declaration-use-variable',
    'stylelint-order',
  ],
  rules: {
    'sh-waqar/declaration-use-variable': [[
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'z-index',
      'color',
    ]],
    'order/order': [
      'custom-properties',
      'declarations',
    ],
    'order/properties-order': null,
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'each',
        'else',
        'extend',
        'for',
        'function',
        'if',
        'include',
        'mixin',
        'return',
        'while',
      ],
    }],
  },
};
