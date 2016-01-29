'use strict';

var cardDisplay = document.getElementById('cardDisplay');

function makeEl(parent, type, content) {
  var newEl = document.createElement(type);
  newEl.textContent = content;
  parent.appendChild(newEl);
}
function makeImg(parent, content) {
  var newImg = document.createElement('img');
  newImg.src = content;
  parent.appendChild(newImg);
}
function makeLink(parent, content, content_text) {
  var newLink = document.createElement('a');
  newLink.href = content;
  newLink.textContent = content_text;
  parent.appendChild(newLink);
}
function clearVenueCards(node) {
  while (node.firstChild !== node.lastChild) {
    node.removeChild(node.lastChild);
  }
}


function displayEventCard(item, index) {
  var card = document.createElement('section');
  card.id = index;
  card.className = 'card';

  var card_show = document.createElement('article');
  var card_box = document.createElement('div');
  var card_lil_box = document.createElement('div');
  var card_aside = document.createElement('aside');
  var card_ul = document.createElement('ul');
  var li_link = document.createElement('li');
  card_show.className = 'card_show';
  card_box.className = 'card_show_box';
  card_lil_box.className = 'card_show_lil_box';
  card_aside.className = 'card_show_aside';
  card_ul.className = 'card_show_ul';

  makeEl(card_show, 'h2', item.show.show_name);
  makeEl(card_ul, 'h3', 'Type:');
  makeEl(card_ul, 'li', item.show.show_type);
  makeEl(card_ul, 'h3', 'Venue:');
  makeEl(card_ul, 'li', item.venue.venue_name);
  makeEl(card_ul, 'h3', 'Start Date:');
  makeEl(card_ul, 'li', item.date_start);
  makeEl(card_ul, 'h3', 'End Date:');
  makeEl(card_ul, 'li', item.date_end);
  makeEl(card_ul, 'h3', 'Price:');
  makeEl(card_ul, 'li', '$' + item.price);
  makeEl(card_ul, 'h3', 'Tickets:');
  makeLink(li_link, item.ticketPage, 'Click for tickets');

  card_ul.appendChild(li_link);  // append before creating button element to preserve item order
  card_aside.appendChild(card_ul);

  makeEl(card_aside, 'button', 'Show Venue Info');  // create & appende after li_link is appended to preserve item order

  card_box.appendChild(card_aside);
  card_box.appendChild(card_lil_box)
  card_show.appendChild(card_box)

  makeEl(card_lil_box, 'label', 'Description:');
  makeEl(card_lil_box, 'p', item.show.show_description);

  if (item.show.show_image){
    makeImg(card_box, item.show.show_image);
  }

  card.appendChild(card_show);
  cardDisplay.appendChild(card);
}

function displayVenueCard(event) {
  var card = event.target.parentNode.parentNode.parentNode.parentNode;
  if (card.className === 'card') {
    var card_index = card.id;
    var card_venue = document.createElement('article');
    var card_box = document.createElement('div');
    var card_lil_box = document.createElement('div');
    var card_aside = document.createElement('aside');
    var card_ul = document.createElement('ul');
    var li_link = document.createElement('li');
    clearVenueCards(card);

    card_venue.className = 'card_venue';
    card_box.className = 'card_venue_box';
    card_lil_box.className = 'card_venue_lil_box';
    card_aside.className = 'card_venue_aside';
    card_ul.className = 'card_venue_ul';

    makeEl(card_venue, 'h2', scheduled_events[card_index].venue.venue_name);
    makeEl(card_ul, 'h4', 'Address:');
    makeEl(card_ul, 'li', scheduled_events[card_index].venue.venue_address);
    makeEl(card_ul, 'h4', 'Area:');
    makeEl(card_ul, 'li', scheduled_events[card_index].venue.venue_neighborhood);
    makeEl(card_ul, 'h4', 'Phone:');
    makeEl(card_ul, 'li', scheduled_events[card_index].venue.venue_phone);
    makeEl(card_ul, 'h4', 'Box Office Hours:');
    makeEl(card_ul, 'li', scheduled_events[card_index].venue.venue_box_hours);
    makeEl(card_ul, 'h4', 'Occupancy:');
    makeEl(card_ul, 'li', scheduled_events[card_index].venue.venue_occupancy);
    makeEl(card_ul, 'h4', 'Website:');
    makeLink(li_link, scheduled_events[card_index].venue.venue_webpage, scheduled_events[card_index].venue.venue_webpage);

    card_ul.appendChild(li_link);
    card_aside.appendChild(card_ul);
    card_box.appendChild(card_aside);
    card_box.appendChild(card_lil_box);
    card_venue.appendChild(card_box);
    card.appendChild(card_venue);

    makeEl(card_lil_box, 'label', 'Description:');
    makeEl(card_lil_box, 'p', scheduled_events[card_index].venue.venue_description);  // create paragraph after attaching ul
  }
}

cardDisplay.addEventListener('click', displayVenueCard);
