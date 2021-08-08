module.exports = {
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'block-spacing': ['error', 'always'],
        'brace-style': ['warn', '1tbs'],
        camelcase: ['off', { properties: 'always' }],
        'capitalized-comments': ['off', 'never', {
            line: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
            block: {
                ignorePattern: '.*',
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true,
            },
        }],
        'comma-dangle': ['off', {
            arrays: 'only-multiline',
            objects: 'always-multiline',
            imports: 'only-multiline',
            exports: 'only-multiline',
            functions: 'never'
        }],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': ['error', 'that'],
        'eol-last': ['warn', 'always'],
        'func-call-spacing': ['error', 'never'],
        'func-name-matching': ['off', 'always', {
            includeCommonJSModuleExports: false
        }],
        'func-names': ['warn', 'as-needed'],
        'func-style': ['warn', 'declaration', {
            allowArrowFunctions: true
        }],
        'id-blacklist': 'off',
        'id-length': 'off',
        'id-match': 'off',
        indent: ['warn', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
        }],
        'jsx-quotes': ['warn', 'prefer-double'],
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
        'line-comment-position': ['warn', {
            position: 'above',
            ignorePattern: '',
            applyDefaultPatterns: true
        }],
        'linebreak-style': 'off',
        'lines-around-comment': 'off',
        'lines-around-directive': ['error', {
            before: 'always',
            after: 'always'
        }],
        'max-depth': ['off', 4],
        'max-len': 'off',
        'max-lines': ['warn', {
            max: 400,
            skipBlankLines: true,
            skipComments: true
        }],
        'max-nested-callbacks': 'off',
        'max-params': ['off', 3],
        'max-statements': ['off', 10],
        'max-statements-per-line': ['off', { max: 1 }],
        'multiline-ternary': ['off', 'never'],
        'new-cap': ['warn', {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptionPattern: '^Immutable\\..+',
            properties: true
        }],
        'new-parens': 'warn',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'error',
        'no-inline-comments': 'off',
        'no-lonely-if': 'warn',
        'no-mixed-operators': ['error', {
            groups: [
                ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            allowSamePrecedence: true
        }],
        'no-mixed-spaces-and-tabs': 'warn',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': ['warn', {
            max: 2,
            maxEOF: 1,
            maxBOF: 0
        }],
        'no-negated-condition': 'off',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'warn',
        'no-restricted-syntax': [
            'warn',
            'ForInStatement',
            'ForOfStatement',
            'LabeledStatement',
            'WithStatement'
        ],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': ['warn', {
            skipBlankLines: true
        }],
        'no-underscore-dangle': ['warn', { allowAfterThis: false }],
        'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['warn', 'always'],
        'object-curly-newline': ['off', {
            ObjectExpression: { minProperties: 0, multiline: true },
            ObjectPattern: { minProperties: 0, multiline: true }
        }],
        'object-property-newline': ['warn', {
            allowMultiplePropertiesPerLine: true
        }],
        'one-var-declaration-per-line': ['warn', 'always'],
        'one-var': ['warn', 'never'],
        'operator-assignment': ['warn', 'always'],
        'operator-linebreak': 'off',
        'padded-blocks': 'off',
        'quote-props': ['warn', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
        'require-jsdoc': 'off',
        'semi-spacing': ['warn', { before: false, after: true }],
        semi: ['warn', 'never'],
        'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
        'sort-vars': 'off',
        'space-before-blocks': 'warn',
        'space-before-function-paren': ['warn', 'always'],
        'space-in-parens': ['warn', 'never'],
        'space-infix-ops': ['warn', {
            int32Hint: true
        }],
        'space-unary-ops': ['warn', {
            words: true,
            nonwords: false,
            overrides: {}
        }],
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
        'template-tag-spacing': ['warn', 'never'],
        'unicode-bom': ['warn', 'never'],
        'wrap-regex': 'off'
    }
}
