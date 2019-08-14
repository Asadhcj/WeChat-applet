(function($){
    $(function(){
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
    })
})(jQuery)