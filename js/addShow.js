createshow.addEventListener('submit', add_show);


function fillVenueDropdown(){
  var venueDropdown = document.getElementById('venueDropdown');
  for (var i = 0; i < venues.length; i++) {
    var venueOption = document.createElement('option');
    venueOption.value = i;
    venueOption.innerText = venues[i].venue_name;
    venueDropdown.appendChild(venueOption);
  }
}
window.setTimeout(fillVenueDropdown, 1000);

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
    in_type: event.target.in_type.value,
    pic: event.target.showPic.value,
    ticketPage: event.target.ticketPage.value
  };
  console.log(new_show);
  shows.push(new Show(new_show.in_name, new_show.in_type, new_show.in_description, new_show.pic));
  scheduled_events.push(new ScheduledEvent(shows[shows.length - 1], venues[new_show.venue], new_show.start_date, new_show.end_date, new_show.in_time, new_show.price, new_show.ticketPage))  ;
  localStorage.setItem('ls_show_data', JSON.stringify(shows));
  localStorage.setItem('ls_event_data', JSON.stringify(scheduled_events));

  event.target.show_name.value = null;
  event.target.start_date.value = null;
  event.target.end_date.value = null;
  event.target.price.value = null;
  event.target.time.value = null;
  event.target.in_description = null;
  event.target.venue.value = null;
  event.target.in_type.value = null;
  event.target.ticketPage.value = null;
  event.target.showPic.value = null;
}
