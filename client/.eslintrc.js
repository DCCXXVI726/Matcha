module.exports = {
    parser: '@typescript-eslint/parser',

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
            }
        },
        'import/extensions': [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
    },

    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        './eslintrc'
    ],
    plugins: [
        '@typescript-eslint',
        'react-hooks'
    ],

    rules: {
        semi: ['error', 'always'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.spec.js'] }],
        'import/extensions': ['warn', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],
        '@typescript-eslint/explicit-function-return-type': 2,
        // not work with typescript
        'comma-dangle': ['error', 'never'],
        'import/no-dynamic-require': 0,
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    },

};
