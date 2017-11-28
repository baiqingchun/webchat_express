var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');  //我是新引入的ejs插件
var index = require('./routes/index');
var users = require('./routes/users');
var wechat = require('wechat');
var app = express();
var config = {
    token: 'weixin',//token是你申请测试公众号时候填写的token
    appid: 'wx8ddedaeb1b6a9546',//appid是申请时，自动生成的，就在最顶部
    encodingAESKey: '26f157015d7b3e20b40b94cf41a038ff',
    checkSignature: true // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//以下开始为获取到微信服务器发送过来的消息，并在此处回复消息
//此处监控的是URL的wechat，那么在配置微信的URL时，也需要在主机URL地址后面加入wechat这样才可以获取到数据
app.use(express.query());
app.use('/wechat', wechat(config, function (req, res, next) {
    // 微信输入信息都在req.weixin上
    var message = req.weixin;


    console.log(message);
    if(message.MsgType === 'text')
    {
        res.reply('这是一个自动回复');
    }
    else if(message.MsgType === 'voice')
    {
    }
    else if(message.MsgType === 'image')
    {
        res.reply([
            {
                title: '文章提示',
                description: '返回的是文章',
                picurl: 'http://pic002.cnblogs.com/images/2011/159097/2011102917303125.jpg',
                url: 'http://doxmate.cool/node-webot/wechat/api.html'
            }
        ]);
    }
}));
module.exports = app;
