// オープニングロゴアニメ
new Vivus('op-logo',
  {
    type: 'async',
    start: 'autostart',
    duration: '150',
    animTimingFunction: Vivus.EASE,
  },
  function (obj) {
    $('#op-logo').attr('class', 'done');
  }
);

$(document).ready(function () {
  $('#pagepiling').pagepiling({
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    navigation: {
      'position': 'left',
    },
  });
});

//accordion
$(function() {
  $('.explanation h3').on('click', function () {
    $(this).parents('.reason02').toggleClass('open');
    $(this).next('.desc').slideToggle(500);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalBtns = document.querySelectorAll(".js-open-modal");
  const closeModalBtns = document.querySelectorAll(".js-close-modal");
  const trigger = document.querySelector(".trigger");

  // 対応するスライド番号をセット（クリックしたときにモーダルで開く画像が何番目か）
  openModalBtns.forEach((openModalBtn, index) => {
    openModalBtn.dataset.slideIndex = index + 1;
  });


  // Swiperの設定
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: 'fade', // フェードモードにする（デフォルトは 'slide'）
    fadeEffect: {
      crossFade: true
    },
    speed: 1500,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
  });

  // モーダルを表示するボタンをクリックしたとき
  openModalBtns.forEach((openModalBtn) => {
    openModalBtn.addEventListener("click", () => {
      // data-slide-indexに設定したスライド番号を取得
      const modalIndex = openModalBtn.dataset.slideIndex;
      swiper.slideTo(modalIndex);
      modal.classList.add("is-active");
      trigger.classList.add("is-hidden");
    });
  });

  // モーダルを閉じるボタンをクリックしたとき
  closeModalBtns.forEach((closeModalBtn) => {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("is-active");
      trigger.classList.remove("is-hidden");
    });
  });

  // galleryの写真を8枚ずつ表示（※8枚ごとにdiv（.item-list）に格納）
  let showNum = 1,
    addNum = 1,
    target = '.gallery .item-list',
    btn = $('.btn-more');

  $(target + ':nth-of-type(n + ' + (showNum + 1) + ')').addClass('is-hidden');

  btn.on('click', function () {
    $(target + '.is-hidden').slice(0, addNum).removeClass('is-hidden').addClass('is-show');

    if ($(target + '.is-hidden').length == 0) {
      btn.fadeOut();
    }
  });
});


$(window).on('load',function(){
    $("#splash-logo").delay(3000).fadeOut('slow');
    $("#splash").delay(3000).fadeOut(800, function(){
    $('.wrapper').addClass('appear');
    });
  });