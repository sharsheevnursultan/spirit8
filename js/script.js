$("#testimonials-owl").owlCarousel({
    loop: true,
    margin: 50,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items: 1,
});
$("#clients-owl").owlCarousel({
    loop: true,
    margin: 50,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items: 1,
});
$("#team-owl").owlCarousel({
    loop: true,
    margin: 50,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items:4,
    responsive: {
        0:{
            items: 1
        },
        480:{
            items: 3
        },
        769:{
            items: 4
        }
    }
});

$('.mobile').on('click', function () {
    $('.list-items').toggleClass('active');
})
$('.list-item').on('click', function () {
    $('.list-items').removeClass('active');
})
