// Creating class content for class gallery - Deena
function Class(name, description, price, flags, instructor, image, menu) {
  this.name = name;
  this.description = description; 
  this.price = price;
 //  this.seats = seats;
  // this.booked = booked;
  this.flags = flags;
  this.instructor = instructor;
  this.location = location;
  this.day = day;
  this.date = date;
  this.image = image;
  this.menu = menu;
  //this.checkAvailability = function() { return this.seats - this.booked; };
}

// Create Class objects - Deena
var twodayClass = new Class('2-Day Mystery Basket  Challenge','For ages 10 to 12; kids only. This two-part class is for experienced young cooks who want to take their cooking to the next level. On day one, we\'ll cover culinary techniques such as knife skills, tasting adjustments and presentation as we prepare Chicken Noodle Soup; Corn Muffins; Spring Salad with Lemon Dressing; and Strawberry- Rhubarb Tartlets. On day two, each team will be given a basket of 3 to 4 "mystery ingredients," along with other basic ingredients, and develop recipes together. Emphasis will be on a friendly competition, teamwork, taste, presentation and fun! With poultry, dairy and eggs.','90','Kids, Ages 10-12, Poultry, Dairy, Eggs, Friday, evening','Tamara Guyton', 'Issaquah', 'Friday', '4/29/2016', 'twoday.jpg','<ul><li>Chicken Noodle Soup</li><li>Corn Muffins; Spring Salad with Lemon Dressing</li><li>Strawberry- Rhubarb Tartlets</li></ul>');

// Update the HTML for the page  - Deena
var bc1 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="twoday.html">' + twodayClass.name + '</a></li> </ul>';
var elBc1 = document.getElementById('bc1');
elBc1.innerHTML = bc1;

var cdImg1 = '<br> <img class="image" src="images/pasta2.jpg" alt="ravioli pasta"><h3>Menu:</h3>' + twodayClass.menu;
var elCd1 = document.getElementById('img1');
elCd1.innerHTML = cdImg1;

var cdDesc1 = '<h2>' + twodayClass.name + '</h2> <h4>Instructor:' twodayClass.instructor + '</h4> <p>' + twodayClass.description + '</p> <h3>Session:</h3>' + twoday Class.location + ' – ' + twoday Class.day + ', ' + twoday Class.date;
var elCdDesc1 = document.getElementById('desc1');
elCdDesc1.innerHTML = cdDesc1;

cdReg1 = '<br><h3>Price: $' + twodayClass.price +  '</h3> <p></p><h3>Register:</h3>
var elCdReg1 = document.getElementById('reg1');
elCdReg1.innerHTML = cdReg1;
