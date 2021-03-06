
var venueCreateForm = document.getElementById('venueCreateForm');

venueCreateForm.addEventListener('submit', addVenue);

function addVenue(event) {
  event.preventDefault();
  if (!event.target.newVenueName || !event.target.newVenueLocation || !event.target.newVenueNeighborhood || !event.target.venuePhone || !event.target.venueBoxHours || !event.target.venueOcc || !event.target.venueDescription) {
    return alert('Fields cannot be empty');
  }

  console.log(event);
  var input = {
    venueName: event.target.newVenueName.value,
    address: event.target.newVenueLocation.value,
    neighborhood: event.target.newVenueNeighborhood.value,
    webpage: event.target.venueWebpage.value,
    phone: event.target.venuePhone.value,
    boxHours: event.target.venueBoxHours.value,
    occupancy: event.target.venueOcc.value,
    venueDescription: event.target.venueDescription.value,
  };
  console.log('logging input!', input);
  venues.push(new Venue(input.venueName, input.address, input.neighborhood, input.webpage, input.boxHours, input.phone, input.occupancy, input.venueDescription));
  localStorage.setItem('ls_venue_data', JSON.stringify(venues));

  event.target.newVenueName.value = null;
  event.target.newVenueLocation.value = null;
  event.target.newVenueNeighborhood.value = null;
  event.target.venueWebpage.value = null;
  event.target.venuePhone.value = null;
  event.target.venueBoxHours.value = null;
  event.target.venueOcc.value = null;
  event.target.venueDescription.value = null;

}
