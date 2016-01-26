var searchResultsContainer = document.getElementById('searchResultsContainer');

function displayEventCard() {
  var eventVenueCard = document.createElement('section')
  eventVenueCard.setAttribute('id', 'UNIQUE INDEXED ID')
  var eventCard = document.createElement('article');
  eventCard.setAttribute('class', 'eventCard');
  var displayShowName = document.createElement('h3');
    displayShowName.innerText = 'SHOWNAME';
  eventCard.appendChild(displayShowName);
  var displayShowType = document.createElement('h3');
    displayShowType.innerText = 'SHOWTYPE';
  eventCard.appendChild(displayShowType);
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
      var linkHolder = document.createElement('li');
        var displayShowLink = document.createElement('a');
        displayShowLink.setAttribute('href', 'SHOWLINK');
        displayShowLink.innerText = 'SHOWLINK';
        linkHolder.appendChild(displayShowLink);
      listContainer.appendChild(linkHolder);
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
    venueButton.id = 'venueButton';
  eventCard.appendChild(venueButton);
  eventVenueCard.appendChild(eventCard);
  searchResultsContainer.appendChild(eventVenueCard);
}

function displayVenueCard () {
  var eventVenueCard = document.getElementById('UNIQUE INDEXED ID');
  var venueCard = document.createElement('article');
  var venueName = document.createElement('h3');
    venueName.innerText = 'VENUENAME';
  venueCard.appendChild(venueName);
  var venueLogisticsContainer = document.createElement('div');
    var venueLogisticsList = document.createElement('ul');
      var venueAddress = document.createElement('li');
        venueAddress.innerText = 'VENUEADDRESS';
      venueLogisticsList.appendChild(venueAddress);
      var venueNeighborhood = document.createElement('li');
        venueNeighborhood.innerText = 'VENUENEIGHBORHOOD';
      venueLogisticsList.appendChild(venueNeighborhood);
      var venuePhone = document.createElement('li');
        venuePhone.innerText = 'VENUEPHONE';
      venueLogisticsList.appendChild(venuePhone);
      var venueBoxHours = document.createElement('li');
        venueBoxHours.innerText = 'VENUEBOXOFFICE';
      venueLogisticsList.appendChild(venueBoxHours);
      var venueLinkContainer = document.createElement('li');
        var venueLink = document.createElement('a');
          venueLink.setAttribute('href', 'VENUEURL');
          venueLink.innerText = 'VENUEURL';
        venueLinkContainer.appendChild(venueLink);
      venueLogisticsList.appendChild(venueLinkContainer);
      var venueOccupancy = document.createElement('li');
        venueOccupancy.innerText = 'VENUEOCCUPANCY';
      venueLogisticsList.appendChild(venueOccupancy);
    venueLogisticsContainer.appendChild(venueLogisticsList);
  venueCard.appendChild(venueLogisticsContainer);
  var venueDescription = document.createElement('p');
    venueDescription.innerText = 'VENUEDESCRIPTION';
  venueCard.appendChild(venueDescription);
  // IS THIS EVENT.TARGET? CHECK ONCE HANDLER/LISTENER CREATED
  eventVenueCard.appendChild(venueCard);
}
