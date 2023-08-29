/*$(".toggle-btn").click(()=>{
    $(".nav-item").slideToggle()
})
// JavaScript code with jQuery
$(document).ready(function() {
  const navLinks = $('.nav-link');
  const pages = $('.page');
  const backButton = $('#back-button');

  // Hide all pages except the active one
  function showPage(pageId) {
    pages.removeClass('active');
    $('#' + pageId).addClass('active');
  }

  // Update the URL and show the corresponding page
  function navigateTo(url) {
    const pageId = url === '/' ? 'home' : url.substr(1);
    history.pushState(null, null, url);
    showPage(pageId);
  }

  // Handle navigation when a link is clicked
  navLinks.click(function(event) {
    event.preventDefault();
    const href = $(this).attr('href');
    navigateTo(href);
  });

  // Handle navigation when the "Previous" button is clicked
  backButton.click(function() {
    history.back();
  });

  // Handle navigation when the back/forward buttons are used
  $(window).on('popstate', function() {
    navigateTo(window.location.pathname);
  });

  // Show the initial page based on the current URL
  navigateTo(window.location.pathname);
});

*/

// Wait for the DOM to be fully loaded
// Add this script at the bottom of the <body> tag or use 'defer' attribute in the script tag

const container = document.querySelector('.container');
const caseEntry = document.querySelector('.caseEntry');

function animateCaseEntryOnScroll() {
  const containerOffset = 15; // Offset in pixels
  const containerBottom = container.getBoundingClientRect().bottom - containerOffset;
  const viewportHeight = window.innerHeight;

  if (containerBottom < viewportHeight) {
    caseEntry.style.opacity = '1';
    caseEntry.style.transform = 'translateY(0)';
    caseEntry.classList.remove('hidden');
    window.removeEventListener('scroll', animateCaseEntryOnScroll);
  }
}

window.addEventListener('scroll', animateCaseEntryOnScroll);

