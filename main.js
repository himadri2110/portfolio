// $('.burger').click(function(e) {
//     e.preventDefault();

//     $('.burger').toggleClass('toggle');
//     $('.nav-links a').toggleClass('active');
// });

// $('.burger, .nav-links a').click(function(e) {
//     e.preventDefault();

//     $('body').toggleClass('no-overflow');
//     $('.nav-links').toggleClass('open');
// });

function jumpToDiv(div) {
  // if(div == 'home') {
  //     $('html, body').animate({
  //         scrollTop: 0
  //     }, 'slow');
  // } else if(div == 'about') {
  //     $('html, body').animate({
  //         scrollTop: $('.about-section').offset().top
  //     }, 'slow');
  // } else if(div == 'project') {
  //     $('html, body').animate({
  //         scrollTop: $('.project-section').offset().top
  //     }, 'slow');
  // } else if(div == 'blog') {
  //     $('html, body').animate({
  //         scrollTop: $('.blog-section').offset().top
  //     }, 'slow');
  // } else
  if (div == "contact") {
    $("html, body").animate(
      {
        scrollTop: $(".contact-section").offset().top,
      },
      "slow"
    );
  }
}

// Scroll to Top Functionality
const scrollButton = document.querySelector(".scroll-to-top");

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
