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

  // data_location.push(new Location(input.in_name, input.in_abbr, input.in_min, input.in_max, input.in_cup, input.in_lbs));

  event.target.input_show.value = null;
  event.target.input_date.value = null;
  event.target.input_venue.value = null;
  event.target.input_type.value = null;
  event.target.input_low.value = null;
  event.target.input_med.value = null;
  event.target.input_high.value = null;
}

form_search.addEventListener('submit', eventHandlerSubmit);
