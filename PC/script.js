
$(".mainslide-items").slick({
    autoplay: false,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    prevArrow: '<img src="./assets/top_img/slick-arrow-left.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="./assets/top_img/slick-arrow-right.svg" class="slide-arrow next-arrow">',
    asNavFor: ".pickup-items",
});
$(".pickup-items").slick({
    slidesToShow: 4,
    asNavFor: ".mainslide-items",
    focusOnSelect: true,
});
