'use strict';

var data_venues_name = [];
var data_venues_address = [];
var data_venues_neighborhood = [];
var data_venues_box_hours = [];
var data_venues_phone = [];
var data_venues_occupancy = [];
var data_venues_description = [];
var data_venues = [data_venues_name, data_venues_address, data_venues_neighborhood, data_venues_box_hours, data_venues_phone, data_venues_occupancy, data_venues_description];

var data_shows_name = [];
var data_shows_types = [];
var data_shows_description = [];
var data_shows = [data_shows_name, data_shows_types, data_shows_description];

function Event(show, venue, date_start, date_end, price, time) {
  this.show = show;
  this.venue = venue;
  this.date_start = date_start;
  this.date_end = date_end;
  this.price = price;
  this.time = time;
};

function Show(show_name, show_type, show_description) {
  this.show_name = show_name;
  this.show_type = show_type;
  this.show_description = show_description;
};

function Venue(venue_name, venue_address, venue_neighborhood, venue_box_hours, venue_phone, venue_occupancy, venue_description) {
  this.venue_name = venue_name;
  this.venue_address = venue_address;
  this.venue_neighborhood = venue_neighborhood;
  this.venue_box_hours = venue_box_hours;
  this.venue_phone = venue_phone;
  this.venue_occupancy = venue_occupancy;
  this.venue_description = venue_description;
}

var shows = [];
var venues = [];
var events = [];
