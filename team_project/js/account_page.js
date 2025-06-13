document.getElementById("createAccount").addEventListener("click", function () {
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

window.addEventListener("DOMContentLoaded", function () {
  var savedEmail = localStorage.getItem("loginEmail");
  var savedPassword = localStorage.getItem("loginPassword");

  if (savedEmail && savedPassword) {
    lockFields(savedEmail, savedPassword);
  }
});
