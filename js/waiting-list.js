//jQuery time
var current_fs, next_fs, previous_fs; //sections
var left, opacity, scale; //section properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$('.next').click(function () {
  if (animating) return true;
  animating = false;

  current_fs = $(this).parent();
  next_fs = $(this)
    .parent()
    .next();

  // get next id
  let btn_id = $(this).get(0).id.split('_');
  let section_id = btn_id[0] + '_' + btn_id[1];

  // check if values are not empty

  if ($('#' + section_id + ' input').val().length <= 0) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'You must fill all the fields in this section',
    })
  } else {
    //activate next step on progressbar using the index of next_fs
    $('#progressbar li')
      .eq($('section').index(next_fs))
      .addClass('active');
    //show the next section
    next_fs.show();
    //hide the current section with style
    current_fs.animate({
      opacity: 0
    }, {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + '%';
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: 'scale(' + 0 + ')',
          position: 'relative',
          display: 'flex',
          left: left,
          opacity: opacity,
          flexFlow: 'row wrap',
          justifyContent: 'center'
        });
        next_fs.css({
          display: 'flex',
          left: left,
          opacity: opacity,
          flexFlow: 'row wrap',
          justifyContent: 'center'
        });
      },
      duration: 00,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  }
});

$('.previous').click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this)
    .parent()
    .prev();

  //de-activate current step on progressbar
  $('#progressbar li')
    .eq($('section').index(current_fs))
    .removeClass('active');

  //show the previous section
  previous_fs.show();
  //hide the current section with style
  current_fs.animate({
    opacity: 0
  }, {
    step: function (now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = (1 - now) * 50 + '%';
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({
        left: left
      });
      previous_fs.css({
        transform: 'scale(' + scale + ')',
        opacity: opacity
      });
    },
    duration: 00,
    complete: function () {
      current_fs.hide();
      animating = false;
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
    },
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

