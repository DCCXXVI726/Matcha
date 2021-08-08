module.exports = {
    globals: {
        DEBUG: true
    },
    env: {
        browser: true,
        es6: true,
        jasmine: true
    },
    extends: [
        './rules/a11y.js',
        './rules/airbnb.js',
        './rules/babel.js',
        './rules/es6.js',
        './rules/import.js',
        './rules/node-js-and-common-js.js',
        './rules/possible-errors.js',
        './rules/promise.js',
        './rules/react.js',
        './rules/stylistic.js',
        './rules/unicorn.js',
        './rules/variables.js'
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            classes: true,
            defaultParams: true,
            destructuring: true,
            jsx: true,
            modules: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            spread: true,
            templateStrings: true,
            experimentalObjectRestSpread: true
        }
    },
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
        'comma-dangle': ['error', 'never'],
        'import/no-dynamic-require': 0,
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': 'off'
    },
    overrides: [
        {
            files: ['*.tsx', '*.ts'],
            rules: {
                'no-undef': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error'],
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error']
            }
        },
        {
            files: ['webpack/**/*.ts', 'webpack.config.ts'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                'global-require': 0
            }
        },
        {
            files: ['stub/**/*.ts', 'build.ts'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                'global-require': 0
            }
        },
        {
            files: ['stub/**/*.ts', 'build.ts'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                'global-require': 0
            }
        },
        {
            files: ['stub/**/*.ts', 'build.ts'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                'global-require': 0
            }
        }
    ]
}
