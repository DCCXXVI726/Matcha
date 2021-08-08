module.exports = {
    plugins: [
        'babel'
    ],

    rules: {
        'babel/camelcase': ['warn', { properties: 'always' }],
        'babel/quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
        'babel/no-unused-expressions': ['error', {
            allowShortCircuit: false,
            allowTernary: false
        }],
        'babel/no-invalid-this': 'off',
        'babel/object-curly-spacing': ['off', 'always'],
        'babel/semi': ['off', 'never']
    }
};
