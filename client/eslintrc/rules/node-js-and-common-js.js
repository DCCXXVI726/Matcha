module.exports = {
    env: {
        node: true
    },

    rules: {
        'callback-return': [
            'warn', [
                'callback',
                'cb',
                'next',
                'res.send',
                'res.json',
                'res.text',
                'res.render'
            ]
        ],
        'global-require': 'error',
        'handle-callback-err': [
            'warn',
            '^(err|error|exception)$'
        ],
        'no-mixed-requires': [
            'warn',
            {
                grouping: true,
                allowCall: true
            }
        ],
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'off',
        'no-process-exit': 'warn',
        'no-restricted-modules': 'off',
    }
};
