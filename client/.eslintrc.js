/* */

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },

    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],

    plugins: [
        'react',
        'react-hooks',
        'eslint-plugin-no-cyrillic-string'
    ],
    rules: {
        'eqeqeq': ['error', 'always'],
        '@typescript-eslint/explicit-function-return-type': 2,
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        '@typescript-eslint/indent': ['error'],
        semi: 'error',
        quotes: ['error', 'single'],
        'no-multi-str': 'error',
        'no-new-func': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-with': 'error',
        camelcase: ['off', { properties: 'always' }],
        'eol-last': ['warn', 'always'],
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
        'jsx-quotes': ['error', 'prefer-single'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-magic-numbers': ['warn', {
            ignore: [0, 1, -1, 100],
            ignoreArrayIndexes: false,
            enforceConst: true,
            detectObjects: false,
        }],
        'no-cyrillic-string/no-cyrillic-string': 'error',
        'key-spacing': ['warn', {
            beforeColon: false,
            afterColon: true
        }],

        'keyword-spacing': ['warn', {
            before: true,
            after: true,
            overrides: {
                return: { after: true },
                throw: { after: true },
                case: { after: true }
            }
        }],

        'max-lines': ['warn', {
            max: 400,
            skipBlankLines: true,
            skipComments: true
        }],

        'multiline-ternary': ['off', 'never'],
        'no-continue': 'error',
        'no-tabs': 'error',

        // http://eslint.org/docs/rules/spaced-comment
        'spaced-comment': ['warn', 'always', {
            line: {
                markers: [],
                exceptions: ['-', '+', '/']
            },
            block: {
                markers: [],
                exceptions: ['*'],
                balanced: false
            }
        }],
        'object-curly-spacing': ['error', 'always'],
        'no-multiple-empty-lines': 'error',
        'react/no-children-prop': 'error',
        'react/jsx-key': 'warn',
    }
};
