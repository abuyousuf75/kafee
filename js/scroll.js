
$(function(){

    /// Bottom-Top

$('.back-top-btn').click(function(){

    $('body,html').animate({scrollTop:0},1000);

});

//New Navbar Add
    $(window).scroll(function(){

        var scroll =$(this).scrollTop();
        if(scroll>200){
            $('.navbar').addClass('nav-new');
        }else{
            $('.navbar').removeClass('nav-new');
        };
        if(scroll>200){
            $('.back-top-btn').fadeIn(500);
        }else{
            $('.back-top-btn').fadeOut(500);
        };
    });


//Smoth Scroll 
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top -100
            }, 1500);
            return false;
        }
    }
});

});