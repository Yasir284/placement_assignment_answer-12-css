let heroSectionSwiper = new Swiper(".hero-section-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let companyImageSlider = new Swiper(".company-image-slider", {
  slidesPerView: 5,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

let previewButtonSlider = new Swiper(".preview-button-slider", {
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
