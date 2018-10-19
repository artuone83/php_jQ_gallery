$(function () {
  var current_li;
  // search engine

  $('#search').keyup(function () {

    var current_query = $(this).val();
    if (current_query != '') {
      $('.gallery ul li').hide();
      $('.gallery ul li').each(function () {
        var current_keyword = $(this).attr('data-keyword');
        if (current_keyword.indexOf(current_query) >= 0) {
          $(this).show();
        }
      });
    } else {
      $('.gallery ul li').show();
    }
  });

  // to take and sort pictures by mouse
  $(".gallery ul").sortable({
    stop: function () {
      var list_content = $(".gallery ul").html();
      $.post("include/list_change.php", {
        list: list_content
      });
    }
  });

  function setImg(src, id) {
    $(".frame img").attr("src", src);
    var path = "text/" + id + ".txt";
    $.get(path, function (data) {
      $(".figcaption p").text(data);
    });
  }
  $(".gallery").on("click", "img", function () {
    var clickImgSource = $(this).attr("src");
    var clickImgId = $(this).attr("id");
    setImg(clickImgSource, clickImgId);
    current_li = $(this).parent();
    $(".overlay").fadeIn();
    $(".frame").fadeIn();

    $(".overlay").click(function () {
      $(".frame").fadeOut();
      $(this).fadeOut();
    });
  });
  // frame btn click
  // frame right btn click
  $(".btn-right").click(function () {
    if (current_li.is(":last-child")) {
      var next_li = $(".gallery li").first();
    } else {
      var next_li = current_li.next();
    }
    var next_source = next_li.children("img").attr("src");
    var id = next_li.children("img").attr("id");

    setImg(next_source, id);
    current_li = next_li;
  });
  // frame left btn click
  $(".btn-left").click(function () {
    if (current_li.is(":first-child")) {
      var prev_li = $(".gallery li").last();
    } else {
      var prev_li = current_li.prev();
    }
    var prev_src = prev_li.children("img").attr("src");
    var id = prev_li.children("img").attr("id");

    setImg(prev_src, id);
    current_li = prev_li;
  });
  // filter for gallery
  $(".filter").on("click", "li", function () {
    var category = $(this)
      .html()
      .toLowerCase();
    $(".filter li").removeClass("active");
    $(this).addClass("active");

    if (category == "view all") {
      $(".gallery ul li").fadeIn();
    } else {
      $(".gallery ul li").hide();
      $(".gallery ul li").each(function () {
        if ($(this).hasClass(category)) {
          $(this).fadeIn();
        }
      });
    }
  });
});