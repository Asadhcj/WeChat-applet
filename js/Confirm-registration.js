(function($){
    $(function(){
        $(".unionpay").on("click",function(){
            
            $(".payTreasure").removeClass("select");
            $(".unionpay").removeClass("select");
            $(".WeChat").removeClass("select");
            $(this).addClass("select")
        })
        // $(".payTreasure").on("click",function(){
           
        //     $(".payTreasure").removeClass("select");
        //     $(".unionpay").removeClass("select");
        //     $(".WeChat").removeClass("select");
        //     $(this).addClass("select")
        // })
        $(".WeChat").on("click",function(){
            
            $(".payTreasure").removeClass("select");
            $(".unionpay").removeClass("select");
            $(".WeChat").removeClass("select");
            $(this).addClass("select")
        })
    })
})(jQuery)