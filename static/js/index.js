var clicks = 0;
// var blueClicks = 0;
// var greenClicks = 0;
// var yellowClicks = 0;

$("#redBtn").on("click", function() {
    if($("#redDye").css("display") === "none") {
        if($("#blueDye").css("display") != "none") {
            $("#blueDye").fadeOut(function() {
                $("#redDye").fadeIn();
            });
        }
        // else if($("#greenDye").css("display") != "none") {
        //     $("#greenDye").fadeOut(function() {
        //         $("#redDye").fadeIn();
        //     });
        // }
        // else if($("#yellowDye").css("display") != "none") {
        //     $("#yellowDye").fadeOut(function() {
        //         $("#redDye").fadeIn();
        //     })
        // }
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
        // else if($("#greenDye").css("display") != "none") {
        //     $("#greenDye").fadeOut(function() {
        //         $("#blueDye").fadeIn();
        //     });
        // }
        // else if($("#yellowDye").css("display") != "none") {
        //     $("#yellowDye").fadeOut(function() {
        //         $("#blueDye").fadeIn();
        //     })
        // }
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

// $("#greenBtn").on("click", function() {
//     if($("#greenDye").css("display") === "none") {
//         if($("#redDye").css("display") != "none") {
//             $("#redDye").fadeOut(function() {
//                 $("#greenDye").fadeIn();
//             });
//         }
//         else if($("#blueDye").css("display") != "none") {
//             $("#blueDye").fadeOut(function() {
//                 $("#greenDye").fadeIn();
//             });
//         }
//         else if($("#yellowDye").css("display") != "none") {
//             $("#yellowDye").fadeOut(function() {
//                 $("#greenDye").fadeIn();
//             })
//         }
//         else {
//             $("#greenDye").fadeIn();
//         }
//         greenClicks++;
//         $(".greenDisplay").text(greenClicks);
//     }
//     else {
//         $("#greenDye").fadeOut();
//     }
// });

// $("#yellowBtn").on("click", function() {
//     if($("#yellowDye").css("display") === "none") {
//         if($("#redDye").css("display") != "none") {
//             $("#redDye").fadeOut(function() {
//                 $("#yellowDye").fadeIn();
//             });
//         }
//         else if($("#blueDye").css("display") != "none") {
//             $("#blueDye").fadeOut(function() {
//                 $("#yellowDye").fadeIn();
//             });
//         }
//         else if($("#greenDye").css("display") != "none") {
//             $("#greenDye").fadeOut(function() {
//                 $("#yellowDye").fadeIn();
//             })
//         }
//         else {
//             $("#yellowDye").fadeIn();
//         }
//         yellowClicks++;
//         $(".yellowDisplay").text(yellowClicks);
//     }
//     else {
//         $("#yellowDye").fadeOut();
//     }
// });