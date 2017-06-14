'use strict'

function StoreInfo(minPrice, maxPrice, Avg){
  this.minPrice = minPrice;
  this.maxPrice = maxPrice;
  this.Avg  = Avg;
}

function makeRow(item){
  //Step 1 -creat element
  var newRowEl = document.createElement('tr');

  //Step2 - Configure/Mutate the Row element
  var itemMinPriceEl = document.createElement('td');
  itemMinPriceEl.textContent = this.minPrice;
  newRowEl.appendChild(itemMinPriceEl);

  var itemMaxPriceEl = document.createElement('td');
  itemMaxPriceEl.textContent = this.maxPrice;
  newRowEl.appendChild(itemMaxPriceEl);

  var itemAvgEl = document.createElement('td');
  itemAvgEl.textContent = this.Avg;
  newRowEl.appendChild(itemAvgEl);

  //Stage-3 Append Element to form
  tableBodyEl.appendChild(newRowEl);
};
var tableEl = document.getElementById('generated-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);
