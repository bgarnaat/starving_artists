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
window.setTimeout(fillVenueDropdown, 1000);
