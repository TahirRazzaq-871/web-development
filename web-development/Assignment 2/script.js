// ===== Hamburger Menu Toggle =====
// Get references to the button and the nav menu using their IDs
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

// When the hamburger button is clicked, toggle the mobile menu open/closed
hamburgerBtn.addEventListener('click', function () {

  // .nav-open is the CSS class that makes the menu visible on mobile
  navMenu.classList.toggle('nav-open');

  // .is-open is used on the button so CSS can animate the icon (optional)
  hamburgerBtn.classList.toggle('is-open');
});
