'use strict';

$(function () {

  const mediaQuery = window.matchMedia('(max-width: 767px)');


  // ジャニーズ画像 右クリック禁止
  $('img.guard').on('mousedown touchstart contextmenu', function (event) {
    return false;
  });
  document.body.oncontextmenu = function () { return false; };


  // SP、PC画像切り替え
  const $elem = $('.switch');
  const sp = '_sp.';
  const pc = '_pc.';
  const replaceWidth = 768;

  function imageSwitch() {
    let windowWidth = parseInt($(window).width());
    $elem.each(function () {
      let $this = $(this);
      if (windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }

  $('.hover_img').each(function () {

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

  //OPアニメ
  function opAnime() {
    $('.op_visual .inner').fadeIn(1000);
    $('.op_visual .inner img').delay(3000);
    $('.op_visual .inner img').fadeOut(1000);
    $('.op_visual').delay(4000);
    $('.op_visual').fadeOut(1000);
    if (mediaQuery.matches) {
      setTimeout(function () {
        kvAnime();
      }, 5000);
    } else {
      setTimeout(function () {
        kvAnime();
      }, 4200);
    }
  }

  //KVアニメ
  function kvAnime() {
    $('#kv').addClass('animated');
    $('#shop_info').addClass('animated');
  }

  opAnime();


  function init() {
    // スクロールエフェクト
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
        rootMargin: '-40% 0px -20% 0px',
        threshold: 0
      };
      const observer = new IntersectionObserver(onAnimated, options);

      observer.observe($('#movie .movie_box').get(0));
      observer.observe($('#intro .head_content').get(0));
      observer.observe($('#intro .tab_main.std h1').get(0));
      observer.observe($('#intro .tab_main.cheese h1').get(0));
      observer.observe($('#intro .tab_main.std h2').get(0));
      observer.observe($('#intro .tab_main.cheese h2').get(0));
      observer.observe($('#intro .tab_main.std .pic_1').get(0));
      observer.observe($('#intro .tab_main.std .copy_1').get(0));
      observer.observe($('#intro .tab_main.std .txt_1').get(0));
      observer.observe($('#intro .tab_main.std .copy_2').get(0));
      observer.observe($('#intro .tab_main.std .pic_2').get(0));
      observer.observe($('#intro .tab_main.std .txt_2').get(0));
      observer.observe($('#intro .tab_main.std .pic_3').get(0));
      observer.observe($('#intro .tab_main.cheese .pic_1').get(0));
      observer.observe($('#intro .tab_main.cheese .copy').get(0));
      observer.observe($('#intro .tab_main.cheese .txt').get(0));
      observer.observe($('#intro .tab_main.cheese .pic_2').get(0));
      observer.observe($('#recipe .eyecatch').get(0));
      observer.observe($('#recipe .item').get(0));
      observer.observe($('#recipe .udon').get(0));
      observer.observe($('#message .bg').get(0));
      observer.observe($('#item_info .std').get(0));
      observer.observe($('#item_info .cheese').get(0));
      observer.observe($('#item_info .add_cheese').get(0));
      observer.observe($('#recommend').get(0));
      observer.observe($('#recommend .title').get(0));
      observer.observe($('#recommend .item01').get(0));
      observer.observe($('#recommend .item02').get(0));
      observer.observe($('#recommend .bnr').get(0));
      observer.observe($('#project').get(0));
      observer.observe($('.maru-section').get(0));

      const fadeIns = document.querySelectorAll(".fade_in");

      fadeIns.forEach((fadeIn) => {
        observer.observe(fadeIn);
      });

    }
  }


  //  タブ切り替え
  function tabChange() {
    let btnItem = '.head_content .tab';
    let btnItem2 = '.foot_content .tab';
    let btnItem3 = '.fixed_tab .tab';
    let bodyContent = '.body_content';
    let headerHeight = $('.header').height();

    if (mediaQuery.matches) {

      $(btnItem).each(function () {
        let index = $(btnItem).index(this);
        $(this).attr("data-index", index);
      });

      $(btnItem2).each(function () {
        let index = $(btnItem2).index(this);
        $(this).attr("data-index", index);
      });

      $(btnItem3).each(function () {
        let index = $(btnItem3).index(this);
        $(this).attr("data-index", index);
      });

      $(bodyContent).on('init', function (slick) {
        let index = $('bodyContent .slick-slide.slick-current').attr("data-slick-index");
        $(btnItem + '[data-index="' + index + '"]').addClass("current");
        $(btnItem2 + '[data-index="' + index + '"]').addClass("current");
        $(btnItem3 + '[data-index="' + index + '"]').addClass("current");
      });

      $(bodyContent).not('.slick-initialized').slick({
        arrows: false,
        infinite: false,
        initialSlide: 1,
      });

      $(btnItem).on('click', function () {
        let index = $(this).attr('data-index');
        $(bodyContent).slick('slickGoTo', index, false);
      });

      $(btnItem2).on('click', function () {
        let offsetTop = $('.intro').offset().top - headerHeight + 10;
        if (!$(this).hasClass('current')) {
          $('body,html').animate({
            scrollTop: offsetTop
          }, 500);
        }
        let index = $(this).attr('data-index');
        $(bodyContent).slick('slickGoTo', index, false);
      });

      $(btnItem3).on('click', function () {
        let index = $(this).attr('data-index');
        $(bodyContent).slick('slickGoTo', index, false);
      });

      $(bodyContent).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(btnItem).each(function () {
          $(this).removeClass('current');
        });
        $(btnItem + '[data-index="' + nextSlide + '"]').addClass('current');

        $(btnItem2).each(function () {
          $(this).removeClass('current');
        });
        $(btnItem2 + '[data-index="' + nextSlide + '"]').addClass('current');

        $(btnItem3).each(function () {
          $(this).removeClass('current');
        });
        $(btnItem3 + '[data-index="' + nextSlide + '"]').addClass('current');
      });

      let introHeadHeight = $('.intro .head_content').height();
      let introBodyTop = $('.intro .body_content').offset().top - headerHeight;
      let windowHeight = $(window).height();
      let introFootTop = $('.intro .foot_content').offset().top - windowHeight;
      

      $(window).scroll(function () {
        if ($(window).scrollTop() > introBodyTop) {
          $('.fixed_tab').addClass('active');
        } else {
          $('.fixed_tab').removeClass('active');
        }
  
        if ($(window).scrollTop() > introFootTop) {
          $('.fixed_tab').addClass('disappear');
        } else {
          $('.fixed_tab').removeClass('disappear');
        }
      });

    } else {
      $('.body_content.slick-initialized').slick('unslick');
    }
  }

  $(window).on('load', function () {
    $(function () {
      $('html,body').animate({ scrollTop: 0 },
        function () {
          $('*').not('#kv').removeClass('animated');
          init();
        });
    });
  });

  $(window).on('load resize', function () {
    imageSwitch();
    tabChange();
  });

});

