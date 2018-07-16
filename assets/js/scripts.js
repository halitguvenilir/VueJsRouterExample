$(function () {
    'use strict';

    // General Variables
    var isMobile = $(window).width() < 992;
    var bodyW = $('body').width();
    var headerOffset = 55;

    $(window).resize(function() {
        bodyW = $('body').width();
        isMobile = $(window).width() < 992;
    });

    // Initialize

    // General Functions
    function scrollTo($element, offset, speed) {
        if (speed === undefined) {
            speed = 500;
        }

        if (offset === undefined) {
            offset = headerOffset;
        }

        if ($element.length > 0) {
            $('html, body').animate({
                scrollTop: $element.offset().top - offset,
            }, speed);
        } else {
            console.warn('ScrollTo function: "element" does not exists!');
        }
    }
});