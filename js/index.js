'use strict';  //Dropdown for venues on Index Page.

function fillVenueDropdown() {
  var input_venue = document.getElementById('input_venue');
  for (var i = 0; i < venues.length; i++) {
    var drop_venue = document.createElement('option');
    drop_venue.value = venues[i].venue_name;
    drop_venue.textContent = venues[i].venue_name;
    input_venue.appendChild(drop_venue);
  }
}
function fillShowDropdown() {
  var input_show = document.getElementById('input_show');
  for (var i = 0; i < shows.length; i++) {
    var drop_show = document.createElement('option');
    drop_show.value = shows[i].show_name;
    drop_show.textContent = shows[i].show_name;
    input_show.appendChild(drop_show);
  }
}
function fillTypeDropdown() {
  var input_type = document.getElementById('input_type');
  for (var i = 0; i < type.type_name.length; i++) {
    var drop_type = document.createElement('option');
    drop_type.value = type.type_name[i];
    drop_type.textContent = type.type_name[i];
    input_type.appendChild(drop_type);
  }
}

window.setTimeout(fillVenueDropdown, 1000);
window.setTimeout(fillShowDropdown, 1000);
window.setTimeout(fillTypeDropdown, 1000);
