//处理服务器相关的脚本
import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';

import args from './util/args';

gulp.task('server',(cb)=>{
    
    if(!args.watch) return cb();  //如果不监听文件变化直接返回回调函数
  
    var server = liveserver.new(['--harmony','server/bin/www']);

    server.start();  //启动服务器

    //监听js和ejs文件的变化进行自动刷新
    gulp.watch(['server/public/**/*.js'],['server/views/**/*.ejs'],function(file){
        server.notify.apply(server,[file]);
    });

    //监听路由的变化重启服务器
    gulp.watch(['server/routes/**/*.js'],['server/app.js'],function(){
        server.start.bind(server)();
    });
})