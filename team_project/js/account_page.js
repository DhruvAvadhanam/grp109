// This function will run when "Create Account" is clicked
document.getElementById("createAccount").addEventListener("click", function () {
  // Redirect to a new page — replace 'new_user_dashboard.html' with your actual future page
  window.location.href = "createAccount.html";
});

function lockFields(email, password) {
  var emailInput = document.getElementById("rEmail");
  var passwordInput = document.getElementById("rPassword");

  emailInput.value = email;
  passwordInput.value = password;

  emailInput.disabled = true;
  passwordInput.disabled = true;
}

function unlockFields() {
  var emailInput = document.getElementById("rEmail");
  var passwordInput = document.getElementById("rPassword");

  emailInput.value = "";
  passwordInput.value = "";

  emailInput.disabled = false;
  passwordInput.disabled = false;
}

document.getElementById("logIn").addEventListener("click", function () {
  var email = document.getElementById("rEmail").value;
  var password = document.getElementById("rPassword").value;

  if (email && password) {
    localStorage.setItem("loginEmail", email);
    localStorage.setItem("loginPassword", password);

    lockFields(email, password);

    alert("Login saved and fields locked.");
  } else {
    alert("Please enter both email and password.");
  }
});

document.getElementById("signOut").addEventListener("click", function () {
  localStorage.removeItem("loginEmail");
  localStorage.removeItem("loginPassword");
  unlockFields();
  alert("You have been signed out.");
});

window.addEventListener("DOMContentLoaded", function () {
  var savedEmail = localStorage.getItem("loginEmail");
  var savedPassword = localStorage.getItem("loginPassword");

  if (savedEmail && savedPassword) {
    lockFields(savedEmail, savedPassword);
  }
});
