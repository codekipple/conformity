/*
    Plugin adapted from this code:- http://codepen.io/micahgodbolt/details/FgqLc

    pass conformity a jquery collection of blocks inside a container, conformity will make sure each row is
    equal heights, call conformity on window resize for responsive equal heights

    Supports CommonJS, AMD or browser globals.
    see: https://github.com/umdjs/umd/blob/master/jqueryPluginCommonjs.js
*/
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    $.fn.conformity = function () {
        var elements = $(this),
            currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;

        return elements.each(function() {
            $el = $(this);

            $el
                .height('auto')
                .css('min-height', 0);

            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].css('min-height', currentTallest);
                }

                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }

            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].css('min-height', currentTallest);
            }
        });
    };
}));