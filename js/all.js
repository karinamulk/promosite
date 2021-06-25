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


  let cat_a = 0;
  let cat_b = 1000;
  $(".cat_game_container").clone().appendTo(".cat_game");
  $(".cat_g_card1, .cat_g_card2, .cat_g_card3, .cat_g_card4, .cat_g_card5").mouseover(function() {
    if (cat_a == 0) {
      $(".cat_game_container").css("animation-play-state", "paused");
    }
  });
  $(".cat_g_card1, .cat_g_card2, .cat_g_card3, .cat_g_card4, .cat_g_card5").mouseout(function() {
    if (cat_a == 0) {
      $(".cat_game_container").css("animation-play-state", "running");
    }
  });


  $(".cat_g_card1, .cat_g_card2, .cat_g_card3, .cat_g_card4, .cat_g_card5").click(function(){
    cat_a += 1;
    $(this).css({
      "animation": "blinking3 1.5s linear",
      "background-color": "#A4DDD4",
      "animation-play-state": "running"
    });
    $(".cat_game_container").css("animation-play-state", "paused");
    $(this).children().css("display", "block");
  });


  let slider_merch = 0;
  let slider_merch_result = 0;
  let slider_merch_text = 0;
  console.log(slider_merch);
  console.log(slider_merch_result);
  $(".gal_birka").click(function(){
      $(this).addClass("gal_back");
      if ($(this).hasClass("gal_birka1")) {
        setTimeout(function(){
          $(".gal_birka1").removeClass("gal_back");
        }, 4000);
      }
      if ($(this).hasClass("gal_birka2")) {
        setTimeout(function(){
          $(".gal_birka2").removeClass("gal_back");
        }, 4000);
      }
      if ($(this).hasClass("gal_birka3")) {
        setTimeout(function(){
          $(".gal_birka3").removeClass("gal_back");
        }, 4000);
      }
      if ($(this).hasClass("gal_birka4")) {
        setTimeout(function(){
          $(".gal_birka4").removeClass("gal_back");
        }, 4000);
      }
      if ($(this).hasClass("gal_birka5")) {
        setTimeout(function(){
          $(".gal_birka5").removeClass("gal_back");
        }, 4000);
      }
      if ($(this).hasClass("gal_birka6")) {
        setTimeout(function(){
          $(".gal_birka6").removeClass("gal_back");
        }, 4000);
      }
      if ($(this).hasClass("gal_birka7")) {
        setTimeout(function(){
          $(".gal_birka7").removeClass("gal_back");
        }, 4000);
      }
      if ($(this).hasClass("gal_birka8")) {
        setTimeout(function(){
          $(".gal_birka8").removeClass("gal_back");
        }, 4000);
      }

  });

  $(".gal_strelka2, .gal_slider_right").click(function(){
      slider_merch -= 100;
      slider_merch_result = slider_merch+"%";
      $(".gal_merch").css("background-position", slider_merch_result);
      slider_merch_text += 1;
      console.log(slider_merch_text);
      if (slider_merch_text == 1) {
        $(".slider_merch_text").html("конверт"+ "<br>" + "блокнот" + "<br>" + "карандаш");
        $(".gal_merch_tablo1").html("90 р."+ "<br>" + "490 р." + "<br>" + "90 р.");
      } else if (slider_merch_text == 2) {
        $(".slider_merch_text").html("худи"+ "<br>" + "шапка");
        $(".gal_merch_tablo1").html("2900 р."+ "<br>" + "990р.");
      } else if (slider_merch_text == 3) {
        $(".slider_merch_text").html("наклейки");
        $(".gal_merch_tablo1").html("290 р.");
      } else if (slider_merch_text == 4) {
        $(".slider_merch_text").html("шопер");
        $(".gal_merch_tablo1").html("1100 р.");
        slider_merch_text = -1;
      } else if (slider_merch_text == 0) {
        $(".slider_merch_text").html("каталог" + "<br>" + "сертификат");
        $(".gal_merch_tablo1").html("990 р.");
      } else if (slider_merch_text == -3) {
        $(".slider_merch_text").html("худи"+ "<br>" + "шапка");
        $(".gal_merch_tablo1").html("2900 р."+ "<br>" + "990р.");
      } else if (slider_merch_text == -2) {
        $(".slider_merch_text").html("наклейки");
        $(".gal_merch_tablo1").html("290 р.");
      } else if (slider_merch_text == -1) {
        $(".slider_merch_text").html("шопер");
        $(".gal_merch_tablo1").html("1100 р.");
      } else if (slider_merch_text == -4) {
        $(".slider_merch_text").html("конверт"+ "<br>" + "блокнот" + "<br>" + "карандаш");
        $(".gal_merch_tablo1").html("90 р."+ "<br>" + "490 р." + "<br>" + "90 р.");
        slider_merch_text = 1;
      }
  });
  $(".gal_strelka1, .gal_slider_left").click(function(){
      slider_merch += 100;
      slider_merch_result = slider_merch+"%";
      $(".gal_merch").css("background-position", slider_merch_result);
      slider_merch_text -= 1;
      console.log(slider_merch_text);
      if (slider_merch_text == -4) {
        $(".slider_merch_text").html("конверт"+ "<br>" + "блокнот" + "<br>" + "карандаш");
        $(".gal_merch_tablo1").html("90 р."+ "<br>" + "490 р." + "<br>" + "90 р.");
        slider_merch_text = 1;
      } else if (slider_merch_text == -3) {
        $(".slider_merch_text").html("худи"+ "<br>" + "шапка");
        $(".gal_merch_tablo1").html("2900 р."+ "<br>" + "990р.");
      } else if (slider_merch_text == -2) {
        $(".slider_merch_text").html("наклейки");
        $(".gal_merch_tablo1").html("290 р.");
      } else if (slider_merch_text == -1) {
        $(".slider_merch_text").html("шопер");
        $(".gal_merch_tablo1").html("1100 р.");
      } else if (slider_merch_text == 0) {
        $(".slider_merch_text").html("каталог" + "<br>" + "сертификат");
        $(".gal_merch_tablo1").html("990 р.");
      } else if (slider_merch_text == 2) {
        $(".slider_merch_text").html("худи"+ "<br>" + "шапка");
        $(".gal_merch_tablo1").html("2900 р."+ "<br>" + "990р.");
      } else if (slider_merch_text == 3) {
        $(".slider_merch_text").html("наклейки");
        $(".gal_merch_tablo1").html("290 р.");
      } else if (slider_merch_text == 4) {
        $(".slider_merch_text").html("шопер");
        $(".gal_merch_tablo1").html("1100 р.");
        slider_merch_text = -1;
      } else if (slider_merch_text == 1) {
        $(".slider_merch_text").html("конверт"+ "<br>" + "блокнот" + "<br>" + "карандаш");
        $(".gal_merch_tablo1").html("90 р."+ "<br>" + "490 р." + "<br>" + "90 р.");

      }

  });

  $(".gal_birka_front1").mouseover(function(){
      $(".gal_birka_front1").addClass('animation');
      setTimeout(function(){
        $(".gal_birka_front1").removeClass('animation');
      }, 500);
  });
  $(".gal_birka_front1").mouseout(function(){
    $(".gal_birka_front1").addClass('animation1');
    setTimeout(function(){
      $(".gal_birka_front1").removeClass('animation1');
    }, 500);
  });
  $(".gal_birka_front3").mouseover(function(){
      $(".gal_birka_front3").addClass('animation');
      setTimeout(function(){
        $(".gal_birka_front3").removeClass('animation');
      }, 500);
  });
  $(".gal_birka_front3").mouseout(function(){
    $(".gal_birka_front3").addClass('animation1');
    setTimeout(function(){
      $(".gal_birka_front3").removeClass('animation1');
    }, 500);
  });
  $(".gal_birka_front5").mouseover(function(){
      $(".gal_birka_front5").addClass('animation');
      setTimeout(function(){
        $(".gal_birka_front5").removeClass('animation');
      }, 500);
  });
  $(".gal_birka_front5").mouseout(function(){
    $(".gal_birka_front5").addClass('animation1');
    setTimeout(function(){
      $(".gal_birka_front5").removeClass('animation1');
    }, 500);
  });
  $(".gal_birka_front6").mouseover(function(){
      $(".gal_birka_front6").addClass('animation');
      setTimeout(function(){
        $(".gal_birka_front6").removeClass('animation');
      }, 500);
  });
  $(".gal_birka_front6").mouseout(function(){
    $(".gal_birka_front6").addClass('animation1');
    setTimeout(function(){
      $(".gal_birka_front6").removeClass('animation1');
    }, 500);
  });
  $(".gal_birka_front7").mouseover(function(){
      $(".gal_birka_front7").addClass('animation');
      setTimeout(function(){
        $(".gal_birka_front7").removeClass('animation');
      }, 500);
  });
  $(".gal_birka_front7").mouseout(function(){
    $(".gal_birka_front7").addClass('animation1');
    setTimeout(function(){
      $(".gal_birka_front7").removeClass('animation1');
    }, 500);
  });



  $(".kids_button").click(function(){
    $(".kids_cloud6").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud6").css("display", "none");
    }, 10);
  });
  $(".kids_button1").click(function(){
    $(".kids_cloud1").css("display", "inline-block");
    setTimeout(function(){
      $(".kids_cloud1").css("opacity", "100%");
    }, 10);
    $(".kids_cloud2").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud2").css("display", "none");
    }, 10);
    $(".kids_cloud3").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud3").css("display", "none");
    }, 10);
    $(".kids_cloud4").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud4").css("display", "none");
    }, 10);
    $(".kids_cloud5").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud5").css("display", "none");
    }, 10);


  });
  $(".kids_button2").click(function(){
    $(".kids_cloud2").css("display", "inline-block");
    setTimeout(function(){
      $(".kids_cloud2").css("opacity", "100%");
    }, 10);
    $(".kids_cloud1").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud1").css("display", "none");
    }, 10);
    $(".kids_cloud3").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud3").css("display", "none");
    }, 10);
    $(".kids_cloud4").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud4").css("display", "none");
    }, 10);
    $(".kids_cloud5").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud5").css("display", "none");
    }, 10);
  });
  $(".kids_button3").click(function(){
    $(".kids_cloud3").css("display", "inline-block");
    setTimeout(function(){
      $(".kids_cloud3").css("opacity", "100%");
    }, 10);
    $(".kids_cloud1").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud1").css("display", "none");
    }, 10);
    $(".kids_cloud2").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud2").css("display", "none");
    }, 10);
    $(".kids_cloud4").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud4").css("display", "none");
    }, 10);
    $(".kids_cloud5").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud5").css("display", "none");
    }, 10);
  });
  $(".kids_button4").click(function(){
    $(".kids_cloud4").css("display", "inline-block");
    setTimeout(function(){
      $(".kids_cloud4").css("opacity", "100%");
    }, 10);
    $(".kids_cloud1").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud1").css("display", "none");
    }, 10);
    $(".kids_cloud2").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud2").css("display", "none");
    }, 10);
    $(".kids_cloud3").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud3").css("display", "none");
    }, 10);
    $(".kids_cloud5").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud5").css("display", "none");
    }, 10);
  });
  $(".kids_button5").click(function(){
    $(".kids_cloud5").css("display", "inline-block");
    setTimeout(function(){
      $(".kids_cloud5").css("opacity", "100%");
    }, 10);
    $(".kids_cloud1").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud1").css("display", "none");
    }, 10);
    $(".kids_cloud2").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud2").css("display", "none");
    }, 10);
    $(".kids_cloud3").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud3").css("display", "none");
    }, 10);
    $(".kids_cloud4").css("opacity", "0");
    setTimeout(function(){
      $(".kids_cloud4").css("display", "none");
    }, 10);
  });


  if ($(window).width() > 500) {
    $(".mach_button1").mouseover(function() {
      $(".mach_point4").css("color", "#A4DDD4");
      $(".mach_point4").css("transition", "all .2s");

      $(".mach_button1 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button1 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button1 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button1").css("transition", "all .2s");
    });
    $(".mach_button1").mouseout(function() {
      $(".mach_point4").css("color", "#FF83C1");
      $(".mach_point4").css("transition", "all .5s");

      $(".mach_button1 .mach_button_top").css("background", "#232323");
      $(".mach_button1 .mach_button_back").css("background", "black");
      $(".mach_button1 .mach_button_extra").css("background", "black");
      $(".mach_point4").css("transition", "all .5s");

    });
    $(".mach_point4").mouseover(function() {
      $(".mach_button1 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button1 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button1 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button1").css("transition", "all .2s");

      $(".mach_point4").css("color", "#A4DDD4");
      $(".mach_point4").css("transition", "all .2s");
    });
    $(".mach_point4").mouseout(function() {
      $(".mach_button1 .mach_button_top").css("background", "#232323");
      $(".mach_button1 .mach_button_back").css("background", "black");
      $(".mach_button1 .mach_button_extra").css("background", "black");
      $(".mach_point4").css("transition", "all .5s");

      $(".mach_point4").css("color", "#FF83C1");
      $(".mach_point4").css("transition", "all .5s");
    });



    $(".mach_button2").mouseover(function() {
      $(".mach_point2").css("color", "#A4DDD4");
      $(".mach_point2").css("transition", "all .2s");

      $(".mach_button2 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button2 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button2 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button2").css("transition", "all .2s");
    });
    $(".mach_button2").mouseout(function() {
      $(".mach_point2").css("color", "#FF83C1");
      $(".mach_point2").css("transition", "all .5s");

      $(".mach_button2 .mach_button_top").css("background", "#232323");
      $(".mach_button2 .mach_button_back").css("background", "black");
      $(".mach_button2 .mach_button_extra").css("background", "black");
      $(".mach_point2").css("transition", "all .5s");

    });
    $(".mach_point2").mouseover(function() {
      $(".mach_button2 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button2 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button2 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button2").css("transition", "all .2s");

      $(".mach_point2").css("color", "#A4DDD4");
      $(".mach_point2").css("transition", "all .2s");
    });
    $(".mach_point2").mouseout(function() {
      $(".mach_button2 .mach_button_top").css("background", "#232323");
      $(".mach_button2 .mach_button_back").css("background", "black");
      $(".mach_button2 .mach_button_extra").css("background", "black");
      $(".mach_point2").css("transition", "all .5s");
      $(".mach_point2").css("color", "#FF83C1");
      $(".mach_point2").css("transition", "all .5s");
    });


    $(".mach_button3").mouseover(function() {
      $(".mach_point5").css("color", "#A4DDD4");
      $(".mach_point5").css("transition", "all .2s");

      $(".mach_button3 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button3 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button3 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button3").css("transition", "all .2s");
    });
    $(".mach_button3").mouseout(function() {
      $(".mach_point5").css("color", "#FF83C1");
      $(".mach_point5").css("transition", "all .5s");

      $(".mach_button3 .mach_button_top").css("background", "#232323");
      $(".mach_button3 .mach_button_back").css("background", "black");
      $(".mach_button3 .mach_button_extra").css("background", "black");
      $(".mach_point5").css("transition", "all .5s");

    });
    $(".mach_point5").mouseover(function() {
      $(".mach_button3 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button3 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button3 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button3").css("transition", "all .2s");

      $(".mach_point5").css("color", "#A4DDD4");
      $(".mach_point5").css("transition", "all .2s");
    });
    $(".mach_point5").mouseout(function() {
      $(".mach_button3 .mach_button_top").css("background", "#232323");
      $(".mach_button3 .mach_button_back").css("background", "black");
      $(".mach_button3 .mach_button_extra").css("background", "black");
      $(".mach_point5").css("transition", "all .5s");
      $(".mach_point5").css("color", "#FF83C1");
      $(".mach_point5").css("transition", "all .5s");
    });



    $(".mach_button4").mouseover(function() {
      $(".mach_point3").css("color", "#A4DDD4");
      $(".mach_point3").css("transition", "all .2s");

      $(".mach_button4 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button4 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button4 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button4").css("transition", "all .2s");
    });
    $(".mach_button4").mouseout(function() {
      $(".mach_point3").css("color", "#FF83C1");
      $(".mach_point3").css("transition", "all .5s");

      $(".mach_button4 .mach_button_top").css("background", "#232323");
      $(".mach_button4 .mach_button_back").css("background", "black");
      $(".mach_button4 .mach_button_extra").css("background", "black");
      $(".mach_point3").css("transition", "all .5s");

    });
    $(".mach_point3").mouseover(function() {
      $(".mach_button4 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button4 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button4 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button4").css("transition", "all .2s");

      $(".mach_point3").css("color", "#A4DDD4");
      $(".mach_point3").css("transition", "all .2s");
    });
    $(".mach_point3").mouseout(function() {
      $(".mach_button4 .mach_button_top").css("background", "#232323");
      $(".mach_button4 .mach_button_back").css("background", "black");
      $(".mach_button4 .mach_button_extra").css("background", "black");
      $(".mach_point3").css("transition", "all .5s");
      $(".mach_point3").css("color", "#FF83C1");
      $(".mach_point3").css("transition", "all .5s");
    });


    $(".mach_button5").mouseover(function() {
      $(".mach_point1").css("color", "#A4DDD4");
      $(".mach_point1").css("transition", "all .2s");

      $(".mach_button5 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button5 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button5 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button5").css("transition", "all .2s");
    });
    $(".mach_button5").mouseout(function() {
      $(".mach_point1").css("color", "#FF83C1");
      $(".mach_point1").css("transition", "all .5s");

      $(".mach_button5 .mach_button_top").css("background", "#232323");
      $(".mach_button5 .mach_button_back").css("background", "black");
      $(".mach_button5 .mach_button_extra").css("background", "black");
      $(".mach_point1").css("transition", "all .5s");

    });
    $(".mach_point1").mouseover(function() {
      $(".mach_button5 .mach_button_top").css("background", "#A4DDD4");
      $(".mach_button5 .mach_button_back").css("background", "#76B1A8");
      $(".mach_button5 .mach_button_extra").css("background", "#76B1A8");
      $(".mach_button5").css("transition", "all .2s");

      $(".mach_point1").css("color", "#A4DDD4");
      $(".mach_point1").css("transition", "all .2s");
    });
    $(".mach_point1").mouseout(function() {
      $(".mach_button5 .mach_button_top").css("background", "#232323");
      $(".mach_button5 .mach_button_back").css("background", "black");
      $(".mach_button5 .mach_button_extra").css("background", "black");
      $(".mach_point1").css("transition", "all .5s");
      $(".mach_point1").css("color", "#FF83C1");
      $(".mach_point1").css("transition", "all .5s");
    });
  }

  if ($(window).width() < 501) {
    $(".mach_point1").html("Кликай на черные кнопки, чтобы"+ "<br>" + "узнать об устройстве аппарата");
    $(".mach_button1").click(function(){
      $(".mach_point1").html("Лазерная шапка");
    });
    $(".mach_button2").click(function(){
      $(".mach_point1").html("Труба передачи препарата");
    });
    $(".mach_button3").click(function(){
      $(".mach_point1").html("Кресло");
    });
    $(".mach_button4").click(function(){
      $(".mach_point1").html("Системный блок");
    });
    $(".mach_button5").click(function(){
      $(".mach_point1").html("Столик для мозга");
    });
  }



  $(".order_input_button").click(function(){
  if ($(window).width() > 768) {
    if (!$(".input_order").val()) {
      $('.order_img_desktop2').css('display', 'none');
    } else {
      $('.order_img_desktop2').css('display', 'block');
      setTimeout(function(){
        $('.order_img_desktop2').css('opacity', '100%');
      }, 10);
    }
  } else if ($(window).width() > 500 && $(window).width() < 769) {
    if (!$(".input_order").val()) {
      $('.order_img_ipad2').css('display', 'none');
    } else {
      $('.order_img_ipad2').css('display', 'block');
      setTimeout(function(){
        $('.order_img_ipad2').css('opacity', '100%');
      }, 10);
    }
  } else if ($(window).width() < 501) {
    if (!$(".input_order").val()) {
      $('.order_img_iphone2').css('display', 'none');
    } else {
      $('.order_img_iphone2').css('display', 'block');
      setTimeout(function(){
        $('.order_img_iphone2').css('opacity', '100%');
      }, 10);
    }
  }
  });



  $(".space_step1").click(function(){
  if ($(window).width() > 768) {
    $('.space_image').css("background-image", "url('images/space_image1.jpg')");
  } else if ($(window).width() > 500 && $(window).width() < 769) {
    $('.space_image').css("background-image", "url('images/space_image1_ipad.jpg')");
  } else if ($(window).width() < 501) {
    $('.space_image').css("background-image", "url('images/space_image1_iphone.jpg')");
  }
    $('.space_image').css("background-size", "300% 100%");
    $('.space_image').css("animation", "image1 9s ease infinite");
    $('.space_step1').css("background", "#A4DDD4");
    $('.space_step2').css("background", "#FF83C1");
    $('.space_step3').css("background", "#FF83C1");
    $('.space_step4').css("background", "#FF83C1");
    $(".space_point1").html("вход");
    $(".space_point2").html("");
    $(".space_point3").html("");
    $(".space_point4").html("");
  });
  $(".space_step2").click(function(){
    if ($(window).width() > 768) {
      $('.space_image').css("background-image", "url('images/space_image2.jpg')");
    } else if ($(window).width() > 500 && $(window).width() < 769) {
      $('.space_image').css("background-image", "url('images/space_image2_ipad.jpg')");
    } else if ($(window).width() < 501) {
      $('.space_image').css("background-image", "url('images/space_image2_iphone.jpg')");
    }
    $('.space_image').css("background-size", "800% 100%");
    $('.space_image').css("animation", "image2 24s ease infinite");
    $('.space_step2').css("background", "#A4DDD4");
    $('.space_step1').css("background", "#FF83C1");
    $('.space_step3').css("background", "#FF83C1");
    $('.space_step4').css("background", "#FF83C1");
    $(".space_point1").html("холл");
    $(".space_point2").html("кафе");
    $(".space_point3").html("игровая зона");
    $(".space_point4").html("гардероб");

  });
  $(".space_step3").click(function(){
    if ($(window).width() > 768) {
      $('.space_image').css("background-image", "url('images/space_image3.jpg')");
    } else if ($(window).width() > 500 && $(window).width() < 769) {
      $('.space_image').css("background-image", "url('images/space_image3_ipad.jpg')");
    } else if ($(window).width() < 501) {
      $('.space_image').css("background-image", "url('images/space_image3_iphone.jpg')");
    }
    $('.space_image').css("background-size", "500% 100%");
    $('.space_image').css("animation", "image3 15s ease infinite");
    $('.space_step3').css("background", "#A4DDD4");
    $('.space_step1').css("background", "#FF83C1");
    $('.space_step2').css("background", "#FF83C1");
    $('.space_step4').css("background", "#FF83C1");
    $(".space_point1").html("кинозал");
    $(".space_point2").html("выставка");
    $(".space_point3").html("");
    $(".space_point4").html("");
  });
  $(".space_step4").click(function(){
    if ($(window).width() > 768) {
      $('.space_image').css("background-image", "url('images/space_image4.jpg')");
    } else if ($(window).width() > 500 && $(window).width() < 769) {
      $('.space_image').css("background-image", "url('images/space_image4_ipad.jpg')");
    } else if ($(window).width() < 501) {
      $('.space_image').css("background-image", "url('images/space_image4_iphone.jpg')");
    }
    $('.space_image').css("background-size", "400% 100%");
    $('.space_image').css("animation", "image4 12s ease infinite");
    $('.space_step4').css("background", "#A4DDD4");
    $('.space_step1').css("background", "#FF83C1");
    $('.space_step2').css("background", "#FF83C1");
    $('.space_step3').css("background", "#FF83C1");
    $(".space_point1").html("операционная");
    $(".space_point2").html("");
    $(".space_point3").html("");
    $(".space_point4").html("");
  });

  $(".space_before_steps").mouseover(function() {
    $(".space_image").css("animation-play-state", "paused");
  });
  $(".space_before_steps").mouseout(function() {
      $(".space_image").css("animation-play-state", "running");
  });


  $(".space_step").mouseover(function() {
    $(this).css("background", "#A4DDD4");
  });
  $(".space_step").mouseout(function() {
    $(this).css("background", "#FF83C1");

  });



  $(function() {
       $('.user_drag_block_right').sortable();
  });

  $(".user_button").click(function(){
    $(".black_square").css("width", "100%");
    $(".user_notification").css("display", "inline-block");
    $(".black_square").css("display", "inline-block");

    setTimeout(function(){
      $(".user_notification").css("opacity", "100%");
      $(".black_square").css("opacity", .5);
    }, 10);


  });

  $(".user_menu_krest_notification, .black_square").click(function(){
    $(".user_notification").css("opacity", "0");
    $(".black_square").css("opacity", "0");

    setTimeout(function(){
      $(".user_notification").css("display", "none");
      $(".black_square").css("width", "51.1%");
      $(".black_square").css("display", 'none');
    }, 500);

  });
});
