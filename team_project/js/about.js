function displayStaff() {
  document.getElementById("default").value;
  document.getElementById("Yuval").value;
  document.getElementById("Ian").value;
  document.getElementById("Dhruv").value;
  document.getElementById("Deena").value; 
}

window.onload = function () {
  document.getElementById("staff").onchange = displayStaff;  
  displaySelectedValue();
