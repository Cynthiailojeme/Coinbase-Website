 $(window).on("scroll", function() {
      if($(this).scrollTop() > 20) {
      $(".navbar").vaddClass("active")
      $(".coinlink").addClass("active2")
      $("button").addClass("active3")
      }
      
      if ($(this).scrollTop() < 20) {
      $(".navbar").removeClass("active")
      $(".coinlink").removeClass("active2")
      $("button").removeClass("active3")
      }
      });
      