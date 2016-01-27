function venueFillHoodDown() {
  var venueHoodDrop = document.getElementById('venueHood');
  for (var i = 0; i < allNeighborhoods.length; i++) {
    var optEl = document.createElement('option');
    optEl.value = allNeighborhoods[i];
    optEl.textContent = allNeighborhoods[i];
    venueHoodDrop.appendChild(optEl);
  }
}

venueFillHoodDown();
