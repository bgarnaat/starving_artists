var allNeighborhoods = ['Ballard', 'Capitol Hill', 'Central District', 'Downtown', 'Fremont', 'Greenlake/Greenwood', 'Lake City', 'North Seattle', 'Queen Anne/Seattle Center', 'Sodo/International District', 'South Seattle', 'University District', 'Wallingford', 'West Seattle'];

function fillHoodDown() {
  var hoodDrop = document.getElementById('input_area');
  for (var i = 0; i < allNeighborhoods.length; i++) {
    var optEl = document.createElement('option');
    optEl.value = allNeighborhoods[i];
    optEl.textContent = allNeighborhoods[i];
    hoodDrop.appendChild(optEl);
  }
}
