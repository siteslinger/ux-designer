$(".toggle-btn").click(()=>{
    $(".nav-item").slideToggle()
})
$(".nav-link").click(function() {
  if ($(window).width() <= 768) {  // Check if it's a mobile screen, adjust the value as per your requirement
      $(".nav-item").slideUp();
  }
});
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {  // Adjust the value based on when you want the color to change
      $('.inside-nav').css({
          backgroundColor: "#fff"
      });
  } else {
      $('.inside-nav').css({
          backgroundColor: "#000"  // Black color when scrolled to the top or original position
      });
  }
});
$(document).ready(function() {
  $(".nav-link").on("click", function(e) {
      e.preventDefault();
      
      let href = $(this).attr("href").substring(1); // Removing the '#' from the href
      $("#home-content, #about-content, #contact-content").hide();
      // Update browser history
      history.pushState({}, "", href);

      // Show the appropriate content
      switch(href) {
          case '/':
              $(".home-ani").show();
              $('.replace-candy-1, .replace-candy-2, .replace-candy-3').hide()
              $('.about-container').hide()
              $('.contact-container').hide()
              $('#candy-1, #candy-2, #candy-3').css({
                opacity: '1',
                display: 'block',
                left : 0,
                top: 0
            });
              break;
          case '/about':
            $('.replace-candy-1, .replace-candy-2, .replace-candy-3').hide()
            $('.contact-container').hide()
              $(".about-container").show();
              $('.home-ani').hide()
              break;
          case '/contact':
            $('.replace-candy-1, .replace-candy-2, .replace-candy-3').hide()
              $(".contact-container").show();
              $('.home-ani').hide();
              $('.about-container').hide()
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

    // Handle "previous page" button in your navbar
    $('.nav-item a[href="#/back"]').click(function(e) {
        e.preventDefault();  // Prevent the default action (useful if the href is "#")
        window.history.back();
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

    var duration = 1000;

    $('#candy-1').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-2').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-3').animate({right: '-30%', top: '-200px', opacity: 0}, duration);

  
    $('#candy-1, #candy-2, #candy-3').promise().done(function() {
      
      $(this).hide();
      homeSection.fadeOut(duration)
      $('.replace-candy-1').show();
      
    });
   

});

  $('#candy-2').click(function(){
    var duration = 1000;

    $('#candy-1').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-2').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-3').animate({right: '-30%', top: '-200px', opacity: 0}, duration);

  
    $('#candy-1, #candy-2, #candy-3').promise().done(function() {
      
      $(this).hide();
      homeSection.fadeOut(duration)
      $('.replace-candy-2').show();
      
    });
  });

  $('#candy-3').click(function(){
    var duration = 1000;

    $('#candy-1').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-2').animate({left: '-10%', top: '-200px', opacity: 0}, duration);
    $('#candy-3').animate({right: '-30%', top: '-200px', opacity: 0}, duration);

  
    $('#candy-1, #candy-2, #candy-3').promise().done(function() {
      
      $(this).hide();
      homeSection.fadeOut(duration)
      $('.replace-candy-3').show();
      
    });
  });
});

$(".btn-right-1").click(function(){
  $(".replace-candy-2").hide();
  $(".replace-candy-1").show();
})
$(".btn-left-2").click(function(){
  $(".replace-candy-1").hide();
  $(".replace-candy-2").show();
})
$(".btn-right-2").click(function(){
  $(".replace-candy-1").hide();
  $(".replace-candy-3").show();
})
$(".btn-left-3").click(function(){
  $(".replace-candy-3").hide();
  $(".replace-candy-1").show();
})

