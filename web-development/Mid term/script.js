$(document).ready(function () {

  // Hamburger Menu Toggle
  $('#hamburgerBtn').on('click', function () {
    $('#navMenu').toggleClass('nav-open');
    $(this).toggleClass('is-open');
  });

  // Slider Initialization
  var $slider = $('.products-slider');
  var totalSlides = $slider.find('.product-card').length;

  // Counter Update Function
  function updateCounter(slick) {
    var current = slick.currentSlide + 1;
    $('#slideCounter').text('Showing ' + current + ' of ' + totalSlides);
  }

  // Bind 'init' BEFORE calling .slick()
  $slider.on('init', function (event, slick) {
    updateCounter(slick);
  });

  $slider.on('afterChange', function (event, slick) {
    updateCounter(slick);
  });

  // Slick Carousel Configuration
  $slider.slick({
    infinite: true,
    speed: 450,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  });

  // Navigation Controls
  $('#prevBtn').on('click', function () {
    $slider.slick('slickPrev');
  });

  $('#nextBtn').on('click', function () {
    $slider.slick('slickNext');
  });

  // Autoplay Pause on Hover
  $slider.on('mouseenter', '.product-card', function () {
    $slider.slick('slickPause');
  });

  $slider.on('mouseleave', '.product-card', function () {
    $slider.slick('slickPlay');
  });

});
