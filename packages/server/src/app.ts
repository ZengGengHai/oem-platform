import Koa from "koa";
import cors from "koa2-cors";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import koaStatus from "koa-static";
import path from 'path';
import { historyApiFallback } from 'koa2-connect-history-api-fallback';


//api 
import user from "./routes/user"

const app: Koa = new Koa();


app.use(
  cors({
    origin: (ctx) => {
      console.log(ctx.url)
      // if (ctx.url === '/test') {
      //   return false;
      // }
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
);


app.use(bodyParser());


//api 路径由koa-router 管理
app.use(historyApiFallback({ whiteList: ['/api'] }));

app.use(koaStatus(path.resolve(__dirname,'..') + '/uploads'));
app.use(koaStatus(path.resolve(__dirname,'..') + '/build'));


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = Number(new Date()) - Number(start);
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})


// routes
app.use(user.routes()).use(user.allowedMethods());
app.use(logger());



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

export default app;
