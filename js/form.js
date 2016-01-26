'use strict';

console.log('hi');
//addShow Function

//resetForm Function
function resetForm() {

}
//search Function
function search() {

}

var clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clearStorage);

function clearStorage() {
  localStorage.clear();
  console.log('clearing');
}

//Get input
// var searchButton = document.getElementById('form_search');  // not needed.  - BG
// var createshow = document.getElementById('createshow');
// var resetFormButton = document.getElementById('reset_form');

//Event Listeners for 'Add Show', 'Add Venue', 'Search',  and 'Reset Form' buttons
// form_search.addEventListener('submit', eventHandlerSubmit);
// resetFormButton.addEventListener('click', resetFormFunction_goes_here);
