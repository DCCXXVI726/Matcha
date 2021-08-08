module.exports = {
    rules: {
        'no-await-in-loop': 'error',
        'no-cond-assign': ['error', 'always'],
        'no-console': 'warn',
        'no-constant-condition': 'warn',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-empty': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': ['warn', 'all', {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all'
        }],
        'no-extra-semi': 'warn',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': ['warn', {
            prefer: {
                arg: 'param',
                argument: 'param',
                returns: 'return',
                abstract: 'virtual'
            },
            preferType: {
                function: 'Function',
                boolean: 'Boolean',
                number: 'Number',
                array: 'Array',
                object: 'Object',
                string: 'String',
                moment: 'Moment',
                date: 'Date'
            }
        }],
        'valid-typeof': ['error', { requireStringLiterals: true }]
    }
}
