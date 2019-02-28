//源文件发生改变时，如何编译自动更新到目标文件
import gulp from 'gulp';
import gulpif from 'gulp-if';
import gulputil from 'gulp-util';
import args from './util/args';


gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts']);
    gulp.watch('app/**/*.ejs',['pages']);
    gulp.watch('app/**/*.css',['css']);
})