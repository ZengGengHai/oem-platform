## global dependence 
- pm2  # 本地和线上docker都用到
文档 https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/#docker-integration 
可视化工具：https://id.keymetrics.io/api/oauth/login#/register 
npm install -g pm2 
pm2 install typescript 
npm install
- sequelize-Automate (Postgres) # 本地开发生成表模型用到
sequelize v6 文档 https://sequelize.org/master/
sequelize-Automate 自动生成 models https://github.com/nodejh/sequelize-automate
npm install -g sequelize-automate 
npm install -g pg pg-hstore

## install dependence
npx lerna clean;
npx lerna bootstrap;

## change config in server/config/config.ts
dev：host = localhost;
pro：host = pgsql;

## start project
cd packages
./bin/start.sh
