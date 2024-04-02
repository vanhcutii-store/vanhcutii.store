// cat.js

var __Cat__ = function (t, n) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * t + 1, 10);
        case 2:
            return parseInt(Math.random() * (n - t + 1) + t, 10);
        default:
            return 0
    }
};

var TrollMeowMeow = function () {
    $("#trollcat").css("bottom", __Cat__(5, 80) + "vh")
};

$("#trollcat").hover(function () {
    clearTimeout(doanhbanduocem), doanhbanduocem = setTimeout(function () {
        TrollMeowMeow()
    }, 130)
}, function () {
    clearTimeout(doanhbanduocem)
});

$("#trollcat").on("click touchstart", function () {
    TrollMeowMeow()
});

$(function () {
    $(window).scroll(function () {
        $(window).scrollTop() > 500 ? $(".back-to-top").css("top", "-200px") : $(".back-to-top").css("top", "-999px")
    });

    $(".back-to-top").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 600)
    });
});

setInterval(Shake, 2500);
