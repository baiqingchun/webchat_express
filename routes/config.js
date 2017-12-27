module.exports = function() {
    // 输入你的配置
    return {
     /*   appId: 'wx8ddedaeb1b6a9546',
        appSecret: '26f157015d7b3e20b40b94cf41a038ff', */
        token: 'weixin',//token是你申请测试公众号时候填写的token
        appid: 'wx8ddedaeb1b6a9546',//appid是申请时，自动生成的，就在最顶部
        appsecret:'26f157015d7b3e20b40b94cf41a038ff',
        encodingAESKey: '',
        checkSignature: false // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
    };
};
