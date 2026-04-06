// ===== Navbar =====
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


// ===== Slider =====
// Initialize Slick Carousel with custom settings
$(document).ready(function() {
  
  // Initialize the carousel
  const $carousel = $('#productsCarousel');
  
  $carousel.slick({
    // Show 3 items on desktop, 2 on tablet, 1 on mobile using responsive array
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    slidesToShow: 3,        // Show 3 products on desktop
    slidesToScroll: 1,      // Scroll 1 product at a time
    infinite: true,         // Loop infinitely
    autoplay: true,         // Enable auto-play
    autoplaySpeed: 5000,    // Auto-play every 5 seconds
    arrows: false,          // Hide Slick's default arrows (we have custom buttons)
    dots: false,            // Hide Slick's default dots
    pauseOnHover: true      // Pause auto-play on hover
  });

  // ===== Navigation Controls =====
  // When "Previous" button is clicked, slide to the previous item
  $('#prevBtn').on('click', function() {
    $carousel.slick('slickPrev');
    updateSlideCounter();
  });

  // When "Next" button is clicked, slide to the next item
  $('#nextBtn').on('click', function() {
    $carousel.slick('slickNext');
    updateSlideCounter();
  });

  // Update the counter when carousel changes (automatically after sliding)
  $carousel.on('afterChange', function() {
    updateSlideCounter();
  });

  // ===== Counter =====
  // Function to update the slide counter display
  function updateSlideCounter() {
    // Get the current slide index (0-based) from Slick
    const currentSlideIndex = $carousel.slick('slickCurrentSlide');
    // Get total number of slides
    const totalSlides = $carousel.slick('getSlick').slideCount;
    
    // Update the counter text: convert 0-based index to 1-based for display
    $('#currentSlide').text(currentSlideIndex + 1);
    $('#totalSlides').text(totalSlides);
  }

  // Initialize counter on page load
  updateSlideCounter();
});
