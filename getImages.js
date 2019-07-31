function fetchJSON(path, callback) {
    var key = "563492ad6f9170000100000121ee626bc2ab487a82b19ab59e4a8f04";
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.setRequestHeader("Authorization", key);
    httpRequest.send();
}

function randomImageHome() {
  var endpoint = "https://api.pexels.com/v1/search?query=calm&per_page=1&page=";
  var randomImageId = (Math.floor(Math.random() * 1000) + 1).toString();

  endpoint += randomImageId;

  fetchJSON(endpoint, function(data) {
    document.getElementById("randImages").src = data.photos[0].src.original;
  });
}

function init() {
  randomImageHome();
}

window.onload = init;
