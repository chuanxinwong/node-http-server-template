/**
 * @api {get} /api/testpost
 * 
 * @apiGroup 
 * @apiName 测试post请求
 * @apiDescription 测试post请求
 * @apiVersion  1.0.0
 *
 * @apiSuccess {Number} code 0 成功;
 * @apiSuccess {Object} data 数据列表;
 * @apiSuccess {String} msg 消息
 */
export default async function (req, res) {
  const { body } = req;

  res.send({
    code: 0,
    data: {
      time: Date.now(),
      reqs: body,
    },
    msg: "test post success",
  });
}
