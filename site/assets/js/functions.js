$(window).scroll(function() {


  var wScroll = $(this).scrollTop();

  $('.logo-container').css({
    'transform' : 'translate(0px, '+ wScroll /5 +'%)'
  });

  $('.blue-blur').css({
    'transform' : 'translate(0px, '+ wScroll /8 +'%)'
  });


  $('.purple-blur').css({
    'transform' : 'translate(0px, -'+ wScroll /10 +'%)',
    // 'transform' : 'rotate(-'+ wScroll /10 +'deg)'
  });


});
