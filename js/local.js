
localStorage.setItem('event_data', JSON.stringify(scheduled_events);
  var event_data = localStorage.getItem('event_data');
  if(scheduled_events) {
  scheduled_events = JSON.parse(scheduled_events);
  } else {
  console.log('local storage empty! initializing:');
  }

localStorage.setItem('show_data', JSON.stringify(shows);
  var show_data = localStorage.getItem('show_data');
  if(shows) {
  shows = JSON.parse(shows);
  } else {
  console.log('local storage empty! initializing:');
  }

localStorage.setItem('venue_data', JSON.stringify(venues);
  var venue_data = localStorage.getItem('venue_data');
  if(venues) {
  venues = JSON.parse(venues);
  } else {
  console.log('local storage empty! initializing:');
  }
