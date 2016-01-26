//addShow Function
function addShow() {

}
//resetForm Function
function resetForm() {

}
//search Function
function search() {

}
//addVenue Function
function addVenue() {

}

//Get input
var searchButton = document.getElementById('search');
var addShowButton = document.getElementById('add_show');
var resetFormButton = document.getElementById('reset_form');
var addVenueButton = document.getElementById('add_venue');

//Event Listeners for 'Add Show', 'Add Venue', 'Search',  and 'Reset Form' buttons
form_search.addEventListener('submit', eventHandlerSubmit);
addShowButton.addEventListener('submit', addShowFunction_goes_here);
resetFormButton.addEventListener('click', resetFormFunction_goes_here);
addVenueButton.addEventListener('submit', addVenueFunction_goes_here);
