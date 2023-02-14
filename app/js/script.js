function renderUnderscore() {
  var underscore = document.getElementById("underscore");
  var visible = true;
  window.setInterval(function () {
    if (visible === true) {
      underscore.className = "underscore hidden";
      visible = false;
    }
    else {
      underscore.className = "underscore";
      visible = true;
    }
  }, 400);
}

renderUnderscore();