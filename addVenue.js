'use strict'

function addVenue(event) {
  event.preventDefault();
  var input = {
    name = event.target.newVenueName.value,
    address = event.target.newVenueLocation.value,
    neighborhood = event.target.newVenueNeighborhood.value,
    webpage = event.target.venueWebpage.value,
    phone = event.target.venuePhone.value,
    boxHours = event.target.venueBoxHours.value,
    occupancy = event.target.venueOccupancy.value,
    description = event.target.venueDescription.value,
  };


}
