$('.whatsapp-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '#Whatsapp-next',
  prevArrow: '#Whatsapp-prev',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Tesimonial
$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  nextArrow: '#next-testimonial',
  prevArrow: '#prev-testimonial',
});

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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$(document).ready(function() {
  // Activate the first accordion section by default
  $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
  $('.acc-container .acc:nth-child(1) .acc-content').slideDown();

  // Handle click events on accordion headers
  $('.acc-head').on('click', function() {
    // If the clicked header is not already active
    if (!$(this).hasClass('active')) {
      // Close all contents and remove 'active' from all headers
      $('.acc-content').slideUp();
      $('.acc-head').removeClass('active');

      // Open the clicked one and add 'active'
      $(this).siblings('.acc-content').slideDown();
      $(this).addClass('active');
    }
    // If it's already active, do nothing to ensure one remains open
  });
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







  // Function to animate the number increment
  function animateNumber(item) {
    const target = parseInt($(item).attr('data-target')); 
    const current = parseInt($(item).text());
    $({ count: current }).animate({ count: target }, {
      duration: 2000, 
      easing: 'swing',
      step: function() {
        $(item).text(Math.floor(this.count)); 
      },
      complete: function() {
        $(item).text(this.count); 
      }
    });
  }

  function isInViewport(element) {
    const elementTop = $(element).offset().top;
    const elementBottom = elementTop + $(element).outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  $(window).on('scroll', function() {
    $('.stat-number').each(function() {
      if (isInViewport(this) && !$(this).hasClass('counted')) {
        $(this).addClass('counted'); 
        animateNumber(this); 
      }
    });
  });

  // Optionally trigger the animation on page load for visible elements
  $(document).ready(function() {
    $('.stat-number').each(function() {
      if (isInViewport(this)) {
        $(this).addClass('counted');
        animateNumber(this);
      }
    });
  });