function makeRequest() {
  var url = "https://restcountries.eu/rest/v2/all";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", function() {
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var data = JSON.parse(jsonString);
    populateList(data);
  });
  request.send();
}

function populateList(countries) {
  var ul = document.createElement("ul");
  countries.forEach(function(country) {
    var li = document.createElement("li");
    li.textContent = country.name;
    ul.appendChild(li);
  });
  document.body.appendChild(ul)
}

window.addEventListener("load", makeRequest);
