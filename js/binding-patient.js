(function($){
    $(function(){
        // tab栏切换
        $(".online-buildCard").on("click",function(){
            if($(".buildCard").is(".select")) return;
            $(".buildCard").toggleClass("select");    
            $(".bindingCard").toggleClass("select");
            $(".txt").text("住址");
            $(".holder").attr("placeholder","请输入住址");
            // 切换id值
            $(".holder").attr("id","adress");
           // 输入框值初始化
           $("#name").val("");
           $("#idCard").val("");
           $("#phone").val("");
           $("#cardId").val("");
           // 警告字初始化
           $(".phoneTip").text("");
           $(".nameTip").text("");
           $(".idTip").text("");
           $(".adressTip").text("");
        });
        $(".online-bindingCard").on("click",function(){
            if($(".bindingCard").is(".select")) return;
            $(".buildCard").toggleClass("select");    
            $(".bindingCard").toggleClass("select");
            $(".txt").text("就诊卡号");
            $(".holder").attr("placeholder","请输入就诊卡号");
            $(".holder").attr("id","cardId");
            // 输入框值初始化
            $("#name").val("");
            $("#idCard").val("");
            $("#phone").val("");
            $("#cardId").val("");
            // 警告字初始化
            $(".phoneTip").text("");
            $(".nameTip").text("");
            $(".idTip").text("");
            $(".adressTip").text("");
        });
        // 单击绑定事件
        $("button").on("click",function(){
            const name=$("#name").val();
            const idCard=$("#idCard").val();
            const phone=$("#phone").val();
            const ID = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
           const address=/^.+(省|自治区).+(市|州).+(区|县).+(路|街|社区|大道).+(号|小区).+号楼.+单元.+(室|户)|.+(省|自治区).+(市|州).+(区|县).+(乡|镇).+村|.+(省|自治区).+(县|区).+(镇|乡).+村.+(组|屯).+号*$/;
            const num=/^[1][3,4,5,7,8][0-9]{9}$/;
            const nameTest= /^[\u4E00-\u9FA5A-Za-z]+$/;
             
            // 名字验证
            if(!$.trim(name)){
                $(".nameTip").text("名字不能为空！")
                return
            }else if(!nameTest.test(name)){
                $(".nameTip").text("名字格式不对！")
                return
            }
            // 身份证号验证
            if(!$.trim(idCard)){
                $(".idTip").text("身份证号不能为空！");
                return
            }else if(!ID.test(idCard)){
                $(".idTip").text("身份证号格式不对！");
                return
            };
            // 就诊卡或住址验证
            if($(".txt").text()=="就诊卡号"){
                const cardId=$("#cardId").val();
                if(!$.trim(cardId)){
                    $(".adressTip").text("就诊卡号不能为空！");
                    return
                }else if(typeof cardId!=Number){
                    $(".adressTip").text("就诊卡号格式不对！");
                }
            }else{
                const adress=$("#adress").val();
                if(!$.trim(adress)){
                    $(".adressTip").text("住址不能为空！");
                    return
                }else if (!address.test(adress)){
                    $(".adressTip").text("住址格式不对！");
                    return
                } 
            };   
            if(!$.trim(phone)){
                $(".phoneTip").text("手机号不能为空！");
                return
            }else if(!num.test(phone)){
                $(".phoneTip").text("手机号号格式不对！");
                return
            }
            
        });
        // 获取焦点，警告消失。
        // 获取姓名
        $("#name").on("focus",function(){
            $(".nameTip").text("");
            $(".subBtn").css({"background":"url(../img/inputtingTiedcard/inputAfter.png)","background-size":"6rem 1rem"})
        });
        // 获取身份证号
        $("#idCard").on("focus",function(){
            if(!$.trim($("#name").val())){
                $(".nameTip").text("名字不能为空！")
            };
            $(".idTip").text("");
            $(".subBtn").css({"background":"url(../img/inputtingTiedcard/inputAfter.png)","background-size":"6rem 1rem"}) 
        });
        // 获取地址
        $("#adress").on("focus",function(){
            if(!$.trim($("#idCard").val())){
                $(".nameTip").text("名字不能为空！")
            };
            if(!$.trim($("#name").val())){
                $(".idTip").text("身份证号不能为空！");
            };
            $(".adressTip").text("");
            $(".subBtn").css({"background":"url(../img/inputtingTiedcard/inputAfter.png)","background-size":"6rem 1rem"}) 
        });
        // 获取就诊卡号
        $("#cardId").on("focus",function(){
            if(!$.trim($("#idCard").val())){
                $(".nameTip").text("名字不能为空！")
            };
            if(!$.trim($("#name").val())){
                $(".idTip").text("身份证号不能为空！");
            };
            $(".adressTip").text("");
            $(".subBtn").css({"background":"url(../img/inputtingTiedcard/inputAfter.png)","background-size":"6rem 1rem"}) 
        });
        // 获取手机号
        $("#phone").on("focus",function(){
            if(!$.trim($("#idCard").val())){
                $(".nameTip").text("名字不能为空！")
            };
            if(!$.trim($("#name").val())){
                $(".idTip").text("身份证号不能为空！");
            };
            if($(".txt").text()=="就诊卡号"){
                if(!$.trim($("#cardId").val())){
                    $(".adressTip").text("就诊卡号不能为空！");
                };
            }else{
                if(!$.trim($("#adress").val())){
                    $(".adressTip").text("住址不能为空！");
                };
            }
            $(".phoneTip").text("");
            $(".subBtn").css({"background":"url(../img/inputtingTiedcard/inputAfter.png)","background-size":"6rem 1rem"}); 
        });
        // 监听输入值，改变绑定按钮背景。
        
    })
})(jQuery)