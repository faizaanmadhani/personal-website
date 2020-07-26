module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-fontawesome-css/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Faizaan Madhani's Blog","short_name":"FM Blog","start_url":"/","background_color":"#F7F8FC","theme_color":"#663399","display":"minimal-ui","icon":"content/assets/fm-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"2fdbb9b8e2dd599f57ea415f45648f0e"},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
