$(window).scroll(function () {
  var height = $(window).height() - 60;
  var animationClass = 'is-animation';
  //console.log(height);
  if($(window).scrollTop() > height) {
    $('#header').addClass('scrolled');
    $('#main').addClass('is-animation');
    $('#header h1 a.pc img').attr('src', 'images/logo_scrolled.png');
  } else {
    $('#header').removeClass('scrolled');
    $('#main').removeClass('is-animation');
    $('#header h1 a.pc img').attr('src', 'images/logo.png');
  }
});

$(function() {
  // 初期値
  $(".top-visual-side--scroll p").text('Scroll');

  $(window).on("scroll", function() {
    // Page current
    var elem = $(".elem");
    elem.each(function() {
      var elemOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      if (scrollPos > elemOffset - wh + wh / 2) {
        var secname = $(this).attr("data-secname");
        $(".top-visual-side--scroll p").text(secname);
      } else if (scrollPos < 0) {
        secname = $(this).attr("data-secname");
        $(".top-visual-side--scroll p").text("Scroll");
      } 
    });
  });
  var scroller = {
    target: document.querySelector("#scroll-container"),
    ease: 0.08, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0
  };
});

//pickupのリンク先（スライド）
$(function(){
  $('.slideOpen').on('click', function() {
    var slideContent = $(this).attr('href');
    console.log(slideContent);
    if(slideContent === '#slide01') {
      $('.slide01').animate({'margin-left':'100vw'}, 400).addClass('on');
    } else if (slideContent === '#slide02') {
      $('.slide02').animate({'margin-left':'100vw'}, 400).addClass('on');
    }
    $('#header').addClass('slide');
    $('body').addClass('modal-open');
  });

  $('#header a, .btn_back').on('click', function() {
    if($('.slide01').hasClass('on')) {
      $('.slide01').animate({'margin-left':0}, 400).removeClass('on');
      $('#header').removeClass('slide');
      $('body').removeClass('modal-open');
    }
    if($('.slide02, .btn_back').hasClass('on')) {
      $('.slide02').animate({'margin-left':0}, 400).removeClass('on');
      $('#header').removeClass('slide');
      $('body').removeClass('modal-open');
    }
  });

  // $('.btn_back').on('click', function() {
  //   $('.slide01').animate({'margin-left':0}, 400).removeClass('on');
  //   $('#header').removeClass('slide');
  //   $('body').removeClass('modal-open');
  // });
});

$(function(){
  var posi;
 
  // モーダルウィンドウが開くときの処理
  $(".modalOpen").click(function(){
    //スクロール位置を取得
    posi = $(window).scrollTop();
    var href = $(this).attr("href");
    $(href).fadeIn();
    $('body').addClass('modal-open').css({'top': -posi});
    return false;
  });
   
  // モーダルウィンドウが閉じるときの処理
  $(".modalClose, .overlay").click(function(){
    $(this).parents(".modal").fadeOut();
    $('body').removeClass('modal-open').css({'top': 0});
    $(window).scrollTop(posi);
    return false;
  });  

});

//menu_listの最終行を左揃えにするため空の<li>を挿入
$(function() {
  var $grid = $('#menu_list ul'),
    emptyCells = [],
    i;
// 子パネル (li.cell) の数だけ空の子パネル (li.cell.is-empty) を追加する。
for (i = 0; i < $grid.find('li').length; i++) {
    emptyCells.push($('<li>', { class: 'cell is-empty' }));
}
$grid.append(emptyCells);
});

//ページ内スクロールとヘッダー
$(function(){
    var windowWidth = $(window).width();
    var headerHight = 35; //固定ヘッダー分ページ内のリンク先表示を下げる
    $('a[href^="#"]').on('click', function() {
    var speed = 1000;
    var href= jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-headerHight;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
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


//スマホ時のメニューボタン開閉

$(function() {
  $('#menu_btn').on('click', function() {
    $('#nav').toggleClass('active');
  })
  $('nav ul li a').on('click', function() {
    $('nav').removeClass('active');
  });
});
