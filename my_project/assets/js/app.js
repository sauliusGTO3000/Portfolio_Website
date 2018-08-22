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
    var oldWidth = $('.bodyWrapper').width();

    console.log(oldWidth);
    console.log(oldheight);

    if(oldWidth==oldheight){
        $('.bodyWrapper').css({ height: window.innerHeight });
        console.log("changes");
    }
    // if((window.innerHeight - oldheight > 100)){
    //
    //     if(window.innerWidth<window.innerHeight){
    //         $('.bodyWrapper').css({ height: window.innerHeight });
    //         oldheight = window.innerHeight;
    //         console.log("portrait");
    //     }
    //     if(window.innerWidth<window.innerheight){
    //         $('.bodyWrapper').css({ height: window.innerWidth });
    //         oldWidth = window.innerWidth;
    //     }
    // }
    // if((window.innerHeight - oldheight < 100)){
    //     console.log("landscape");
    //     $('.bodyWrapper').css({ height: window.innerHeight });
    //     if(window.innerWidth<window.innerHeight){
    //         $('.bodyWrapper').css({ height: window.innerHeight });
    //         oldheight = window.innerHeight;
    //         console.log("portrait");
    //     }
    //     if(window.innerWidth<window.innerheight){
    //         $('.bodyWrapper').css({ height: window.innerWidth });
    //         oldWidth = window.innerHeight;
    //         console.log("landscape");
    //     }
    // }
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

