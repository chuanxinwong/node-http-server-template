/**
 * redis 的初始化， 和获取redis的连接实例；
 * 不建议直接使用该实例，
 * 建议在这里进行 redis 调用的封装；
 * 
 * @Author: yuyuyu 
 * @Date: 2024-01-05 11:56:29 
 * @Last Modified by: yuyuyu
 * @Last Modified time: 2024-01-05 14:57:14
 */


import redis from "redis";
import app_cofnig from "../app_cofnig.js";

const cfg = app_cofnig.redis;

var redisClient = null;

function createRedis() {
  var ruri = `redis://@${cfg.host}:${cfg.port}`;

  return new Promise((resolve, reject) => {
    redisClient = redis.createClient({
      url: ruri,
      password: cfg.pswd,
    });

    redisClient.on("error", (err) => {
      console.log("Redis Client error", err);
      reject(err);
    });
    redisClient.on("ready", (err) => {
      console.log("==> Redis Client ready: ", ruri);
      resolve();
      redisClient.set("redis_conn_time", Date.now());
    });

    redisClient.connect();
  });
}

function getRedisClient() {
  return redisClient;
}

export default {
  createRedis: createRedis,
  getRedisClient: getRedisClient,
};
