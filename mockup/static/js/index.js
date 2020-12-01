var clicks = 0;

$(window).on('load',function(){
    $('#newsletter').modal('show');
});

$("#redBtn").on("click", function() {
    if($("#redDye").css("display") === "none") {
        if($("#blueDye").css("display") != "none") {
            $("#blueDye").fadeOut(function() {
                $("#redDye").fadeIn(function() {
                    clicks++;
                    $(".countDisplay").text(clicks);
                });
            });
        }
        else {
            $("#redDye").fadeIn(function() {
                clicks++;
                $(".countDisplay").text(clicks);
            });
        }
    }
    else {
        $("#redDye").fadeOut();
    }
});

$("#blueBtn").on("click", function() {
    if($("#blueDye").css("display") === "none") {
        if($("#redDye").css("display") != "none") {
            $("#redDye").fadeOut(function() {
                $("#blueDye").fadeIn(function() {
                    clicks++;
                    $(".countDisplay").text(clicks);
                });
            });
        }
        else {
            $("#blueDye").fadeIn(function() {
                clicks++;
                $(".countDisplay").text(clicks);
            });
        }
    }
    else {
        $("#blueDye").fadeOut();
    }
});