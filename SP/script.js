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
    prevArrow: '<img src="./assets//top_img/slick-arrow-left.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./assets/top_img/slick-arrow-right.svg" class="slide-arrow next-arrow">',
    lazyLoad: 'progressive',
});
