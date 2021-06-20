$(document).ready(function(){
  $(".burger").click(function(){
    $(".right_menu").css("display", "inline-block");
    $(".black_square").css("display", "inline-block");
    setTimeout(function(){
      $(".right_menu").css("opacity", 1);
      $(".black_square").css("opacity", .5);
    }, 10);
  });
  $(".menu_krest, .black_square").click(function(){
    $(".right_menu").css("opacity", 0);
    $(".black_square").css("opacity", 0);

    setTimeout(function(){
      $(".right_menu").css("display", "none");
      $(".black_square").css("display", "none");
    }, 500);
  });

});
