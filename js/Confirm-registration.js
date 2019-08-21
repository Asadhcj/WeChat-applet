(function($){
    $(function(){
        $(".unionpay").on("click",function(){
            
            $(".payTreasure").removeClass("select");
            $(".unionpay").removeClass("select");
            $(".WeChat").removeClass("select");
            $(this).addClass("select")
        })
      
        $(".WeChat").on("click",function(){
            
            $(".payTreasure").removeClass("select");
            $(".unionpay").removeClass("select");
            $(".WeChat").removeClass("select");
            $(this).addClass("select")
        })
        let min=15;
        let sec=00;
        // 定时器
        const timer=setInterval(()=>{
           
           
           if(min==0&sec==0){
            $(".paytime").hide();
            clearInterval(timer)
            return
        }
            if(sec==00){
                sec=60;
                min--
            }
            sec--
            $(".paytime-min").text(min);
            $(".paytime-sec").text(sec);
        },1000)
    })
})(jQuery)