$(document).ready(function() {

    var switcher = $('#switcher');

    switcher.find('.switcher-btn').click(function(e) {
        e.preventDefault();
        switcher.toggleClass('switcher-active');
    })

    switcher.find('.bgs li').click(function() {
        var bgSrc = $(this).css('backgroundImage');
        $('.wrapper').css({
            backgroundImage: bgSrc
        })
    })

    switcher.find('.color .item-1').click(function() {
        $('head').find('link[href*="light.css"]').remove();
    })
    switcher.find('.color .item-2').click(function() {
        $('head').append('<link rel="stylesheet" href="assets/css/light.css">');
    })

});