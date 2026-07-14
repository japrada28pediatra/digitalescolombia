/* Main Js Start */

(function ($) {
  "use strict";

  $(document).ready(function () {
    // odometer init
    if ($(".odometer").length) {
      var odo = $(".odometer");
      odo.each(function () {
        $(this).appear(function () {
          var countNumber = $(this).attr("data-count");
          $(this).html(countNumber);
        });
      });
    }

    // single nav dropdown on click
    $(".has-dropdown > a").on("click", function (e) {
      e.preventDefault();
      var $panel = $(this).next(".sub-menu");
      if (window.innerWidth < 991) {
        $panel.slideToggle(200);
        $panel.toggleClass("open");
        $(this).toggleClass("open");
      }
    });

    //blog thumb slider
    $(".chunk-blog__thumbslider").slick({
      centerMode: true,
      centerPadding: "-40px",
      adaptiveHeight: true,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
          },
        },
      ],
    });
    $(".chunk-hero__slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "-40px",
      arrows: true,
      prevArrow: $(".chunk-hero__prev"),
      nextArrow: $(".chunk-hero__next"),
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    // new WOW().init();

    // $(".chunk-hero__slider").on(
    //   "afterChange",
    //   function (event, slick, currentSlide) {
    //     // Reset wow classes inside all slides
    //     $(".slick-slide [data-wow]")
    //       .removeClass("wow animated")
    //       .removeAttr("style");
    //
    //     // Add wow back to current slide elements
    //     $(slick.$slides[currentSlide]).find("[data-wow]").addClass("wow");
    //
    //     // Re-init WOW
    //     new WOW().init();
    //   },
    // );

    // areas of practice slider
    $(".chunk-aop__slider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".solution-slider--four").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      // arrows: true,
      centerMode: true,
      centerPadding: "0px",
      // variableWidth: false,
      prevArrow: $(".solution-prev"),
      nextArrow: $(".solution-next"),
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".dashboard-body__bar-icon").on("click", function () {
      $(".sidebar-menu").addClass("show-sidebar");
      $(".sidebar-overlay").addClass("show");
    });
    $(".sidebar-menu__close, .sidebar-overlay").on("click", function () {
      $(".sidebar-menu").removeClass("show-sidebar");
      $(".sidebar-overlay").removeClass("show");
    });

    $(".counterup-item").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    // Event delegation for add/sub buttons
    $(document).on("click", ".add", function () {
      if ($(this).prev().val() < 999) {
        $(this)
          .prev()
          .val(+$(this).prev().val() + 1);
      }
    });
    $(document).on("click", ".sub", function () {
      if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1)
          $(this)
            .next()
            .val(+$(this).next().val() - 1);
      }
    });

    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $("#imagePreview").css(
            "background-image",
            "url(" + e.target.result + ")",
          );
          $("#imagePreview").hide();
          $("#imagePreview").fadeIn(650);
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").on("change", function () {
      readURL(this);
    });
  });

  // preloader
  $(window).on("load", function () {
    $("#loading").fadeOut();
  });

  // sticky header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 60) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  var btn = $(".scroll-top");

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  $(".header-search-icon").on("click", function () {
    $(".header-search-hide-show").addClass("show");
    $(".header-search-icon").hide();
    $(".close-hide-show").addClass("show");
  });

  $(".close-hide-show").on("click", function () {
    $(".close-hide-show").removeClass("show");
    $(".header-search-hide-show").removeClass("show");
    $(".header-search-icon").show();
  });

  $(".sidebar-overlay, .close-hide-show").on("click", function () {
    $(".sidebar-menu-wrapper").removeClass("show");
    $(".sidebar-overlay").removeClass("show");
  });

  // tap to top with progress

  if ($(".scroll-top").length > 0) {
    var $scrollTopBtn = $(".scroll-top");
    var $progressPath = $(".scroll-top path");
    var pathLength = $progressPath[0].getTotalLength();

    $progressPath.css({
      transition: "none",
      strokeDasharray: pathLength + " " + pathLength,
      strokeDashoffset: pathLength,
    });

    $progressPath[0].getBoundingClientRect();
    $progressPath.css({
      transition: "stroke-dashoffset 10ms linear",
    });

    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      $progressPath.css("strokeDashoffset", progress);
    };

    updateProgress();

    $(window).on("scroll", updateProgress);

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) {
        $scrollTopBtn.addClass("show");
      } else {
        $scrollTopBtn.removeClass("show");
      }
    });

    $scrollTopBtn.on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  }

  // slider
  $(document).ready(function () {
    function adjustTransform(currentSlide) {
      var screenWidth = $(window).width();
      var translateValue = currentSlide * -436;

      if (screenWidth > 575) {
        $(".slick-track").each(function () {
          var newTransformValue =
            "translate3d(" + translateValue + "px, 0px, 0px)";
          $(this).css("transform", newTransformValue);
        });
      } else {
        $(".slick-track").each(function () {
          $(this).css("transform", "");
        });
      }
    }

    $(".solution-slider")
      .on("init", function (event, slick) {
        setTimeout(function () {
          adjustTransform(0);
        }, 10);
      })
      .on("afterChange", function (event, slick, currentSlide) {
        setTimeout(function () {
          adjustTransform(currentSlide);
        }, 10);
      })
      .slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });

    $(".testimonial-slider").slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".testimonial-slider--three").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".service-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,

      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".service-slider--two").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,

      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".lawyers-slider").slick({
      centerMode: true,
      centerPadding: "-140px",
      slidesToShow: 3,
      variableWidth: true,
      prevArrow:
        '<button type="button" class="btn btn-outline--base text--black px-3 slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="btn btn-outline--base text--black px-3 slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            variableWidth: false,
            centerMode: true,
            centerPadding: "120px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            variableWidth: false,
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            variableWidth: false,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".solution-slider--two").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,

      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".legal-solutions__slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      // arrows: true,
      centerMode: true,
      centerPadding: "0px",
      // variableWidth: false,
      prevArrow: $(".legal-prev"),
      nextArrow: $(".legal-next"),
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".case-study__slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      // arrows: true,
      centerMode: true,
      centerPadding: "0px",
      // variableWidth: false,
      prevArrow: $(".case-prev"),
      nextArrow: $(".case-next"),
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".blog-slider--two-v3").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,

      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".partner-slider").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".blog-slider--two").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(".testimonial-slider__index4").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow: $(".testimonial-prev"),
      nextArrow: $(".testimonial-next"),
    });

    $(".blog-slider--three").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 3000,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".blog-slider--two-v2").slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  $(document).ready(function () {
    function setSlickCurrentToSecondSlide(slick) {
      var slides = $(slick.$slides);
      slides.removeClass("slick-current");

      var secondVisibleIndex;
      if (slick.options.slidesToShow > 1) {
        secondVisibleIndex = slick.currentSlide + 1;
      } else {
        secondVisibleIndex = slick.currentSlide;
      }

      slides.eq(secondVisibleIndex).addClass("slick-current");
    }

    $(".service-slider--three").on("init", function (event, slick) {
      setSlickCurrentToSecondSlide(slick);
    });

    $(".service-slider--three").on(
      "afterChange",
      function (event, slick, currentSlide) {
        setSlickCurrentToSecondSlide(slick);
      },
    );

    $(".service-slider--three").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // Ensure correct positioning and class setting after window resize
    $(window).on("resize", function () {
      $(".service-slider--three").slick("setPosition");
    });
  });

  // toggle show hide password
  $(".toggle-password-change").on("click", function () {
    var targetId = $(this).data("target");
    var target = $("#" + targetId);
    var icon = $(this);
    if (target.attr("type") === "password") {
      target.attr("type", "text");
      icon.removeClass("fa-eye-slash");
      icon.addClass("fa-eye");
    } else {
      target.attr("type", "password");
      icon.removeClass("fa-eye");
      icon.addClass("fa-eye-slash");
    }
  });

  // wow init
  new WOW().init();

  // tap to show balance
  $(document).on("click", ".textt, .balance", function () {
    $(this).toggleClass("d-none");
    $(this).siblings(".textt, .balance").toggleClass("d-none");
    var $tapBalance = $(".tap--balance");
    $tapBalance.toggleClass("flex-row-reverse");
    $tapBalance.addClass("transition-animation");
    setTimeout(function () {
      $tapBalance.removeClass("transition-animation");
    }, 300);
  });

  // for accordion
  $(document).ready(function () {
    function applyExpandedClassOnLoad() {
      $("#accordionFlushExample .accordion-item").each(function () {
        var $accordionItem = $(this);
        var $button = $accordionItem.find(".accordion-button");
        if ($button.attr("aria-expanded") === "true") {
          $accordionItem.addClass("active");
        }
      });
    }

    applyExpandedClassOnLoad();

    $("#accordionFlushExample").on("shown.bs.collapse", function (e) {
      var $accordionItem = $(e.target).closest(".accordion-item");
      $accordionItem.addClass("active");
    });

    $("#accordionFlushExample").on("hidden.bs.collapse", function (e) {
      var $accordionItem = $(e.target).closest(".accordion-item");
      $accordionItem.removeClass("active");
    });
  });

  $(".caret").on("click", function () {
    $(this).toggleClass("caret-down");
    $(this).next(".nested").toggleClass("active");
  });

  Splitting();

  $(document).on("click", ".follow-this", function () {
    if ($(this).text().trim() === "Follow") {
      $(this).text("Following");
      $(this).addClass("following");
    } else {
      $(this).text("Follow");
      $(this).removeClass("following");
    }
  });

  // photo upload
  $(document).ready(function () {
    var images = [];

    function selectFiles() {
      $("#fileInput").trigger("click");
    }

    function onFileSelect(event) {
      const files = event.target.files;

      if (files.length === 0) return;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!images.some((e) => e.name == files[i].name)) {
          images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          });
        }
      }
      updateImages();
    }

    function deleteImage(index) {
      images.splice(index, 1);
      updateImages();
    }

    function updateImages() {
      $("#containerArea").empty();
      images.forEach(function (image, index) {
        var deleteButton = $(
          '<span class="delete"><i class="fa-solid fa-xmark"></i></span>',
        );
        deleteButton.on("click", function () {
          deleteImage(index);
        });

        var imageDiv = $('<div class="image"></div>')
          .append(deleteButton)
          .append($('<img src="' + image.url + '" alt="..."/>'));
        $("#containerArea").append(imageDiv);
      });
    }

    function onDragOver(event) {
      event.preventDefault();
      $("#dragArea").addClass("isDragging");
      event.originalEvent.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event) {
      event.preventDefault();
      $("#dragArea").removeClass("isDragging");
    }

    function onDrop(event) {
      event.preventDefault();
      $("#dragArea").removeClass("isDragging");
      const files = event.originalEvent.dataTransfer.files;
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.split("/")[0] !== "image") continue;
        if (!images.some((e) => e.name == files[i].name)) {
          images.push({
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          });
        }
      }
      updateImages();
    }

    // Event delegation for file input click
    $(document).on("click", "#fileInput", function () {
      $(this).trigger("click");
    });

    // Event delegation for delete button
    $(document).on("click", ".deleteButton", function () {
      var index = $(this).data("index");
      deleteImage(index);
    });

    $("#fileInput").on("change", onFileSelect);
    $("#dragArea")
      .on("dragover", onDragOver)
      .on("dragleave", onDragLeave)
      .on("drop", onDrop);
  });

  $(document).ready(function () {
    function updateTotalPrice(container) {
      var priceInput = container.find(".form--control.price");
      var buyerFeeElement = container.find(".buyer--fee");
      var totalPriceElement = container.find(".total--price");

      var price = parseFloat(priceInput.val());

      if (isNaN(price)) {
        price = 0;
      }

      var buyerFee = parseFloat(buyerFeeElement.text().replace("$", ""));

      var totalPrice = price + buyerFee;

      totalPriceElement.text("$" + totalPrice.toFixed(2));
    }

    $(".price-option--wrap").each(function () {
      var container = $(this);

      container.find(".form--control.price").on("input", function () {
        updateTotalPrice(container);
      });

      updateTotalPrice(container);
    });
  });

  $(document).ready(function () {
    let lastScrollTop = 0;
    const element = $(".header-two--wrap");

    $(window).on("scroll", function () {
      const scrollTop = $(window).scrollTop();

      if (scrollTop > lastScrollTop) {
        element.addClass("scrolled");
        element.removeClass("animate");
      } else {
        element.removeClass("scrolled");
        element.addClass("animate");
      }

      lastScrollTop = scrollTop;
    });
  });

  $(document).ready(function () {
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let countDown = new Date("july 30, 2024 00:00:00").getTime();

    function myRacing() {
      let nowDate = new Date().getTime();
      let distance = countDown - nowDate;

      $("#days").text(Math.floor(distance / day));
      $("#hours").text(Math.floor((distance % day) / hour));
      $("#minutes").text(Math.floor((distance % hour) / minute));
      $("#seconds").text(Math.floor((distance % minute) / second));

      // When the countdown is over
      if (distance < 0) {
        clearInterval(MyTimer);
        $("#timeToStart").text("The camp began ☻");
        $("#timeControl").empty();
      }
    }

    let MyTimer = setInterval(myRacing, 1000);
  });

  $(".topheader-close--btn").on("click", function () {
    $(".offer--coutdown").addClass("d-none");
  });

  $(window).on("load", function () {
    setTimeout(function () {
      $(".hero-ani--thumb").addClass("show");
    }, 500);
    setTimeout(function () {
      $(".hero-ani--thumb1").addClass("show");
    }, 850);
    setTimeout(function () {
      $(".hero-ani--thumb2").addClass("show");
    }, 600);
  });

  $(document).ready(function () {
    progress_bar();
  });

  function progress_bar() {
    var speed = 30;
    var items = $(".progress--bar").find(".item--wrap");

    items.each(function () {
      var item = $(this).find(".value--progress");
      var itemValue = item.data("progress");
      var i = 0;
      var value = $(this);

      var count = setInterval(function () {
        if (i <= itemValue) {
          var iStr = i.toString();
          item.css({
            width: iStr + "%",
          });
          value.find(".item--value").html(iStr + "%");
        } else {
          clearInterval(count);
        }
        i++;
      }, speed);
    });
  }

  let animationFrameId;

  function updateCounter() {
    const now = moment();
    const targetDate = moment("2025-12-31 23:59:59");
    const duration = moment.duration(targetDate.diff(now));

    const days = String(duration.days()).padStart(2, "0");
    const hours = String(duration.hours()).padStart(2, "0");
    const minutes = String(duration.minutes()).padStart(2, "0");
    const seconds = String(duration.seconds()).padStart(2, "0");

    function createSpanElements(number) {
      return number
        .split("")
        .map((digit) => `<span class="digit">${digit}</span>`)
        .join("");
    }

    $("#days").html(createSpanElements(days));
    $("#hours").html(createSpanElements(hours));
    $("#minutes").html(createSpanElements(minutes));
    $("#seconds").html(createSpanElements(seconds));

    if (duration.asSeconds() > 0) {
      animationFrameId = requestAnimationFrame(updateCounter);
    } else {
      cancelAnimationFrame(animationFrameId);
      $("#days, #hours, #minutes, #seconds").empty();
    }
  }

  $(document).ready(function () {
    updateCounter();

    // Event delegation for add ticket button
    $(document).on("click", ".add--ticket", function () {
      var newTicketCard = `
      <div class="ticket radius--8 d-flex flex-column justify-content-center align-items-center gap--24">
          <div class="title--wrap d-flex justify-content-between align-items-center gap--12 w--100">
              <p class="text--white">Your Ticket Number</p>
              <button class="close-btn text--white"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="number--wrap">
              <h6 class="ticket-number digital--number-font fs--24">0000000000</h6>
          </div>
          <div class="btn--wrap">
              <button class="btn btn--base br-btm--0 generate--btn">Generate</button>
          </div>
      </div>
  `;

      $(".ticket-card--wrap").append(newTicketCard);
    });

    // close button - already using event delegation
    $(".ticket-card--wrap").on("click", ".close-btn", function () {
      $(this).closest(".ticket").remove();
    });

    // generate button - already using event delegation
    $(".ticket-card--wrap").on("click", ".generate--btn", function () {
      $(this).closest(".ticket").find(".ticket-number").addClass("generated");
    });

    // price
    var price = $(".price--wrap .price").text().trim();
    $(".ticket-price").text(price);

    // update ticket price
    var ticketCount = 1;
    var price = parseFloat($(".price").text().replace("$", ""));

    function updateTicketPrice() {
      var totalPrice = ticketCount * price;
      $(".ticket-price").text("$" + totalPrice.toFixed(2));
      $(".total-ticket").text(ticketCount);
    }

    updateTicketPrice();

    $(".add--ticket").on("click", function () {
      ticketCount++;

      updateTicketPrice();
    });

    $(".ticket-card--wrap").on("click", ".close-btn", function () {
      if (ticketCount > 1) {
        ticketCount--;

        updateTicketPrice();
      } else {
      }
    });

    $(".image-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".popup_video").magnificPopup({
      type: "iframe",
    });

    // section bg add
    $("[data-bg]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-bg") + ")");
    });

    // Event delegation for filter buttons
    $(document).on("click", ".filter-button", function () {
      var value = $(this).attr("data-filter");

      // Remove active class from all filter buttons
      $(".filter-button").removeClass("active");
      // Add active class to clicked button
      $(this).addClass("active");

      if (value == "All") {
        $(".filter").show("1000");
      } else {
        $(".filter")
          .not("." + value)
          .hide("3000");
        $(".filter")
          .filter("." + value)
          .show("3000");
      }
    });
  }); // End of document ready
})(jQuery);
