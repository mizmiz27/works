// JavaScript Document

/*jQueryAutoHeight.js（2カラムの高さを揃えるプラグイン）*/
$(function(){
  $('#bnrlink a').autoHeight({column:2,clear:1,height:'height'});
  $('#vd #service ul.btn').autoHeight({column:2,clear:1,height:'height'});
  $('#vd #service .content p.caption').autoHeight({column:2,clear:1,height:'height'});
	$('#service .inner').autoHeight({column:2,clear:1});
});


/*スムーズスクロール*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

/*最新情報エリア（お知らせが1つも無い場合は、エリアごと非表示）*/
$(function(){
  if($('div#news ul li').length === 0){
    $('div#news').remove();
  }
})