// $(".toggle-btn").click(()=>{
//     $(".nav-item").slideToggle()
// })
// // JavaScript code with jQuery
// $(document).ready(function() {
//   const navLinks = $('.nav-link');
//   const pages = $('.page');
//   const backButton = $('#back-button');

//   // Hide all pages except the active one
//   function showPage(pageId) {
//     pages.removeClass('active');
//     $('#' + pageId).addClass('active');
//   }

//   // Update the URL and show the corresponding page
//   function navigateTo(url) {
//     const pageId = url === '/' ? 'home' : url.substr(1);
//     history.pushState(null, null, url);
//     showPage(pageId);
//   }

//   // Handle navigation when a link is clicked
//   navLinks.click(function(event) {
//     event.preventDefault();
//     const href = $(this).attr('href');
//     navigateTo(href);
//   });

//   // Handle navigation when the "Previous" button is clicked
//   backButton.click(function() {
//     history.back();
//   });

//   // Handle navigation when the back/forward buttons are used
//   $(window).on('popstate', function() {
//     navigateTo(window.location.pathname);
//   });

//   // Show the initial page based on the current URL
//   navigateTo(window.location.pathname);
// });






let animationStarted = false;

$(window).scroll(function() {
  
  if (!animationStarted) {
    const restSection = $('#content');
    const introSection = $('.first-main');
    restSection.show().animate({
      top: 0,
    }, 1000);
    $('body').css('overflow', 'auto')
    introSection.fadeOut(1000);

    animationStarted = true; 
  }
});


$(document).ready(function() {
  const homeSection = $('.home-ani');
  const homeContainer = $('.first-main');

  $('#candy-1').click(function(){

    // Define a common duration for the animations.
    var duration = 1000;

    // Start the move and fadeOut animations simultaneously.
    $('#candy-1').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-2').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-3').animate({right: '-30%', top: '-200px', opacity: 0}, duration);

    // Once all animations are done, fadeIn the replace-candy-1.
    $('#candy-1, #candy-2, #candy-3').promise().done(function() {
      // Make sure the candies are hidden after animation.
      $(this).hide();
      homeSection.fadeOut(duration)
      $('.replace-candy-1').fadeIn(200);
    });
});

  $('#candy-2').click(function(){
    // Hide the home section and home container
    homeSection.hide();
    homeContainer.hide();

    // Show the replacement section for candy-2
    $('.replace-candy-2').show();
  });

  $('#candy-3').click(function(){
    // Hide the home section and home container
    homeSection.hide();
    homeContainer.hide();

    // Show the replacement section for candy-3
    $('.replace-candy-3').show();
  });
});