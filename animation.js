$(document).ready(() => {
    $(document).keydown(function (keyPressed) {
        if (keyPressed.keyCode == 39) {
            $("#dog").animate({
                left: "+=150px"
            }, 200);
        } else if (keyPressed.keyCode == 37) {
            $("#dog").animate({
                left: "-=150px",
            }, 200);
        } else if (keyPressed.keyCode == 38) {
            $("#dog").animate({
                bottom: "+=150px"
            }, 200);
        } else if (keyPressed.keyCode == 40) {
            $("#dog").animate({
                bottom: "-=150px"
            }, 200);
        }
    });

    let $dog = $("#dog");
    $dog.on({
        mouseenter: () => {
            $("#dog").animate({
                width: "+=20%"
            }, 200);
        },
        mouseleave: () => {
            $("#dog").animate({
                width: "-=20%"
            }, 200);
        }
    });
});
