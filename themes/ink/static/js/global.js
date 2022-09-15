$(function(){
    console.log( "ready!" );
    $('.language-selector').click(function(e){
        $(".language-selector").toggleClass('active')
        $('.language-list').toggleClass('active')
    })
    $('.langauge-item').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(".language-selector span").text($(this).text())
        setTimeout(function(){
            $(".language-selector").removeClass('active')
            $('.language-list').removeClass('active')
        },100)
    })
})