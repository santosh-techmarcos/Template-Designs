document.addEventListener('DOMContentLoaded', () => {
  var twoDaysFromNow = new Date().getTime() / 1000 + 86400 * 2 + 1;
  new FlipDown(twoDaysFromNow, "registerBy").start();
  new FlipDown(twoDaysFromNow, "eventStart").start();
});

// Logo
$('.logo-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 3, // Default value
  spaceBetween: 10, // Default value
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: { // Adjust this if you have a breakpoint for tablets or larger devices
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 3, // This will apply for tablets and larger mobile devices
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2, // This will apply for smaller mobile devices
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1, // Adjust based on your design for the smallest screens
      spaceBetween: 10,
    },
  },
});


$(document).ready(function() {
  $("#accordion").accordion({
      icons: false, // Disable default jQuery UI icons
      heightStyle: "content"
  });
});


$('.rotor-group').each(function() {
  $(this).append($(this).find('.rotor-group-heading'));
});



// Locomotive js
const scroll = new LocomotiveScroll({
  el: document.querySelector('#locomotive-scroll'),
  smooth: true,
  smartphone:true,
  tablet:true,
});

// AOS Animetions
AOS.init();

let observer = new IntersectionObserver( (entries, observer) => {  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('aos-animate'); }else{ entry.target.classList.remove('aos-animate'); } }); }); document.querySelectorAll('[data-aos]').forEach(aosElem => { observer.observe(aosElem) });


// jQuery function to animate the counter
function animateCounter($element, target, suffix = "") {
  let start = 0;
  const duration = 2000;
  const stepTime = Math.abs(Math.floor(duration / target));

  const counter = setInterval(() => {
      start += 1;
      $element.text(start + suffix);
      if (start >= target) {
          clearInterval(counter);
      }
  }, stepTime);
}

// jQuery function to check if an element is in view (Locomotive Scroll handles it differently)
function isInViewport($element, scroll) {
  const top = $element.offset().top;
  const bottom = top + $element.outerHeight();
  const scrollTop = scroll.scroll.instance.scroll.y;
  const scrollBottom = scrollTop + window.innerHeight;
  
  return (top <= scrollBottom && bottom >= scrollTop);
}

// Hook into Locomotive Scroll's scroll event
scroll.on('scroll', (instance) => {
  $('.head-xl').each(function() {
      const $el = $(this);
      const target = parseInt($el.data('target'));
      const suffix = $el.data('suffix') || "";

      if (isInViewport($el, scroll) && $el.text() === "0") {
          animateCounter($el, target, suffix);
      }
  });
});