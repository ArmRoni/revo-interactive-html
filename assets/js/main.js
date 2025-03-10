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


  var swiper = new Swiper(".banner-slider", {
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
  