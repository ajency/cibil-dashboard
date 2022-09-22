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

// banner cta
$(".banner-cta").each( function(){
  $bannerHeight = $(this).attr("data-height");
  $(this).css("height", $bannerHeight);
});

$(function() {
  if ($(window).width() < 767) {
    // circular usage
    $('.card-usage').easyPieChart({
      size: 64,
      barColor: "#00A6CA",
      scaleLength: 0,
      lineWidth: 4,
      trackColor: "#F1F6FF",
      lineCap: "round",
      animate: 1000,
    });
  } else{
    // circular usage
    $('.card-usage').easyPieChart({
      size: 64,
      barColor: "#00A6CA",
      scaleLength: 0,
      lineWidth: 5.5,
      trackColor: "#F1F6FF",
      lineCap: "round",
      animate: 1000,
    });
  }
});

  /* tooltip */
  $(".tooltip-toggle").each(function(){
    var tooltip_trigger = $(this);
    var tooltipBoxId = tooltip_trigger.next();
    var tooltip_box = $(tooltipBoxId);
    var tooltip_box_arrow = $(".tooltip-box .tooltip-box__wraper:before");
  
    let calculatePosition = () => {
      let topPosition = tooltip_trigger.position().top;
      let leftPosition =  tooltip_trigger.position().left;
      let elHeight = tooltip_trigger.height()*2.2;
      let elWidth = tooltip_trigger.width()*70/100;

      let arrowPosition = (leftPosition);
  
      if ( (leftPosition-elWidth) < 0 ){
        tooltip_box.css({"top":topPosition+elHeight, "left":leftPosition});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: '+ leftPosition +'px;}</style>');
      } else{
        tooltip_box.css({"top":topPosition+elHeight, "left": (leftPosition - elWidth)});
        console.log(arrowPosition);
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right: calc('+ arrowPosition +'px - 100%) !important;}</style>');
      }
    }
  
    let showTooltip = () => {
      tooltip_box.removeClass("hide");
      tooltip_box.addClass("show");
    }
  
    let hideTooltip = () => {
      tooltip_box.removeClass("show");
      tooltip_box.addClass("hide");
    }
  
    tooltip_trigger.mouseover(function(){
      calculatePosition();
      showTooltip();
    });
    tooltip_trigger.mouseout(function(){
      hideTooltip();
    });
  });