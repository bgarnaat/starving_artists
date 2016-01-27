'use strict';

function eventHandlerSubmit(event) {
  event.preventDefault();

  var input = {
    in_show: event.target.input_show.value,
    in_date: event.target.input_date.value,
    in_venue: event.target.input_venue.value,
    in_area: event.target.input_area.value,
    in_type: event.target.input_type.value,
    in_low: event.target.input_low.checked,
    in_med: event.target.input_med.checked,
    in_high: event.target.input_high.checked,
  }
  checkEvents(input);
}

function checkEvents(input) {
  scheduled_events.forEach(function(item, index, array) {
    var check_show = input.in_show !== 'default' ? input.in_show === item.show.show_name : true;
    var check_date = input.in_date !== 'deafult' ? (input.in_date >= item.date_start && input.in_date <= item.date_end) : true;
    var check_venue = input.in_venue !== 'default' ? input.in_venue === item.venue.venue_name : true;
    var check_area = input.in_area !== 'default' ? input.in_area === item.venue.venue_neighborhood : true;
    var check_type = input.in_type !== 'default' ? input.in_type === item.show.show_type : true;
    var check_low = item.price < 20 ? input.in_low === true : true; // if price < 20 do something
    var check_med = item.price >= 20 && item.price < 40 ? input.in_med === true : true; // if price >= 20 && price < 40 do this
    var check_high = item.price >=40 ? item.in_high === true : true; // if >= 40 do all the things

    if (check_show && check_venue && check_type && check_low && check_med && check_high) {
      displayEventCart(item);
      console.log('shearch does true');
    } else {
      console.log('search does false');
    }
  });

}

// form_search.addEventListener('submit', eventHandlerSubmit);  // this was included in form.js
