$(function () {
    $("#flod-btn").click(function () {
        $('#sidebar').toggleClass('sidebar-flod');
        $('#sidebar>ul').toggleClass('m-hide');
        $('#m-content').toggleClass('content-flod')
        $(this).toggleClass('flod-btn-back');
    });
    $('[data-toggle="tooltipp"]').tooltip();
})