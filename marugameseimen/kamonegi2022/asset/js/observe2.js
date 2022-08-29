'use strict';

$(function () {
  let test = $('.promotion .msg');
  console.log(test);
});

function init () {
  function onAnimated(entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
  
      $(entry.target).addClass("animated");
      observer.unobserve(entry.target);
    });
  }

  if (IntersectionObserver !== void 0) {
    const options = {
      root: null,
      rootMargin: '0px 0px -10%',
      threshold: 0.2
    };
    
    const observer = new IntersectionObserver(onAnimated, options);
    
    observer.observe($('.promotion .msg').get(0));
    observer.observe($('.recommend').get(0));
  }
}

window.addEventListener("load", init);
