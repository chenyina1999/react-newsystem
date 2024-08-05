const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(
        '/x/vip/ads/materials',
        createProxyMiddleware({
            target: 'https://api.bilibili.com',
            changeOrigin: true,
        })
    )
}