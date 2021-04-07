$(function(){
  var pageTop = $('#pagetop');
  pageTop.css('display','none');
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      pageTop.fadeIn();
    }else{
      pageTop.fadeOut();
    }
  });
  /*pageTop.click(function(){
    $('body, html').animate({scrollTop: 0},500);
    return false;
  })*/

  $('a[href^="#"]').click(function(){
    var speed = 400;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 20;
    $('body, html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


})