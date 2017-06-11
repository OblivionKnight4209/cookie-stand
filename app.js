'use strict'
var names = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
function getCustomer(min, max){
  min = Math.minCustomersPerHour(min);
  max = Math.maxCustomersPerHour(max);
  return Math.maxCustomersPerHour(Math.random()* (max - min)) + min;
}
