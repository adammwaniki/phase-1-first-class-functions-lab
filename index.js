// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//slice the array starting from index 0 inclusive and ending just before index 2
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}//slice the array from index 2 going until the end
const returnLastTwoDrivers = function() {
    return drivers.slice(2)
}

//make an array using the functions we've just made
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//higher order function
//make a function for multiplication of fares
//this function returns another function
//the parameters of the outer function are the multipliers
//the parameters of the inner function are the fares - if you dont do this it won't be able to call the appropriate value when returning the final value
const createFareMultiplier = function (multiplier) {
    return function (fares) {
        return fares * multiplier
    }
}

//function for doubling fares
const fareDoubler = function createFareMultiplier(fares) {
    return fares*2
}
//quintuple fares
const fareQuintupler = function createFareMultiplier(fares) {
    return fares*5
}
//triple fares
const fareTripler = function createFareMultiplier(fares) {
    return fares*3
}

//choose different drivers
//we make a function called selectDifferentDrivers
//it takes an array and a function as its parameters
//it returns the function that was its parameter
//the function that is a parameter has the array as its parameter
const selectDifferentDrivers = function (drivers,returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}