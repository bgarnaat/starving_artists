'use strict';  //Dropdown for venues on Index Page.

function fillVenueDropdown() {
  var venueDrop = document.getElementById('input_venue');
  for (var i = 0; i < venues.length; i++) {
    var venueOption = document.createElement('option');
    venueOption.value = venues[i].venue_name;
    venueOption.innerText = venues[i].venue_name;
    venueDrop.appendChild(venueOption);
  }
}
window.setTimeout(fillVenueDropdown);

fillVenueDropdown();

function fillShowDropdown() {
  var showDrop = document.getElementById('input_show');
  for (var i = 0; i < shows.length; i++) {
    var showOption = document.createElement('option');
    showOption.value = shows[i].show_name;
    showOption.textContent = shows[i].show_name;
    showDrop.appendChild(showOption);
  }
}

fillShowDropdown();
