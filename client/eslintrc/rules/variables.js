module.exports = {
    rules: {
        'init-declarations': 'off',
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'off',
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'warn',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-undefined': 'error',
        'no-unused-vars': ['warn', {
            vars: 'local',
            args: 'after-used'
        }],
        'no-use-before-define': 'error'
    }
}
