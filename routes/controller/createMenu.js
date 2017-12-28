//单独运行这个文件即可创建菜单
var WechatAPI = require('wechat-api');
var config = require('../config')();
// var config = {
//     appid: 'wx8ddedaeb1b6a9546',//appid是申请时，自动生成的，就在最顶部
//     appsecret:'26f157015d7b3e20b40b94cf41a038ff',
//
// };
let menu = {
    "button": [
        {
            "type": "click",
            "name": "歌曲",
            "key": "V1001_TODAY_MUSIC"
        },
        {
            "name": "菜单",
            "sub_button": [
                {
                    "type": "view",
                    "name": "搜索",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "click",
                    "name": "赞一下我们",
                    "key": "V1001_GOOD"
                }]
        }]
}
var api = new WechatAPI(config.appid, config.appsecret);
api.createMenu(menu, function (err, data, res) {
    console.log(err, data, res)
    // console.log('创建菜单成功')
});
/*
module.exports = function (app) {

}*/
