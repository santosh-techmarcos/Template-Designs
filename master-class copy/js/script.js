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
  el: document.querySelector('.locomotive-scroll'),  // Make sure the element exists
  smooth: true,  // Add this for smooth scrolling
  smartphone: { smooth: true },  // Enable smooth scrolling for smartphones
  tablet: { smooth: true },  // Enable smooth scrolling for tablets
});

/***********************Locomotive scroll js end****************************** */
