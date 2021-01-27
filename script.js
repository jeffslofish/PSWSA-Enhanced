$(function () {
  $("div.maincol table tr a").each(function () {
    let url = "https://portswigger.net" + $(this).attr("href");
    let $that = $(this);

    $.get(url, function (data) {
      var response = $("#PageCompletedContent", data).attr("class");
      if (response === "hidden") {
        $that.text("❌ " + $that.text());
      } else {
        $that.text("✅ " + $that.text());
      }
    });
  });
});
