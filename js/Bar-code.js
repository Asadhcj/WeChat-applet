(function($){
    $(function(){
        const wid=$(".wid").css("width");
        const hig=$(".barcode").css("height");
        let wids=wid.replace(/px/g,"");
        let higs=hig.replace(/px/g,"");
        wids=Math.ceil(wids/10) 
        console.log(wids,+higs)
    $("#bcTarget").empty().barcode("291381381371", "code11", {
        barWidth:wids,
        barHeight:+higs,
        showHRI: false
    });
    })
   
})(jQuery)