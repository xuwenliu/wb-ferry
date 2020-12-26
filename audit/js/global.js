$(function () {
  $("#flod-btn").click(function () {
    $("#sidebar").toggleClass("sidebar-flod");
    $("#sidebar>ul").toggleClass("m-hide");
    $("#m-content").toggleClass("content-flod");
    $(this).toggleClass('flod-btn-back');

  });
  $('[data-toggle="tooltipp"]').tooltip();

  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find(".link");
    console.log("links",links)
    // Evento
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());
    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp()
    }
  };

  var accordion = new Accordion($("#accordion"), false);
});
