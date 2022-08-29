// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// OPモーダル動画（自動再生）
function onYouTubeIframeAPIReady() {
	ytPlayer = new YT.Player(
		'op_player', // 埋め込む場所の指定
		{
			width: 640, // プレーヤーの幅
			height: 390, // プレーヤーの高さ
			videoId: 'laV3YRYJ2Ic', // YouTubeのID
      playerVars: {
        autoplay: 1, // 自動再生の設定
        playsinline: 1
      },
			// イベントの設定
			events: {
				'onReady': onPlayerReady, // プレーヤーの準備ができたときに実行
				'onStateChange': onPlayerStateChange // プレーヤーの状態が変更されたときに実行
			}
		}
	);
}


// OPモーダル動画のプレーヤーの状態が変更されたとき
function onPlayerStateChange(event) {
	// 現在のプレーヤーの状態を取得
	var ytStatus = event.data;
	// 再生終了したとき
	if (ytStatus == YT.PlayerState.ENDED) {
    donePlaying(opAnime);
	}
}

var $modal = $('.op_modal');
var $overlay = $('.op_modal .op_overlay');
var $player = $('#op_player');
// var $tempSrc = $modal.find('iframe').attr('src');
const frameBox = document.querySelector('.frame_box');

function donePlaying(callback) {
  // $modal.add($overlay).fadeOut();
  $modal.fadeOut();
  callback();
}

function closeModal(callback) {
  $modal.on('click', function() {
    $modal.fadeOut();
    frameBox.removeChild(frameBox.firstElementChild);
    callback();
  });
}

function openModal() {
  $('.open_modal').on('click', function() {
    let tag = document.createElement('div');
    tag.id = 'op_player';
    frameBox.appendChild(tag);
    onYouTubeIframeAPIReady();
    $modal.add($overlay).fadeIn();
  });
}

closeModal(opAnime);
openModal();



//Cookie取得
var checkCookie = document.cookie;

//Cookie内に【XXX】という文字列があるかないか判定。
if(checkCookie.match("XXX")){
  /* =====================================
    2回目の訪問したときの処理（オープニング動画を再生しない）
  ========================================*/
  
  console.log("2回目");
  frameBox.removeChild(frameBox.firstElementChild);
  $modal.add($overlay).css({display: 'none'});
  
  function onPlayerReady(event) {
    // 動画再生
    event.target.mute();
  }
  opAnime();

}else{
  //Domain名取得
  var domain = document.domain;
  //Cookieの内容を格納
  var visitorCookie = "visitorCookie=XXX; max-age=100; domain="+domain+"; path=/;"
  //Cookieに書き込み
  document.cookie = visitorCookie;
  /* =====================================
    1回目の訪問したときの処理（オープニング動画を再生する）
  ========================================*/
  
  console.log("1回目");
  $modal.add($overlay).css({display: 'flex'});
  function onPlayerReady(event) {
    // 動画再生
    event.target.mute();
    event.target.playVideo();
  }
}


{
  // CM動画モーダル
  let scrollPosition;
  const $umekomiMv = $('#umekomi_mv');
  const initIframeSrc = $umekomiMv.attr('src');
  
  $('.cm_modal_open').on('click', function(){
    $umekomiMv.attr('src', '');
    $('#vimeoPlayer').attr('src', 'https://www.youtube.com/embed/' + $(this).data('videoId') + '?rel=0&playsinline=1&wmode=transparent&loop=1&playlist=' + $(this).data('videoId'));
    
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollPosition});
    $('.cm_modal').fadeIn();
    return false;
  });
  
  $('.cm_modal_close').on('click', function(){
    $('body').removeClass('fixed');
    window.scrollTo( 0 , scrollPosition );
    $(this).parent().find('iframe').attr('src', '');
    $umekomiMv.attr('src', initIframeSrc);
    $('.cm_modal').fadeOut();
    return false;
  });
}