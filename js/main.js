(function($) {
    "use strict";
  
    // Back To Top - Start
    // --------------------------------------------------
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.backtotop:hidden').stop(true, true).fadeIn();
      } else {
        $('.backtotop').stop(true, true).fadeOut();
      }
    });
    $(function() {
      $(".scroll").on('click', function() {
        $("html,body").animate({scrollTop: 0}, 0);
        return false
      });
    });
    // Back To Top - End
    // --------------------------------------------------
  
    // Preloader - Start
    // --------------------------------------------------
    const preloader = $("#preloader");
    $(window).on("load", function() {
      preloader.addClass("preloaded");
      setTimeout(function() {
        preloader.remove();
      }, 1500);
    });
    // Preloader - End
    // --------------------------------------------------
  
    // Sticky Header - Start
    // --------------------------------------------------
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 0) {
        $('.site_header').addClass("sticky")
      } else {
        $('.site_header').removeClass("sticky")
      }
    });
    // Sticky Header - End
    // --------------------------------------------------
  
    // Header Menu Item Effect - Start
    // --------------------------------------------------
    $('.site_header .main_menu_list > li:not(.active)').mouseover(function () {
      $('.site_header .main_menu_list > li:not(.active)').css({
        'opacity': '0.5',
        'transition': 'opacity 0.3s'
      });
      $(this).css({
        'opacity': '1',
        'color': 'var(--bs-white)',
        'transition': 'opacity 0.3s'
      });
    });
  
    $('.site_header .main_menu_list > li:not(.active)').mouseout(function () {
      $('.site_header .main_menu_list > li:not(.active)').css({
        'opacity': '1',
        'color': 'var(--bs-white)',
        'transition': 'opacity 0.3s'
      });
    });
    // Header Menu Item Effect - End
    // --------------------------------------------------
  
    // Scroll Spy - Start
    // --------------------------------------------------
    // Smooth scrolling using jQuery easing
    $('.scrollspy-btn[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 50)
          }, 0,);
          return false;
        }
      }
    });
    // Scroll Spy - End
    // --------------------------------------------------
  
  
  })(jQuery);