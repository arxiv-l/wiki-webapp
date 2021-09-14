module.exports = {
    //配置启动端口号
    devServer: {
        port: 8081
    },
    configureWebpack: {
        resolve: {
            alias: {
                components: "@/components",
                content: "@/components/content",
                common: "@/components/common",
                assets: "@/assets",
                network: "@/network",
                views: "@/views",
            },
        },
    },
    publicPath: '/'
}
