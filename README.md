#说明#
1，官网教程http://www.expressjs.com.cn/starter/generator.html
用express快速搭建应用。

通过应用生成器工具 express 可以快速创建一个应用的骨架。
1,通过如下命令安装：

  `npm install express-generator -g`

下面的示例就是在当前工作目录下创建一个命名为 myapp 的应用

`express myapp`

2,然后安装所有依赖包

`cd myapp`
`npm install`

3,启动应用

`npm start`

根据官网我们已经建立好了express框架，但是这个框架的页面居然是.jade的，什么鬼，我希望做一个.html的。

下面便是如何做一个.html的框架
1，安装ejs,当然是在myapp的目录下

`npm install ejs -save`

2，引入ejs，找到根目录下的app.js,加入代码

`var ejs = require('ejs');  //引入的ejs插件`

3，还是在app.js里，设置html引擎

`app.engine('html', ejs.__express);`

4，在app.js里，修改代码，设置视图引擎

`app.set('view engine', 'html');`

5，重启服务，可以访问html文件了。

这样我们就可以做html路由了，开始我们的express之旅吧。