window.onload = function() {
  Particles.init({
    selector: '.background'
  });

  var particles = Particles.init({
    selector: '.background',
    sizeVariations: 10,
    color: ['#00bbdd', '#404B69', '#DBEDF3'],
    connectParticles: true
  });
};

//ページ内スクロールとヘッダー
$(function(){
  var windowWidth = $(window).width();
  var headerHight = 90; //固定ヘッダー分ページ内のリンク先表示を下げる
  $('a[href^="#"]').on('click', function() {
  var speed = 500;
  var href= jQuery(this).attr("href");
  var target = jQuery(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top-headerHight;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
 });
});

$(window).scroll(function () {
  var height = $(window).height() - 120;
  // var animationClass = 'is-animation';
  if($(window).scrollTop() > height) {
    $('#header').addClass('scrolled');
  } else {
    $('#header').removeClass('scrolled');
  }
});


//menu_listの最終行を左揃えにするため空の<li>を挿入
$(function() {
  var $grid = $('#design ul'),
    emptyCells = [],
    i;
// 子パネル (li.cell) の数だけ空の子パネル (li.cell.is-empty) を追加する。
for (i = 0; i < $grid.find('li').length; i++) {
    emptyCells.push($('<li>', { class: 'cell is-empty' }));
}
$grid.append(emptyCells);
});


//モーダル

$(function(){

  $('.modal').append('<a class="modalClose" href=""><i class="fas fa-times"></i></a>');
  
  var posi;
 
  // モーダルウィンドウが開くときの処理
  $(".modalOpen").click(function(){
    $('.modal').prepend('<div class="overlay"></div>');
    //スクロール位置を取得
    posi = $(window).scrollTop();
    var href = $(this).attr("href");
    $(href).fadeIn();
    $('body').addClass('modal-open').css({'top': -posi});
    return false;
  });
   
  // モーダルウィンドウが閉じるときの処理
  $('body').on('click', '.modalClose, .overlay', function(){
    $(this).parents(".modal").fadeOut();
    $('.overlay').remove();
    $('body').removeClass('modal-open').css({'top': 0});
    $(window).scrollTop(posi);
    return false;
  });  

});


//ドロワーメニュー
$(function() {
  $('#menu_btn').on('click', function() {
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('#header nav').removeClass('open');
    } else {
      $(this).addClass('active');
      $('#header nav').addClass('open');
    }
  });

  $('#header nav ul li a').on('click', function() {
    if($('#header nav').hasClass('open')) {
      $('#header nav').removeClass('open');
      $('#menu_btn').removeClass('active');
    }
  });
});