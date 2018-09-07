/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.scss in this case)
require('../css/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// var $ = require('jquery');
// $(document).ready(function() {
//     $('.bodyWrapper').css("height", window.innerHeight);
// });



$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

if ("ontouchstart" in document.documentElement) {
    document.body.classList.add('touch-device');

} else {
    document.body.classList.add('hover-device');
}


if (jQuery('body').hasClass("touch-device")) {
//Loading height on touch-device
    function calcFullHeight() {
        jQuery('.bodyWrapper').css("height", $(window).height());
        jQuery('.hompageTop').css("height", $(window).height()-100);
    }

    (function($) {
        calcFullHeight();

        jQuery(window).on('orientationchange', function() {
            // 500ms timeout for getting the correct height after orientation change
            setTimeout(function() {
                calcFullHeight();
            }, 500);

        });
    })(jQuery);

} else {
    jQuery('.hompageTop').css("height", "100vh");


}
