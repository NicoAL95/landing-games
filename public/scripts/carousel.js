$(document).ready(function(){

    const cardCarousel = $("#cardCarousel");
        // Carousel Hero
        cardCarousel.owlCarousel({
            smartSpeed:450,
            loop:false,
            margin:24,
            nav:false,
            dots: false,
            autoplay:false,
            autoWidth: true,
            items: 1,
            lazyLoad: true,


            
            autoplayTimeout:7000,
            autoplayHoverPause:false,
            animateOut: 'fadeOut',
            responsive:{
                0:{
                    items:1
                }
            }
        });

    var active = cardCarousel.find(".owl-item");
    // console.log(active);
    
    if ($(active[0]).hasClass("active")) {
        $(active[0]).addClass('geser');
    }
        
    });

    
    
  