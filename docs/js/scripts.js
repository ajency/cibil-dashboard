//faq
$(".faq-collapse").on("show.bs.collapse", function () {
  console.log($(this).prev().addClass("show"));
});
$(".faq-collapse").on("hide.bs.collapse", function () {
  console.log($(this).prev().removeClass("show"));
});

// video player
var player = videojs("download-now-video", {
  fluid: true
});

$("#video-CTA-modal").on("show.bs.modal", function (e) {
  player.play("muted");
  player.muted(false);
});

$("#video-CTA-modal").on("hide.bs.modal", function (e) {
  player.pause();
  player.play("pause");
  player.muted(true);
});
