const elem = document.getElementById("elem"),
select = document.getElementById("select");

elem.addEventListener("click", function (e) {
  if (select) {
    select.click();
  }
}, false);
