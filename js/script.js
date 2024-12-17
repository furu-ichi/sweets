// ナビゲーションの「Menu」のブロワーメニューを展開
$("#js-menu").on("click", function () {
  $(".js-menu-drawer").slideToggle();
});

// トップへ戻る
$(".js-scroll-top").on("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

// トップへ戻るボタンフェードイン
$(window).scroll(function () {
  const top = $(window).scrollTop();
  if (top > 80) {
    $(".js-scroll-top").fadeIn(300);
  } else if (top < 80) {
    $(".js-scroll-top").fadeOut(300);
  }
});

// 写真をクリックしたら拡大表示
$(".js-menu-img").on("click", function () {
  const srcVal = $(this).attr("src");
  $("#expansion").attr("src", srcVal);
  $(".js-img-click").fadeIn();
});

// 任意の場所クリックしたら拡大を非表示
$(".js-img-click").on("click", function () {
  $(".js-img-click").fadeOut();
});
