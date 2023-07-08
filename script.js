var swiper = new Swiper('.product-slider', {
    spaceBetween: 30,
    effect: 'fade',
    // initialSlide: 2,
    loop: false,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev'
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
        init: function(){
            var index = this.activeIndex;

            var target = $('.product-slider__item').eq(index).data('target');

            console.log(target);

            $('.product-img__item').removeClass('active');
            $('.product-img__item#'+ target).addClass('active');
        }
    }

});

swiper.on('slideChange', function () {
    var index = this.activeIndex;

    var target = $('.product-slider__item').eq(index).data('target');

    console.log(target);

    $('.product-img__item').removeClass('active');
    $('.product-img__item#'+ target).addClass('active');

    if(swiper.isEnd) {
        $('.prev').removeClass('disabled');
        $('.next').addClass('disabled');
    } else {
        $('.next').removeClass('disabled');
    }

    if(swiper.isBeginning) {
        $('.prev').addClass('disabled');
    } else {
        $('.prev').removeClass('disabled');
    }
});

$(".js-fav").on("click", function() {
    $(this).find('.heart').toggleClass("is-active");
});
const W = window.innerWidth;
const H = window.innerHeight;
const h1 = document.querySelector('h1');
document.onmousemove = function (e) {
let x = e.clientX;
let y = e.clientY;
let distY = y - H / 2;
let distX = x - W / 2;
let dist = Math.hypot(distX, distY);
h1.style.textShadow = (-distX / 8) + "px " + (-distY / 8) + "px " + (Math.abs(dist / 8)) + "px rgba(0,0,0," + ((1 - Math.abs(distY) * 2 / H) * 0.6) + ")";
}