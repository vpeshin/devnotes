$(window).scroll(function() {
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();
  // console.log(wScroll);

  $('.parallax--bg').css('background-position', 'center ' + (wScroll * 0.75) + 'px');

  $('.parallax--box').css('top', -5 + (wScroll * 0.005) + 'em');
}