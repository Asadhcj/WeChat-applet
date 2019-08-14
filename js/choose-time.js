(function($){
    $(function(){
        $(".according").on("click",function(){
            if( $(".doctor-experience").hasClass("ellips")){
                $(".doctor-experience").removeClass("ellips");
                $(this).text("收起")
            }else{
                $(".doctor-experience").addClass("ellips");
                $(this).text("展开")
            }
           
        })
    })
})(jQuery)