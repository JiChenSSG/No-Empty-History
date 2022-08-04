var urlData

var urlReg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/;
var url = urlReg.exec(window.location.href)[0]

var visibility = false;

chrome.runtime.sendMessage({
    type: 'getUrl'
}, res => {
    urlData = res.urlData
    if (urlData[url] == 1) {
        $("#content-change-pic").css({
            "background": "url(https://jichen-main.oss-cn-shanghai.aliyuncs.com/error_6c35a77d.png) no-repeat center",
        })

        $("#content-change").css({
            "background-color": "red",
        })
    }
})


$("body").prepend("<div id='content'></div>");

$("#content").css({
    "position": "fixed",
    "top": "100px",
    "left": "-20px",
    "width": "40px",
    "height": "50px",
    "z-index": "9999",
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

$("#content-change").on("click", function () {
    var status
    if (urlData[url] == 1) {
        status = 0
    } else {
        status = 1
    }

    chrome.runtime.sendMessage({
        type: 'addUrl',
        url: url,
        status: status
    }, res => {
        urlData = res.urlData
        if (urlData[url] == 1) {
            $("#content-change-pic").css({
                "background": "url(https://jichen-main.oss-cn-shanghai.aliyuncs.com/error_6c35a77d.png) no-repeat center",
            })

            $("#content-change").css({
                "background-color": "red",
            })
        } else {
            $("#content-change-pic").css({
                "background": "url(https://jichen-main.oss-cn-shanghai.aliyuncs.com/yes_cb220030.png) no-repeat center",
            })

            $("#content-change").css({
                "background-color": "green",
            })
        }
    })
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

$("#content-edit").on("click", function () {
    loadUrls()

    if (visibility == false) {
        $("#content-urls").css({
            "visibility": "visible",
            "opacity": "0",
        })

        $("#content-urls").animate({
            "opacity": "1"
        }, 200)
        visibility = true
    } else {
        $("#content-urls").animate({
            "opacity": "0"
        }, 200)

        $("#content-urls").css({
            "visibility": "hidden",
        })

        visibility = false
    }


})

$("#content").append("<div id='content-urls'></div>");


$("#content-urls").css({
    "position": "fixed",
    "top": "100px",
    "left": "50px",
    "width": "340px",
    "height": "400px",
    "background-color": "white",
    "z-index": "9999",
    "border-radius": "10px",
    "box-shadow": "0 0 10px #000",
    "visibility": "hidden",
})

$("#content-urls").append("<div id='content-urls-title'></div>")

$("#content-urls-title").append('URLS SETTING')

$("#content-urls-title").css({
    "margin-top": "10px",
    "width": "100%",
    "height": "30px",
    "line-height": "30px",
    "text-align": "center",
    "font-size": "20px",
    "color": "#162053",
})

$("#content-urls").append("<div id='content-urls-tr'></div>")

$("#content-urls-tr").css({
    "width": "40%",
    "border-bottom": "1px solid #162053",
    "margin": "auto",
})

$("#content-urls").append("<div id='content-urls-content'></div>")

$("#content-urls-content").css({
    "width": "80%",
    "height": "300px",
    "margin": "auto",
    "margin-top": "10px",
    "border": "1px solid #162053",
    "overflow-y": "scroll",
})

function loadUrls() {
    $("#content-urls-content").empty();
    console.log(urlData)
    var index = 0;
    for (var i in urlData) {
        urlStatus = urlData[i]

        var viewUrl = i
        if (i.length > 15) {
            viewUrl = i.substring(0, 15) + "..."
        }

        if (urlStatus == 1) {
            $("#content-urls-content").append("<div id=urls-" + index + " class='url-container'><div class='urls-delete'></div><div class='urls-text'>" + viewUrl + "</div><div class='urls-turn'><div class='urls-turn-pic' style='background-color: green'></div></div></div>")
        } else {
            $("#content-urls-content").append("<div id=urls-" + index + " class='url-container'><div class='urls-delete'></div><div class='urls-text'>" + viewUrl + "</div><div class='urls-turn'><div class='urls-turn-pic' style='background-color: red'></div></div></div>")
        }


        $("#urls-" + index).children(".urls-delete").on("click", function () {
            deleteUrl(i, this)
        })

        $("#urls-" + index).children(".urls-turn").on("click", function () {
            turnUrl(i, this)
        })


        ++index
    }

    $(".url-container").css({
        "margin-top": "10px",
        "width": "100%",
        "height": "20px",
        "line-height": "20px",
    })

    $('.urls-delete').css({
        'background': 'url(https://jichen-main.oss-cn-shanghai.aliyuncs.com/delete_f7611816.png) no-repeat center',
        'width': '20px',
        'height': '20px',
        'margin-left': '10px',
        'cursor': 'pointer',
        "float": "left",
    })

    $(".urls-text").css({
        "margin-left": "10px",
        "font-size": "16px",
        "color": "#84859C",
        "line-height": "20px",
        "width": "170px",
        "float": "left",
        'overflow': 'hidden',
    })

    $(".urls-turn").css({
        "margin-right": "20px",
        "width": "20px",
        "height": "20px",
        'float': 'right',
    })

    $(".urls-turn-pic").css({
        "width": "10px",
        "height": "10px",
        'border-radius': '50%',
        'cursor': 'pointer',
        'margin': '5px',
    })
}

function deleteUrl(url, obj) {
    chrome.runtime.sendMessage({
        type: "deleteUrl",
        url: url
    }, function (response) {
        urlData = response.urlData
        $(obj).parent().remove()
        $("#content-change-pic").css({
            "background": "url(https://jichen-main.oss-cn-shanghai.aliyuncs.com/yes_cb220030.png) no-repeat center",
        })

        $("#content-change").css({
            "background-color": "green",
        })
    })

}

function turnUrl(url, obj) {
    urlStatus = urlData[url]
    chrome.runtime.sendMessage({
        type: "addUrl",
        url: url,
        status: urlStatus == 1 ? 0 : 1
    }, function (response) {
        urlData = response.urlData
        if (urlStatus == 1) {
            $(obj).children(".urls-turn-pic").css({
                "background-color": "red",
            })
        } else {
            $(obj).children(".urls-turn-pic").css({
                "background-color": "green",
            })
        }
    })
}