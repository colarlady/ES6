//关于计时的处理

class Timer {
    countdown(end,update,handle){  //计时
        const now = new Date().getTime();  //当前事件
        const self = this;  //记录this指向
        if(now-end>0){ //如果当前已经到结束事件
            handle.call(this);
        }else{
            let last_time = end-now;  //剩余时间
            const px_d = 1000*60*60*24;
            const px_h = 1000*60*60;
            const px_m = 1000*60;
            const px_s = 1000;
            let d = Math.floor(last_time/px_d);
            let h = Math.floor((last_time-px_d*d)/px_h);
            let m = Math.floor((last_time-px_d*d-px_h*h)/px_m);
            let s = Math.floor((last_time-px_d*d-px_h*h-px_m*m)/px_s);
            let r = [];
            if(d>0){
                r.push(`<em>${d}</em>天`);
            }

            if(r.length||(h>0)){
                r.push(`<em>${h}</em>时`);
            }

            if(r.length||(m>0)){
                r.push(`<em>${m}</em>分`);
            }

            if(r.length||(s>0)){
                r.push(`<em>${s}</em>秒`);
            }

            self.last_time = r.join('');
            update.call(self,r.join(''));
            setTimeout(function(){
                countdown(end,update,handle);
            },1000);
        }
    }

}

export default Timer