$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 800;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
$(function () {
  // 置換の対象とするclass属性。
  var $elem = $('img');
  // 置換の対象とするsrc属性の末尾の文字列。
  var sp = '_sp.';
  var pc = '_pc.';
  // 画像を切り替えるウィンドウサイズ。
  var replaceWidth = 769;

  function imageSwitch() {
    // ウィンドウサイズを取得する。
    var windowWidth = parseInt(window.innerWidth);

    // ページ内にあるすべての`.js-image-switch`に適応される。
    $elem.each(function () {
      var $this = $(this);
      // ウィンドウサイズが768px以上であれば_spを_pcに置換する。
      if (windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));

        // ウィンドウサイズが768px未満であれば_pcを_spに置換する。
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
  var resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      imageSwitch();
    }, 50);
  });
});

// $(window).on('load scroll', function () {
//   var scrT = $(window).scrollTop();
//   var scrB = scrT + $(window).height();
//   var winWidth = $(window).width();
//   if (winWidth > 768) {
//     var buffer = 240;
//   } else {
//     var buffer = 100;
//   }
//   $('.js-fadein').each(function () {
//     var thisTop = $(this).offset().top;
//     if (scrB > thisTop + buffer) {
//       $(this).addClass('is-show');
//     }
//   });
// });


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


//accordion
$('.explanation h3').on('click', function () {
  $(this).parents('.reason02').toggleClass('open');
  $(this).next('.desc').slideToggle(500);
});



//inview
$('.target').on('inview', function () {
  $(this).addClass('animated');
});

window.addEventListener("DOMContentLoaded", () => {

  //フォトギャラリーのモーダルウインドウ
  const modal = document.getElementById("modal");
  const openModalBtns = document.querySelectorAll(".js-open-modal");
  const closeModalBtns = document.querySelectorAll(".js-close-modal");
  const trigger = document.querySelector(".trigger");

  // Swiperの設定
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: 'fade',
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
  let showNum = 1, // 最初に表示しておく件数
    addNum = 1,  // クリックごとに表示したい件数
    target = '.gallery .item-list',
    btn = $('.btn-more');

  $(target + ':nth-of-type(n + ' + (showNum + 1) + ')').addClass('is-hidden');

  btn.on('click', function () {
    $(target + '.is-hidden').slice(0, addNum).removeClass('is-hidden').addClass('is-show'); // アニメーション用にis-showクラスを追加

    if ($(target + '.is-hidden').length == 0) {
      btn.fadeOut();
    }
  });
});

$(window).on('load',function(){
    
  $("#splash-logo").delay(1200).fadeOut('slow');

  $("#splash").delay(1500).fadeOut(800,function(){
  $('.wrapper').addClass('appear');//フェードアウト後bodyにappearクラス付与
  }); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
  
});
