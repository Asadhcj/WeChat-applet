(function($){
    $(function(){
        const wid=$(".qrcodeBox").css("width");
        const hig=$(".qrcodeBox").css("height");
        const wids=wid.replace(/px/g,"");
        const higs=hig.replace(/px/g,"");
        const wid1=$(".qrcodecontent").css("width");
        const hig1=$(".qrcodecontent").css("height");
        const wids1=wid1.replace(/px/g,"");
        const higs1=hig1.replace(/px/g,"");
        // wid.replace(/^px$/g,"");
        var self = this;
        var longClick =0;
        $(".medicalCard-delete-txt").on({
            touchstart: function(e){
                longClick=0;//设置初始为0
                timeOutEvent = setTimeout(function(){
                    //此处为长按事件-----在此显示遮罩层及删除按钮
                    $(".deleteEvent").show()
                    longClick=1;//假如长按，则设置为1
                },500);
            },
            touchmove: function(){
                clearTimeout(timeOutEvent);
                timeOutEvent = 0;
                e.preventDefault();
            },
            touchend: function(e){
                clearTimeout(timeOutEvent);
                if(timeOutEvent!=0 && longClick==0){//点击
                    //此处为点击事件----在此处添加跳转详情页
                }
                return false;
            }
        });
        // 删除卡事件
        $(".deleteEvent").on("click",function(){
            $(".medicalCard").css("display","none")
        })
        // 二维码放大事件
        $(".qrcodeBox").on("click",function(){
            $(".qrcodeBg").css("display","block")  
        })
        $(".qrcodeBg").on("click",function(){
            $(".qrcodeBg").css("display","none")  
        })
        
        jQuery('#qrcode').qrcode({
            render: "canvas", //也可以替换为table
            width:wids,
            height:higs,
            text: "http://www.jq22.com"
        });
        jQuery('#qrcode1').qrcode({
            render: "canvas", //也可以替换为table
            width:wids1,
            height:higs1,
            text: "http://www.jq22.com"
        });
    })
})(jQuery)