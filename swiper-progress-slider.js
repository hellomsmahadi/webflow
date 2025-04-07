$(".is-progress-slider").append(`<div class="swiper-scrollbar"></div>`);
$(".is-progress-slider").append(`<div class="swiper-pagination"></div>`);
$(".is-progress-slider").append(`<div class="swiper-arrow button-prev"></div>`);
$(".is-progress-slider").append(`<div class="swiper-arrow button-next"></div>`);

const progressSlider = new Swiper(".is-progress-slider", {
  direction: "horizontal",
  spaceBetween: 1,
  slidesPerView: "auto",
  grabCursor: true,
  loop: false,
  mousewheel: {
    forceToAxis: true,
  },
  speed: 300,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
});
