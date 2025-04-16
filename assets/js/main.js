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


$(document).ready(function(){
    $(".hide");
    $(".marker-japan").click(function(){
      $( ".japan-txt" ).toggle();
  
    });
    $(".marker-usa").click(function(){
        $( ".usa-txt" ).toggle();
    });
    $(".marker-srilanka").click(function(){
        $( ".srilanka-txt" ).toggle();
     
    });
    
    $(".marker-bangladesh").click(function(){
        $( ".bangladesh-txt" ).toggle();
    });

    $(".marker-uk").click(function(){
        $( ".uk-txt" ).toggle();
    });
  
  });

  var ios = document.getElementById("revo-partner-map-for-ios");
  var chrome = document.getElementById("revo-partner-map");
  var ua = navigator.userAgent.toLowerCase(); 

  if (ua.indexOf('safari') != -1) { 
    if (ua.indexOf('chrome') > -1) {
      if (ios) ios.style.display = "none";
      if (chrome) chrome.style.display = "block";
    } else {
      if (chrome) chrome.style.display = "none";
      if (ios) ios.style.display = "block";
    }
  }


   const clientsSidler = new Swiper('.clientsSidler', {
      loop: true,
       autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    });

  