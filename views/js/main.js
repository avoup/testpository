window.onload = function() {
  $('.fall').addClass('animation_fall');
  $('.curtain').addClass('animation_rise');

  setTimeout(
  function()
  {
    $('.A:nth-child(1)').addClass('A_animation');
    $('.A:nth-child(1) .B').addClass('A_B_animation');
    $('.A:nth-child(1) .C').addClass('A_B_C_animation');

    $('.A:nth-child(2)').addClass('A_animation');
    $('.A:nth-child(2) .B').addClass('A_B_animation');
    $('.A:nth-child(2) .C').addClass('A_B_C_animation');
  }, 2300);

};
