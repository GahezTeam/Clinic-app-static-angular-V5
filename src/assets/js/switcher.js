$(document).ready(function () {
  $(".switch_btn button").click(function () {
    $(".switch_menu").toggleClass("active");
    $(".switch_menu").toggle(500);
  });
});

function switchStyle(styleName) {
  document.getElementById("switcher-color").setAttribute("href", styleName);
}
