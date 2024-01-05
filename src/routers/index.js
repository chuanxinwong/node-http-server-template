/**
 * 定义所有路由方式和对应的处理函数；
 * 以及路由处理的中间件；
 * @Author: yuyuyu 
 * @Date: 2024-01-05 11:33:21 
 * @Last Modified by: yuyuyu
 * @Last Modified time: 2024-01-05 15:12:03
 */


import Express from "express";
import multer from "multer";

import testget from "../services/test/testget.js";
import testpost from "../services/test/testpost.js"
import testfile from "../services/test/testfile.js"


const upload = multer();
const router = Express.Router();

router.get("/", (req, res) => {
  res.send("Hello api!");
});

// 一些基本风格的定义；
router.get("/testget", testget);
router.post("/testpost", testpost);
router.post("/testfile", upload.single("file"), testfile);    // file 规定前端上传的文件字段；


export default router;
