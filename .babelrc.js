module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/typescript',
        '@babel/preset-react',
    ],
    plugins: [
        'lodash',
        'babel-plugin-styled-components',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
    ],
}
