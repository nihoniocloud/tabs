const select = document.getElementById("select"),
elem = document.getElementById("elem");

select.addEventListener("click", function (e) {
  if (elem) {
    elem.click();
  }
}, false);
