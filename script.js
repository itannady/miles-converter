/*
Write a function called milesToKilometers that takes an input of the number of miles 
and outputs the result of the number of kilometers.
*/

//1 km = 0.62137 mi
//1 mi = 1.60934 km

//Conversion function

function milesToKilometers(val) {
    let output = (Number(val) * 1.60934) ;
    return output.toFixed(4)
    
}

console.log(milesToKilometers(2))