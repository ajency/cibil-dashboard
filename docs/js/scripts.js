//faq
$(".faq-collapse").on("show.bs.collapse", function () {
  $(this).prev().addClass("show");
});
$(".faq-collapse").on("hide.bs.collapse", function () {
  $(this).prev().removeClass("show");
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

      let windowWidth = $( document ).width();
      let arrowPosition = (windowWidth - leftPosition)- 45;
  
      if ( (leftPosition-elWidth) < 0 ){
        tooltip_box.css({"top":topPosition+elHeight, "left":leftPosition});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: '+ leftPosition +'px;}</style>');
      } else{
        tooltip_box.css({"top":topPosition+elHeight, "left": (leftPosition - elWidth)});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:'+ arrowPosition +'px !important;}</style>');
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

//our partners slider
$(".partners").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnHover: true,
  accesibility: false,
  draggable: false,
  swipe: false,
  touchMove: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        
      },
    },
  ],
});

//account summary slider
function enableAccountSlider(){
  let targetSlide = 1;
  if(location.hash){
    targetSlide = location.hash.split("_")[1];
  }
  $(".account-summary-slider").slick({
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: targetSlide - 1,
    responsive: [
      {
        breakpoint: 576,
        settings:{
          speed: 600
        }
      }
    ]
  });
}

function disableAccountSlider(){
  $(".account-summary-slider").slick('unslick')
}

//account summary
$(".account-collapse").on("show.bs.collapse", function () {
  $(this).prev().addClass("show");
});
$(".account-collapse").on("hide.bs.collapse", function () {
  $(this).prev().removeClass("show");
});

// tabs redirect
var hash = location.hash.replace(/^#/, '').split('_')[0];
$tabsParent =  $(".reportTabs");
$panelParent = $(".report-content .tab-content");
if (hash) {
    $tabsParent.find(".report-nav-item button").removeClass("active");
    $('.report-nav-item button[data-target="#' + hash + '"]').addClass("active");
    $panelParent.find(".tab-panel").removeClass("active");
    $('.tab-panel[id="' + hash + '"]').addClass("active");
    //checkAccountVisibility();
}

//tooltip funciton
function addTooltip(){
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

      let windowWidth = $( document ).width();
      let arrowPosition = (windowWidth - leftPosition)- 45;

      if ( (leftPosition-elWidth) < 0 ){
        tooltip_box.css({"top":topPosition+elHeight, "left":leftPosition});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{left: '+ leftPosition +'px;}</style>');
      } else{
        tooltip_box.css({"top":topPosition+elHeight, "left": (leftPosition - elWidth)});
        $('head').append('<style>.tooltip-box .tooltip-box__wraper:before{right:'+ arrowPosition +'px !important;}</style>');
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
  })
};

//revert bar
$(".revert-bar .close-button").click( function(){
  $(this).parents().eq(1).hide("fast");
});

$(".reset-field").next("input").on('keyup change', function(){
    $(this).prev(".reset-field").show("fast");
    if ($(this).val() == ''){
      $(this).prev(".reset-field").hide("fast");
    }
});

// coupon code form
$(".reset-field").click(function(){
  $(this).next("input").val('');
  $(this).hide("fast");
});

$(".CouponFormToggle").click(function(){
  let couponPopup = $("#"+$(this).attr("popup-link"));

  let planPrice = couponPopup.find(".plan-price-ammount .ammount").text();
  let disountedPrice = couponPopup.find(".coupon-discount .discount-ammount").text();

  let subtotalVal = parseInt(planPrice) ;

  if(disountedPrice){
    subtotalVal = parseInt(planPrice)-parseInt(disountedPrice) ;
  }
  couponPopup.find(".subtotal .subtotal-ammount").text(subtotalVal);
});

function howItWorks(){
  
  introJs().setOptions({
    doneLabel: 'TAKE ME TO MY DASHBOARD',
    nextLabel: 'Next',
    hidePrev: true,
    showStepNumbers: true,
    showBullets: true,
    showProgress: false,
    steps: [
      {
        element: document.querySelector('.simulator-section'),
        intro: 'Your CIBIL Score and last refresh status',
        position: 'right'
      },
      {
        element: document.querySelector('.key-highlights'),
        intro: 'Factors affecting your CIBIL Score'
      },
      {
        element: document.querySelector('.nav-list'),
        intro: 'Explore all available CIBIL features'
      },
      {
        element: document.querySelector('.report-cta'),
        intro: 'View & download your CIBIL Report'
      }
    ]
  })
  .onchange(function (targetElement) {
    let stepNo = $('.introjs-helperNumberLayer').text();
    $('.steps .stepNumber').text(parseInt(stepNo)+1);
  })
  .start();
  let totalSteps = $('.introjs-bullets ul').children().length;
  let stepNumber = $('.introjs-helperNumberLayer').text();
    $(".introjs-tooltip").prepend('<p class="steps"><span class="stepNumber">'+stepNumber+'</span><span class="totalSteps">/'+totalSteps+'</span></p>');
}