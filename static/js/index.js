var clicks = 0;

$("#redBtn").on("click", function() {
    if($("#redDye").css("display") === "none") {
        if($("#blueDye").css("display") != "none") {
            $("#blueDye").fadeOut(function() {
                $("#redDye").fadeIn();
            });
        }
        else {
            $("#redDye").fadeIn();
        }
        clicks++;
        $(".redDisplay").text(clicks);
    }
    else {
        $("#redDye").fadeOut();
    }
});

$("#blueBtn").on("click", function() {
    if($("#blueDye").css("display") === "none") {
        if($("#redDye").css("display") != "none") {
            $("#redDye").fadeOut(function() {
                $("#blueDye").fadeIn();
            });
        }
        else {
            $("#blueDye").fadeIn();
        }
        clicks++;
        $(".blueDisplay").text(clicks);
    }
    else {
        $("#blueDye").fadeOut();
    }
});