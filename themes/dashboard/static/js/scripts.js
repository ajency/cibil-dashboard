//faq
$(".faq-collapse").on("show.bs.collapse", function () {
  console.log($(this).prev().addClass("show"));
});
$(".faq-collapse").on("hide.bs.collapse", function () {
  console.log($(this).prev().removeClass("show"));
});
