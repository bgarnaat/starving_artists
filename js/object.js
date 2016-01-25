'use strict';

var shows = [];
var venues = [];
var scheduled_events = [];

var data_venues_name = ['Venue 1', 'Venue 2', 'Venue 3'];
var data_venues_address = ['Address 1', 'Address 2', 'Address 3'];
var data_venues_neighborhood = ['Area 1', 'Area 2', 'Area 3'];
var data_venues_box_hours = ['1:00 pm - 4:00 pmn', '2:00 pm - 8:00 pm', '3:00 pm - 10:00 pm'];
var data_venues_phone = ['1', '2', '3'];
var data_venues_occupancy = [11, 22, 33];
var data_venues_description = ['Some text 1', 'Some text 2', 'Some text 3'];
var data_venues = [data_venues_name, data_venues_address, data_venues_neighborhood, data_venues_box_hours, data_venues_phone, data_venues_occupancy, data_venues_description];

var data_shows_name = ['Show 1', 'Show 2', 'Show 3'];
var data_shows_types = ['Type 1', 'Type 2', 'Type 3'];
var data_shows_description = ['More text 1', 'More text 2', 'More text 3'];
var data_shows = [data_shows_name, data_shows_types, data_shows_description];

for (var i = 0; i < data_venues[0].length; i++) {
  venues.push(new Venue(data_venues[0][i], data_venues[1][i], data_venues[2][i], data_venues[3][i], data_venues[4][i], data_venues[5][i], data_venues[6][i]));
}
for (var i = 0; i < data_shows_name.length; i++) {
  shows.push(new Show(data_shows[0][i], data_shows[1][i], data_shows[2][i]));
}

var data_event_show = [shows[0], shows[1], shows[2]];
var data_event_venue = [venues[0], venues[1], venues[2]];
var data_event_start = ['1/11/1111', '2/22/2222', '3/33/3333'];
var data_event_end = ['4/44/4444', '5/55/5555', '6/66/6666'];
var data_event_time = ['1:00 pm', '2:00 pm', '3:00 pm'];
var data_event_price = [11, 22, 33];
var data_event = [data_event_show, data_event_venue, data_event_start, data_event_end, data_event_time, data_event_price];

for (var i = 0; i < data_event_show.length; i++) {
  scheduled_events.push(new ScheduledEvent(data_event[0], data_event[1], data_event[2], data_event[3], data_event[4], data_event[5]));
}

function Venue(venue_name, venue_address, venue_neighborhood, venue_box_hours, venue_phone, venue_occupancy, venue_description) {
  this.venue_name = venue_name;
  this.venue_address = venue_address;
  this.venue_neighborhood = venue_neighborhood;
  this.venue_box_hours = venue_box_hours;
  this.venue_phone = venue_phone;
  this.venue_occupancy = venue_occupancy;
  this.venue_description = venue_description;
}
function Show(show_name, show_type, show_description) {
  this.show_name = show_name;
  this.show_type = show_type;
  this.show_description = show_description;
};
function ScheduledEvent(show, venue, date_start, date_end, price, time) {
  this.show = show;
  this.venue = venue;
  this.date_start = date_start;
  this.date_end = date_end;
  this.time = time;
  this.price = price;
