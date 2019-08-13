(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // // MENU
    // $('.menu-burger').on('click', function() {
    //   $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    //   $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
    // });


    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'img/signup/slide-image01.jpg' },
            { src: 'img/signup/slide-image02.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
