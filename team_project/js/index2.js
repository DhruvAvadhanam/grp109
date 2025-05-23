function displayFilteredClasses() {
  var name = document.getElementById("className").value.toLowerCase();
  var cards = document.getElementsByClassName("class-card");
  var includes = false;
  for (var i = 0; i < cards.length; i++) {
    var card = cards [i];
    var cardName = card.getAttribute("data-name").toLowerCase();
    var nameMatch = cardName.includes(name);

    if (nameMatch) {
      card.style.display = "block";
      includes = true;
    } else {
      card.style.display = "none";
    }
  }
  if (!includes){
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
}

window.onload = function () {
  document.getElementById("className").addEventListener("input", displayFilteredClasses);  
  displaySelectedValue();
};
