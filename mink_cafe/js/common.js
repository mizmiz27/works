$(window).scroll(function () {
  var height = $(window).height() - 40;
  var animationClass = 'is-animation';
  //console.log(height);
  if($(window).scrollTop() > height) {
    $('#header').addClass('scrolled');
    $('#main').addClass('is-animation');
  } else {
    $('#header').removeClass('scrolled');
    $('#main').removeClass('is-animation');
  }
});

$(function() {
  // 初期値
  $(".top-visual-side--scroll p").text('SCROLL');

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
        $(".top-visual-side--scroll p").text("SCROLL");
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