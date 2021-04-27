$(function(){
    var setBgArea = $('.bg');
    setBgArea.css({position:'relative'});
 
    $(window).load(function(){
        setBgArea.each(function(){
            var targetObj = $(this),
            thisBgImg = targetObj.css('background-image'),
            imgPass = thisBgImg.match(/\((.+)\)/)[1];
            targetObj.prepend('<img src=' + imgPass + ' alt="" class="bgImg">');
 
            var chdCover = targetObj.find('.bgImg');
 
            chdCover.css({top:'0',left:'50%',position:'absolute',zIndex:'0'}).each(function(){
                var coverImg = $(this),
                baseWidth = coverImg.width(),
                baseHeight = coverImg.height(),
                selfWH = baseWidth / baseHeight;
 
                function setSize(){
                    var wdWidth = setBgArea.width(),
                    wdHeight = setBgArea.height(),
                    rwdHeight = wdWidth / selfWH;
 
                    if(rwdHeight < setBgArea.height()){
                        rwdHeight = setBgArea.height();
                        wdWidth = rwdHeight * selfWH;
                    }
                    coverImg.css({marginLeft:-wdWidth/2,width:wdWidth,height:rwdHeight});
                }
                $(window).resize(function(){setSize();}).resize();
            });
        });
    });
});