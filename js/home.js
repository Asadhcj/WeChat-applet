(function($){
    $(function(){
        // 同步条形码数值项
        $(".barcodenum").text("324123432543")
        // 切换Tabbar
        $(".home").on("click",function(){
            if($(this).hasClass("no-select")){
                $(".home").removeClass("no-select");$(".user").removeClass("select")  
            }         
        });
        $(".user").on("click",()=>{
             if(!$(this).hasClass("select")){
                $(".home").addClass("no-select");$(".user").addClass("select")  
            }   
                 
        });
        // 生成条形码
        const wid=$(".wid").css("width");
        const hig=$(".barcodeImg").css("height");
        let wids=wid.replace(/px/g,"");
        let higs=hig.replace(/px/g,"");
        wids=Math.ceil(wids/10) 
        console.log(wids,+higs)
        $("#bcTarget").empty().barcode("324123432543", "code11", {
            barWidth:wids,
            barHeight:+higs,
            showHRI: false
        });
    })
})(jQuery)