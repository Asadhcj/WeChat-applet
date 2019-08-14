(function($){
    $(function(){
        $(".selectIcon").on("click",function(){
            if($(this).hasClass("selected")){
                $(this).removeClass("selected")
            }else{
                $(this).addClass("selected")
            }
        })
        $(".online-buildCard").on("click",function(){
            if($(".buildCard").is(".select")) return;
            $(".buildCard").toggleClass("select");    
            $(".bindingCard").toggleClass("select");   
        });
        $(".online-bindingCard").on("click",function(){
            if($(".bindingCard").is(".select")) return;
            $(".buildCard").toggleClass("select");    
            $(".bindingCard").toggleClass("select");
        });
    })
})(jQuery)