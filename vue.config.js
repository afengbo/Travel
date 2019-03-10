module.exports = {
  // 服务端存放项目路径
  // assetsDir: '/',
  baseUrl: './',
  devServer: {
    // 地址代理
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}
