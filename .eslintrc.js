module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'import/prefer-default-export': ['off'],
        'object-curly-spacing': ['error', 'never'],
        'no-param-reassign': ['error', {'props': false}],
        'max-len': ["error", {'code': 160, 'comments': 180}],
        'arrow-parens': ['error', 'as-needed'],
        'padded-blocks': ['off'],
        'prefer-template': ['off'],
        'prefer-destructuring': ['off'],
        'class-methods-use-this': ['off'],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};