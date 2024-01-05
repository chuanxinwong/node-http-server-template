export default {

  // Node 启动的端口
  nosePort: 7000,
  

  // redis 配置
  redis: {
    host: "127.0.0.1",   // 主机
    port: "6679",   // 端口
    pswd: "eYVX7EwamDxKPfDmwMtyKVge8oLa2t19",   // 密码
  },

  // 数据库配置
  mysql: {
    database: "mydb1",
    username: "user01",
    password: "123456789",
    options: {
      dialect: "mysql",
      host: "127.0.0.1",
      port: 3606
    }
  },

}