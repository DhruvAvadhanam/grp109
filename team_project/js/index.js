function displayFilteredClasses() {
  var category = document.getElementById("category").value;
  var type = document.getElementById("type").value;
  var location = document.getElementById("location").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("days").value;
  var time = document.getElementById("time").value;
  var allergen = document.getElementById("allergen").value;  
  var cards = document.getElementsByClassName("class-card");
  
  for (var i = 0; i < cards.length; i++) {
    var card = cards [i];
    var cardCategory= card.getAttribute("data-category");
    var cardLocation = card.getAttribute("data-type");
    var cardType = card.getAttribute("data-location");
    var cardMonth = card.getAttribute("data-month");
    var cardDay = card.getAttribute("data-day");
    var cardTime = card.getAttribute("data-time");
    var cardAllergen = card.getAttribute("data-allergen");

    var categoryMatch = (category === "All" || cardCategory === category);
    var typeMatch = (type === "All" || cardType === type);
    var locationMatch = (location === "All" || cardLocation === location);
    var monthMatch = (month === "All" || cardMonth === month);
    var dayMatch = (day === "All" || cardDay === day);
    var dayTime = (time === "All" || cardDay === time);
    var allergenMatch = (allergen === "All" || cardAllergen === allergen);

    if (categoryMatch && dayMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

window.onload = function () {
  document.getElementById("category").onchange = displayFilteredClasses;
  document.getElementById("type").onchange = displayFilteredClasses;
  document.getElementById("location").onchange = displayFilteredClasses;
  document.getElementById("month").onchange = displayFilteredClasses;
  document.getElementById("days").onchange = displayFilteredClasses;
  document.getElementById("allergen").onchange = displayFilteredClasses;  
  document.getElementById("days").onchange = displayFilteredClasses;
  
  displaySelectedValue();
};
