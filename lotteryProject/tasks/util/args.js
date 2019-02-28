import yargs from 'yargs'  //完成命令行参数解析

const args = yargs
    .option('production',{
        //区分生产环境还是开发环境
        boolean:true,
        default:false,
        describe:'min all scripts'
    })

    .option('watch',{
        //监听文件变化进行热更新
        boolean:true,
        default:false,
        describe:'watch all files'
    })

    .option('verbose',{
        //输出详细日志
        boolean:true,
        default:false,
        describe:'log'
    })

    .option('sourcemaps',{
        //指定匹配
        describe:'force the creation of sourceMap'
    })

    .option('port',{
        //指定端口
        string:true,
        default:8080,
        describe:'server port'
    })

    .argv;

    export default args;