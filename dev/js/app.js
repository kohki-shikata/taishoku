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

// 私事か私議かの選択

var content_shigi = $('#shigi');
var content_shiji = $('#shiji');

var switch_shigi = $('#type-shigi');
var switch_shiji = $('#type-shiji');

$(switch_shigi).click( function() {
  console.log("switch_shigi is clicked");
  $(content_shigi).removeClass('hide');
  $(content_shiji).addClass('hide');
  $(switch_shiji).addClass('disabled');
  $(switch_shigi).removeClass('disabled');
})
$(switch_shiji).click( function() {
  console.log("switch_shji is clicked");
  $(content_shigi).addClass('hide');
  $(content_shiji).removeClass('hide');
  $(switch_shiji).removeClass('disabled');
  $(switch_shigi).addClass('disabled');
})

//名前のリアルタイム入力
$('#name').on("keyup",function(){
  var name = $(this).val();
  $('#preview .name-person').text(name);
});

//退職日、デートピッカー
var date_fields = [
  '#x-day-date',
  '#submit-day'
];

flatpickr(date_fields);

$(date_fields[0]).on("change",function(){
  var xday = $(this).val();
  xday = xday.split("-");
  $('#preview .x-day').text('平成' + ( xday[0] - 1989 ) + '年' + xday[1] + '月' + xday[2] + '日');
  console.log(xday[0]);
});

$(date_fields[1]).on("change",function(){
  var sday = $(this).val();
  sday = sday.split("-");
  $('#preview .submit-day').text('平成' + ( sday[0] - 1989 ) + '年' + sday[1] + '月' + sday[2] + '日');
  console.log(xday[0]);
});
