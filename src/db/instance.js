/**
 * 数据库的连接实例；
 * @Author: yuyuyu 
 * @Date: 2024-01-05 13:32:00 
 * @Last Modified by: yuyuyu
 * @Last Modified time: 2024-01-05 14:56:48
 */


import Sequelize from "sequelize";
import app_cofnig from "../app_cofnig.js";

// 加载定义的表；
import user from "./defTables/user.js"


const cfg = app_cofnig.mysql;

// 数据库实例
var seqInstance;

// 创建实例
function createInstance() {
  seqInstance = new Sequelize(cfg.database, cfg.username, cfg.password, cfg.options);
  seqInstance.define(user.name, user.field, user.config);

  let op = cfg.options;
  console.log(`==> db ${op.dialect} connetc success: ${op.host}:${op.port}`)
}

// 获取实例
function getInstance() {
  return seqInstance;
}


// sequelize.sync();
// sequelize.sync({ alter: true });
// sequelize.sync({ force: true });

export default {
  createInstance,
  getInstance,
};

