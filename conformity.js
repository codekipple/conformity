/*! v0.1.1 https://github.com/codekipple/conformity. Plugin adapted from this code:- http://codepen.io/micahgodbolt/details/FgqLc */

/*
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
    $.fn.conformity = function (options) {
        var settings = {
                'mode': 'min-height'
            },
            elements = $(this),
            currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;

        if (options) {
            $.extend(settings, options);
        }

        return elements.each(function() {
            $el = $(this);

            /*
                alter height and min-height so we can get an accurate measure of the
                elements height
            */
            if (settings.mode === 'min-height') {
                $el
                    .height('auto')
                    .css('min-height', 0);
            } else if (settings.mode === 'height')  {
                $el.height('auto');
            }

            /*
                top position is used to determine if the element is on the current
                row or a new one
            */
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].css(settings.mode, currentTallest);
                }

                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.outerHeight();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.outerHeight()) ? ($el.outerHeight()) : (currentTallest);
            }

            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].css(settings.mode, currentTallest);
            }
        });
    };
}));