'use strict';

function fillHoodDown() {
  var hoodDrop = document.getElementById('input_area');
  for (var i = 0; i < allNeighborhoods.length; i++) {
    var optEl = document.createElement('option');
    optEl.value = allNeighborhoods[i];
    optEl.textContent = allNeighborhoods[i];
    hoodDrop.appendChild(optEl);
  }
}

fillHoodDown();
