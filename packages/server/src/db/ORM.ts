import { db, pool } from "../config/config"
import { Sequelize } from "sequelize";
import waitPort from "wait-port";
import UserModel from "../models/user";

export const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  dialect: 'postgres',
  logging: false,
  timezone: '+08:00',
  pool,
  // 动态同步
  sync: { alter: true },    // 数据库默认参数,全局参数
  define: {
    timestamps: true,
    createdAt: "createdAt", // 自定义时间戳
    updatedAt: "updatedAt", // 自定义时间戳
    freezeTableName: true,
    charset: 'utf8mb4',
    collate: 'utf8_general_ci'
  }
});

export const user = UserModel(sequelize);
 

export async function init() {
  await waitPort({ host: db.host, port: db.port }) // 等待数据库服务启动
  //动态同步数据表
  await sequelize.sync().then(() => {
    console.log('动态同步表成功');
  }).catch(err => {
    console.log('动态同步表失败');
  });
  sequelize.authenticate().then(() => {
    console.log(`API 接口服务启动成功 ${db.host}`);
  }).catch(err => {
    console.log('API 接口服务启动失败', err);
  });

}
