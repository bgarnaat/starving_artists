
  var ls_event_data = localStorage.getItem('ls_event_data');
  if(ls_event_data) {
  scheduled_events = JSON.parse(ls_event_data);
  } else {
  console.log('local storage empty! initializing:');
  localStorage.setItem('ls_event_data', JSON.stringify(scheduled_events));
  }

  var ls_show_data = localStorage.getItem('ls_show_data');
  if(ls_show_data) {
  shows = JSON.parse(ls_show_data);
  } else {
  console.log('local storage empty! initializing:');
  localStorage.setItem('ls_show_data', JSON.stringify(shows));
  }

  var ls_venue_data = localStorage.getItem('ls_venue_data');
  if(ls_venue_data) {
  venues = JSON.parse(ls_venue_data);
  } else {
  console.log('local storage empty! initializing:');
  localStorage.setItem('ls_venue_data', JSON.stringify(venues));
  }
