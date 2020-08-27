$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        focusOnSelect: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',

    });

    $('.left-slider').on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide === $('.left-slider> div').last()) {
            alert(currentSlide)
        }
    });
    var item_length = $('.left-slider > div').length - 1;
    $('.left-slider').slick({
        // dots: false,
        // infinite: true,
        // speed: 300,
        // slidesToShow: 3,
        // centerPadding: '60px',
        // 
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],

    });
    var item_length = $('.right-slider > div').length - 1;
    $('.right-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // $(".square-one").click(function() {
    //     $(".sizes .squares .square-one").siblings().css("border", "1px solid #F00");
    // });

    var next = $('ul li.square-one.active').removeClass('active').next('li.square-one');

    if (!next.length) next = next.prevObject.siblings(':first');


    next.addClass('active');

});