(function($){
    $(function(){
        $(".paymentAmount-input").on("focus",function(){
        $(".subBtn").css({"background":"url(../img/inputtingTiedcard/inputAfter.png)","background-size":"6rem 1rem"});
    })
    $(".paymentAmount-input").on("blur",function(){
        if(!$(".paymentAmount-input").val()){
            $(".subBtn").css({"background":"url(../img/inputtingTiedcard/noInput.png)","background-size":"6rem 1rem"});
        }
    })
    $(".subBtn").on("click",function(){
        if(!$(".paymentAmount-input").val()){
            clearTimeout(timer)
            $(".paymentAmount-prompt").text("!付款金额不能为空").fadeIn(500)
            var timer=setTimeout(function(){
                $(".paymentAmount-prompt").fadeOut(500)
                clearTimeout(timer)
            },2000)
            return
        }
        
    })
    })
})(jQuery)