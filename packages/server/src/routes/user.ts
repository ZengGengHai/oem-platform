import Router from "koa-router";
import { user } from "../db/ORM";
import { returnJSON, returnNull } from "../utils/response"

const router = new Router();

router.prefix("/api/user");

router.get('/', async (ctx, next) => {

  try {
    ctx.body = { msg: 'user' };
  } catch (err) {
    console.error(err);
  }
})


router.post('/user_login', async (ctx, next) => {
  const query = ctx.request.body
  if (!query.email && !query.password) {
    console.log('缺少请求参数')
    return returnJSON(ctx, {
      code: -2,
      msg: "缺少请求参数"
    })
  }
  const result = await user.findOne({ where: { email: query.email, password: query.password }, raw: true })
  if (result === null) {
    console.log('查找不到用户')
    return returnNull(ctx)
  }
  console.log('验证通过')
  return returnJSON(ctx, {
    code: 0,
    data: result
  })
})


export default router;