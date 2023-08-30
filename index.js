$(".toggle-btn").click(()=>{
    $(".nav-item").slideToggle()
})

$(document).ready(function() {
  $(".nav-link").on("click", function(e) {
      e.preventDefault();
      
      let href = $(this).attr("href").substring(1); // Removing the '#' from the href

      // Hide all content sections
      $("#home-content, #about-content, #contact-content").hide();

      // Update browser history
      history.pushState({}, "", href);

      // Show the appropriate content
      switch(href) {
          case '/':
              $(".home-ani").show();
              break;
          case '/about':
              $(".about-container").show();
              break;
          case '/contact':
              $(".contact-container").show();
              break;
          default:
              $(".home-ani").show();
      }
  });

  // Handle browser back and forward buttons
  $(window).on('popstate', function() {
      let currentPath = location.pathname;
      
      $(".nav-link").each(function() {
          if ($(this).attr("href").substring(1) === currentPath) {
              $(this).click();
          }
      });
  });
});





let animationStarted = false;

$(window).scroll(function() {
  
  if (!animationStarted) {
    const restSection = $('#content');
    const introSection = $('.first-main');
    restSection.show().animate({
      top: '20px',
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