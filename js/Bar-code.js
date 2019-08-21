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
    const wid2=$(".barcodeImg2").css("width");
    const hig2=$(".barcodeImg2").css("height");
    let wids2=wid2.replace(/px/g,"");
    let higs2=hig2.replace(/px/g,"");
    wids2=Math.ceil(wids2/10) 
    console.log(wids,+higs)
    $("#bcTarget2").empty().barcode("291381381371", "code11", {
        barWidth:wids2,
        barHeight:+higs2,
        showHRI: false
    });
    $(".barcode").on("click",function(){
        $(this).hide();
        $(".barcode2").show()
    })
    $(".barcode2").on("click",function(){
        $(this).hide();
        $(".barcode").show()
    })
})
})(jQuery)