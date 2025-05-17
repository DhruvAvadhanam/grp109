window.onload = function () {
  document.getElementById("staff").onchange = displayStaff;
  displayStaff(); // ensures the default message is shown on load
};

function displayStaff() {
  const selected = document.getElementById("staff").value;
  let staff = "";
  let bio = "";

  switch (selected) {
    case "Yuval":
      staff = "Yuval Amitay";
      bio = "";
      break;
    case "Ian":
      staff = "Ian Finley";
      bio = "Ian Finley has a work background as a senior technical support engineer, and is studying for the Data Reporting Analyst Certificate of Accomplishment at Bellevue College. While his educational background was media arts and animation, he has pivoted towards technical careers and largely leaves visual arts endevours to his hobbies.";
      break;
    case "Dhruv":
      staff = "Dhruv Avadhanam";
      bio = "";
      break;
    case "Deena":
      staff = "Deena Randolph";
      bio = "Deena Randolph has a background in IT Helpdesk Support and is studying Software Development here at BC. She has taken web development and programming courses previously, knows just enough random information to be dangerous, and relies on her valiant coworkers to keep the website running.";
      break;
    default:
      staff = "Please select a staff member";
      bio = "";
      break;
  }

  const text = '<h2>' + staff + '</h2><p>' + bio + '</p>';
  document.getElementById("feature").innerHTML = text;
}
