export const db = {
  database: "postgres",
  user: "postgres",
  password: "secret",
  host: "pgsql",
  port: 5432
}

export const pool = {
  max: 10,
  min: 0,
  //建立链接最长时间
  acquire: 300000,
  //空闲最长链接时间
  idle: 100000
}

export const port = '3000'

