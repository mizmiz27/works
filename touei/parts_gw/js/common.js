// スムーススクロール
// ---------------------------------------------

$(function(){
  $('footer a[href^="#"]').on('click', function(){
     var speed = 400;
     var href= $(this).attr('href');
     var target = $(href == '#' || href == '' ? 'html' : href);
     var position = target.offset().top;
     $('body,html').animate({scrollTop:position}, speed, 'swing');
     return false;
  });
});
//====================================================================================================
//                                                 winsize
//====================================================================================================
function chkDWidth(){
 if($(window).innerWidth()>=769){
     $('body').removeClass().addClass('bodypc');		
   }else{
     $('body').removeClass().addClass('bodysp');	
     }
 }

$(window).on('resize',function(){
 chkDWidth();
// closeSpMenu();
 });

chkDWidth();

//====================================================================================================
//                                                 pagetop
//====================================================================================================
$(function(){
 $('a[href^="#top"]').on('click', function(){
   var speed = 400;
   var href= $(this).attr('href');
   var target = $(href == '#top' || href == '' ? 'html' : href);
   var position = target.offset().top;
   return false;
 });
});

//====================================================================================================
//                                                 header
//====================================================================================================
$(function(){
 $('.trigger').click(function(){
     $('header').stop().slideToggle();
     $(this).toggleClass('on');
     return false;
   });
});

var movefun = function( event ){
 event.preventDefault();
}
$('.trigger').click(function(){
   if($(this).hasClass('on')){
   window.removeEventListener( 'touchmove' , movefun, { passive: false } );
   }
 else{
   window.addEventListener( 'touchmove' , movefun , { passive: false } );
 }
});

$(function(){
 $('.idlink').click(function(){
     $('header').stop().slideToggle();
     $('.trigger').removeClass('on');
       // スクロールの速度
       var speed = 400; // ミリ秒
       // アンカーの値取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');

       return false;
   });
});
//====================================================================================================
//                                                 tellink
//====================================================================================================
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
 $(function() {
   $('.tel01').each(function() {
     var str = $(this).html();
     if ($(this).children().is('img')) {
       $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
     } else {
       $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
     }
   });
 });
 $(function() {
   $('.tel02').each(function() {
     var str = $(this).html();
     if ($(this).children().is('img')) {
       $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
     } else {
       $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
     }
   });
 });
 $(function() {
   $('.tel03').each(function() {
     var str = $(this).html();
     if ($(this).children().is('img')) {
       $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
     } else {
       $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
     }
   });
 });
}



//====================================================================================================
//                                                 cms txt
//====================================================================================================
jQuery(function($) {
 $('.sec02 ul p, .sec06 ul p, .news p').each(function() {
   var $target = $(this);

   // オリジナルの文章を取得する
   var html = $target.html();

   // 対象の要素を、高さにautoを指定し非表示で複製する
   var $clone = $target.clone();
   $clone
     .css({
       display: 'none',
       position : 'absolute',
       overflow : 'visible'
     })
     .width($target.width())
     .height('auto');

   // DOMを一旦追加
   $target.after($clone);

   // 文章を入れ替えて、複製した要素を削除する
   $target.html($clone.html());
   $clone.remove();
 });
});
