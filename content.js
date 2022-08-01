$("body").prepend("<div id='content'></div>");

$("#content").css({
    "position": "fixed",
    "top": "0",
    "left": "0",
    "width": "20px",
    "height": "20px",
    "background-color": "red",
    "z-index": "999999",
    "border-radius": "50%",
    "opacity": "0.5",
    "left": "10px",
    "top": "100px",
    "cursor": "pointer",
    "color": "white"
})

$("#content").prepend("&nbsp;X")