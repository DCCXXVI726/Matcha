module.exports = {
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },

    plugins: [
        'import'
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.json']
            }
        },

        'import/extensions': [
            '.js',
            '.jsx',
        ],

        'import/core-modules': [
        ],

        'import/external-module-folders': [
            'node_modules',
            'core_modules'
        ],

        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$',
        ],
    },

    rules: {
        'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
        'import/named': 'off',
        'import/default': 'off',
        'import/namespace': 'off',
        'import/export': 'error',
        'import/no-named-as-default': 'warn',
        'import/no-named-as-default-member': 'warn',
        'import/no-deprecated': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-mutable-exports': 'error',
        'import/no-commonjs': 'off',
        'import/no-amd': 'error',
        'import/no-nodejs-modules': 'off',
        'import/first': ['warn', 'absolute-first'],
        'import/imports-first': 'off',
        'import/no-duplicates': 'warn',
        'import/no-namespace': 'off',
        'import/extensions': ['warn', 'always', {
            js: 'never',
            jsx: 'never'
        }],
        'import/order': ['warn', {
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always'
        }],
        'import/newline-after-import': 'warn',
        'import/prefer-default-export': 'off',
        'import/no-restricted-paths': 'off',
        'import/max-dependencies': ['off', { max: 10 }],
        'import/no-absolute-path': 'error',
        'import/no-dynamic-require': 'error',
        'import/no-internal-modules': ['off', {
            allow: []
        }],
        'import/unambiguous': 'off',
        'import/no-webpack-loader-syntax': 'warn',
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'warn'
    }
}
