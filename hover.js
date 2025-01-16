var $body = $('body');
var WIDTH = $body.width();
var HEIGHT = $body.height();
var $ad = $('.ad');
var $light = $ad.find('.light');
var $layer1 = $ad.find('.layer-1');
var $layer2 = $ad.find('.layer-2');
var $layer3 = $ad.find('.layer-3');

function moveAd(e) {
    var xPer = e.clientX / WIDTH;
    var yPer = e.clientY / HEIGHT;

    var rotateX = 5 - (yPer * 10);
    var rotateY = -5 + (xPer * 10);

    $ad.css({
        transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) '
    });

    var translateX = -5 + (xPer * 10);
    var translateY = -5 + (yPer * 10);

    $layer2.css({
        transform: 'scale(.7) translateX(' + translateX + 'px) translateY(' + translateY + 'px)'
    });

    $layer3.css({
        transform: 'scale(.7) translateX(' + (translateX * 2) + 'px) translateY(' + (translateY * 2) + 'px)'
    });

    var lightX = 800 - (xPer * 1600);
    var lightY = 300 - (yPer * 600);

    $light.css({
        transform: 'translateX(' + lightX + 'px) translateY(' + lightY + 'px)'
    });
}

$body.on('mousemove', moveAd);