'use strict';

$(function() {

  // $(window).load(function(){
  //   $('html,body').animate({ scrollTop: 0 }, '1');
  // });

  const $elem = $('.switch');
  const sp = '_sp.';
  const pc = '_pc.';
  const replaceWidth = 768;
  
  function imageSwitch() {
    let windowWidth = parseInt($(window).width());
    $elem.each(function() {
      let $this = $(this);
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();
  
  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
  let resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 200);
  });

  $('.hover_img').each(function() {

    let img_off = $(this).attr('src');
    let img_on = $(this).attr('src').replace('off', 'on');
  
    $(this).hover(
      function () {
        $(this).attr('src', img_on);
      },
      function () {
        $(this).attr('src', img_off);
      }
    );
  
  });

});


const mediaQuery = window.matchMedia('(max-width: 768px)');

// opAnime();

// function opAnime () {
//   const $opVisual = $('.op_visual');
//   const tlOp = gsap.timeline();
//   tlOp.to($opVisual.find('.inner'), {opacity: 1, duration: 1, ease: Sine.easeIn}, '<')
//   .to($opVisual.find('.inner img'), {opacity: 0, delay: 0.5, duration: 1, ease: Sine.easeIn})
//   .to($opVisual, {opacity: 0, display: 'none', delay: 0.2, duration: 1.2, onComplete: effectAnime});
// }

// effectAnime();

// function effectAnime() {

  //キービジュアル
  // const $kv = $('#kv');
  // const $shopInfo = $('#shop_info');
  // const tlKv = gsap.timeline();

//   if (mediaQuery.matches) {
//     tlKv.fromTo($kv.find('.main_title'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeIn})
//     .fromTo($kv.find('.sub_title'), {y: '100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeIn}, '<')
//     .fromTo($kv.find('.price'), {y: '100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeIn}, '<')
//     .fromTo($kv.find('.snow01'), {y: '-150%', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: Power1.easeIn}, '+=0.2')
//     .fromTo($kv.find('.snow02'), {y: '-150%', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: Power1.easeIn}, '-=0.7')
//     .fromTo($kv.find('.snow04'), {y: '-150%', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: Power1.easeIn}, '-=0.7')
//     .fromTo($kv.find('.snow05'), {y: '-150%', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: Power1.easeIn}, '-=0.7')
//     .fromTo($kv.find('.snow03'), {y: '-150%', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: Power1.easeIn}, '-=0.7')
//     .fromTo($kv.find('.stamp'), {x: '30%', y: '-30%', opacity: 0, scale: 1.05, rotation: -30}, {x: '30%', y: '-30%', opacity: 1, scale: 1.15, rotation: 0, duration: 0.4, ease: Power4.easeIn}, '-=0.4')
//     .to($kv.find('.stamp'), {x: '0', y: '0', rotation: 0, scale:1, duration: 0.2, ease: Power4.easeIn}, '+=0')
//     .fromTo($kv.find('.repair'), {opacity: 0}, {opacity: 1, duration: 0.2, ease: Power4.easeIn}, '<')
//     .fromTo($kv.find('.copy'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut})
//     .fromTo($kv.find('.note'), {opacity: 0}, {opacity: 1, duration: 0.7, ease: Power4.easeOut})
//     .fromTo($kv.find('.date'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut}, '<')
//     .fromTo($shopInfo.find('.btn'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut}, '<');
//   } else {
//     tlKv.fromTo($kv.find('.main_title'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeIn})
//     .fromTo($kv.find('.sub_title'), {y: '100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeIn}, '<')
//     .fromTo($kv.find('.price'), {y: '100%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeIn}, '<')
//     .fromTo($kv.find('.stamp'), {x: '30%', y: '-30%', opacity: 0, scale: 1.05, rotation: -30}, {x: '30%', y: '-30%', opacity: 1, scale: 1.15, rotation: 0, duration: 0.4, ease: Power4.easeIn}, '+=0.2')
//     .to($kv.find('.stamp'), {x: '0', y: '0', rotation: 0, scale:1, duration: 0.2, ease: Power4.easeIn}, '+=0.2')
//     .fromTo($kv.find('.repair'), {opacity: 0}, {opacity: 1, duration: 0.2, ease: Power4.easeIn}, '<')
//     .fromTo($kv.find('.copy'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut})
//     .fromTo($kv.find('.note'), {opacity: 0}, {opacity: 1, duration: 0.7, ease: Power4.easeOut})
//     .fromTo($kv.find('.date'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut}, '<')
//     .fromTo($shopInfo.find('.btn'), {y: '70%', opacity: 0}, {y: 0, opacity: 1, duration: 0.7, ease: Power4.easeOut}, '<');
//   }
// }
//effectAnimeここまで

function opAnime() {
  // $('.op_visual').addClass('animated');
  $('.op_visual .inner').fadeIn(1000);
  $('.op_visual .inner img').delay(2000);
  $('.op_visual .inner img').fadeOut(1000);
  $('.op_visual').delay(4000);
  $('.op_visual').fadeOut(1000);
  setTimeout(function() {
    kvAnime();
  }, 5000);
}

function kvAnime() {
  $('#kv').addClass('animated');
  $('#shop_info').addClass('animated');
}


function init () {
  function onAnimated(entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
  
      $(entry.target).addClass("animated");
      observer.unobserve(entry.target);
    });
  }

  if (IntersectionObserver !== void 0) {
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };
    const observer = new IntersectionObserver(onAnimated, options);

    observer.observe($('#movie .title_box').get(0));
    observer.observe($('#movie .pop').get(0));
    observer.observe($('#kodawari .title').get(0));
    observer.observe($('#kodawari .item01').get(0));
    observer.observe($('#kodawari .item02').get(0));
    observer.observe($('#kodawari .item03').get(0));
    observer.observe($('#kodawari .item04').get(0));
    observer.observe($('#kodawari .item05').get(0));
    observer.observe($('#arrange').get(0));
    observer.observe($('#item_info h1').get(0));
    observer.observe($('#item_info .price_box').get(0));
    observer.observe($('#recommend .title_content').get(0));
    observer.observe($('#recommend .item_content .item01').get(0));
    observer.observe($('#recommend .item_content .item02').get(0));
    observer.observe($('#recommend .item_content .item03').get(0));
    observer.observe($('#recommend .item_content .item04').get(0));
    observer.observe($('.maru-section').get(0));

    //lozad.js（動画遅延読み込み）
    const observer2 = lozad();
    observer2.observe();
  }
}

window.addEventListener("load", init);



//Cookie取得
var checkCookie = document.cookie;

//Cookie内に【XXX】という文字列があるかないか判定。
if(checkCookie.match("XXX")){
  /* =====================================
    2回目の訪問したときの処理（オープニング画像を再生しない）
  ========================================*/
  
  $('.op_visual').css({display: 'none'});
  kvAnime();

}else{
  //Domain名取得
  var domain = document.domain;
  //Cookieの内容を格納
  var visitorCookie = "visitorCookie=XXX; max-age=60; domain="+domain+"; path=/;"
  //Cookieに書き込み
  document.cookie = visitorCookie;
  /* =====================================
    1回目の訪問したときの処理（オープニング画像を再生する）
  ========================================*/
  
  opAnime();
}

