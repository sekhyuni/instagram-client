const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'http://localhost:8080'
}

module.exports = (app) => {
    app.use([
        '/accounts',
    ],
        createProxyMiddleware(proxy)
    );
};