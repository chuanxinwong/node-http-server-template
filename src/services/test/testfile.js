/**
 * @api {post} /api/testfile
 * 
 * @apiGroup 
 * @apiName 测试上传文件
 * @apiDescription 测试上传文件
 * @apiVersion  1.0.0
 *
 * @apiHeader Content-Type multipart/form-data; 使用 FormData 请求方式;
 *
 * @apiBody {File} file='' 文件字段
 *
 * @apiSuccess {Number} code 0
 * @apiSuccess {String} msg 消息
 */

export default async function (req, res) {
  const { body, file } = req;

  debugger

  res.send({
    code: 0,
    data: {
      time: Date.now(),
      reqs: body,
      fileinfo: {
        size: file.size,
        name: file.originalname,
        mimetype: file.mimetype,
      },
    },
    msg: "test post file success",
  });
}
