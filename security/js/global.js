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
        $('#sidebar').toggleClass('sidebar-flod');
        $('#sidebar>ul').toggleClass('m-hide');
        $('#m-content').toggleClass('content-flod')
    });
    $('[data-toggle="tooltipp"]').tooltip();
})