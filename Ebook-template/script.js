$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: `<button class="slick-prev">
  <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 14C40 14.4125 39.8495 14.8081 39.5816 15.0998C39.3137 15.3915 38.9504 15.5553 38.5715 15.5553L4.87939 15.5553L13.8702 25.3415C14.1385 25.6336 14.2892 26.0297 14.2892 26.4427C14.2892 26.8557 14.1385 27.2518 13.8702 27.5439C13.602 27.8359 13.2382 28 12.8589 28C12.4795 28 12.1157 27.8359 11.8475 27.5439L0.41967 15.1012C0.286641 14.9567 0.181097 14.7851 0.109083 14.5961C0.0370691 14.4072 6.20902e-07 14.2046 6.11959e-07 14C6.03017e-07 13.7954 0.0370691 13.5929 0.109083 13.4039C0.181097 13.2149 0.286641 13.0433 0.41967 12.8988L11.8475 0.456122C11.9803 0.311513 12.138 0.196804 12.3115 0.118542C12.4851 0.0402804 12.671 -5.53869e-07 12.8589 -5.62079e-07C13.2382 -5.78661e-07 13.602 0.164071 13.8702 0.456122C14.1385 0.748173 14.2892 1.14428 14.2892 1.5573C14.2892 1.97032 14.1385 2.36643 13.8702 2.65848L4.87939 12.4447L38.5715 12.4447C38.9504 12.4447 39.3137 12.6085 39.5816 12.9002C39.8495 13.1919 40 13.5875 40 14Z"/>
</svg>
  </button>`,
  nextArrow: `<button class="slick-next">
  <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-6.11959e-07 14C-6.2999e-07 14.4125 0.150497 14.8081 0.418392 15.0998C0.686282 15.3915 1.04962 15.5553 1.42848 15.5553L35.1206 15.5553L26.1298 25.3415C25.8615 25.6336 25.7108 26.0297 25.7108 26.4427C25.7108 26.8557 25.8615 27.2518 26.1298 27.5439C26.398 27.8359 26.7618 28 27.1411 28C27.5205 28 27.8843 27.8359 28.1525 27.5439L39.5803 15.1012C39.7134 14.9567 39.8189 14.7851 39.8909 14.5961C39.9629 14.4072 40 14.2046 40 14C40 13.7954 39.9629 13.5929 39.8909 13.4039C39.8189 13.2149 39.7134 13.0433 39.5803 12.8988L28.1525 0.456122C28.0197 0.311513 27.862 0.196804 27.6885 0.118542C27.5149 0.0402804 27.329 -5.53869e-07 27.1411 -5.62079e-07C26.7618 -5.78661e-07 26.398 0.164071 26.1298 0.456122C25.8615 0.748173 25.7108 1.14428 25.7108 1.5573C25.7108 1.97032 25.8615 2.36643 26.1298 2.65848L35.1206 12.4447L1.42848 12.4447C1.04962 12.4447 0.686283 12.6085 0.418392 12.9002C0.150497 13.1919 -5.93928e-07 13.5875 -6.11959e-07 14Z" />
</svg>
  </button>`,
  responsive: [
    {
      breakpoint: 1024,
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
      breakpoint: 556,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


$('.video-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: `<button class="slick-prev">
  <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 14C40 14.4125 39.8495 14.8081 39.5816 15.0998C39.3137 15.3915 38.9504 15.5553 38.5715 15.5553L4.87939 15.5553L13.8702 25.3415C14.1385 25.6336 14.2892 26.0297 14.2892 26.4427C14.2892 26.8557 14.1385 27.2518 13.8702 27.5439C13.602 27.8359 13.2382 28 12.8589 28C12.4795 28 12.1157 27.8359 11.8475 27.5439L0.41967 15.1012C0.286641 14.9567 0.181097 14.7851 0.109083 14.5961C0.0370691 14.4072 6.20902e-07 14.2046 6.11959e-07 14C6.03017e-07 13.7954 0.0370691 13.5929 0.109083 13.4039C0.181097 13.2149 0.286641 13.0433 0.41967 12.8988L11.8475 0.456122C11.9803 0.311513 12.138 0.196804 12.3115 0.118542C12.4851 0.0402804 12.671 -5.53869e-07 12.8589 -5.62079e-07C13.2382 -5.78661e-07 13.602 0.164071 13.8702 0.456122C14.1385 0.748173 14.2892 1.14428 14.2892 1.5573C14.2892 1.97032 14.1385 2.36643 13.8702 2.65848L4.87939 12.4447L38.5715 12.4447C38.9504 12.4447 39.3137 12.6085 39.5816 12.9002C39.8495 13.1919 40 13.5875 40 14Z"/>
</svg>
  </button>`,
  nextArrow: `<button class="slick-next">
  <svg width="40" height="28" viewBox="0 0 40 28" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M-6.11959e-07 14C-6.2999e-07 14.4125 0.150497 14.8081 0.418392 15.0998C0.686282 15.3915 1.04962 15.5553 1.42848 15.5553L35.1206 15.5553L26.1298 25.3415C25.8615 25.6336 25.7108 26.0297 25.7108 26.4427C25.7108 26.8557 25.8615 27.2518 26.1298 27.5439C26.398 27.8359 26.7618 28 27.1411 28C27.5205 28 27.8843 27.8359 28.1525 27.5439L39.5803 15.1012C39.7134 14.9567 39.8189 14.7851 39.8909 14.5961C39.9629 14.4072 40 14.2046 40 14C40 13.7954 39.9629 13.5929 39.8909 13.4039C39.8189 13.2149 39.7134 13.0433 39.5803 12.8988L28.1525 0.456122C28.0197 0.311513 27.862 0.196804 27.6885 0.118542C27.5149 0.0402804 27.329 -5.53869e-07 27.1411 -5.62079e-07C26.7618 -5.78661e-07 26.398 0.164071 26.1298 0.456122C25.8615 0.748173 25.7108 1.14428 25.7108 1.5573C25.7108 1.97032 25.8615 2.36643 26.1298 2.65848L35.1206 12.4447L1.42848 12.4447C1.04962 12.4447 0.686283 12.6085 0.418392 12.9002C0.150497 13.1919 -5.93928e-07 13.5875 -6.11959e-07 14Z" />
</svg>
  </button>`,
  responsive: [
    {
      breakpoint: 1024,
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
      breakpoint: 556,
      settings: {
        slidesToShow: 1,
      }
    }
  ]

});

// Logo slider
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

// Inject svg icon
$(document).ready(function() {
  var svgIcon = '<span><svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.83L5.59 13.42L7 12L1.42 6.42M21.83 0L11.25 10.59L7.09 6.42L5.66 7.83L11.25 13.42L23.25 1.42M17.59 1.42L16.18 0L9.83 6.35L11.25 7.76L17.59 1.42Z" fill="#4E705F"/></svg></span>';
  // Append SVG icon to each li
  $('.theme-checklist li').each(function() {
    $(this).prepend(svgIcon);
  });
});

// Accordion
$(document).ready(function() {
  $("#accordion").accordion({
      icons: false,
      heightStyle: "content"
  });
});

// Locomotive 
const scroll = new LocomotiveScroll({
  el: document.querySelector('#locomotive-scroll'),
  smooth: true,
  smartphone:true,
  tablet:true,
});

function mobileRotation(){
  const t2 = gsap.timeline({default: {ease: 'power4.out' , duration: .6}})
  t2.from('.mobile', {
    rotateZ:0,
    transformOrigin: 'bottom left',
    duration:1.2,
    ease:'power4.inOut',
    stragger:true
  })
  t2.from('.circle-modal',{
    opacity:0,
    x:-100,
    duration:.5,
    ease:'power4.inOut',
  })
  t2.from('.best-seller-stemp', {
    opacity: 0,
    scale: 7, 
    z: 100,       
    duration: .3,
    ease: 'power4.inOut',
  })

}

mobileRotation();
// Follower
function circleFllower(){
  var circle = document.querySelector('#cursor')
  window.addEventListener("mousemove" , (dets)=>{
      gsap.to(circle , {
          left: dets.clientX,
          top: dets.clientY,
          duration:.5,
      })
  })
  document.querySelectorAll('a , button, i').forEach((elem)=>{
      elem.addEventListener("mouseenter" , ()=>{
          gsap.to(circle ,{
              scale:2,
              duration:.5
          })
      })
      elem.addEventListener("mouseleave" , ()=>{
          gsap.to(circle ,{
              scale:1
          })
      })
  })
}
circleFllower();