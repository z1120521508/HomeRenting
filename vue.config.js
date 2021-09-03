// vue.config.js

/**
 *@type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    devServer:{
        proxy:{
            '/':{
                target:'http://172.20.10.8:8080/',
                changeOrigin:true,
                ws:true
            },
        }
    }
  }