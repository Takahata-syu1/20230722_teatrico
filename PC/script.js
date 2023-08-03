
$(".mainslide-items").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    cssEase: 'ease-out',
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    prevArrow: '<img src="./assets/top_img/slick-arrow-left.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./assets/top_img/slick-arrow-right.svg" class="slide-arrow next-arrow">',
    asNavFor: ".pickup-items",
    lazyLoad: 'progressive',
});
$(".pickup-items").slick({
    slidesToShow: 4,
    asNavFor: ".mainslide-items",
    focusOnSelect: true,
    speed: 1000,
    cssEase: 'ease-out',
});
