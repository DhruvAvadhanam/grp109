
function validateForm(){
var errorMessagesfirst="";
var errorMessageslast="";
var errorMessagesphone="";
var errorMessagesemail="";
var errorMessagesusername="";
var errorMessagesaddress="";
var errorMessagescountry="";
var errorMessagesstate="";
var errorMessageszipcode="";
var errorMessagescard="";

//1) create a variable to control status of each field. Assume that they are not valid
var validFirstname=false;
var validLastname=false;
var validPhone=false;
var validEmail=false;
var validAddress=false;
var validCountry=false;
var validState=false;
var validZipCode=false;
var validCard=false;
  
//2) create variables to read the values from html text inputs
var firstname = document.getElementById("firstName").value;
var lastname = document.getElementById("lastName").value;
var phone = document.getElementById("cellNumber").value;
var email = document.getElementById("nEmail").value;
var address = document.getElementById("address").value;
var country = document.getElementById("country").value;
var state = document.getElementById("state").value;
var zipcode = document.getElementById("zip").value;
var card = document.getElementById("creditCard").value;

//3) do the validation
var numbers=/^[0-9]+$/;
var letters=/^[a-zA-Z]*$/;

if (firstname==="null" || firstname==="" || firstname.length > 20 || !firstname.match(letters)) {
  errorMessagesfirst += "<p>The first name is required, cannot be greater than 20 characters, and can only contain letters</p>";
} else {
  validFirstname=true;
}
  
if (lastname==="null" || lastname==="" || lastname.length > 20 || !lastname.match(letters)) {
  errorMessageslast += "<p>The last name is required, cannot be greater than 20 characters, and can only contain letters</p>";
} else {
  validLastname=true;
}
  
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length || email === "null" || email === "") {
    errorMessagesemail += "<p>Invalid email</p>";
} else {
    validEmail=true;
}

var containsdash = phone.indexOf("-")>=0;
if ((!containsdash && phone.length<10) || !phone.match(numbers) || phone === "null" || phone === "") {
  errorMessagesphone += "<p>Invalid phone number</p>";
} else if (phone===null||phone ==="" ||phone.length>15) {
  errorMessagesphone += "<p>Invalid phone number</p>";
} else {
  validPhone=true;
}
  
  
if (address==="null" || address==="" ) {
  errorMessagesaddress += "<p>The address is required </p>";
} else {
  validAddress=true;
}


if (state==="null" || state==="") {
  errorMessagesstate += "<p>The state is required </p>";
} else {
  validState=true;
}
  
if (country==="null" || country==="" ) {
  errorMessagescountry += "<p>The country is required </p>";
} else {
  validCountry=true;
}


  if (zipcode===null||zipcode ==="" ||zipcode.length>5|| !zipcode.match(numbers)) {
  errorMessageszipcode += "<p>Invalid zip code number</p>";
} else {
  validZipCode=true;
  } 
  
    if (card===null||card ==="" ||card.length>19|| !card.match(numbers)) {
  errorMessagescard += "<p>Invalid credit card number</p>";
} else {
  validCard=true;
  } 


//4) send error messages 
document.getElementById("errorMessagesfirst").innerHTML = errorMessagesfirst;
document.getElementById("errorMessageslast").innerHTML = errorMessageslast;
document.getElementById("errorMessagesemail").innerHTML = errorMessagesemail;
document.getElementById("errorMessagesphone").innerHTML = errorMessagesphone;
document.getElementById("errorMessagesaddress").innerHTML = errorMessagesaddress;
document.getElementById("errorMessagesstate").innerHTML = errorMessagesstate;
document.getElementById("errorMessagescountry").innerHTML = errorMessagescountry;
document.getElementById("errorMessageszipcode").innerHTML = errorMessageszipcode;
document.getElementById("errorMessagescard").innerHTML = errorMessagescard;

  if (validFirstname && validLastname && validEmail && validPhone &&
    validAddress && validCountry && validState && validZipCode && validCard) {
    
    // Disable inputs
    var inputs = document.querySelectorAll(".user-box input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }

    // Show edit icon
    document.getElementById("editIcon").style.display = "inline";

    return true;
} else {
    return false;
}

}



document.addEventListener("DOMContentLoaded", function () {
  var editIcon = document.getElementById("editIcon");
  var inputs = document.querySelectorAll(".user-box input");

  editIcon.addEventListener("click", function () {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
    editIcon.style.display = "none";
  });
});




