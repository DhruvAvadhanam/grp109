function displayFilteredClasses() {
  var cuisine = document.getElementById("cuisines").value;
  var day = document.getElementById("days").value;
  var cards = document.getElementsByClassName("class-card");
  
  for (var i = 0; i < cards.length; i++) {
    var card = cards [i];
    var cardCuisine = card.getAttribute("data-cuisine");
    var cardDay = card.getAttribute("data-day");

    var cuisineMatch = (cuisine === "All" || cardCuisine === cuisine);
    var dayMatch = (day === "All" || cardDay === day);

    if (cuisineMatch && dayMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

window.onload = function () {
  document.getElementById("cuisines").onchange = displayFilteredClasses;
  document.getElementById("days").onchange = displayFilteredClasses;
  
  displaySelectedValue();
};
