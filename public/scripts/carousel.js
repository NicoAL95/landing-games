$(document).ready(function(){

    const cardCarousel = $("#gameSlider");
        // Carousel Hero
        cardCarousel.owlCarousel({
            smartSpeed:450,
            loop:true,
            margin: 11,
            nav:false,
            dots: false,
            autoplay:true,
            autoWidth: true,
            
            autoplayTimeout:7000,
            autoplayHoverPause:false,
            animateOut: 'fadeOut',
            responsive:{
                756:{
                    items: 4
                },
                964:{
                    items: 5
                },
                1150:{
                    items:6
                }
            }
        });
        
    });

    
    
  