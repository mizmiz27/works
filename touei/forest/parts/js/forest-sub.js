// スライダー

const swiper = new Swiper('.swiper-container', {
  // loop: true,
  slidesPerView: 'auto',
  spaceBetween: '3.2%',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    799: {
      spaceBetween: 30,
      allowTouchMove: false,
		},
    1440: {
      spaceBetween: 50,
      allowTouchMove: false,
		},
  },
});