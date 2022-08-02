$('.hamburger').on('click', function() {
  $(this).toggleClass('opened');
  $(this).siblings('nav').toggleClass('opened');
});
