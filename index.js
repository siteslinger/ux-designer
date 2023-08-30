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

$(document).ready(function() {
  const introSection = $('.first-main');
  const restSection = $('#content')

  $(window).scroll(function(){
    introSection.animate({
      display: 'none'
    }, 1000)



    restSection.animate({
      position: 'absolute',
      top: 0,
     
    }, 4000)
  })
})
// $(document).ready(function() {
//   const introSection = $('.first-main');
//   const restSection = $('#content');
//   let scrolled = false;

//   $(window).scroll(function() {
//     if (!scrolled && $(this).scrollTop() > introSection.height()) {
//       scrolled = true;
      
//       introSection.fadeOut(5000);

//       restSection.animate({
//         position: 'absolute',
//         top: 0
//       }, 3000);
//     }
//   });
// });




$(document).ready(function() {
  const homeSection = $('.home-ani');
  const homeContainer = $('.first-main');

  $('#candy-1').click(function(){
    // Hide the home section and home container
    homeSection.hide();
    homeContainer.hide();

    // Show the replacement section for candy-1
    $('.replace-candy-1').show();
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