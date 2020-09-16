$(document).ready(function () {

  $(document).on('click', '#btn-menu', function () {
    $(this).toggleClass('close');
    $('#about > div').toggleClass('show-f');

    const about = $('#about');
    if (about.hasClass('show')) {
      about.css('opacity', 1);
      about.css('display', 'initial');
      setTimeout(() => {
        about.removeClass('show');
        about.css('opacity', 0);
      }, 500);
      setTimeout(() => {
        about.removeAttr('style');
      }, 1000);
    } else {
      about.toggleClass('show');
    }

  });

  var time;
  var inBtnSlider = false;
  $('.owl-carousel').mousemove(function () {
    clearTimeout(time);
    $('.btn-left').addClass('show-btn');
    $('.btn-right').addClass('show-btn');
    if (!inBtnSlider) {
      time = setTimeout(() => {
        $('.btn-left').toggleClass('show-btn');
        $('.btn-right').toggleClass('show-btn');
      }, 2000);
    }
  });
  setTimeout(() => {
    $(".btn-left, .btn-right").on("mouseover", function () {
      $('.btn-left').addClass('show-btn');
      $('.btn-right').addClass('show-btn');
      inBtnSlider = true
    });
    $(".btn-left, .btn-right").on("mouseleave", function () {
      inBtnSlider = false;
    });
  }, 500);

  $(".owl-carousel").owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayHoverPause: true,
    dots: false,
    items: 1,
    lazyLoad: true,
    loop: true,
    nav: true,
    navText: ["<div class='btn-left'></div>", "<div class='btn-right'></div>"],
  });
});