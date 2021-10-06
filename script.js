$(function() {
    if (window.matchMedia("(max-width: 771px)").matches) {
        $("#vr-man").attr("src", "images/mobile/image-interactive.jpg")
        $("#img-1").attr("src", "images/mobile/image-deep-earth.jpg");
        $("#img-2").attr("src", "images/mobile/image-night-arcade.jpg");
        $("#img-3").attr("src", "images/mobile/image-soccer-team.jpg");
        $("#img-4").attr("src", "images/mobile/image-grid.jpg");
        $("#img-5").attr("src", "images/mobile/image-from-above.jpg");
        $("#img-6").attr("src", "images/mobile/image-pocket-borealis.jpg");
        $("#img-7").attr("src", "images/mobile/image-curiosity.jpg");
        $("#img-8").attr("src", "images/mobile/image-fisheye.jpg");
        $("header").css({
            "background-image": "url('images/mobile/image-hero.jpg')",
        });

        let navClick = 0;
        $("#hamburger").click(function() {
            if (navClick % 2 === 0) {
                $(".navlist").css({"display": "block"});
                $("#hamburger").attr("src", "./images/icon-close.svg");
                $("#hamburger").attr("alt", "close icon");
            } else {
                $(".navlist").css({"display": "none"});
                $("#hamburger").attr("src", "./images/icon-hamburger.svg");
                $("#hamburger").attr("alt", "hamburger icon");
            } navClick++;
        });
    }
});