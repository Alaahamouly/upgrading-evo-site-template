$(function () {
  //adjust slider height
  var winH   = $(window).height(),
      upperH = $('.upper-bar').innerHeight(),
      navH   = $('.navbar').innerHeight(),
      footerH = $('.footer').innerHeight();
      sectionH = $('.industries').innerHeight();
  $('.slider, .carousel-item').height(winH - (upperH + navH + footerH + sectionH));



  // Caching The Scroll Top Element

  var scrollButton = $("#scroll-top");

  $(window).scroll(function()
  {
    $(this).scrollTop() >= 500 ? scrollButton.fadeIn() : scrollButton.fadeOut();
  });

  // Click on Button to Scroll top

  scrollButton.on('click' , function()
  {
    $("html,body").animate({scrollTop:0}, 1500);
    return false;
  });


  //Contact us swipe Down email box

  $(".contact-text").css("top", 0);

});
