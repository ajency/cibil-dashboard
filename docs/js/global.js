$(function(){
    console.log( "ready!" );
    $('.language-selector').click(function(e){
        $(".language-selector, .language-list").toggleClass('active')
        if($('.hamburger').hasClass('opened')){
            $('.hamburger, .mobile-nav-list').removeClass('opened')
        }
        else{
            $('.overlay').toggleClass('opened')
        }
    })
    $('.langauge-item').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(".language-selector span").text($(this).text())
        setTimeout(function(){
            $(".language-selector, .language-list").removeClass('active')
            $('.overlay').removeClass('opened')
        },100)
    })
    $('.hamburger').click(function(){
        $(this).toggleClass('opened');
        if($('.language-selector').hasClass('active')){
            $(".language-selector, .language-list").removeClass('active')
        }
        else{
            $('.overlay').toggleClass('opened')
        }
        $('.mobile-nav-list').toggleClass('opened');
    })
    $('.overview-list .overview-item').click(function(e){
        e.preventDefault();
        $('.overview-list').toggleClass('opened')
    })
})