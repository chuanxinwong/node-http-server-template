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



## 运行
```sh
# 安装依赖
npm i

# 运行
npm run dev
# or
node ./src/app.js

# 看到如下输出则表示启动成功
==> Redis Client ready:  redis://@127.0.0.1:6679
==> db mysql connetc success: 127.0.0.1:3606
==> app listening on port 7000
```


## 测试
访问 http://127.0.0.1:7000/api ，看到 Hello api! 表示路由可用；   

下面几个地址，演示了一些基础用法，get post 上传文件：  
http://127.0.0.1:7000/api/testget?a=2    
http://127.0.0.1:7000/api/testpost   
http://127.0.0.1:7000/api/testfile    
成功返回会把请求的参数带回来；  

展示静态文件的用法：   
http://127.0.0.1:7000/stest/a.html   
http://127.0.0.1:7000/stest/aa.png   


