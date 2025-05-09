// process_input.js
// This file handles user input logic for the Group 1 Input Form page. -Ian
// askForDetails, displayDetails, and confirmDetails methods added. -Dhruv

//Variables for user details -Dhruv
  var fullName;
  var address;
  var accountUsername;
  var accountPassword;
  var creditCard;


//Asks the user for their details as an input -Dhruv
function askForDetails (){
  fullName = prompt ("Please list your full name: ");
  address = prompt ("Please list your current address: ");
  accountUsername = prompt ("Please list your account username: ");
  accountPassword = prompt ("Please list your account password: ");
  creditCard = prompt ("Please list your credit card #: "); 
  
  displayDetails();
  confirmDetails();  
}

//Displays the details on the HTML page -Dhruv
function displayDetails (){
  var output = "Full Name: " + fullName + "\n";
  output += "Address: " + address + "\n";
  output += "Account Username: " + accountUsername + "\n";
  output += "Account Password: " + accountPassword + "\n";
  output += "Credit Card #: " + creditCard + "\n";
  
  document.getElementById("text").innerHTML = output;
}

//Asks the user of confirmation of their inputted details -Dhruv
function confirmDetails (){
  var confirm = prompt ("Do these details look correct? (yes/no)");
  
  if (confirm === "yes" || confirm === "Yes") {
    alert ("Thank you for your information!");
  } else {
    askForDetails();
  }
  
}

window.onload = function () {
  askForDetails();
};
  
