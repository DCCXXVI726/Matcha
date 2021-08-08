// Using Airbnb guide as baseline See: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js

module.exports = {
    env: {
        es6: true
    },

    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            generators: false,
            objectLiteralDuplicateProperties: false
        }
    },

    rules: {
        'arrow-body-style': ['warn', 'as-needed', {
            requireReturnForObjectLiteral: false
        }],
        'arrow-parens': ['warn', 'always'],
        'arrow-spacing': ['warn', { before: true, after: true }],
        'constructor-super': 'error',
        'generator-star-spacing': ['error', { before: false, after: true }],
        'no-class-assign': 'error',
        'no-confusing-arrow': ['off', {
            allowParens: true
        }],
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'off',
        'no-new-symbol': 'error',
        'no-restricted-imports': 'off',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'warn',
        'no-useless-constructor': 'error',
        'no-useless-rename': ['warn', {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false,
        }],
        'no-var': 'warn',
        'object-shorthand': ['warn', 'always', {
            ignoreConstructors: false,
            avoidQuotes: true,
        }],
        'prefer-arrow-callback': ['warn', {
            allowNamedFunctions: false,
            allowUnboundThis: true,
        }],
        'prefer-const': ['warn', { destructuring: 'any', ignoreReadBeforeAssign: true }],
        'prefer-destructuring': ['warn', { array: false, object: true }, { enforceForRenamedProperties: false }],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'require-yield': 'warn',
        'rest-spread-spacing': ['warn', 'never'],
        'sort-imports': ['off', {
            ignoreCase: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        }],
        'symbol-description': 'warn',
        'template-curly-spacing': ['warn', 'never'],
        'yield-star-spacing': ['warn', 'after']
    }
}
