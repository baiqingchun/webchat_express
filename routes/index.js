/*var express = require('express');
var router = express.Router();

/!* GET home page. *!/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = function (app) {
    require('./test')(app);
    require('./controller/wechat_init')(app);
    require('./controller/createMenu')(app);
    require('./ceshi')(app);//用于测试用的
};
