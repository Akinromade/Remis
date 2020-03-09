$(window).scroll(function () {
  console.log($(window).scrollTop())
  if ($(window).scrollTop() > 63) {
    $('.navbar__wrapper').addClass('navbar-fixed');
    document.querySelector('.learn_more_btn').style.display = 'inline-block';
    document.querySelector('.navBar__buttons').style.display = 'inline-block';
  }
  if ($(window).scrollTop() < 64) {
    $('.navbar__wrapper').removeClass('navbar-fixed');
    document.querySelector('.learn_more_btn').style.display = 'none';
    document.querySelector('.navBar__buttons').style.display = 'none';
  }
});