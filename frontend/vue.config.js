const WebpackShellPlugin = require('webpack-shell-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    assetsDir: '',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '^/api/*': {
                // proxies request for api to localhost:80
                target: "http://localhost:5000/"
            },
        }
    },
    configureWebpack: {
        plugins: [
            new WebpackShellPlugin({
                onBuildStart: ['echo "asd"'],
                //onBuildEnd: ['cp ../static/index.html ../templates/index.html']
            }),
            // new CompressionPlugin({
            //     filename: '[path].gz[query]',
            //     algorithm: "gzip",
            //     // deleteOriginalAssets: true,
            // }),
        ],
    },
};