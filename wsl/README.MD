# 建议在 wsl 中安装
请自行搜索安装 wsl ；  
如果没有wsl， 请根据实际情况 使用自己本的配置；  



## compose-mysql.yml
- 在 wsl 中安装 mysql ;    
- 本地连接端口中为 3606， 防止用自己电脑上已经安装 mysql 冲突；
- 账号、密码、数据库，请查看yml文件；  
- 安装命令： docker-compose -f ./compose-mysql.yml up -d


## compose-redis.yml
- 在 wsl 中安装 rdis ;    
- 本地连接端口中为 6679 防止用自己电脑上已经安装 redis 冲突；
- 连接 密码 请查看yml文件；  
- 安装命令： docker-compose -f ./compose-redis.yml up -d



## 注意
- 使用 docker-compose 时，请将目录切换到 wsl 文件夹；