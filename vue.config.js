module.exports = {
    configureWebpack: {
        resolve: {
            extensions:[],
            alias: {
                '@':'src',
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'views':'@/views',
                'network':'@/network'
            }
        }
    }
}