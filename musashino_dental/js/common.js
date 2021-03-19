window.onload = function() {

//ヘッダーコンテンツ
var header = document.getElementById('global-head');
header.innerHTML = '<div id="logo"><a href="index.html"><img src="images/logo.jpg"></a></div>'+
'<div id="logo_sp"><a href="index.html"><img src="images/logo_m.png"></a></div>'+
'<div id="menu_btn">'+
'<div class="menu_btn_box">'+
'<span></span>'+
'<span></span>'+
'<span></span>'+
'</div>'+
'</div>'+
'<nav id="global-nav_sp">'+
'<ul>'+
'<li><a href="index.html#catchcopy">当院について</a></li>'+
'<li><a href="index.html#category">診療科目</a></li>'+
'<li><a href="price.html">料金表</a></li>'+
'<li><a href="access.html#access">アクセス</a></li>'+
'<li><a href="access.html#hours">診療時間</a></li>'+
'</ul>'+
'</nav>'

//メニューボタン
$('#menu_btn').click(function (){
  $('#global-nav_sp').slideToggle();
})

//グローバルメニューコンテンツ
var sidebar = document.getElementById('sidebar');
sidebar.innerHTML = '<nav id="global-nav">'+
'<ul>'+
'<li><a href="index.html#catchcopy">当院について</a></li>'+
'<li><a href="index.html#category">診療科目</a></li>'+
// '<li><a href="#">設備紹介</a></li>'+
'<li><a href="price.html">料金表</a></li>'+
'<li><a href="access.html#access">アクセス</a></li>'+
'<li><a href="access.html#hours">診療時間</a></li>'+
'</ul>'+
'</nav>'+
'<div id="cal0" class="cal_wrapper"></div>'
// '<script src="js/cal.js"></script>'


//フッターコンテンツ
  var footer = document.getElementsByTagName('footer');
footer[0].innerHTML = '<div class="footer_logo">'+
'<img src="./images/logo_m.png">'+
'<p>'+
'<span class="sp_block">〒180-0023</span><span class="sp_block">武蔵野市境南町2-3-6 イトーヨーカドー武蔵境店 西館 B1F</span><br>'+
'<span class="sp_block"><a href="tel:03-6265-6500" class="tel no_text">TEL 0422-26-4618</a></span>　　<span class="sp_block">FAX 0422-26-4619</span>'+
'</p>'+
'<p class="tpl-footer_copyright"><small>Copyright(C) <script type="text/javascript">document.write(new Date().getFullYear());</script> Musashino Dental Clinic All rights reserved.</small></p>'+
'</div>';

//cal.jsを読み込む
var el = document.createElement('script');
el.src ='js/cal.js';
document.body.appendChild(el);
};
