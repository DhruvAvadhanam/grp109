var staff = ""

var bio = ""
function displayStaff() {
      if staff = 'Yuval'{
        document.getElementById("Yuval").value;
        staff = "Yuval Amitay"
        var bio = ""
    }  else if {
        document.getElementById("Ian").value;
        staff = "Ian Finley"
        var bio = ""
    }  else if {
        document.getElementById("Dhruv").value;
        staff = "Dhruv Adnamhanam"
        var bio = ""
    }  else if {
        document.getElementById("Deena").value; 
        staff = "Deena Randolph"
        var bio = "Deena Randolph has a background in IT Helpdesk Support and is studying Software Development here at BC. She has taken web development and programming courses previously, knows just enough random information to be dangerous, and relies on her valiant coworkers to keep the website running."
    } else 
          document.getElementById("default").value;
          staff = "Please select a staff member"
    }
    text = '<h2>' + staff + '</h2>' +'<p>' + bio + '</p>';
}

window.onload = function () {
  document.getElementById("staff").onchange = displayStaff;  
  displaySelectedValue();
//print text to blackboard
var el = document.getElementById('feature')
el.innerHTML = text
