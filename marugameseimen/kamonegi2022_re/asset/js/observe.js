var option = {
  root: null, //nullでブラウザ画面を対象にする
  rootMargin: "0% 0% -20% 0%", //画面の下から-20%の位置をターゲットと交差する位置に指定
  threshold: 0.2, //指定した要素が画面に20%入るとコールバッイベント発生
};

// 交差した際の処理を記載
var callback = function (entries) {

  entries.forEach(function (entry) {

    if (entry.intersectionRatio > 0.2) { //交差する位置が20%を超えたら…

      var targets = entry.target.getElementsByClassName("obs-target");
      var targetsArray = Array.prototype.slice.call(targets, 0); //配列に変換

      targetsArray.forEach(function (item) {
        var targetClassList = item.classList;

        if (
          targetClassList.contains('fade_side') == true ||
          targetClassList.contains('fade_up') == true ||
          targetClassList.contains('fade_zoom') == true
        ) {
          targetClassList.add("done");
        }

        else if (targetClassList.contains('fade_bounce') == true) {
          var itemChildren = item.children;
          console.log(itemChildren.length);

          for (let i = 0; i < itemChildren.length; i++) {
            setTimeout(function () {
              itemChildren[i].classList.add("done");
            }, i * 80);
          }

        }
      });
      observeres.unobserve(entry.target);
    }
  });
};
var observeres = new IntersectionObserver(callback, option);

var trigger = document.getElementsByClassName("obs-trigger");

for (let i = 0; i < trigger.length; i++) {
  observeres.observe(trigger[i]);
}