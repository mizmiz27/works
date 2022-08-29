let screenHeight = $(window).height();
let screenWidth = $(window).width();
const backtop = '.backtop';

$(window).on( "load resize orientationchange", function() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    if (screenWidth > screenHeight) {
        $('.nav').addClass('autoHeight');
    } else {
        $('.nav').removeClass('autoHeight');
    }
});

function header(){
    screenWidth = $(window).width();
    $('.nav_icon').on('click', function() {
        $('.nav').toggleClass('fixHeight');
        $(this).toggleClass('open');
        $('html,body').toggleClass('overflow');
    });

    if (screenWidth >= 768) {
        $(".nav_item").mouseover(function() {
            $(this).addClass('active');
        }).mouseleave(function() {
            $(this).removeClass('active');
        });
    }
}

function buttonTop() {
    $(window).scroll(function() {
        screenWidth = $(window).width();
        const position = $('.footer').height();

        if ($(document).scrollTop() > 100) {
          $(backtop).css({'opacity':'1', 'visibility':'visible'});
        }
        else {
          $(backtop).css({'opacity':'0', 'visibility':'hidden'});
        }

        if ($(window).scrollTop() + $(window).height() > $(document).height() - position) {
          if (screenWidth >= 1025)  {
            $(backtop).css({'position':'absolute', 'top':'-38px', 'bottom':'auto'});
          }
          else if (screenWidth < 1025)  {
            $(backtop).css({'position':'absolute', 'top':'-6vw', 'bottom':'auto'});
          }
        }

        else {
          $(backtop).css({'position':'fixed', 'top':'auto', 'bottom':'20px'});
        }
    });
}

function smoothScroll() {
  $('a[href^="#"]').on("click", function(e){
    const h = $(this).attr("href");
    const t = $(h == "#" || h === "" ? 'body' : h);
    const p = t.offset().top;
    $("html, body").animate({
      "scrollTop" : p
    },500);
    e.preventDefault();
    return false;
  });
}
function loadTop() {
    if(window.location.hash) {
    } else {
        if (screenWidth >= 768) {
            $(document).scrollTop(0);
        }
    }
}

function newsAccordion() {
    $('body').on("click", ".big-title", function() {
        if($(this).parent().hasClass("is-open")){
            var self = $(this);
            $(this).next().slideUp(400);
            setTimeout(function() {
                self.parent().removeClass("is-open");
            }, 400);
            
        }
        else{
            $(this).find(".ico_hexagon").toggleClass("active");
            $(this).next().slideToggle(400);
        }
        
    });
    $('body').on("click", ".medium-title", function() {
        $(this).find(".ico_hexagon").toggleClass("active");
        $(this).next().slideToggle(400);
    });
}

$(document).ready(function() {
    loadTop()
    header();
    buttonTop();
    smoothScroll();
    newsAccordion();
    

    $(".shop_search_button").click(function() {
        // 蜈･蜉帙メ繧ｧ繝�け繧定｡後≧縲�
        const text = $("#search_text input[name='q']").val();
        // 繝輔か繝ｼ繝�繧帝∽ｿ｡縺吶ｋ縲�
        $("#search_text input[name='q']").val(String(text));
        $("#search_text").submit();
        return false;
    });
    // $(function(){
    // 	var player =  player || {};

    // 	player.YOUTUBE = {
    // 		init : function(){
    // 			this.setParameters();
    // 			this.prepare();
    // 		},
    // 		setParameters : function(){
    // 			this.playerContainer = [];
    // 			this.players = document.querySelectorAll('.player');
    // 		},
    // 		prepare : function(){
    // 			this.addAPI();
    // 			this.setId();
    // 			this.changePath();
    // 			window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;
    // 		},
    // 		addAPI : function(){
    // 			var tag = document.createElement('script');
    // 			tag.src = "https://www.youtube.com/iframe_api";
    // 			var firstScriptTag = document.getElementsByTagName('script')[0];
    // 			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // 		},
    // 		setId : function(){
    // 			for (var i = 0; i < this.players.length; i++) {
    // 				this.players[i].id = 'player' + i;
    // 			}
    // 		},
    // 		//縲植A險域ｸｬ逕ｨ縲大�逕滄幕蟋句虚逕ｻID繧剃ｻ倅ｸ弱☆繧九◆繧√�隕∫ｴ�霑ｽ蜉�
    // 		addDiv : $(function(){
    // 			var newDiv = document.createElement('div');
    // 			newDiv.id = "playVideo"
    // 			var footer = document.getElementsByClassName("footer")[0];
    // 			footer.appendChild(newDiv);
    // 		}),
    // 		onYouTubeIframeAPIReady : function(){
    // 			for (var i = 0; i < this.players.length; i++) {
    // 				this.playerContainer[i] = new YT.Player('player' + i, {
    // 					height: null,
    // 					width: null,
    // 					done : false,
    // 					videoId: this.players[i].getAttribute('data-video'),
    // 					playerVars: {
    // 						rel: 0,
    // 						showinfo: 0,
    // 						wmode: 'transparent',
    // 						iv_load_policy: 3
    // 					},
    // 					events: {
    // 						'onStateChange': this.onPlayerStateChange
    // 					}
    // 				});
    // 			}
    // 			for (var i = 0; i < this.players.length; i++) {
    // 				this.playerContainer[i].customOpt = {
    // 					index : i,
    // 					done : false
    // 				};
    // 			}
    // 		},
    // 		onPlayerReady : function(event){
    // 			event.target.playVideo();
    // 		},
    // 		onPlayerStateChange : function(event){
    // 			var _self = this;
    // 			if (event.data == YT.PlayerState.PLAYING && !event.target.customOpt.done) {
    // 				//縲植A險域ｸｬ逕ｨ縲大�逕滄幕蟋九＠縺溷虚逕ｻID繧壇ata螻樊ｧ縺ｫ莉倅ｸ�&DirectCallRule繧ｿ繧ｰ
    // 				var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    // 				var match = event.target.getVideoUrl().match(regExp);
    // 				var videoID = match[2];
    // 				var q = document.getElementById("playVideo");
    // 					q.setAttribute("data-video",videoID);
    // 					_satellite.track('Movie');
    // 			}
    // 		},
    // 		stopVideo : function(event){
    // 			event.target.stopVideo();
    // 		},
    // 		changePath : function(){
    // 			this.onPlayerReady = this.onPlayerReady.bind(this);
    // 			this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    // 			this.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady.bind(this);
    // 		}
    // 	};
    // 	player.YOUTUBE.init();
    // });

});