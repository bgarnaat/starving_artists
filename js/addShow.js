createshow.addEventListener('submit', add_show);

function add_show(event) {
  console.log(event);
  event.preventDefault();
  var new_show = {
    in_name: event.target.show_name.value,
    start_date: event.target.start_date.value,
    end_date: event.target.end_date.value,
    price: event.target.price.value,
    in_time: event.target.time.value,
    in_description: event.target.in_description.value,
    venue: event.target.venue.value,
    in_type: event.target.in_type.value
    // ticketPage: event.target.ticketPage.value;
  };
  console.log(new_show);
  shows.push(new Show(new_show.in_name, new_show.in_type, new_show.in_description));
  scheduled_events.push(new ScheduledEvent(shows[shows.length - 1], new_show.venue, new_show.start_date, new_show.date_end, new_show.in_time, new_show.price, new_show.ticketPage))  ;
  localStorage.setItem('add_show_data', JSON.stringify(shows));
  localStorage.setItem('add_event_data', JSON.stringify(scheduled_events));

  event.target.show_name.value = null;
  event.target.start_date.value = null;
  event.target.end_date.value = null;
  event.target.price.value = null;
  event.target.time.value = null;
  event.target.in_description = null;
  event.target.venue.value = null;
  event.target.in_type.value = null;
  event.target.ticketPage.value = null;
}
