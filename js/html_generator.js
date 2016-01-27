var searchResultsContainer = document.getElementById('searchResultsContainer');

function displayEventCard(item) {
  var card = document.createElement('section');
  var card_show = document.createElement('article');
  card_show.className = 'card_show';
  card.appendChild(card_show);

  makeEl(card_show, 'h3', item.show.show_name);

  var card_aside = document.createElement('aside');
  var card_ul = document.createElement('ul');

  makeEl(card_ul, 'li', item.show.show_type);
  makeEl(card_ul, 'li', item.venue.venue_name);
  makeEl(card_ul, 'li', item.date_start);
  makeEl(card_ul, 'li', item.date_end);
  makeEl(card_ul, 'li', item.price);

  var li_link = document.createElement('li');
  makeLink(li_link, item.ticketPage, 'Click for tickets');

  card_ul.appendChild(li_link);
  card_aside.appendChild(card_ul);
  card_show.appendChild(card_aside)

  makeEl(card_show, 'p', item.show.show_description);

  if (item.show.show_image){
    makeEl(card_show, 'img', item.show.show_image);
  }

  makeEl(card_ul, 'button', 'Show Venue Info');

  // var venueButton = document.createElement('button');
  // venueButton.innerText = 'Show Venue Information';
  // venueButton.id = 'venueButton';
  // card_show.appendChild(venueButton);

  searchResultsContainer.appendChild(card);

  displayVenueCard(card, item);
}

function displayVenueCard (card, item) {
  var card_venue = document.createElement('article');
  card.appendChild(card_venue);

  makeEl(card_venue, 'h3', item.venue.venue_name);

  var venue_aside = document.createElement('aside');
  var venue_ul = document.createElement('ul');

  makeEl(venue_ul, 'li', item.venue.venue_address);
  makeEl(venue_ul, 'li', item.venue.venue_neighborhood);
  makeEl(venue_ul, 'li', item.venue.venue_phone);
  makeEl(venue_ul, 'li', item.venue.venue_box_hours);
  makeEl(venue_ul, 'li', item.venue.venue_occupancy);

  var li_link = document.createElement('li');
  makeLink(li_link, item.venue.venue_webpage, item.venue.venue_webpage);

  makeEl(card_venue, 'li', item.venue.venue_description);
}


function makeEl(parent, type, content) {
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
}
function makeLink(parent, content, content_text) {
  var newLink = document.createElement('a');
  newLink.a = content;
  newLink.textContent = content_text;
  parent.appendChild(newLink);
}
