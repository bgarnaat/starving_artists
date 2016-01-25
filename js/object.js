'use strict';

var data_venues_name = [];
var data_venues_address = [];
var data_venues_neighborhood = [];
var data_venues_box_hours = [];
var data_venues_phone = [];
var data_venues_occupancy = [];
var data_venues_description = [];
var data_venues = [data_venues_name, data_venues_address, data_venues_neighborhood, data_venues_box_hours, var data_venues_phone, var data_venues_occupancy, var data_venues_description];

var data_shows_name = [];
var data_shows_types = [];
var data_shows_description = [];
var data_shows = [data_shows_name, data_shows_types, data_shows_description];

function Schedules(show, venue, date_start, date_end, price, time) = {
  this.show = show;
  this.venue = venue;
  this.date_start = date_start;
  this.date_end = date_end;
  this.price = price;
  this.time = time;
}
