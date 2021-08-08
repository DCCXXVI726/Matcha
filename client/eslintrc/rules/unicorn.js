module.exports = {
    plugins: [
        'unicorn'
    ],

    rules: {
        'unicorn/catch-error-name': ['off', { caughtErrorsIgnorePattern: '^(e|error)$' }],
        'unicorn/explicit-length-check': 'off',
        'unicorn/no-abusive-eslint-disable': 'warn',
        'unicorn/no-process-exit': 'error',
        'unicorn/throw-new-error': 'error',
        'unicorn/number-literal-case': 'error',
        'unicorn/escape-case': 'warn',
        'unicorn/no-array-instanceof': 'warn',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-hex-escape': 'error',
        'unicorn/custom-error-definition': 'warn',
        'unicorn/prefer-starts-ends-with': 'off',
        'unicorn/prefer-type-error': 'error',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/import-index': 'warn',
        'unicorn/new-for-builtins': 'error',
        'unicorn/regex-shorthand': 'warn',
        'unicorn/prefer-spread': 'error',
        'unicorn/error-message': 'error',
        'unicorn/no-unsafe-regex': 'warn',
        'unicorn/prefer-add-event-listener': 'error',
        'unicorn/prefer-exponentiation-operator': 'off',
        'unicorn/no-console-spaces': 'off'
    }
}
