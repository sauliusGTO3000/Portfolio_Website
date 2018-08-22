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

$('.bodyWrapper').css("width",window.outerWidth) ;
$('.bodyWrapper').css("height",window.outerHeight) ;

$('.hompageTop').css("width",window.outerWidth) ;
$('.hompageTop').css("height",window.outerHeight) ;


var oldheight = $('.bodyWrapper').height();
var oldWidth = $('.bodyWrapper').width();
console.log("_____START___");
console.log("old width: " + oldWidth);
console.log("new width: "+ window.outerWidth);
console.log("__________");
console.log("old height: " + oldheight);
console.log("new height: " + window.outerHeight);
console.log("_____END___");


$(window).resize(function () {



        var oldheight = $('.bodyWrapper').height();
        var oldWidth = $('.bodyWrapper').width();

        $('.bodyWrapper').css("width", window.outerWidth);
        $('.bodyWrapper').css("height", window.outerHeight);

        $('.hompageTop').css("width", window.outerWidth);
        $('.hompageTop').css("height", window.outerHeight);

    // console.log("_____START___");
    // console.log("old width: " + oldWidth);
    // console.log("new width: "+ window.outerWidth);
    // console.log("__________");
    // console.log("old height: " + oldheight);
    // console.log("new height: " + window.outerHeight);
    // console.log("_____END___");
    //
    // if(oldWidth==window.outerHeight && oldheight == window.outerWidth){
    //     console.log("changed");
    //
    //     $('.bodyWrapper').setAttribute("width",window.outerWidth);
    //     $('.bodyWrapper').setAttribute("height",window.outerHeight);
    // }


    // if(oldheight==window.outerWidth){
    //     $('.hompageTop').css({ height: oldheight });
    //     $('.hompageTop').css({ width: window.outerHeight });
    //     console.log("changes");
    // }
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

