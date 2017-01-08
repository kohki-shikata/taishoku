$(document).foundation();

// previewの高さを設定
var page = $('#preview > .page');

var pagew = page.innerWidth();

$(page).css("height",pagew * 1.41428);

// 退職届か退職願かの選択

var content_prop = $('.type-proposal.content');
var content_notif = $('.type-notification.content');

var switch_prop = $('#type-proposal');
var switch_notif = $('#type-notif');

$(switch_prop).click( function() {
  console.log("switch_prop is clicked");
  $(content_prop).removeClass('hide');
  $(content_notif).addClass('hide');
  $(switch_prop).addClass('disabled');
  $(switch_notif).removeClass('disabled');
})
$(switch_notif).click( function() {
  console.log("switch_notif is clicked");
  $(content_prop).addClass('hide');
  $(content_notif).removeClass('hide');
  $(switch_prop).removeClass('disabled');
  $(switch_notif).addClass('disabled');
})

//名前のリアルタイム入力
$('#name').on("keyup",function(){
  var name = $(this).val();
  $('#preview .name-person').text(name);
});
