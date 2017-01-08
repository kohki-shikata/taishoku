$(document).foundation();

// previewの高さを設定
var page = $('#preview > .page');

var pagew = page.innerWidth();

$(page).css("height",pagew * 1.41428);
