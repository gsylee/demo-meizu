// 命名空间：减少代码冲突
var INDEX = {
    // 关闭广告
    closeAd: function closeAd() {
        // 按钮
        var close_btn = byId("close-btn");
        // id为header的元素
        var header = byId("header");
        // id为top-ad的元素
        var top_ad = byId("top-ad");
        var timer = null; //保存定时器的返回值
        var top = 0; //保存定位的top值
        // 给按钮绑定点击事件
        close_btn.onclick = function () {
            // 获取header元素的top值
            timer = setInterval(function () {
                top = parseInt(header .style.marginTop,10);
                // 判断top是否为0；
                if(top === 0) {
                    // 清除定时器
                    clearInterval(timer);
                    // 让头部的广告消失
                    top_ad.style.display = "none";
                }
                header.style.marginTop  = top - 2 + "px";
            },10);
        };
    },

    // 输入框
    fnInput: function fnInput() {
        $(".form input").focus(function() {
            $(this).val("");
        }).blur(function() {
            $(this).val(this.defaultValue);
        });
    },
    
    // 使用jquery实现轮播图效果
    marquee: function marquee() {
        var $btns = $("#mq-btn span");
        var $as = $("#marquee a");
        var myIndex = 0;
        var timer = null; //保存定时器的返回值
        var time = 2000; //定时器执行间隔事件
        $btns.hover(function() {
            // 清除定时器
            clearInterval(timer);
            var v = parseInt($(this).attr("order"));
            if(myIndex == v ) {
                return false;
            } else {
                myIndex = v;
                mqCon(myIndex);
            }
        },function() {
            timer = setInterval(autoPlay,time);
        });
        timer = setInterval(autoPlay,time);
        // 定时器回调函数
        function autoPlay() {
            myIndex ++;
            if(myIndex > 4) {
                myIndex = 0;
            }
           mqCon(myIndex);
        }
    
        // 鼠标放在图片上的事件
        $as.hover(function() {
            clearInterval(timer);
        },function() {
            timer = setInterval(autoPlay,time);
        });
    
        // 公共代码
        function mqCon(curindex){
            // 按钮高亮效果
            $btns.eq(curindex)
                 .addClass("high-color")
                 .siblings().removeClass("high-color");
            // 图片切换效果
            $as.eq(curindex)
               .stop(true).fadeIn("500")
               .siblings().fadeOut("500");
        }
    },

    // 左右切换效果：
    lrChange: function lrChange() {
        // 获取包围元素的宽度
        var con_wrap = $("#con-wrap").width();
        var index = 1; //表示当前所在的页数
        // 获取总得宽度
        var $con = $("#con");
        var con_width = $con.width();
        // console.log(con_width);
        var all_page = Math.ceil(con_width / con_wrap);
        // 给prev和next 元素添加点击事件
        var $next = $("#next");
        var $prev = $("#prev");
        $next.click(function() {
           if(index < all_page) {
                 index += 1 ;
               $con.stop(false,true)
                   .animate({"left": "-=" + con_wrap + "px"},"normal");
                // if(index == all_page) {
                //     $(this).css("background","url(/images/index/icon/no-right.png) no-repeat center");
                // }
           }else {
               return false;
           }
        });
        $prev.click(function() {
            if(index > 1) {
                index -= 1;
                $con.stop(false,true)
                    .animate({"left": "+=" + con_wrap + "px"},"normal");
                // if(index == 1) {
                //     $(this).css("background","url(/images/index/icon/no-left.png) no-repeat center");
                // }
            }else {
                return false;
            }
        });
    },

    // 手机周边，选项卡切换效果
    tgChange: function tgChange() {
        // 获取要绑定事件的元素
        var $ul = $('#tagchange');
        var $as = $ul.find('a');
        // 给每个li添加一个order序号
    
        // $as.each( function(i) {
        //     $(this).attr('order',i);
        // });
        for(var i =0,len=$as.length; i< len; i++) {
            $as[i].setAttribute('order',i);
        }
        var order = 0; //初始化保存鼠标经过的元素的order值
        // 获取 要进行切换的内容
        var $tagcons = $('#tag-con ul');
        // 通过on()方法，吧事件绑定在三个选项卡的父元素上面
        $ul.on('mouseenter','a',function() {
            // 判断此时鼠标经过的a元素是不是当前高亮的a元素
            var cindex = $as.index(this);
            if(cindex == order) {
                return false;
            }else {
                $(this).addClass('high')
                .parent().siblings()
                .children('a').removeClass('high');
               $tagcons.eq(cindex).show()
                .siblings().hide();
                order = $(this).attr('order');
            }
        });
    }
};

