'use strict';

var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearStorage);

function clearStorage() {
  localStorage.clear();
  console.log('clearing');
}
