function displayEventCard() {
  var searchResultsContainer = document.getElementById('searchResultsContainer');
  var eventCard = document.createElement('article');
  eventCard.setAttribute('class', 'eventCard');
  var displayShowName = document.createElement('h3');
    displayShowName.innerText = 'SHOWNAME';
  eventCard.appendChild(displayShowName);
  var logisticContainer = document.createElement('div');
  var displayVenueName = document.createElement('h4');
    displayVenueName.innerText = 'VENUENAME';
  logisticContainer.appendChild(displayVenueName);
    var listContainer = document.createElement('ul');
      var displayShowDates = document.createElement('li');
        displayShowDates.innerText = 'STARTDATE' + ' - ' + 'ENDDATE';
      listContainer.appendChild(displayShowDates);
      var displayShowTimes = document.createElement('li');
        displayShowTimes.innerText = 'SHOWTIMES';
      listContainer.appendChild(displayShowTimes);
      var displayShowPrice = document.createElement('li');
        displayShowPrice.innerText = 'SHOWPRICE';
      listContainer.appendChild(displayShowPrice);
    logisticContainer.appendChild(listContainer);
  eventCard.appendChild(logisticContainer)
  var displayDescription = document.createElement('p');
    displayDescription.innerText = 'SHOWDESCRIPTION';
  eventCard.appendChild(displayDescription);
  if ('SHOWIMAGE'){
    var displayShowImage = document.createElement('img');
    displayShowImage.setAttribute('src', 'IMGURL');
    eventCard.appendChild(displayShowImage);
  }
  var venueButton = document.createElement('button');
    venueButton.innerText = 'Show Venue Information';
    venueButton.setAttribute('class', 'displayVenueInfo');
  eventCard.appendChild(venueButton);
  searchResultsContainer.appendChild(eventCard);
}
