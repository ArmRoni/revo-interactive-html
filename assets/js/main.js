jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 50) {
       jQuery('.header').addClass('header-position');
    } else {
       jQuery('.header').removeClass('header-position');
    }
  });
  
  jQuery(function(){
        jQuery('#menu-nav').slicknav({
        label: '',
        allowParentLinks:false,
        openedSymbol:"",
        closedSymbol:"",
        prependTo:'#menu_holder'
        });
    });
  (jQuery); 
  
  jQuery(".nav-toggler").click(function() {
    jQuery(this).toggleClass("active");
    jQuery("#menu_holder").toggleClass("mobile-menu-open");
    jQuery(".header-area").toggleClass("header-bg");
    jQuery("body").toggleClass("overflow-hidden");
  });
  
  jQuery(".menu-backdrop").click(function() {
    jQuery(".nav-toggler").removeClass("active");
    jQuery("#menu_holder").removeClass("mobile-menu-open");
    jQuery(".header-area").removeClass("header-bg");
    jQuery("body").removeClass("overflow-hidden");
  });


  var bannerSlider = new Swiper(".banner-slider", {
    loop: true,  // Infinite looping
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  var logoSwiper = new Swiper(".logoSwiper", {
      slidesPerView: 5,
      spaceBetween: 40,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1080: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1300: {
          slidesPerView: 6,
          spaceBetween: 40,
        },
      },
    });

  const testimonialSwiper = new Swiper(".testimonialSwiper", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

  