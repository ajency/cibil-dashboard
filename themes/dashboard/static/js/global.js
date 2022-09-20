$(function () {
  $(".language-selector").click(function (e) {
    $(".language-selector, .language-list").toggleClass("active");
    if ($(".hamburger").hasClass("opened")) {
      $(".hamburger, .mobile-nav-list").removeClass("opened");
    } else {
      $(".overlay").toggleClass("opened");
    }
  });
  $(".langauge-item").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".language-selector span").text($(this).text());
    setTimeout(function () {
      $(".language-selector, .language-list").removeClass("active");
      $(".overlay").removeClass("opened");
    }, 100);
  });
  $(".hamburger").click(function () {
    $(this).toggleClass("opened");
    if ($(".language-selector").hasClass("active")) {
      $(".language-selector, .language-list").removeClass("active");
    } else {
      $(".overlay").toggleClass("opened");
    }
    $(".mobile-nav-list").toggleClass("opened");
  });
  $(".overview-list .overview-item").click(function (e) {
    e.preventDefault();
    $(".overview-list").toggleClass("opened");
  });

  // animated simulator
  $(".simulator .score-bar").each(function () {
    updateScore(0);
  });
  function updateScore($initialScore) {
    $(".simulator .score-bar").each(function () {
      var $pointer = $(this).find(".score-pointer .pointer-image");
      var $val = $(this).find(".cibil-score");
      var oldperc = parseInt($val.text(), 10);
      var perc = oldperc - 300;
      var $outputPerc = $(".outputPerc");

      $({ p: $initialScore }).animate(
        { p: perc },
        {
          duration: 1000,
          easing: "swing",
          step: function (p) {
            $pointer.css({
              transform:
                "rotate(" + Math.ceil(((p * 100) / 900) * 2.69) + "deg)",
            });
            $val.text((p + 300) | 0);
          },
        }
      );
    });
  }
});
