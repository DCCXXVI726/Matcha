module.exports = {
    plugins: [
        'react',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'jsx-quotes': ['warn', 'prefer-double'],

        'class-methods-use-this': ['warn', {
            exceptMethods: [
                'render',
                'getInitialState',
                'getDefaultProps',
                'getChildContext',
                'componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount'
            ]
        }],
        'react/display-name': ['off', { ignoreTranspilerName: false }],
        'react/forbid-prop-types': ['warn', { forbid: ['any'] }],
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
        'react/jsx-curly-spacing': ['warn', 'never', { allowMultiline: true }],
        'react/jsx-curly-brace-presence': ['warn', { "props": 'never', "children": 'ignore' }],
        'react/jsx-handler-names': ['warn', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on'
        }],
        'react/jsx-key': 'warn',
        'react/jsx-max-props-per-line': ['warn', { maximum: 1, when: 'multiline' }],
        'react/jsx-no-bind': ['error', {
            ignoreRefs: true,
            allowArrowFunctions: true,
            allowBind: false
        }],
        'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
        'react/jsx-no-literals': 'warn',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': ['warn', {
            allowAllCaps: true,
            ignore: [],
        }],
        'react/sort-prop-types': ['off', {
            ignoreCase: true,
            callbacksLast: false,
            requiredFirst: false,
        }],
        'react/jsx-sort-prop-types': 'off',
        'react/jsx-sort-props': ['off', {
            ignoreCase: true,
            callbacksLast: false,
            shorthandFirst: false,
            shorthandLast: false,
            noSortAlphabetically: false,
        }],
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': 'warn',
        'react/no-danger': 'warn',
        'react/no-deprecated': 'error',
        'react/no-did-mount-set-state': 'warn',
        'react/no-did-update-set-state': 'warn',
        'react/no-direct-mutation-state': 'warn',
        'react/no-is-mounted': 'error',
        'react/no-multi-comp': ['warn', { ignoreStateless: true }],
        'react/no-set-state': 'off',
        'react/no-string-refs': 'error',
        'react/no-unknown-property': 'warn',
        'react/prefer-es6-class': ['warn', 'always'],
        'react/prefer-stateless-function': ['warn', { ignorePureComponents: true }],
        'react/prop-types': ['warn', {
            ignore: [],
            customValidators: [],
            skipUndeclared: false
        }],
        'react/react-in-jsx-scope': 'error',
        'react/require-extension': ['off', { extensions: ['.jsx', '.js'] }],
        'react/require-render-return': 'error',
        'react/self-closing-comp': 'warn',
        'react/jsx-tag-spacing': ['warn', {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never'
        }],
        'react/sort-comp': ['warn', {
            order: [
                'static-methods',
                'lifecycle',
                '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                '/^handle.+$/',
                'everything-else',
                'render',
                '/^render.+$/',
            ],
        }],
        'react/jsx-wrap-multilines': ['warn', {
            declaration: true,
            assignment: true,
            return: true
        }],
        'react/jsx-first-prop-new-line': ['warn', 'multiline'],
        'react/jsx-equals-spacing': ['warn', 'never'],
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],
        'react/jsx-no-target-blank': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.spec.js'] }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/no-render-return-value': 'error',
        'react/require-optimization': ['off', { allowDecorators: [] }],
        'react/no-find-dom-node': 'error',
        'react/forbid-component-props': ['warn', {
            forbid: ['style']
        }],
        'react/no-danger-with-children': 'error',
        'react/no-unused-prop-types': ['warn', {
            customValidators: [
            ],
            skipShapeProps: true
        }],
        'react/style-prop-object': 'error',
        'react/no-unescaped-entities': 'error',
        'react/no-children-prop': 'error',
        'react/no-array-index-key': 'warn',
        'react/forbid-elements': ['off', {
            forbid: []
        }],
        'react/forbid-foreign-prop-types': 'off',
        'react/void-dom-elements-no-children': 'off'
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.json']
            }
        },
        react: {
            pragma: 'React',
            version: '15.0'
        }
    }
}
