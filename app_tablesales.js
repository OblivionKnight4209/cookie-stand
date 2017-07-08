'use strict';

function StoreInfo(minPrice, maxPrice, Avg) {
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
function makeRows() {
  for (var s = 0; s < storesArray.length; s++) {
    var currentStore = storesArray[s];
    var  firstRow = document.getElementById([s]);
  for (var i = 0; i < currentStore.results.length; i++) {
    var resultData = document.createElement('td');
    resultData.textContent = currentStore.results[i];
    firstRow.appendChild(resultData);
  };
  var totalData = document.createElement('td');
  totalData.textContent = currentStore.totalSales;
  firstRow.appendChild(totalData);
  };
};

makeRows();
