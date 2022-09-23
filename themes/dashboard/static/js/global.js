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
  $(".overview-list.overview-toggle .overview-item").click(function (e) {
    e.preventDefault();
    $(".overview-list").toggleClass("opened");
  });

  // animated simulator
  $(".simulator:not(.empty-simulator) .score-bar").each(function () {
    updateScore(0);
  });
  function updateScore($initialScore) {
    $(".simulator:not(.empty-simulator) .score-bar").each(function () {
      var $pointer = $(this).find(".score-pointer .pointer-image");
      var $val = $(this).find(".cibil-score");

      /* console.log($val.text()); */

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
    
  // $('.custom-select-input').click(function(){
  //     $(this).toggleClass('opened')
  // })
  // $('.custom-select-options span').click(function(){
  //     $(this).siblings().removeClass("selected")
  //     $(this).addClass('selected')
  //     $(this).parents('.custom-select-input').find('.custom-select-value').text($(this).text())
  //     $('#loantype').val($(this).text())
  // })
  $('.report-nav-link').click(function(){
    $('.report-nav-link').removeClass('active');
    $(this).addClass('active');
    $('.report-content .tab-panel').removeClass('active');
    $($(this).data('target')).addClass('active')
    $('.custom-select-options span').removeClass("selected");
    let selectElement = $('.custom-select-options span[data-target="'+$(this).data('target')+'"]')
    selectElement.addClass('selected')
    $('#report-select-value').html(selectElement.html())
  })
})
function customSelectInput(element){
  $(element).toggleClass('opened')
}
function customSelectOption(element){
  $(element).siblings().removeClass("selected")
  $(element).addClass('selected')
  $(element).parents('.custom-select-input').find('.custom-select-value').text($(element).text())
  $('#loantype').val($(element).text())
}
function customSelectTab(element){
  $(element).siblings().removeClass("selected")
  $(element).addClass('selected')
  $(element).parents('.custom-select-input').find('.custom-select-value').html($(element).html())
  $('.report-content .tab-panel').removeClass('active');
  $($(element).data('target')).addClass('active');
  $('.report-nav-link').removeClass('active');
  $('.report-nav-link[data-target="'+$(element).data('target')+'"]').addClass('active');
}
function closeScenario(element){
    let parentElement = $(element).parents('.scenario')
    let optionValue = parentElement.find('.option-card:visible').attr('type')
    let value = $('#optionsAdded').val();
    $('#optionsAdded').val(value.replace(optionValue+",",""));
    parentElement.addClass('blank')
    parentElement.find('.scenario-options').show()
    parentElement.find('.option-card').remove()
    parentElement.removeClass('closed')
    $(element).parents('.scenario-list').addClass('hasBlank');
}
function minimizeScenario(element){
    let parentElement = $(element).parents('.scenario')
    parentElement.toggleClass('closed')
}
function chooseAccount(element){
    let parentElement = $(element).parents('.options-container')
    if(parentElement.find('[name=chooseAccountRadio]:checked').val() == 'chooseaccount'){
        parentElement.find('.chooseAccount-wrapper').addClass('active')
    }
    else{
        parentElement.find('.chooseAccount-wrapper').removeClass('active')
    }
}

function showAllEnquiries(element){
  $(element).parent().toggleClass('expanded')
}