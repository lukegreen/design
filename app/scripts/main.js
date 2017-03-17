$(document).ready(function(){

  /*Change active class for menu items*/

  $('.nav li').on('click', function(){
    $('.nav li').removeClass('active');
    $(this).addClass('active');
  });

  /*Skill box interactivity*/

  $('.skill-box').hover(function(){
    $(this).children('h2').fadeOut(500);

  }, function(){
    $(this).children('h2').fadeIn();
  });

})
