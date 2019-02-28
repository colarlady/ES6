//跟彩种相关的基本信息的存储
import $ from 'jquery';

class Base {

    /**
     * [initPlayList 初始化奖金和玩法以及说明]
     */
    
    initPlayList(){
        this.play_List.set('r2',{
            bonus:6,
            tips:'从01~11中任选2个或者多个号码，号码和开奖号码任意两个号码相同,即中奖<em class="red">6</em>元',
            name:'任二'
        })

        this.play_List.set('r3',{
            bonus:19,
            tips:'从01~11中任选3个或者多个号码，号码和开奖号码任意三个号码相同,即中奖<em class="red">19</em>元',
            name:'任三'
        })

        this.play_List.set('r4',{
            bonus:78,
            tips:'从01~11中任选4个或者多个号码，号码和开奖号码任意四个号码相同,即中奖<em class="red">78</em>元',
            name:'任四'
        })


        this.play_List.set('r5',{
            bonus:540,
            tips:'从01~11中任选5个或者多个号码，号码和开奖号码相同,即中奖<em class="red">540</em>元',
            name:'任五'
        })

        this.play_List.set('r6',{
            bonus:90,
            tips:'从01~11中任选6个或者多个号码，号码和开奖号码任意五个号码相同,即中奖<em class="red">90</em>元',
            name:'任六'
        })


        this.play_List.set('r7',{
            bonus:26,
            tips:'从01~11中任选7个或者多个号码，号码和开奖号码任意五个号码相同,即中奖<em class="red">26</em>元',
            name:'任七'
        })


        this.play_List.set('r8',{
            bonus:9,
            tips:'从01~11中任选5个或者多个号码，号码和开奖号码任意五个号码相同,即中奖<em class="red">9</em>元',
            name:'任八'
        })
    }


    /**
     * [setOmit 设置遗漏数据 ]
     * @param {*} omit 
     */
    setOmit(omit){
        let self = this;
        self.omit.clear();
        for(let [index,item] of omit.entries()){
            self.omit.set(index,item);
        }

        $(self.omit_el).each(function(index,item){
            $(item).text(self.omit.get(index));
        });
    }

    /**
     * [setOpenCode 设置开奖号码]
     */
    setOpenCode(code){
        let self = this;
        self.open_code.clear();
        for(let item of code.values()){
            self.open_code.add(item);
        }
        self.updateOpenCode&&self.updateOpenCode.call(self,code);
    }

    /**
     * [toggleCodeActive 号码选中取消]
     * @param {*} e 
     */
    toggleCodeActive(e){
        let self = this;
        let $cur = $(e.currentTagrget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }

    /**
     * [changePlayNav 切换玩法]
     * @param {*} e 
     */
    changePlayNav(e){
        let self = this;
        let $cur = $(e.currentTagrget);
        $cur.addClass('active').sibilings().removeClass('active');
        self.cur_play = $cur.attr('desc').toLocaleLowerCase();
        $('#zx_sm span').html(self.play_List.get(self.cur_play).tip);
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        self.getCount();
    }

    /**
     * [assistHandle 操作区]
     * @param {*} e 
     */
    assistHandle(e){
        e.preventDefault();
        let self = this;
        let $cur = $(e.currentTagrget);
        let index = $cur.index();
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        if(index===0){
            $('.boll-list .btn-boll').addClass('btn-boll-active');
        }
        if(index===1){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent-5>0){
                    $(t).addClass('btn-boll-active');
                }
            })
        }

        if(index===2){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent-6>0){
                    $(t).addClass('btn-boll-active');
                }
            })
        }

        
        if(index===3){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent%2==1){
                    $(t).addClass('btn-boll-active');
                }
            })
        }

        if(index===4){
            $('.boll-list .btn-boll').each(function(i,t){
                if(t.textContent%2==0){
                    $(t).addClass('btn-boll-active');
                }
            })
        }

        self.getCount();

    }

    /**
     * [getName 获取当前彩票名称]
     */
    getName(){
        return this.name;
    }

    /**
     * [addCode 添加号码]
     */
    addCode(){
        let self = this;
        let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g);
        let active = $active?$active.length:0;
        let count = self.computeCount(active,self.cur_play);
        if(count){
            self.addCodeItem($active.join(''),self.cur_play,self.play_List.get(self.cur_play).name,count);
        }
    }

    /**
     * [addCodeItem 添加单次号码]
     * @param {*} code 
     * @param {*} type 
     * @param {*} typeName 
     * @param {*} count 
     */
    addCodeItem(code,type,typeName,count){
        let self = this;
        const tpl = `
            <li codes="${type}|${code}" bonus="${count*2}" count="${count}">
                <div class="code">
                    <b>${typeName}${count>1?'复式':'单式'}</b>
                    <b class="em">${code}</b>
                    [${count}注,<em class="code-list-money">${count*2}</em>元]
                </div>
            </li>
        `;
        $(self.cart_el).append(tpl);
        self.getTotal();
    }

    /**
     * [getCount ]
     */
    getCount(){
        let self  = this;
        let active = $('.boll-list .btn-boll-active').length;
        let count = self.computeCount(active,self,cur_play);
        let range = self.computeBonus(active,self,cur_play);
        let money = count*2;
        let win1 = range[0] - money;
        let win2 = range[1] - money;
        let tpl;
        let c1 = (win1<0 && win2<0)?Math.abs(win1):win1;
        let c2 = (win1<0 && win2<0)?Math.abs(win2):win2;
        if(count===0){
            tpl = `您选了<b class="red">${count}</b> 注,共<b class="red">${count*2}</b>元`;
        }else if(range[0]===range[1]){
            tpl = `您选了<b>${count}</b> 注,共<b>${count*2}</b> 元 <em>若中奖,奖金:
                    <strong class="red">${range[0]}</strong> 元,
                    您将${win1>=0?'盈利':'亏损'}
                    <strong class="${win1>0?'red':'green'}">${Math.abs(win1)}</strong></em>
                    `
        }else{
            tpl = `您选了<b>${count}</b> 注,共<b>${count*2}</b> 元 <em>若中奖,奖金:
            <strong class="red">${range[0]}</strong> 元,
            您将${win1>=0?'盈利':'亏损'}
            <strong class="${win1>0?'red':'green'}">${Math.abs(win1)}</strong>元</em>
            `
        }
        $('.sel_info').html(tpl);
    }

    /**
     * [getTotal 计算所有金额]
     */
    getTotal(){
        let count = 0;
        $('.codelist li').each(function(index,item){
            count+=$(item).attr(count)*1;
        })
        $('#count').text(count);
        $('#money').text(count*2);
    }

    /**
     * [getRandom 获取随机数]
     * @param {*} num 
     */
    getRandom(num){
        let arr = [],index;
        let number = Array.from(this.number);
        while(num--){
            index = Number.parseInt(Math.random()*number.length);
            arr.push(number[index]);
            number.splice(index,1);
        }
        return arr.join(' ');
    }

    /**
     * [getRandomCode 添加随机号码]
     * @param {*} e 
     */
    getRandomCode(e){
        e.preventDefault();
        let num = e.currentTagrget.getAttribute('count');
        let play = this.cur_play.match(/\d+/g)[0];
        let self = this;
        if(num==='0'){
            $(self.cart_el).html('');
        }else{
            for(let i = 0;i<num;i++){
                self.addCodeItem(self.getRandom(play),self,cur_play,slef.play_List.get(slef.cur_play).name,1);
            }
        }
    }

}

export default Base;