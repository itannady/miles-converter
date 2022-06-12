/*
Write a function called milesToKilometers that takes an input of the number of miles 
and outputs the result of the number of kilometers.
*/

//1 km = 0.62137 mi
//1 mi = 1.60934 km

//Conversion function

let miles = document.getElementById("mi");
let kilometers = document.getElementById("km");

function milesToKilometers() {
  let output = Number(miles.value * 1.60934);
  kilometers.value = Number(output.toFixed(4));
}

function kilometersToMiles() {
  let output = Number(kilometers.value * 0.62137);
  miles.value = Number(output.toFixed(4));
}
