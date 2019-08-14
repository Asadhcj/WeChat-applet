(function($){
    $(function () {
        $(".calendar").show();
        $(".updownBtn").on("click", function () {
            if ($(".calendar").hasClass("hidd")) {
                $(".calendar").removeClass("hidd");
                $(".updown-txt").text("收起");
                $("#updown-icon").removeClass("glyphicon glyphicon-menu-down");
                $("#updown-icon").addClass("glyphicon glyphicon-menu-up");
            } else {
                $(".calendar").addClass("hidd");
                $(".updown-txt").text("展开");
                $("#updown-icon").removeClass("glyphicon glyphicon-menu-up");
                $("#updown-icon").addClass("glyphicon glyphicon-menu-down");
            }
        })
    })
})(jQuery)