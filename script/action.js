$('nav a').click(function(){
    $('.mo_menu').toggle(); 
    $('.hamburger').toggleClass('on'); 
});

let rankT = parseInt($('.ranking').css('top'))
let chatT = parseInt($('.chat').css('bottom'))

$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let winH = $(window).height(); 
    let docH = $(document).height();
    let scrollBottom = docH - (scrT + winH);

    
    $('header').css({top: scrT})

    $('.ranking').css({top: scrT + rankT})
    $('.chat').css({bottom:scrollBottom + chatT})
    
    $('.bottom_menu').css({bottom:scrollBottom})
})
