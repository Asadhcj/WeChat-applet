(function ($) {
    $(".head").hide();
    $(".calendar").hide();
    $(".dateShow").on("click",function(){
        if( $("#icon").hasClass("glyphicon glyphicon-menu-down")){
            $("#icon").removeClass("glyphicon glyphicon-menu-down");
            $("#icon").addClass("glyphicon glyphicon-menu-up");
            $(".calendar").show();
        }else{
            $("#icon").removeClass("glyphicon glyphicon-menu-up");
            $("#icon").addClass("glyphicon glyphicon-menu-down");
            $(".calendar").hide();
        } 
    })

    var tady=0

    //   日期js代码
    function datePicker() {
        this.databody = $(".datebody table tbody")
        this.select = $(".head select");
        this.monthspan = $(".head span span");
        this.date = new Date();
        this.select.find("option[value=" + this.date.getFullYear() + "]").attr("selected", true);
        this.year = this.select.find('option:selected').val()
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDay();
        this.nowyear = this.date.getFullYear();
        this.nowmonth = this.date.getMonth() + 2;
        this.nowdays = this.date.getDate()
        this.days;
        this.num = 1;
    }
    $("#riqi").text("")
    datePicker.prototype.toCN = function (num) {
        switch (num) {
            case 1:
                return "一"
                break;
            case 2:
                return "二"
                break;
            case 3:
                return "三"
                break;
            case 4:
                return "四"
                break;
            case 5:
                return "五"
                break;
            case 6:
                return "六"
                break;
            case 7:
                return "七"
                break;
            case 8:
                return "八"
                break;
            case 9:
                return "九"
                break;
            case 10:
                return "十"
                break;
            case 11:
                return "十一"
                break;
            case 12:
                return "十二"
                break;
        }

    }
    datePicker.prototype.applyMonth = function (month) {
        this.date = new Date(month);
        return this.month = this.date.getMonth();
    };
    datePicker.prototype.applyDay = function (year, month, day) {
        this.date = new Date(year, month - 1, day);
        return this.date.getDay();
    }
    datePicker.prototype.monDays = function (n) {
        this.month = n || this.month
        if (this.month == 2) {
            return this.days = this.year % 4 == 0 ? 29 : 28;
        } else if (this.month == 1 || this.month == 3 || this.month == 5 || this.month == 7 || this.month == 8 || this.month == 10 || this.month == 12) {
            //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
            return this.days = 31;
        } else {
            //其他月份，天数为：30.
            return this.days = 30;
        }
    }
    datePicker.prototype.init = function (n) {
        this.month = n || this.month;
        this.str = "<tr>";
        this.monthspan.html(datepicker.toCN(this.month) + "月")

        this.day = datepicker.applyDay(this.year, this.month, 1);
        if (this.day == 0) {
            this.num = 0;
        }
        datepicker.monDays(this.month)
        // for (var j = this.days - this.day + 1; j <= this.days; j++) {
        //     this.str += "<td class='old'>" + j + "</td>"
        //     this.num = this.day;
        // }
        this.num-=1
        datepicker.monDays(this.month + 1)
        var that = this;
        for (var i =this.nowdays  ; i <= this.days; i++) {
            if (i == this.nowdays && this.month == this.nowmonth && this.year == this.nowyear) {
                this.str += "<td class='active'>" + "今" + "</td>";
                tady=i
            } else {
                this.str += "<td >" + i + "</td>"
            }
            this.num++
            if (this.num % 7 == 0) {
                this.str += "</tr>"
            }
        }

        // this.day = datepicker.applyDay(this.year, this.month - 1, this.days);
        // for (var i = 1; i < 7 - this.day; i++) {
        //     // this.str += "<td class='new'>" + i + "</td>"
        //     this.num++
        //     if (this.num % 7 == 0) {
        //         this.str += "</tr>"
        //     }
        // }
        this.databody.html(this.str)
        this.month = this.month - 1;
    }
    datePicker.prototype.changeMonth = function () {
        var that = this;
        var s = this.month;
        $(".prevbtn").click(function () {
            s = s - 1
            if (s < 1) {
                s = 1
                return false
            }

            datepicker.init(s)
        })
        $(".nextbtn").click(function () {
            s = s + 1;
            if (s > 12) {
                s = 12;
                return false
            }
            datepicker.init(s)

        })

    }
    datePicker.prototype.changeYear = function () {
        var that = this;
        this.select.change(function () {
            that.year = $(this).find('option:selected').val()
            datepicker.init(that.month)
        })
    }

    var datepicker = new datePicker();
    datepicker.init()
    datepicker.changeMonth()
    datepicker.changeYear();

    function mouthse(oMouthtml) {
        switch (oMouthtml) {
            case '一月':
                return "01"
                break;
            case '二月':
                return "02"
                break;
            case '三月':
                return "03"
                break;
            case '四月':
                return "04"
                break;
            case '五月':
                return "05"
                break;
            case '六月':
                return "06"
                break;
            case '七月':
                return "07"
                break;
            case '八月':
                return "08"
                break;
            case '九月':
                return "09"
                break;
            case '十月':
                return "10"
                break;
            case '十一月':
                return "11"
                break;
            case '十二月':
                return "12"
                break;
        }
    };

    function clickSel(obj, obj2) {
        if (obj.hasClass('on')) {
            obj.removeClass('on');
            $(obj2).val('');
        } else {
            $('td').removeClass('on');
            obj.addClass('on');
            var oMouthtml = $('#oMouth').html();
            var oMouth = mouthse(oMouthtml);
            var oYearhtml = $("#select1  option:selected").text();
            var oData = obj.html()=="今" ? tady:obj.html();
            //console.log(oMouth);
            $(obj2).text(oYearhtml + '-' + oMouth + '-' + oData);
        };
    };
    $('table').on('click', 'td', function () {
        clickSel($(this), '#riqi');
    });
    clickSel($(".active"), '#riqi');
})(jQuery)