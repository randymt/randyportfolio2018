$(window).scroll(function() {


  var wScroll = $(this).scrollTop();

  $('.logo-container').css({
    'transform' : 'translate(0px, '+ wScroll /5 +'%)'
  });

  $('.blue-blur').css({
    'transform' : 'translate(0px, '+ wScroll /10 +'%)'
  });

  $('.purple-blur').css({
    'transform' : 'translate(0px, -'+ wScroll /45 +'%)',
    'transform' : 'rotate(-'+ wScroll /10 +'deg)'
  });


});
