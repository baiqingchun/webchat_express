var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//打开连接 http://localhost:1234/users/hello，其中users是在app.js里配置的
router.get('/hello', function(req, res, next) {
    res.send('respond with a resource hello');
});
module.exports = router;
