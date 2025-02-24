const path = require('path');

module.exports = function override(config, env) {
    config.resolve.alias = {
        '@': path.resolve(__dirname, 'src'),
        // 你可以添加更多别名
    };
    // 禁用 webpack dev server 的覆盖层
    if(config.devServer) {
        config.devServer.overlay = false;
    } else {
        config.devServer = {
            overlay: false,
        }
    }
    // config.devServer = {
    //     ...config.devServer,
    //     client: {
    //         ...config.devServer.client,
    //         // overlay: false,
    //     }
    // }
    return config;
};