const config = require('zotero-plugin/.eslintrc')

Object.assign(config.rules, {
  'max-classes-per-file': 'off',
  'no-console': 'error',
  'no-new-func': 'off',
  'no-underscore-dangle': [ 'error', { "allowAfterThis": true } ],
  'prefer-template': 'off',

  '@typescript-eslint/no-redundant-type-constituents': 'off',
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'error',
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/no-implied-eval': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',

  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/member-delimiter-style': [ 'error', {
    multiline: { delimiter: 'none', requireLast: false },
    singleline: { delimiter: 'comma', requireLast: false },
  }],
  '@typescript-eslint/no-unused-vars': [ 'error', { "argsIgnorePattern": "^_" } ],
  'no-magic-numbers': 'off',
  'max-len': [ 'warn', { code: 320 } ],
})

config.ignorePatterns = [
  'util/*.ts',
  'minitests/*.ts',
  'content/minitests/*.ts',
  'zotero-odf-scan-plugin',
]

module.exports = config
