
$(window).scroll(function() {


  var wScroll = $(this).scrollTop();

  $('.blue-blur').css({
    'transform' : 'translate(0px, '+ wScroll /8 +'%)'
  });


  $('.purple-blur').css({
    'transform' : 'translate(0px, -'+ wScroll /10 +'%)',
    // 'transform' : 'rotate(-'+ wScroll /10 +'deg)'
  });


});
