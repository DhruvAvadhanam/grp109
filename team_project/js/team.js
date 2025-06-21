window.onload = function () {
  document.getElementById("staff").onchange = displayStaff;
  displayStaff(); // Ensures the default message ("Please select a staff member") is shown on page load.
};

function displayStaff() {
  const selected = document.getElementById("staff").value;
  let staff = "";
  let bio = "";
  let stylesheet = "css/team.css";

  switch (selected) {
    case "Yuval":
      staff = "Yuval Amitay";
      bio = "Yuval Amitay is currently a junior at Lake Washington High School. She is in the Running Start program, splitting time between high school and Bellevue College, where she is working toward earning an Associate Degree. After graduation, she wants to go to a four-year university to study computer science and machine learning.";
	  stylesheet = "css/aboutYuval.css";
      break;
    case "Ian":
      staff = "Ian Finley";
      bio = "Ian Finley has a work background as a senior technical support engineer, and is studying for the Data Reporting Analyst Certificate of Accomplishment at Bellevue College. While his educational background was media arts and animation, he has pivoted towards technical careers and largely leaves visual arts endevours to his hobbies.";
	  stylesheet = "css/aboutIan.css";
      break;
    case "Dhruv":
      staff = "Dhruv Avadhanam";
      bio = "Dhruv Avadhanam is a senior at Eastlake High School in Sammamish. This is his second year as a member of the running start program at Bellevue College and he plans to study computer science in college.";
	  stylesheet = "css/aboutDhruv.css";
      break;
    case "Deena":
      staff = "Deena Randolph";
      bio = "Deena Randolph has a background in IT Helpdesk Support and is studying Software Development here at BC. She has taken web development and programming courses previously, knows just enough random information to be dangerous, and relies on her valiant teammates to keep the website running.</p>";
	  stylesheet = "css/aboutDeena.css";
      break;
    default:
      staff = "Please select a staff member";
      bio = "";
	  stylesheet = "css/team.css";
      break;
  }

// Updates the bio content
  const text = '<h2 aria-label="' + staff + '"> ' + staff + '</h2><p>' + bio + '</p>';
  document.getElementById("feature").innerHTML = text;
  
// Updates the stylesheet theme
  const link = document.getElementById("theme");
  if (link) {
    link.href = stylesheet;
  }
}
