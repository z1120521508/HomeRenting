// vue.config.js

/**
 *@type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    devServer:{
        proxy:{
            '/':{
                target:"http://172.20.10.6:8888/",
                changeOrigin:true,
                ws:true
            },
        }
    }
  }

  //沈国伟电脑ipv4地址：172.20.10.6
  //周雨辰电脑ipv4地址：172.20.10.8