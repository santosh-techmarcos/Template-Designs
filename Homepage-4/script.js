new FlipDown(1588017373, "registerBy").start();
new FlipDown(1593561600, "eventStart").start();


var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(document).ready(function() {
  $("#accordion").accordion({
      icons: false, // Disable default jQuery UI icons
      heightStyle: "content"
  });
});
