'use strict';

function StoreInfo(minPrice, maxPrice, Avg){
  this.minPrice = minPrice;
  this.maxPrice = maxPrice;
  this.Avg  = Avg;
  this.hourlySales = 0;
  this.results = [];
  this.totalSales = 0;
}
StoreInfo.prototype.randomNum = function () {
  return Math.floor(Math.random()*((this.maxPrice + 1)- this.minPrice) + this.minPrice);

};

var firstInPike = new StoreInfo (23,65,6.3);
var seaTac = new StoreInfo (3,24,1.2);
var seattleCenter = new StoreInfo (11,38,3.7);
var capHill = new StoreInfo (20,38,2.3);
var alki =  new StoreInfo (2,16,4.6);

var storesArray = [firstInPike,seaTac,seattleCenter,capHill,alki];
var totalPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


//all calu for each store
for (var s = 0; s < storesArray.length; s++) {
  var currentStore = storesArray[s];
  for (var h = 0; h < 15; h++) {
    currentStore.hourlySales = Math.floor(currentStore.randomNum() * currentStore.Avg);
    currentStore.results.push(currentStore.hourlySales);
    currentStore.totalSales += (currentStore.hourlySales);
  }
}
//writes to  the html
function makeRows(){
  for (var s = 0; s < storesArray.length; s++){
    var currentStore = storesArray[s];
var  firstRow = document.getElementById([s]);

for (var i = 0; i < currentStore.results.length; i++) {
  var resultData = document.createElement('td');
  resultData.textContent = currentStore.results[i];
  firstRow.appendChild(resultData);
}
var totalData = document.createElement('td');
totalData.textContent = currentStore.totalSales;
firstRow.appendChild(totalData);
}
}


makeRows();















//Below is tested and fail and old code

// function makeRow(item){
// var  firstRow = document.getElementById('firstInPike');
//
// for (var i = 0; i < currentStore.length; i++) {
//
// }
  //Step 1 -creat element
  // var newRowEl = document.createElement('tr');
  //
  // //Step2 - Configure/Mutate the Row element
  // var itemMinPriceEl = document.createElement('td');
  // itemMinPriceEl.textContent = this.minPrice;
  // newRowEl.appendChild(itemMinPriceEl);
  //
  // var itemMaxPriceEl = document.createElement('td');
  // itemMaxPriceEl.textContent = this.maxPrice;
  // newRowEl.appendChild(itemMaxPriceEl);
  //
  // var itemAvgEl = document.createElement('td');
  // itemAvgEl.textContent = this.Avg;
  // newRowEl.appendChild(itemAvgEl);
  //
  // //Stage-3 Append Element to form
  // tableBodyEl.appendChild(newRowEl);
// };
//unneeded code.
// var tableEl = document.getElementById('generated-table');
// var tableBodyEl = document.createElement('tbody');
