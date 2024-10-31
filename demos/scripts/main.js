"use strict";

const mostTraveledCities = [
    {
      city: "Paris",
      country: "France",
      averageVisitorsPerYear: 30000000,
      mainAttraction: "Eiffel Tower"
    },
    {
      city: "Bangkok",
      country: "Thailand",
      averageVisitorsPerYear: 25000000,
      mainAttraction: "Grand Palace"
    },
    {
      city: "London",
      country: "United Kingdom",
      averageVisitorsPerYear: 20000000,
      mainAttraction: "British Museum"
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      averageVisitorsPerYear: 16000000,
      mainAttraction: "Burj Khalifa"
    },
    {
      city: "New York",
      country: "USA",
      averageVisitorsPerYear: 13000000,
      mainAttraction: "Statue of Liberty"
    },
    {
      city: "Istanbul",
      country: "Turkey",
      averageVisitorsPerYear: 14000000,
      mainAttraction: "Hagia Sophia"
    },
    {
      city: "Tokyo",
      country: "Japan",
      averageVisitorsPerYear: 14000000,
      mainAttraction: "Shibuya Crossing"
    },
    {
      city: "Rome",
      country: "Italy",
      averageVisitorsPerYear: 10000000,
      mainAttraction: "Colosseum"
    }
  ];

  // let citiesTBody = document.getElementById("citiesTBody");
let citiesTBody = document.querySelector("#citiesTBody");
console.log(citiesTBody);


for (const city of mostTraveledCities) {

  let tr = document.createElement("tr");
  citiesTBody.appendChild(tr)

  let td1 = document.createElement("td");
  td1.innerText = city.city;
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = city.country;
  tr.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = city.averageVisitorsPerYear;
  tr.appendChild(td3);

  let td4 = document.createElement("td");
  td4.innerText = city.mainAttraction;
  tr.appendChild(td4);
}