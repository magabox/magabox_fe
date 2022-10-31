const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
	app.use(
		createProxyMiddleware({
			target: "14.34.22.232:8080",
			changeOrigin: true,
		}),
	);
};
