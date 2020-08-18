module.exports = {
  apps : [{
    name:'server',
    exec_mode: 'cluster',
    instances: '2',
    script: './src/start/www.ts',
    interpreter: './node_modules/.bin/ts-node',
    error_file :"./logs/error.log",//错误输出日志
    out_file:"./logs/out.log",  //日志
    log_date_format:"YYYY-MM-DD HH:mm Z" //日期格式
    
  }]
};
