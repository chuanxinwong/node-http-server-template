import Express from "express";
import router from "./routers/index.js";
import redis from "./redis/instance.js"
import db from "./db/instance.js"

import app_cofnig from "./app_cofnig.js";

// 连接 redis , 不需要就注释；
await redis.createRedis();

// 连接 mysql , 不需要就注释；
await db.createInstance();

// node http server
const app = Express();

// 添加对请求体的解析；
app.use(Express.json());

// 加载路由；
app.use("/api", router);

// 使用静态文件目录；
app.use("/stest", Express.static("./src/html"));

app.listen(app_cofnig.nosePort, () => {
  console.log(`==> app listening on port ${app_cofnig.nosePort}`);
});

