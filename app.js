var request = superagent;
var API_URL = "https://restcountries.eu/rest/v2/all";

var button = document.querySelectorAll("button");

button.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    var languages = e.target.value;
    var count = 0;

    request.get(API_URL).then(function(response) {
      var countries = response.body;
      var table = "";
      console.log(response.body);

      countries.forEach(function(list) {
        var name = list.name;
        var latitud = list.latlng[0];
        var longitud = list.latlng[1];
        var flag = list.flag;

        if (languages === "all") {
          table += `  <tr>
            <td>${name}</td>
            <td>${latitud}</td>
            <td>${longitud}</td>
            <td><img src="${flag}" alt=""></td>
            </tr> `;
          count++;
        }

        if (languages === list.languages[0].iso639_1) {
          table += ` <tr>
            <td>${name}</td>
            <td>${latitud}</td>
            <td>${longitud}</td>
            <td><img src="${flag}" alt=""></td>
            </tr> `;
          count++;
        }
      });
      document.querySelector(".counts").textContent = count;
      document.querySelector("table tbody").innerHTML = table;
    });
  });
});
