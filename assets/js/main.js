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


 $(document).ready(function() {
  $('#portfolio').mixItUp({
    selectors: {
      target: '.tile',
      filter: '.filter'
    },
    animation: {
      animateResizeContainer: false,
      effects: 'fade scale'
    }
  });

  // Add event listener to toggle active class on filters
  $('.filter').click(function() {
    $('.filter').removeClass('active');
    $(this).addClass('active');
  });
});

// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
let lastX = -100;
let lastY = -100;

const cursor = document.querySelector('.cursor');
const sections = document.querySelectorAll('.sucessfull-project-photo');

if (sections.length && cursor) {
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      cursor.classList.add('visible');
    });

    section.addEventListener('mouseleave', () => {
      cursor.classList.remove('visible');
    });
  });
}

const lerp = (a, b, n) => (1 - n) * a + n * b;

const initCursor = () => {
  if (!cursor) return;

  document.addEventListener('mousemove', e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });

  const render = () => {
    const delta = 0.1;
    lastX = lerp(lastX, clientX, delta);
    lastY = lerp(lastY, clientY, delta);

    cursor.style.transform = `translate(${lastX}px, ${lastY}px)`;

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};

initCursor();

document.addEventListener("DOMContentLoaded", function() {
  new WOW({
    delay: '1s'
  }).init();
});



document.querySelectorAll('.marquee-swiper').forEach(swiperEl => {
  const isRTL = swiperEl.getAttribute('data-direction') === 'rtl';
    new Swiper(swiperEl, {
      slidesPerView: 3,  // Show 4 items per page
      spaceBetween: 10,  // Default space between slides
      loop: true,        // Infinite loop
      freeMode: true,
      speed: 4000,       // Speed of the animation
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: isRTL
      },
      allowTouchMove: false,
      breakpoints: {
        991: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
  });


