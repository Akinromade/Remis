$(window).scroll(function () {
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

// COUNT DOWN TIMER

// Set the date we're counting down to
var countDownDate = new Date("March 31, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const secondsDegrees = (((60 - seconds) / 60) *   360 ) + 90 ;
  document.querySelector('.sec_counter_stick').style.transform = `rotate(${secondsDegrees}deg)`;

  // Display the result in the element with id="demo"
  document.querySelector(".days").innerHTML = days ;
  document.querySelector(".hours").innerHTML = days ;
  document.querySelector(".mins").innerHTML = minutes ;
  // document.querySelector(".secs").innerHTML = seconds ;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



// COUNT DWON MODAL
window.onload = () => {
  document.querySelector(".md-modal").classList.add('md-show');
}
document.querySelector(".close_modal").addEventListener('click', () => {
  document.querySelector(".md-modal").classList.remove('md-show');
})
document.querySelector(".md-close").addEventListener('click', () => {
  document.querySelector(".md-modal").classList.remove('md-show');
})





