'use strict';

function eventHandlerSubmit(event) {
  event.preventDefault();

  var input = {
    in_show: event.target.input_show.value,
    in_date: event.target.input_date.value,
    in_venue: event.target.input_venue.value,
    in_type: event.target.input_type.value,
    in_low: event.target.input_low.value,
    in_med: event.target.input_med.value,
    in_high: event.target.input_high.value
  };

}

function checkEvents(input) {
  scheduled_events.forEach(function(item, index, array) {
    var check_name = input.in_show !== ''? input.in_show === item.show.show_name : true;
    var check_date = input.in_date !== '' ? (input.in_date >= item.date_start || input.in_date <= item.date_end) : true;
    var check_venue = input.in_venue !== '' ? input.in_venue === item.venue.venue_name : true;
    var check_type = input.in_type !== '' ? input.in_type === item.show.show_type : true;
    var check_low = item.price < 20 ? input.low === true : true; // if price < 20 do something
    var check_med = item.price >= 20 && item.price < 40 ? input.med === true : true; // if price >= 20 && price < 40 do this
    var check_high = item.price >=40 ? item.high === true : true; // if >= 40 do all the things

    if (check_name && check_date && check_venue && check_type && check_low && check_med && check_high) {
      displayEventCart(item);
    }
  });

}

// form_search.addEventListener('submit', eventHandlerSubmit);  // this was included in form.js
