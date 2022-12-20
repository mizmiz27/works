// スライダー

const swiper = new Swiper('.swiper-container', {
  // loop: true,
  slidesPerView: 'auto',
  slidesPerView: '1',
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
      spaceBetween: '40%',
      allowTouchMove: false,
		},
    1440: {
      spaceBetween: '55%',
      // spaceBetween: '40%',
      allowTouchMove: false,
		},
  },
});