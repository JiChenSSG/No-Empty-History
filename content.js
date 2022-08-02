$("body").prepend("<div id='content'></div>");

$("#content").css({
    "position": "fixed",
    "top": "100px",
    "left": "-20px",
    "width": "40px",
    "height": "50px",
    "z-index": "9999"
})

$("#content").hover(function () {
    $("#content").animate({
        "top": "100px",
        "left": "0px"
    }, 200)
}, function () {
    $("#content").animate({
        "top": "100px",
        "left": "-20px"
    }, 200)
})

$("#content").append("<div id='content-change'></div>");

$("#content-change").css({
    "margin-left": "10px",
    "width": "20px",
    "height": "20px",
    "background-color": "green",
    "z-index": "9999",
    "border-radius": "50%",
    "opacity": "0.1",
    "cursor": "pointer",
    "color": "white"
})

$("#content-change").hover(function () {
    $("#content-change").animate({
        "opacity": "1"
    }, 200)
}, function () {
    $("#content-change").animate({
        "opacity": "0.1"
    }, 200)
})

$("#content-change").append("<div id='content-change-pic'></div>");

$("#content-change-pic").css({
    "width": "20px",
    "height": "20px",
    "background": "url(https://jichen-main.oss-cn-shanghai.aliyuncs.com/yes_cb220030.png) no-repeat center",
})


$("#content").append("<div id='content-edit'></div>");

$("#content-edit").css({
    "margin-left": "10px",
    "margin-top": "10px",
    "width": "20px",
    "height": "20px",
    "background-color": "blue",
    "z-index": "9999",
    "border-radius": "50%",
    "opacity": "0.1",
    "cursor": "pointer",
    "color": "white"
})

$("#content-edit").hover(function () {
    $("#content-edit").animate({
        "opacity": "1"
    }, 200)
}, function () {
    $("#content-edit").animate({
        "opacity": "0.1"
    }, 200)
})

$("#content-edit").append("<div id='content-edit-pic'></div>");

$("#content-edit-pic").css({
    "width": "20px",
    "height": "20px",
    "background": "url(https://jichen-main.oss-cn-shanghai.aliyuncs.com/setting_bdb40dce.png) no-repeat center",
})

