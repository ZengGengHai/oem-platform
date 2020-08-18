
export function returnJSON(ctx:any, json:any) {
  ctx.set("Content-Type", "application/json")
  ctx.body = JSON.stringify(json)
  ctx.statusCode = 200;
  ctx.body = JSON.stringify(json)
  return ctx;
};
export function returnNull(ctx:any) {
  return returnJSON(ctx, {
    code: -2,
    msg: "查找无数据"
  })
}