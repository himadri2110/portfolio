$('.burger').click(function(e) {
    e.preventDefault();

    $('.burger').toggleClass('toggle');
    $('.nav-links a').toggleClass('active');
});

$('.burger, .nav-links a').click(function(e) {
    e.preventDefault();

    $('body').toggleClass('no-overflow');
    $('.nav-links').toggleClass('open');
});

function jumpToDiv(div) {
    
    if(div == 'home') {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    } else if(div == 'about') {
        $('html, body').animate({
            scrollTop: $('.about-section').offset().top
        }, 'slow');
    } else if(div == 'project') {
        $('html, body').animate({
            scrollTop: $('.project-section').offset().top
        }, 'slow');
    } else if(div == 'blog') {
        $('html, body').animate({
            scrollTop: $('.blog-section').offset().top
        }, 'slow');
    } else if(div == 'contact') {
        $('html, body').animate({
            scrollTop: $('.contact-section').offset().top
        }, 'slow');
    }
}