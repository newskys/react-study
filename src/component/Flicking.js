//https://naver.github.io/egjs-flicking/
var flicking1 = new eg.Flicking(".flicking1", {
    gap: 10,
    infinite: true,
    infiniteThreshold: 50,
});

flicking1.on("needPanel", function (e) {
    var length = flicking1.getPanelCount();

    e.fill(
        '<div class="infinite infinite' + (length + 1) % 5 + '">'+ (length + 1) + '</div>'
        + '<div class="infinite infinite' + (length + 2) % 5 + '">' + (length + 2) + '</div>'
    );
    flickingPagination1.update(flicking1);
});