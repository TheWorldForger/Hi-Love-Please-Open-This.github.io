$(document).ready(function() {
    $("#messageState").on("change", function() {
        $(".message").removeClass("openNor closeNor");
        if ($("#messageState").is(":checked")) {
            $(".message").removeClass("closed no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer openedHer").addClass("openHer");
            $(".container").css("transition", "background-color 2s").css("background-color", "#f48fb1");
            console.log("Opening");
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer openedHer").addClass("closeHer");
            $(".container").css("transition", "background-color 2s").css("background-color", "#fce4ec");
            console.log("Closing");
        }
    });

    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if ($(".message").hasClass("closeNor")) {
            $(".message").addClass("closed");
        }
        $(".message").removeClass("openNor closeNor").addClass("no-anim");
    });

    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if (!$(".heart").hasClass("closeHer")) {
            $(".heart").addClass("openedHer beating");
        } else {
            $(".heart").addClass("no-anim").removeClass("beating");
        }
        $(".heart").removeClass("openHer closeHer");
    });
});