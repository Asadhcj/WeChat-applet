(function($){
    $(function(){
        $(".cancelnum1").on("click",function(){
           
            if($(this).text()=="取消预约"){
                $(".nopay").text("预约取消").addClass("cancel");
                $(".nowPay").hide()
                $(this).addClass("cancel-bg").text("已取消");
            }else{
                $(".nopay").text("挂号取消").addClass("cancel");
                $(".nowPay").hide();
                $(this).addClass("cancel-bg").text("已取消");
            }
           
        })
        $(".cancelnum2").on("click",function(){
            if($(this).text()=="取消预约"){
                $(".success").text("预约取消").addClass("cancel");
                $(this).addClass("cancel-bg").text("已取消");
            }else{
                $(".success").text("挂号取消").addClass("cancel");
                $(this).addClass("cancel-bg").text("已取消");
            }
            
        })
        $(".online-bindingCard").on("click",function(){
            $(".success").text("预约成功");
            $(".cancel").text("预约取消");
            $(".payCost").text("取消预约");
            $(".nowPay").text("立即支付");

       
        })
        $(".online-buildCard").on("click",function(){
            $(".success").text("挂号成功");
            $(".cancel").text("挂号取消");
            $(".payCost").text("取消挂号");
          

        })
    })
})(jQuery)