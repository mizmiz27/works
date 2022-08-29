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

$(document).ready(function() {
    loadTop()
    header();
    buttonTop();
    smoothScroll();
    

    $(".shop_search_button").click(function() {
        // 入力チェックを行う。
        const text = $("#search_text input[name='q']").val();
        // フォームを送信する。
        $("#search_text input[name='q']").val(String(text));
        $("#search_text").submit();
        return false;
    });
});