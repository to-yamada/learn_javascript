$(function() {
  // メニューの切り替え
  $('#switch').click(function() {
    $('.switch_content').toggleClass('select');
  });

  // 最上部へ移動
  $('#page-top').click(function(e) {
    $('html, body').animate({scrollTop:0}, 'slow');
  });

  // 最下部へ移動
  $('#page-bottom').click(function(e) {
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
  });
});

