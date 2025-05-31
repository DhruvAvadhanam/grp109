document.addEventListener("DOMContentLoaded", function () {
  var confirmBtn = document.getElementById("createAccount");
  var editIcon = document.getElementById("editIcon");
  var inputs = document.querySelectorAll(".user-box input");

  confirmBtn.addEventListener("click", function () {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
    editIcon.style.display = "inline";
  });

  editIcon.addEventListener("click", function () {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
    editIcon.style.display = "none";
  });
});
