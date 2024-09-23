/********************Flipcount timer************************* */
function handleTickInit(tick) {
  // Customize your target date and time
  const targetDate = new Date('2024-09-25T18:00:00'); // Year-Month-DayTHour:Minute:Second (24-hour format)
  
  // Start countdown based on the given target date
  const counter = Tick.count.down(targetDate, { format: ['d', 'h', 'm', 's'] });

  // Update the tick values in real-time
  counter.onupdate = function(value) {
    tick.value = value;
  };

  counter.onended = function() {
    // Countdown finished, do something here if needed
    console.log('Countdown finished!');
  };
}
/********************Flipcount timer end************************* */

// Logo
$('.logo-wrapper').slick({
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
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

/********************Testimonal js start******************************* */
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 3, // Default value
  spaceBetween: 10, // Default value
  infinite:true,
  autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
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

/********************Testimonal js end******************************* */

/***********************FAQ Accordion js start****************************** */
$(document).ready(function() {
  $("#accordion").accordion({
      icons: false, // Disable default jQuery UI icons
      heightStyle: "acc-content"
  });
});
/***********************FAQ Accordion js end****************************** */

/***********************Locomotive scroll js start****************************** */
// Locomotive js
const scroll = new LocomotiveScroll({
  el: document.querySelector('.locomotive-scroll'),  // Ensure the element exists
  smooth: true,  // Enable smooth scrolling
  smartphone: { smooth: true },  // Smooth scrolling for smartphones
  tablet: { smooth: true },  // Smooth scrolling for tablets
});
/***********************Locomotive scroll js end****************************** */

/***********************AOS Aminmetion js end****************************** */
AOS.init();

// Code for make sure AOS animetion work properly with locomotive
let observer = new IntersectionObserver( (entries, observer) => {  entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('aos-animate'); }else{ entry.target.classList.remove('aos-animate'); } }); }); document.querySelectorAll('[data-aos]').forEach(aosElem => { observer.observe(aosElem) });
/***********************AOS Aminmetion js end****************************** */


/***************************Counter Animation Script*********************************** */
// Function to animate the counter
function animateCounter($element, target, suffix = "") {
  let start = parseInt($element.text());
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

// Function to check if an element is in the viewport (specific to Locomotive Scroll)
function isInViewport($element, scroll) {
  const top = $element.offset().top;
  const bottom = top + $element.outerHeight();
  const scrollTop = scroll.scroll.instance.scroll.y;
  const scrollBottom = scrollTop + window.innerHeight;

  return (top <= scrollBottom && bottom >= scrollTop);
}

// Hook into Locomotive Scroll's scroll event
scroll.on('scroll', (instance) => {
  // Check Achievement Section Counters
  $('.achievement-counter .count').each(function() {
      const $el = $(this);
      const target = parseInt($el.data('target'));
      const suffix = $el.data('suffix') || "";

      if (isInViewport($el, scroll) && !$el.hasClass('animated')) {
          $el.addClass('animated');
          animateCounter($el, target, suffix);
      }
  });

  // Check Portfolio Section Counters
  $('.portfolio-counter .count').each(function() {
      const $el = $(this);
      const target = parseInt($el.data('target'));
      const suffix = $el.data('suffix') || "";

      if (isInViewport($el, scroll) && !$el.hasClass('animated')) {
          $el.addClass('animated');
          animateCounter($el, target, suffix);
      }
  });
});
/***************************Counter Animation End*********************************** */
// Get elements
const topBar = document.querySelector('.top-bar-container');
const bottomBar = document.querySelector('.bottom-bar');

// Variable to track the last scroll position
let lastScrollY = 0;

// Hook into Locomotive Scroll's scroll event
scroll.on('scroll', (instance) => {
  const currentScrollY = instance.scroll.y;

  if (currentScrollY > lastScrollY) {
    // User is scrolling down - show bottom bar, hide top bar
    topBar.style.top = '-200px'; // Hide top bar
    bottomBar.style.bottom = '20px'; // Show bottom bar
  } else {
    // User is scrolling up - show top bar, hide bottom bar
    topBar.style.top = '0'; // Show top bar (sticky at the top)
    bottomBar.style.bottom = '-200px'; // Hide bottom bar
  }

  // Update the last scroll position
  lastScrollY = currentScrollY;
});
