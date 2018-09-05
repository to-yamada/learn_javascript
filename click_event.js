$(function() {
  // メニューの切り替え
  $('#switch').click(function() {
    $('.switch_content_from_top').toggleClass('hidden');
    $('.switch_content_from_bottom').toggleClass('hidden');
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

