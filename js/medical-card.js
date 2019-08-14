(function($){
    $(function(){
        const wid=$(".qrcodeBox").css("width");
        const hig=$(".qrcodeBox").css("height");
        const wids=wid.replace(/px/g,"");
        const higs=hig.replace(/px/g,"");
        // wid.replace(/^px$/g,"");
        $(".medicalCard").on("touchstart", function(e){
            const card=$(this)
        timeOutEvent = setTimeout(function(){
            $(".deleteEvent").css("display","block")
            //此处为长按事件-----在此显示遮罩层及删除按钮
        },2000);
        $(".deleteEvent-tip").on("click",function(){
              $(card[0]).css("display","none")
        })
    },)
        jQuery('#qrcode').qrcode({
            render: "canvas", //也可以替换为table
            width:wids,
            height:higs,
            text: "http://www.jq22.com"
        });
    })
})(jQuery)