'use strict';

var data_venues = {
  this.names = [],
  this.address = [],
  this.neighborhood = [],
  this.box_hours = [],
  this.phone = [],
  this.occupancy = [],
  this.descriptions = []
}

var data_shows = {
  this.names = [],
  this.types = [],
  this.descriptions = []
}

function Schedules(show, venue, date_start, date_end, price, time) = {
  this.show = show;
  this.venue = venue;
  this.date_start = date_start;
  this.date_end = date_end;
  this.price = price;
  this.time = time;
}
