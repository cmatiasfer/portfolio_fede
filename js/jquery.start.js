$(document).ready(function () {

  $(document).on('click', '#btn-menu', function () {
    $(this).toggleClass('close');
    $('#about').toggleClass('show');
    console.log("touch btnmenu")
  });
  console.log($("#gallery"));
  $(".owl-carousel").owlCarousel({
    items: 1,
    lazyLoad: true
  });
});