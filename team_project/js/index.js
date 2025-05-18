function displayFilteredClasses() {
  var category = document.getElementById("category").value;
  var location = document.getElementById("location").value;
  var type = document.getElementById("type").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  var time = document.getElementById("time").value;
  var restrictions = document.getElementById("allergen").value;

  var cards = document.getElementsByClassName("thumb");
  
  for (var i = 0; i < cards.length; i++) {
    var card = cards [i];
    var cardCategory = card.getAttribute("data-category");
    var cardLocation = card.getAttribute("data-location");
    var cardType = card.getAttribute("data-type");
    var cardMonth = card.getAttribute("data-month");
    var cardDay = card.getAttribute("data-day");
    var cardTime = card.getAttribute("data-time");
    var cardRestrictions = card.getAttribute("data-restrictions");

    var categoryMatch = (category === "All" || cardCategory === category);
    var locationMatch = (location === "All" || cardLocation === location);
    var typeMatch = (type === "All" || cardType === type);
    var monthMatch = (month === "All" || cardMonth === month);
    var dayMatch = (day === "All" || cardDay === day);
    var timeMatch = (time === "All" || cardTime === time);
    var restrictionsMatch = (restrictions === "None" || cardRestrictions === restrictions);

    
    if (categoryMatch && locationMatch && typeMatch && monthMatch && dayMatch && timeMatch && restrictionsMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
}

window.onload = function () {
  document.getElementById("category").onchange = displayFilteredClasses;
  document.getElementById("location").onchange = displayFilteredClasses;
  document.getElementById("type").onchange = displayFilteredClasses;
  document.getElementById("month").onchange = displayFilteredClasses;
  document.getElementById("day").onchange = displayFilteredClasses;
  document.getElementById("time").onchange = displayFilteredClasses;
  document.getElementById("allergen").onchange = displayFilteredClasses;
  
  displayFilteredClasses();
};
