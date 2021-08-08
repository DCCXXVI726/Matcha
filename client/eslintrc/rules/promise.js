module.exports = {
    plugins: [
        'promise'
    ],

    rules: {
        'promise/always-return': 'warn',
        'promise/no-return-wrap': ['error', { allowReject: true }],
        'promise/catch-or-return': ['warn', { terminationMethod: ['catch', 'finally'] }],
        'promise/no-native': 'off',
        'promise/no-nesting': 'warn',
        'promise/no-promise-in-callback': 'off',
        'promise/no-callback-in-promise': 'off',
        'promise/avoid-new': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-return-in-finally': 'warn',
        'promise/valid-params': 'warn',
        'promise/prefer-await-to-callbacks': 'off'
    }
}
