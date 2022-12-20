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

  window.addEventListener("DOMContentLoaded", () => {
  imageSwitch();
  });

  window.addEventListener('resize', () => {
  imageSwitch();
  });

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


//inview
// $('.target, .fadeup').on('inview', function () {
//   $(this).addClass('animated');
// });

// intersection observer
const targets = document.querySelectorAll(".target");
const fadeups = document.querySelectorAll(".fadeup");
const fadeToLefts = document.querySelectorAll(".fade-to-left");
const fadeToRights = document.querySelectorAll(".fade-to-right");

const options = {
  root: null,
  rootMargin: '0px 0px -20% 0px',
  threshold: 0,
};

const observer = new IntersectionObserver(onAnimated, options);
targets.forEach((target) => {
  observer.observe(target);
});
fadeups.forEach((fadeup) => {
  observer.observe(fadeup);
});
fadeToLefts.forEach((fadeToLeft) => {
  observer.observe(fadeToLeft);
});
fadeToRights.forEach((fadeToRight) => {
  observer.observe(fadeToRight);
});

function onAnimated(entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }

    $(entry.target).addClass("animated");
    observer.unobserve(entry.target);
  });
}