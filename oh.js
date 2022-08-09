function getQueryStringParam(param) {
  var url = window.location.toString();
  url.match(/\?(.+)$/);
  var params = RegExp.$1;
  params = params.split("&");
  var queryStringList = {};
  for(var i = 0; i < params.length; i++) {
    var tmp = params[i].split("=");
    queryStringList[tmp[0]] = unescape(tmp[1]);
  }
  return decodeURIComponent(queryStringList[param]);
}
let qParam = getQueryStringParam('q').split('+').join(' ');
const div = document.getElementById('uText');
div.innerHTML = qParam;
