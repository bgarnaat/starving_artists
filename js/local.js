'use strict'

var ls_event_data = 'ls_event_data';
var ls_show_data = 'ls_show_data';
var ls_venue_data = 'ls_venue_data';

ls_initialize(ls_show_data, shows);
ls_initialize(ls_venue_data, venues);
ls_initialize(ls_event_data, scheduled_events);

function ls_initialize(ls_name, src_object) {
  var ls_file = localStorage.getItem(ls_name);
  if (ls_file) {
    console.log('Loading local storage file: ' + ls_name);
    ls_read(ls_file, src_object)
  } else {
    console.log('Local storage empty!  Initializing local storage.');
    ls_write(ls_name, src_object);
  }
}
function ls_read(ls_file, src_object) {
  src_object = JSON.parse(ls_file);
}
function ls_write(ls_name, src_object) {
  localStorage.setItem(ls_name, JSON.stringify(src_object));
}
