'use strict'

var ls_event_data = 'ls_event_data';
var ls_show_data = 'ls_show_data';
var ls_venue_data = 'ls_venue_data';

var storeHelper = {
  "shows": shows,
  "venues": venues,
  "scheduled_events": scheduled_events
}

ls_initialize(ls_show_data, storeHelper, "shows");
ls_initialize(ls_venue_data, storeHelper, "venues");
ls_initialize(ls_event_data, storeHelper, "scheduled_events");

function ls_initialize(ls_name, src_object, key) {
  var ls_file = localStorage.getItem(ls_name);
  if (ls_file) {
    console.log('Loading local storage file: ' + ls_name);
    ls_read(ls_file, src_object, key);
  } else {
    console.log('Local storage empty!  Initializing local storage.');
    ls_write(ls_name, src_object, key);
  }
}
function ls_read(ls_file, src_object, key) {
  src_object[key] = JSON.parse(ls_file);
}
function ls_write(ls_name, src_object, key) {
  localStorage.setItem(ls_name, JSON.stringify(src_object[key]));
}

venues = storeHelper["venues"];
shows = storeHelper["shows"];
scheduled_events = storeHelper["scheduled_events"];
