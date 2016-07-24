$(window).scroll(function (e) {
    parallax();
});

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.homepage').css('top', -(scrolled * 0.0315) + 'rem');
    $('.homepage > h1').css('top', -(scrolled * -0.005) + 'rem');
};
