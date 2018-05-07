module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'array-bracket-spacing': 'error',
    'block-scoped-var': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'curly': 'error',
    'default-case': 'error',
    'eol-last': 'error',
    'indent': ['error', 2, {VariableDeclarator: 2, SwitchCase: 1}],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-eq-null': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': ['error', false],
    'no-multiple-empty-lines': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unused-vars': ['error', {vars: 'all', args: 'none'}],
    'no-use-before-define': ['error', 'nofunc'],
    'no-var': 'error',
    'object-curly-spacing': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single'],
    'semi': 'error',
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        'asyncArrow': 'always',
        'named': 'never',
        'anonymous': 'never'
      }
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': ['error', {
      requireReturn: false
    }],
    'valid-typeof': 'error'
  }
};
