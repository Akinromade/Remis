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

// Animation for Waitingv list conmfirmation

document.querySelector(".submit_waitin_list_btn").addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('.anim_img_1').style.display = 'block';
  }, 1000)
  
  setTimeout(() => {
    document.querySelector('.anim_img_2').style.display = 'block';
   
  }, 2000)
  
  setTimeout(() => {
    document.querySelector('.anim_img_3').style.display = 'block';
   
  }, 3000)
  
  setTimeout(() => {
    document.querySelector('.anim_img_4').style.display = 'block';
  }, 4000)
})