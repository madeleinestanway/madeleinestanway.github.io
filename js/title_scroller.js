$(window).ready(function() {
    var ScrollTitle = []
    $("#CVContent div").each((x, y) => {
        ScrollTitle.push({
            scroll: $(y).offset().top,
            title: $(y).children("h2").html(),
        });
    })
    $("#CVContent").scroll(function(x) {
        for (var i = 0; i < ScrollTitle.length; i++) {
            if (ScrollTitle[i].scroll > $("#CVContent").scrollTop() - ($("#CVContent").outerHeight() / 2)) {
                $("#ScrollTitle").html(ScrollTitle[i].title);
                break;
            }
        }
    })
});