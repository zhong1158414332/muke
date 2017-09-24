function headinputhide(){
    var btn1=document.getElementsByClassName('head_input_button_message_1').item(0);
    var btn2=document.getElementsByClassName('head_input_button_message_2').item(0);
    var searchbtn=document.getElementsByClassName('headinputbutton').item(0);
    btn1.style.display="none";
    btn2.style.display="none";
    searchbtn.style.color="#ff4141";
    searchbtn.style.backgroundColor="#ff8280";
}
function headinputshow() {
    var btn1=document.getElementsByClassName('head_input_button_message_1').item(0);
    var btn2=document.getElementsByClassName('head_input_button_message_2').item(0);
    var searchbtn=document.getElementsByClassName('headinputbutton').item(0);
    btn1.style.display="inline";
    btn2.style.display="inline";
    searchbtn.style.color="silver";
    searchbtn.style.backgroundColor="white";
}

$(document).ready(function () {
    //下载app的鼠标事件
    $("#down_app_button").mouseover(function () {
       $("#down_app").show();
    }).mouseleave(function () {
        $("#down_app").hide();
    });
    $("#down_app").mouseover(function () {
        $("#down_app").show();
    }).mouseleave(function () {
        $("#down_app").hide();
    });

    //购物车的鼠标事件
    $(".shop_car_button").mouseover(function () {
        $(".shop_car_button").css("color","#ff2126");
        $("#shoppingcart").show();
    }).mouseleave(function () {
        $(".shop_car_button").css("color","#6d6d6d");
        $("#shoppingcart").hide();
    });
    $("#shoppingcart").mouseover(function () {
        $(".shop_car_button").css("color","#ff2126");
        $("#shoppingcart").show();
    }).mouseleave(function () {
        $(".shop_car_button").css("color","#6d6d6d");
        $("#shoppingcart").hide();
    });

    //图片轮播按钮的变颜色
    $(".carousel_control_my_left").mouseover(function () {
        $(".carousel_control_my_left").css({
            "background-color":"black",
            "opacity":"0.5"
        });
    }).mouseleave(function () {
        $(".carousel_control_my_left").css({
            "background-color":"inherit",
            "opacity":"1",
            "color":"white"
        });
    });
    $(".carousel_control_my_right").mouseover(function () {
        $(".carousel_control_my_right").css({
            "background-color":"black",
            "opacity":"0.5"
        });
    }).mouseleave(function () {
        $(".carousel_control_my_right").css({
            "background-color":"inherit",
            "opacity":"1",
            "color":"white"
        });
    });

    //图片自动轮播
    $("#myCarousel").carousel({
        cycle:true,
        interval:3000
    });
    //背景随着图片轮播而变化
    $('#myCarousel').on('slide.bs.carousel', function () {
        var index;
        for(var i=0;i<=5;i++){
            if($(".item").eq(i).css('display')=="block"){
                if(i==5){
                    index=1;
                }else{
                    index=i+2;
                }
                $(".bg").css("background-image","url(../muke/image/change"+index+".jpg)");
            }
        }
    });

    //鼠标移动上去自动上移
    var boxgroupindex=0;
    $(".box_group").mouseover(function () {
        if(boxgroupindex==0){
            boxgroupindex=1;
            $(this).animate({
                top:"-=5px"
            },"fast");
        }
    }).mouseleave(function () {
        if(boxgroupindex==1){
            boxgroupindex=0;
            $(this).animate({
                top:"+=5px"
            },"fast");
        }
    });

    //鼠标移动上去自动显示信息
    $("#info_one").mouseover(function () {
       $("#head_two_right_info_one").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_one").css({"display":"none"});
    });
    $("#head_two_right_info_one").mouseover(function () {
        $("#head_two_right_info_one").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_one").css({"display":"none"});
    });

    $("#info_two").mouseover(function () {
        $("#head_two_right_info_two").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_two").css({"display":"none"});
    });
    $("#head_two_right_info_two").mouseover(function () {
        $("#head_two_right_info_two").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_two").css({"display":"none"});
    });

    $("#info_three").mouseover(function () {
        $("#head_two_right_info_three").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_three").css({"display":"none"});
    });
    $("#head_two_right_info_three").mouseover(function () {
        $("#head_two_right_info_three").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_three").css({"display":"none"});
    });

    $("#info_four").mouseover(function () {
        $("#head_two_right_info_four").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_four").css({"display":"none"});
    });
    $("#head_two_right_info_four").mouseover(function () {
        $("#head_two_right_info_four").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_four").css({"display":"none"});
    });

    $("#info_five").mouseover(function () {
        $("#head_two_right_info_five").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_five").css({"display":"none"});
    });
    $("#head_two_right_info_five").mouseover(function () {
        $("#head_two_right_info_five").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_five").css({"display":"none"});
    });

    $("#info_six").mouseover(function () {
        $("#head_two_right_info_six").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_six").css({"display":"none"});
    });
    $("#head_two_right_info_six").mouseover(function () {
        $("#head_two_right_info_six").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_six").css({"display":"none"});
    });

    $("#info_seven").mouseover(function () {
        $("#head_two_right_info_seven").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_seven").css({"display":"none"});
    });
    $("#head_two_right_info_seven").mouseover(function () {
        $("#head_two_right_info_seven").css({"display":"block"});
    }).mouseleave(function () {
        $("#head_two_right_info_seven").css({"display":"none"});
    });


    $(".info_box").mouseover(function (){
        $(this).find(".info_box_h").css({
            color:"red",
        },"fast");
        $(this).find(".info_box_img").css({
            boxShadow:"0 7px 10px #dddddd"
        });
    }).mouseleave(function () {
        $(this).find(".info_box_h").css({
            color:"black",
        },"fast");
        $(this).find(".info_box_img").css({
            boxShadow:"0 0 0 #dddddd"
        })
    });



    /*鼠标移动上去三层图片分开*/
    var indeximg=0;
    $(".info_box_acitve").mouseover(function () {
        if(indeximg==0){
            indeximg=1;
            $(this).find(".image_top").animate({
                top:"-=10px"
            },"fast");
            $(this).find(".image_mid").animate({
                top:"+=2px",
                width:"200px",
                marginLeft:"+=4px"
            },"fast");
            $(this).find(".image_bot").animate({
                top:"+=9px",
                width:"192px",
                marginLeft:"+=4px"
            },"fast");
            $(this).find(".info_box_button_b").animate({
                top:"-=10px"
            },"fast");
            $(this).find(".info_box_button_t_hot button").animate({
                top:"-=10px"
            },"fast");
        }
    }).mouseleave(function () {
        if(indeximg==1){
            indeximg=0;
            $(this).find(".image_top").animate({
                top:"+=10px"
            },"fast");
            $(this).find(".image_mid").animate({
                top:"-=2px",
                width:"208px",
                marginLeft:"-=4px"
            },"fast");
            $(this).find(".image_bot").animate({
                top:"-=9px",
                width:"200px",
                marginLeft:"-=4px"
            },"fast");
            $(this).find(".info_box_button_b").animate({
                top:"+=10px"
            },"fast");
            $(this).find(".info_box_button_t_hot button").animate({
                top:"+=10px"
            },"fast");
        }
    });

    //鼠标移动上去背景加深
    $(".hot_topic").mouseover(function (){
        $(this).css({
            boxShadow:"1px 0px 20px #dddddd"
        });
    }).mouseleave(function () {
        $(this).css({
            boxShadow:"1px 0px 5px #dddddd"
        });
    });
    $(".article").mouseover(function (){
        $(this).css({
            boxShadow:"1px 0px 20px #dddddd"
        });
    }).mouseleave(function () {
        $(this).css({
            boxShadow:"1px 0px 5px #dddddd"
        });
    });

    //教师信息动画
    var teacherindex=0;
    $(".teacher_box").mouseover(function () {
        if(teacherindex==0){
            teacherindex=1;
            $(this).css({
                backgroundColor:"white"
            });
            $(this).find("p").hide();
            $(this).find(".teacher_introduction").animate({
                top:"-=90px"
            },"fast");
            $(this).find("img").animate({
                width:"70px",
                marginLeft:"15px"
            },"fast");
        }
    }).mouseleave(function () {
        $(this).find(".teacher_introduction").stop();
        $(this).find("img").stop();
        if(teacherindex==1){
            teacherindex=0;
            $(this).find(".teacher_introduction").css({
                top:"150px"
            });
            $(this).css({
                backgroundColor:"#e2dde1"
            });
            $(this).find("p").show();
            $(this).find("img").css({
                width:"100px",
                marginLeft:"0"
            });
        }
    });

    $(".bg_eight_img_box").mouseover(function () {
        $(this).css({
            border:"2px solid #08af61"
        });
        $(this).find(".bg_eight_img_box_info").show();
    }).mouseleave(function () {
        $(this).css({
            border:"2px solid white"
        });
        $(this).find(".bg_eight_img_box_info").hide();
    });

});

