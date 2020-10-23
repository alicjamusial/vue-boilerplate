module.exports = {
    publicPath: '/',
    productionSourceMap: false,
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'App Title',
        }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config
                .output
                .globalObject('this');
        }
    },
    transpileDependencies: ['vuetify'],
    configureWebpack: {
        devtool: 'inline-cheap-module-source-map',
        output: {
            devtoolModuleFilenameTemplate: '[absolute-resource-path]',
            devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
        }
    }
};
