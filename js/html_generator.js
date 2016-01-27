'use strict';

var searchResultsContainer = document.getElementById('searchResultsContainer');

function displayEventCard(item, index) {
  var card = document.createElement('section');
  card.id = index;

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
  makeEl(card_ul, 'button', 'Show Venue Info');

  card_ul.appendChild(li_link);
  card_aside.appendChild(card_ul);
  card_show.appendChild(card_aside)

  makeEl(card_show, 'p', item.show.show_description);

  if (item.show.show_image){
    makeEl(card_show, 'img', item.show.show_image);
  }

  searchResultsContainer.appendChild(card);
}

function displayVenueCard (event) {
  var card = event.target.parentNode.parentNode.parentNode.parentNode;
  var card_index = card.id;
  var card_venue = document.createElement('article');
  var venue_aside = document.createElement('aside');
  var venue_ul = document.createElement('ul');
  var li_link = document.createElement('li');

  makeEl(card_venue, 'h3', scheduled_events[card_index].venue.venue_name);

  makeEl(venue_ul, 'li', scheduled_events[card_index].venue.venue_address);
  makeEl(venue_ul, 'li', scheduled_events[card_index].venue.venue_neighborhood);
  makeEl(venue_ul, 'li', scheduled_events[card_index].venue.venue_phone);
  makeEl(venue_ul, 'li', scheduled_events[card_index].venue.venue_box_hours);
  makeEl(venue_ul, 'li', scheduled_events[card_index].venue.venue_occupancy);

  makeLink(li_link, scheduled_events[card_index].venue.venue_webpage, scheduled_events[card_index].venue.venue_webpage);

  venue_ul.appendChild(li_link);
  venue_aside.appendChild(venue_ul);
  card_venue.appendChild(venue_aside);
  card.appendChild(card_venue);

  makeEl(card_venue, 'p', scheduled_events[card_index].venue.venue_description);  // create paragraph after attaching ul
}

function makeEl(parent, type, content) {
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
}
function makeLink(parent, content, content_text) {
  var newLink = document.createElement('a');
  newLink.href = content;
  newLink.textContent = content_text;
  parent.appendChild(newLink);
}

var search_results_container = document.getElementById('searchResultsContainer');
search_results_container.addEventListener('click', displayVenueCard);
