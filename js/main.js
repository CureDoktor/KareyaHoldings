function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

$(window).on("scroll load resize", function () {
  $(".do-animation").each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).removeClass("do-animation");
      $(this).addClass("animate");
    }
  });
});

$(window).on("scroll load resize", function () {
  $(".do-text").each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).removeClass("do-text");
      $(this).addClass("textMove");
    }
  });
});
