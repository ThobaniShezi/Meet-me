$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function() {
        $("html").animate({ scrollTop: 0 });
        $("html").css("scrollBehavior", "auto");
    });

    $(".navbar .menu li a").click(function() {
        $("html").css("scrollBehavior", "smooth");
    });

    $(".menu-btn").click(function() {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });

    new Typed(".typing", {
        strings: [
            "App Developer",
            "IT Support Specialist",
            "Software Developer",
            "Tech Enthusiast"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: [
            "App Developer",
            "IT Support Specialist",
            "Software Developer",
            "Problem Solver"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});