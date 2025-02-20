var timeAbout;


$(document).ready(function () {

  var animation = true;
  $(document).on('click', '#btn-menu', function () {
    const about = $('#about');

    if (animation) {
      $(this).toggleClass('close');
      $('#about > div').toggleClass('show-f');
    }

    if (animation) {
      if (about.hasClass('show')) {
        animation = false;
        about.css('opacity', 1);
        about.css('display', 'initial');
        setTimeout(() => {
          console.log("fire opacity")
          about.css('opacity', 0);
        }, 800);
        setTimeout(() => {
          about.removeAttr('style');
          about.removeClass('show');
          animation = true;
        }, 1300);
      } else {
        about.toggleClass('show');
        setTimeout(function () {
          if (about.height() <= $(window).height()) {
            about.css('height', '100vh');
          } else {
            about.css('height', 'auto');
          }
        }, 20);
      }
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





  var owl = $(".owl-carousel").owlCarousel({
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplay: false,
    autoplayHoverPause: true,
    dots: false,
    items: 1,
    lazyLoad: true,
    loop: true,
    nav: true,
    navText: ["<div class='btn-left'></div>", "<div class='btn-right'></div>"],
    callbacks: true
  });




  owl.on('translate.owl.carousel', function (event) {
    var current = event.item.index;
    var idProject = $(event.target).find(".owl-item").eq(current).find('.item').attr("data-id");

  });
  /* owl.on('translated.owl.carousel', function (event) {
    var current = event.item.index;
    var src = $(event.target).find(".owl-item").eq(current).attr('class');
    console.log('Image current termino is ' + src);
  }); */
});