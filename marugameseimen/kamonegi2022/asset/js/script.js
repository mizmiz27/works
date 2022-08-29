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

  // kvAnime();

});


const mediaQuery = window.matchMedia('(max-width: 768px)');

// function opAnime() {
//   $('.op_visual .inner').fadeIn(1000);
//   $('.op_visual .inner img').delay(3000);
//   $('.op_visual .inner img').fadeOut(1000);
//   $('.op_visual').delay(4000);
//   $('.op_visual').fadeOut(1000);
//   setTimeout(function() {
//     kvAnime();
//   }, 4000);
// }

$('#kv').imagesLoaded({background: true}, function() {
  kvAnime();
});

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
