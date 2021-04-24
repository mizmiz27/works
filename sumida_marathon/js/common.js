$windowWidth = window.innerWidth;

$breakPointA = 480;
$breakPointB = 768;
$breakPointC = 1024;

isMobileSize = ($windowWidth < $breakPointA);
isTabletSize = ($windowWidth <= $breakPointB) && ($windowWidth > $breakPointA);
isIpadproSize = ($windowWidth <= $breakPointC) && ($windowWidth > $breakPointB);
isPcSize = ($windowWidth > $breakPointC);


//タブレット以下のサイズのヘッダーロゴ

$(function() {
  if(isMobileSize || isTabletSize || isIpadproSize) {
    $('#header h1 a.pc img').attr('src', 'img/top/logo_scrolled.png');
  }
});


//タブレット以下のサイズのキービジュアルのground
$(function() {
  if(isMobileSize || isTabletSize || isIpadproSize) {
    $('.img_ground').attr('src', 'img/top/key_visual/ground_sp.png');
  }
});


//キービジュアルのアニメーション

function ani1() {
  $('.img_man').addClass('animated bounceIn');
}
function ani2() {
  $('.img_woman').addClass('animated bounceIn');
}
function ani3() {
  $('.img_title').addClass('animated bounceIn2');
}
function ani4() {
  $('.img_entry').addClass('animated bounceIn3');
}
function ani5() {
  $('.img_date').addClass('animated bounceIn');
}


//ナビゲーションメニュー（PC）のホバー時の挙動

$(function() {
  $('header nav ul li a').on({
    'mouseenter': function() {
      var img = $(this).find('img');
      var src = img.attr('src').replace('off', 'on');
      img.attr('src', src);
    },
    'mouseleave': function() {
      var img = $(this).find('img');
      var src = img.attr('src').replace('on', 'off');
      img.attr('src', src);
    }
  });
});

//スクロール時

if(isPcSize) {
  $(window).scroll(function () {
    var height = 90;
    if($(window).scrollTop() > height) {
      $('#header').addClass('scrolled');
      $('.openbtn').addClass('fadeDown');
      $('#header h1 a.pc img').attr('src', 'img/top/logo_scrolled.png');
    } else {
      $('#header').removeClass('scrolled');
      $('.openbtn').removeClass('fadeDown');
      $('#header h1 a.pc img').attr('src', 'img/top/logo.png');
    }
  });
}

//ハンバーガーボタンをクリックした際のアニメーションの設定
$(function() {
  $('.openbtn').on('click', function() {
    $(this).toggleClass('active');
    $('.menu_sp').toggleClass('active');
  });
});


//ページ上部へ戻るスクロール
$(function() {
  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 20;
    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


//ScrollReveal（フェードイン）
$(function(){
  var optionLeft = {
    duration: 1600,
    origin: 'left',
    distance: '50px',
    mobile: false,
    reset: true
  };

  var optionRight = {
    duration: 1600,
    origin: 'right',
    distance: '50px',
    mobile: false,
    reset: true
  };

  var optionTop = {
    duration: 1600,
    origin: 'top',
    distance: '50px',
    mobile: false,
    reset: true
  };

  var optionNormal = {
    duration: 1600,
    mobile: false,
    reset: false
  };

  var optionDelay01 = {
    duration: 1600,
    delay: 300,
    mobile: false,
    reset: false
  };

  var optionDelay02 = {
    duration: 1600,
    delay: 600,
    mobile: false,
    reset: false
  };

  var optionDelay03 = {
    duration: 1600,
    delay: 900,
    mobile: false,
    reset: false
  };

  ScrollReveal().reveal('.option_right', optionRight);
  ScrollReveal().reveal('.option_left', optionLeft);
  ScrollReveal().reveal('.option_top', optionTop);
  ScrollReveal().reveal('.option_normal', optionNormal);
  ScrollReveal().reveal('.option_delay01', optionDelay01);
  ScrollReveal().reveal('.option_delay02', optionDelay02);
  ScrollReveal().reveal('.option_delay03', optionDelay03);

});

