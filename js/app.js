$(function(){

    // Main Menu Collapse JavaScript Start
    $('#nav_menu_toggler').on('click', function(){
        $('.logo').toggleClass('active');
        $('.nav_item_contianer').toggleClass('active');
    })
    // //Main Menu Collapse JavaScript End

    // Slick Activation JavaScript Start
    $('.banner_item_wrapper').slick({
        prevArrow: $('#prev_arrow'),
        nextArrow: $('#next_arrow')
    });
    // //Slick Activation JavaScript End

    $('.service_item_container').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        responsive: [
           {
              breakpoint: 992,
              settings: {
                 slidesToShow: 2,
              }
           },
           {
              breakpoint: 600,
              settings: {
                 slidesToShow: 1,
                 arrows:true,
              }
           }
        ],
     })
})