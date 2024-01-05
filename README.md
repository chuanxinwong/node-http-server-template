# node-http-server-template
这是一个简单的 nodejs http 服务基础框架的代码；  


## 基本组件
- express ；
- sequelize (mysql) ， 该项可选；  
- redis ， 该项可选；  


## 基础结构

- src           代码目录；
- src/db        封装数据的基本操作；  
- src/redis     封装 redis 的操作；  
- src/routers   路由的定义；  
- src/services  实际的接口处理函数；  
- src/app.js    程序入口
- src/app_config.js   程序配置（mysql, redis）



## wsl 
mysql, redis 建议在 wsl 中使用；    
wsl 目录中给出了 mysql, redis 的基本配置；可以快速完成部署；    
也可以不使用 mysql, redis ， 在 app.js 中去向相应代码即可；  
