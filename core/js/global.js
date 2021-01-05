$(function () {
  var devicePixelRatio = {
    '1': 1,
    '1.25': 0.85,
    '1.5': 0.8,
    '1.75': 0.55,
    '2': 1
  };
  if(document.body.clientWidth < 1366){
    document.body.style.zoom = devicePixelRatio[window.devicePixelRatio];
  }

  

  $("#flod-btn").click(function () {
    $("#sidebar").toggleClass("sidebar-flod");
    $("#sidebar>ul").toggleClass("m-hide");
    $("#m-content").toggleClass("content-flod");
    $(this).toggleClass("flod-btn-back");
  });
  $('[data-toggle="tooltipp"]').tooltip();

  // 通知消息删除
  $(".view-close").click(function () {
    var index = $(".view-close").index($(this));
    var len = $(".notification .notification-body ul li").length;
    if (len === 1) {
      $(".notification").remove();
    } else {
      $(".notification .notification-body ul li").eq(index).remove();
    }
  });

  $(".table-close").click(function () {
    var index = $(".table-close").index($(this));
    console.log(index);
    $("#choosed_file tbody tr").eq(index).remove();
  });
});
