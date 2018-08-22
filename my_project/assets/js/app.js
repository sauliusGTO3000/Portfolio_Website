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

$('.bodyWrapper').css({ height: window.innerHeight });


$(window).resize(function () {
    var oldheight = $('.bodyWrapper').height();
    if(window.innerHeight - oldheight > 50){
        if(window.innerWidth<window.innerHeight){

            $('.bodyWrapper').css({ height: window.innerHeight });
        }
        if(window.innerWidth>window.innerHeight){
            $('.bodyWrapper').css({ height: window.innerHeight });
        }
    }
});
// window.addEventListener('orientationchange', doOnOrientationChange);
//
// function doOnOrientationChange()
// {
//     console.log('orientation changed');
//     $('.bodyWrapper').css({height: window.innerWidth });
// }




// $(window).resize(function () {
//     $('.bodyWrapper').css({ height: window.innerHeight });
// });

