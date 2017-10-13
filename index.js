$(function(){
    $('.container_overlay').hide();

    $('.container_overlay').hover(
      function(){
        $(this).fadeIn(500);
      },
      function(){
        $(this).fadeOut(500);
      }

    );
