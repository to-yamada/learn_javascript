$(function() {
  // 最上部へ移動
  $('#page-top').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });

  // 最下部へ移動
  $('#page-bottom').click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  });
});

