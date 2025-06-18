// Creating class content for class gallery - Deena
function Class(name, description, price, flags, instructor, location, day, date, image, menu, seats, booked) {
  this.name = name;
  this.description = description; 
  this.price = price;
  this.flags = flags;
  this.instructor = instructor;
  this.location = location;
  this.day = day;
  this.date = date;
  this.image = image;
  this.menu = menu;
  this.seats = seats;
  this.booked = booked;
  this.checkAvailability = function() { return this.seats - this.booked; };
}

// Create Class objects - Deena
var twodayClass = new Class('2-Day Mystery Basket Challenge', 'For ages 10 to 12; kids only. This two-part class is for experienced young cooks who want to take their cooking to the next level. On day one, we\'ll cover culinary techniques such as knife skills, tasting adjustments and presentation as we prepare Chicken Noodle Soup; Corn Muffins; Spring Salad with Lemon Dressing; and Strawberry- Rhubarb Tartlets. On day two, each team will be given a basket of 3 to 4 "mystery ingredients," along with other basic ingredients, and develop recipes together. Emphasis will be on a friendly competition, teamwork, taste, presentation and fun! With poultry, dairy and eggs.', '90', 'Kids, Ages 10-12, Poultry, Dairy, Eggs', 'Tamara Guyton', 'Issaquah', 'Friday', '4/29/2016', 'twoday.jpg', '<ul><li>Chicken Noodle Soup</li><li>Corn Muffins</li><li>Spring Salad with Lemon Dressing</li><li>Strawberry-Rhubarb Tartlets</li></ul>', '16', '0')
var cook42Class = new Class('30-minute Cooking for Two', 'Love to cook but only need to feed one or two people? Want some inspiration for quick dinner meals that are nutritionally balanced and don\'t break the bank? In this class, you\'ll discover three appealing 30-minute meals: Spanish Seafood Stew with White Fish, Chorizo and Bulgur; Asparagus Pesto Pasta with Chicken and Spring Greens; and Sesame Tofu and Pickled Soba Slaw. We\'ll also discuss how to build a pantry of cooking staples and time-saving meal prep tips to keep your kitchen and your cooking organized and efficient. With meat, seafood, dairy and eggs.', '50', 'Adults,April,Meat,Seafood,Dairy,Eggs', 'Raquel DeHoyos', 'Green Lake Village', 'Sunday', '4/10/2016', 'cook42.jpg', '<ul><li>Spanish Seafood Stew with White Fish, Chorizo and Bulgur</li><li>Asparagus Pesto Pasta with Chicken and Spring Greens</li><li> Sesame Tofu and Pickled Soba Slaw</li></ul>', '16', '0')
var salmonClass = new Class('A Celebration of the Mighty Salmon', 'Salmon is the king of our regional cuisine and Chef Lynne will take it on parade in full regalia with some impressive dishes paired with regional wines. You\'ll quickly gain a loyalty to Homemade Gravlax with Warm Fingerling Potato, Arugula and Caper Salad; Seared Cherry Tomato, Fennel and Olive Oil Gazpacho with Pecorino Puff Pastry Breadsticks; Grilled Lime-Chile-Pumpkin Seed-crusted Salmon with Crabmeat Remoulade; and Strawberry Shortcake with Brown Sugar Scones and Lavender-Grand Marnier Whipped Cream. With seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED.', '55', 'Seafood,Dairy,Eggs,Adults,Age 21+,May', 'Lynne Vea', 'Green Lake Aurora', 'Tuesday', '5/31/2016', 'salmon.jpg', '<ul><li>Homemade Gravlax with Warm Fingerling Potato</li><li>Arugula and Caper Salad</li><li>Seared Cherry Tomato, Fennel and Olive Oil Gazpacho with Pecorino Puff Pastry Breadsticks</li><li>Grilled Lime-Chile-Pumpkin Seed-crusted Salmon with Crabmeat Remoulade</li><li>Strawberry Shortcake with Brown Sugar Scones and Lavender-Grand Marnier Whipped Cream.</li></ul>', '16', '0')
var agingClass = new Class('Aging Gracefully', 'Is 60 really the new 50? Does the body\'s need for specific vitamins and minerals change with age?  As longevity increases, we all want to remain strong and healthy. Marilyn will offer samples and discuss food choices  to support heart, brain, energy and muscle function as we age.', '10', 'Lecture,April', 'Marilyn Walls, M.S.', 'Edmonds', 'Friday', '4/29/2016', 'aging.jpg', '<ul><li>Snacks provided</li></ul>', '16', '0')
var pieClass = new Class('All About Pie', 'Take the challenge out of pie crust with a little knowledge, a few handling instructions and quality ingredients. Discover the key to making a tender, flaky and flavorful butter pie crust in this informative hands-on class. Each student will choose to make a 6-inch Sour Cherry and Almond Pie or a Rhubarb Strawberry Pie to bake and take home. We\'ll also taste pie in class and Chef Laurie will demonstrate how to make a galette and how to create a lattice crust. We\'ll discuss blind baking, flour types and brands and fruit varieties and troubleshoot all of your pie problems. For every season, pie is the answer. Vegetarian with dairy; no eggs.', '55', 'Baking, Adults,June,Vegetarian, Dairy', 'Laurie Pfalzer', 'Issaquah', 'Friday', '6/3/2016', 'pie.jpg', '<ul><li>Sour Cherry and Almond Pie</li><li>Rhubarb Strawberry Pie</li></ul>', '16', '0')
var antiClass = new Class('Anti-Inflammatory Eating Made Easy', 'Chronic inflammation can leave you feeling  fatigued, achy and out of balance. The good news is there are a number of appealing, nutritious foods that shut down inflammation and protect against diseases and unhealthy aging. Michelle, a dietitian and author of “Anti-Inflammatory Eating Made Easy,” will discuss how an anti-inflammatory diet can help ease joint pain, improve digestion, increase energy and much more. Sample Calm and Cool Basil Avocado Soup; Roasted Asparagus and Carrots with Lemony Tahini Drizzle; and Salmon and Kale in Creamy Coconut Sauce. With seafood; no dairy or eggs.', '50', 'Adults,Seafood,April', 'Michelle Babb, M.S., R.D.', 'Issaquah', 'Tuesday', '4/5/2016', 'anti.jpg', '<ul><li>Basil Avocado Soup</li><li>Roasted Asparagus and Carrots with Lemony Tahini Drizzle</li><li>Salmon and Kale in Creamy Coconut Sauce</li></ul>', '16', '0')
var enchiladasClass = new Class('Anytime Enchiladas', 'For ages 7 to 9. Impress your family when you make enchiladas for dinner! In this class, you and your small group will prepare Chicken Enchiladas, starting with the sauce all the way to sliding the finished dish into the oven. Learn to take advantage of your kitchen pantry with Easy Cheesy Vegetarian Enchiladas and round out your meal with Roasted Tomato-Jalapeño Salsa; and refreshing Carrot-Jicama Slaw. Meat optional; with dairy; no eggs. Price includes one child and one adult.', '50', 'Meat, Dairy, Kids, Ages 7 to 9, April', 'Lisa Crawford', 'RD', 'Saturday', '4/2/2016', 'enchiladas.jpg', '<ul><li>Vegetarian Enchiladas</li><li>Roasted Tomato-Jalapeño Salsa</li><li>Carrot-Jicama Slaw</li></ul>', '16', '0')
var atwClass = new Class('Around the World in Five Days: Kids\' Cooking Camp', 'Future chefs explore the cuisines of many lands in fun hands-on classes while learning cooking techniques, kitchen safety and delicious recipes using familiar and healthy ingredients. With entrees, side dishes and desserts, each day features a complete meal from different parts of the globe: India, Brazil, Italy, Syria and China. Among the dishes we\'ll enjoy  preparing (and eating!) are Indian Mango Lassi; Brazilian Cheese Puffs; Chinese Chop Chop Salad; Syrian Falafels; and Italian  Lemon Tarts. Vegetarian with meat options; dairy and eggs.', '185', 'Vegetarian,meat, dairy, eggs, kids, ages 8-15', 'PCC Cooks Staff', 'Bothell', 'Monday', '', 'atw.jpg', '<ul><li>Indian Mango Lassi</li><li>Brazilian Cheese Puffs</li><li>Chinese Chop Chop Salad</li><li>Syrian Falafels</li><li> Italian Lemon Tarts</li></ul>', '16', '0')
var breadClass = new Class('Artisan Breads:  Ciabatta and Pizza', 'Ciabatta and pizza are go-to hearth breads when baking at home. Chef Laurie will show you that it\'s easy to get an artisan bakery result in your own oven with a little knowledge and some simple techniques. Using the same dough, you will make traditional Italian bread with substantial crusts that has full flavors due to slow fermentation and the starter that is made the day before. You will see and handle the Ciabatta bread in all stages from starter to freshly baked and you\'ll make your own  Ciabatta Pizza from the Ciabatta dough to enjoy in class. Come with your questions! You will leave class with dough to finish baking at home and lots of information to help you to start making artisan bread at home. Vegetarian with meat and dairy optional; no eggs.', '50', 'Vegetarian,Meat,Dairy,April', 'Laurie Pfalzer', 'Green Lake Village', 'Thursday', '4/7/2016', 'bread.jpg', '<ul><li>Ciabatta bread</li><li>Ciabatta Pizza</li></ul>', '16', '0')
var basqueClass = new Class('Basque Country Cooking', 'Nestled between the Pyrenees Mountains and the Atlantic Ocean, the Basque region features some of the finest food in Spain. With French and Spanish influences, the cuisine makes the best of the ocean and mountains with fresh fish, vibrant vegetables and spiced sausages. Join Chef Erin to make a variety of classic and contemporary Basque dishes including: Chorizos a la Sidra (Chorizo in Cider); Piperrada (Basque Eggs with Mixed Vegetables); Puerros a la Vinagreta (Leeks with Vinaigrette); Merluza en Salsa Verde (Mixed Seafood in Parsley and Wine Sauce); and Helado de Queso Fresco con Salsa de Frutos Rojos (Cream Cheese Ice Cream with Red Berry Sauce). With meat, seafood, dairy and eggs; no gluten.', '55', 'meat, seafood, dairy, eggs, gluten-free, adults, April', 'Erin Coopey', 'Green Lake Aurora', 'Monday', '4/4/2016', 'basque.jpg', '<ul><li>Chorizos a la Sidra (Chorizo in Cider)</li><li>Piperrada (Basque Eggs with Mixed Vegetables)</li><li>Puerros a la Vinagreta (Leeks with Vinaigrette)</li><li>Merluza en Salsa Verde (Mixed Seafood in Parsley and Wine Sauce)</li><li>Helado de Queso Fresco con Salsa de Frutos Rojos (Cream Cheese Ice Cream with Red Berry Sauce).</li></ul>', '16', '0')
var batterClass = new Class('Batter\'s Up! Pancakes and Crepes', 'For ages 7 to 9. Discover how easy it is to make a batch of pancake batter from scratch. We\'ll use a thick batter on a griddle to make old-fashioned buttermilk pancakes with oat flour and a higher protein variation using whole-wheat flour and ricotta cheese. Then we\'ll get out our crêpe pans and make a thin batter to make French Crêpes. We\'ll serve them with homemade Whipped Honey Butter and Naturally Sweet Berry Sauce. Vegetarian with dairy and eggs. Price includes one child and one adult.', '50', 'kids, ages 7-9, vegetarian, dairy, eggs, April', 'Gill Dey', 'Green Lake Aurora', 'Saturday', '4/30/2016', 'batter.jpg', '<ul><li>Pancakes</li><li>Crepes</li><li>Whipped Honey Butter</li><li>Naturally Sweet Berry Sauce</li></ul>', '16', '0')
var cheeseClass = new Class('Cheesemaking Workshop', 'Chef, dairymaid and cheesemaker Jackie Freeman will be your guide for a fast-paced evening of hands-on cheesemaking. In a small group setting, we\'ll work together to create Buttermilk Cheese, Queso Blanco, Ricotta and Fresh Mozzarella. Jackie will discuss the basic principles of cheesemaking, including equipment use and care, ingredients and supplies. We will taste our work in class and discuss more recipes to try at home. Vegetarian with dairy; no eggs or gluten.', '50', 'adults, vegetarian, dairy, gluten-free, egg-free, April', 'Jackie Freeman', 'Columbia City', 'Wednesday', '4/13/2016', 'cheese.jpg', '<ul><li>Buttermilk Cheese</li><li>Queso Blanco</li><li>Ricotta</li><li>Fresh Mozzarella</li></ul>', '16', '0')
var chickenClass = new Class('Chicken 101', 'Get some go-to meals lined up with easy  weeknight chicken dishes. In class you will  learn techniques for selecting, storing, breaking down and preparing the world\'s favorite white meat. Together, you\'ll prepare Chicken Thighs Braised in White Wine with Fingerling Potatoes and Tarragon; Spatchcock Chicken with Radishes, Leeks and Carrots; and Chicken, Pea and  Mushroom Risotto. You\'ll also sample Lesa\'s Simplest Roast Chicken Stock. With poultry and dairy; no eggs.', '55', 'adults, poultry, dairy, egg-free, May', 'Lesa Sullivan', 'Issaquah', 'Wednesday', '5/25/2016', 'chicken.jpg', '<ul><li>Chicken Thighs Braised in White Wine with Fingerling Potatoes and Tarragon</li><li>Spatchcock Chicken with Radishes, Leeks and Carrots</li><li> Chicken, Pea and Mushroom Risotto</li></ul>', '16', '0')
var cldrollsClass = new Class('Chinese Lazy  Dragon Rolls', 'For ages 12 and up; teens only. “Lazy Dragon” stuffed rolled buns, also known as “Meat Dragon,” are large steamed Chinese rolls filled with meat and are a popular local snack in Beijing. They are especially sought after in springtime because Chinese people believe eating these rolls will help to get rid of laziness and give people energy and a good start for a new year. We will learn how to prepare the dough and make “Meat Dragons” with pork filling. Christina will also demo a “Veggie Dragon” with baked tofu and carrot filling. Then we will enjoy our creations with Soy Vinegar Dipping Sauce. With meat; no dairy or eggs.', '45', 'kids, ages 12+,meat, daiy-free, egg-free, April', 'Christina Chung', 'Issaquah', 'Saturday', '4/9/2016', 'cldrolls.jpg', '<ul><li>“Meat Dragons” with pork filling</li><li>“Veggie Dragon” with baked tofu and carrot filling</li><li>Soy Vinegar Dipping Sauce</li></ul>', '16', '0')
var noodlesClass = new Class('Classic Chinese Noodles', 'Every region in China has its own style of making noodles and preparing noodle dishes. Christina will teach you how to make two classic noodle dishes from different regions. First we\'ll prepare the dough to make Buckwheat “Fire Cracker” Noodles and Millet Ge Da Noodles. Then we\'ll  use our freshly made noodles in two dishes:  Xinjiang-style Hot and Sour “Fire Cracker”  Noodle Soup and Old Beijing-style Stir-fried  Ge Da Noodles with Five-Spice Soy Miso Sauce; with ingredients such as baked tofu, edamame, mushrooms and vegetables. Vegetarian; no dairy or eggs.', '50', 'vegetarian, adults, May', 'Christina Chung', 'Edmonds', 'Sunday', '5/1/2016', 'noodles.jpg', '<ul><li>Buckwheat “Fire Cracker” Noodles</li><li>Millet Ge Da Noodles</li><li>Xinjiang-style Hot and Sour “Fire Cracker” Noodle Soup</li><li>Old Beijing-style Stir-fried  Ge Da Noodles with Five-Spice Soy Miso Sauce</li></ul>', '16', '0')
var frenchClass = new Class('Classic French Cooking', 'Chef Michael will guide you through some of the time-honored methods of French cuisine, inspiring confidence with techniques that are often misunderstood as too complicated or time-consuming. The results will be magnifique as we prepare some French all-stars: Aparagus Salad with Hard-boiled Egg and Caper Vinaigrette; Salmon en Papillote with Morel Mushrooms and  Sauce Beurre Blanc; and Apple Tarte Tatin (an upside-down pastry) with Cinnamon Ice Cream. With seafood, dairy and eggs.', '55', 'April, adults,seafood,dairy,eggs', 'Michael Diem', 'Edmonds', 'Wednesday', '4/6/2016', 'french.jpg', '<ul><li>Aparagus Salad with Hard-boiled Egg and Caper Vinaigrette</li><li>Salmon en Papillote with Morel Mushrooms and  Sauce Beurre Blanc</li><li>Apple Tarte Tatin (an upside-down pastry) with Cinnamon Ice Cream</li></ul>', '16', '0')
var klatchClass = new Class('Coffee Klatch', 'Spend an evening with Chef Becky over coffee-inspired dishes that are a real conversation piece. Perk up to some slightly addictive main dishes like Coffee and Chocolate-braised Short Ribs with Polenta; and Coffee and Spice-coated Salmon Tacos with Charred Cabbage, Tropical Fruit Salsa and Avocado Cream. Your heart will beat a little faster when you take a sweet bite of Caramel and Coffee Truffles; and Seattle-style Espresso Tiramisu. With meat, seafood, dairy and eggs.', '50', 'April, adults,meat,seafood,dairy,eggs', 'Becky Selengut', 'Issaquah', 'Tuesday', '4/12/2016', 'klatch.jpg', '<ul><li>Coffee and Chocolate-braised Short Ribs with Polenta</li><li>Coffee and Spice-coated Salmon Tacos with Charred Cabbage, Tropical Fruit Salsa and Avocado Cream</li><li>Caramel and Coffee Truffles</li><li>Espresso Tiramisu</li></ul>', '16', '0')
var spsoupClass = new Class('Easy Soups for Springtime', 'Danielle loves to create easy-to-follow recipes using each season\'s best produce and inspire her students to recreate whole-foods-based seasonal dishes at home. Soups that can be added into your weekly menu plan are a great start!  Join her for this fun and informative hands-on class to create a sampling of soups, including Curried Carrot and Ginger Soup with Cilantro Oil; Hearty Vegetable Minestrone with Fava Beans; Creamy Spring Garlic and Red Potato Soup; and Miso Soup in a rich Mushroom Stock. Vegetarian; no dairy, eggs or gluten.', '50', 'April, adults,vegetarian, dairy-free,egg-free,gluten-free', 'Danielle Premo', 'WS', 'Tuesday', '4/5/2016', 'spsoup.jpg', '<ul><li>Curried Carrot and Ginger Soup with Cilantro Oil</li><li>Hearty Vegetable Minestrone with Fava Beans</li><li>Creamy Spring Garlic and Red Potato Soup</li><li>Miso Soup in a rich Mushroom Stock</li></ul>', '16', '0')
var veganClass = new Class('Elegant Vegan Dining', 'Ready to eat healthy this spring? Join Chef Lesa in the kitchen for another collection of vegan recipes based around seasonal produce. These dishes are great for sides and snacks and become an entrée in a snap. Together, you will prepare and enjoy Pea Pancakes with Cashew Crème and Mint Pesto; Eggless Asparagus Quiche; Grilled Fava Mash with Walnut Oil; and Steamed Artichokes with Potato Garlic Dipping Sauce. Vegetarian; no dairy or eggs.', '50', 'April, adults, vegetarian, vegan, dairy-free, egg-free', 'Lesa Sullivan', 'Green Lake Aurora', 'Thursday', '4/28/2016', 'vegan.jpg', '<ul><li>Pea Pancakes with Cashew Crème and Mint Pesto</li><li>Eggless Asparagus Quiche</li><li>Grilled Fava Mash with Walnut Oil</li><li> Steamed Artichokes with Potato Garlic Dipping Sauce</li></ul>', '16', '0')
var fermClass = new Class('Fermented and Cultured Foods', 'For centuries, fermentation has been used around the world as a health-promoting method for preserving foods. Today, fermented and cultured foods are recognized as enzyme-rich, probiotic super-foods that can aid digestion and detoxification, boost immunity, curb cravings and enhance the nutritional profile of dishes. Birgitte will guide you through the process of making Kombucha; Traditional Beet Kvass; Sourdough Starter; and Sourdough Pancakes with Cultured Fruit Sauce. You\'ll also learn the basics of making homemade Sauerkraut and take home your own jar. Vegetarian with optional dairy (whey); no eggs or gluten.', '55', 'April,adults,vegetarian, dairy, egg-free,gluten-free', 'Birgitte Antonsen', 'Issaquah', 'Sunday', '4/17/2016', 'ferm.jpg', '<ul><li>Kombucha</li><li>Traditional Beet Kvass</li><li>Sourdough Starter</li><li>Sourdough Pancakes with Cultured Fruit Sauce</li></ul>', '16', '0')
var heartClass = new Class('Food as Medicine:  Heart Health', 'Tanmeet is an Integrative Family Physician with a passion for using food as medicine. We\'ll get the perfect pairing as Chef Becky combines  her amazing cooking skills with Dr. Sethi\'s knowledge. With samplings of wine and green tea, we\'ll hear in depth about heart healthy ingredients as Becky does her handiwork to transform them into delicious dishes like Massaged Kale Salad with Brown Rice, Red Cabbage and Avocado; Roasted Salmon with White Beans, Radicchio, Salsa Verde and Toasted Almonds; Chocolate Terrine with Hibiscus, Genmaicha and Salted Hazelnut Powders; and Blueberry and Basil Sorbet. With seafood and dairy; no eggs.', '55', 'April, adults, seafood,dairy,egg-free', 'Becky Selengut and  Tanmeet Sethi, M.D.', 'Green Lake Village', 'Wednesday', '4/6/2016', 'heart.jpg', '<ul><li>Massaged Kale Salad with Brown Rice, Red Cabbage and Avocado</li><li>Roasted Salmon with White Beans, Radicchio, Salsa Verde and Toasted Almonds</li><li>Chocolate Terrine with Hibiscus, Genmaicha and Salted Hazelnut Powders</li><li> Blueberry and Basil Sorbet.</li></ul>', '16', '0')
var fondueClass = new Class('Fun with Fondue', 'For ages 7 to 12. In this gluten-free class, we\'ll make a Gruyère and Swiss Cheese Fondue and a Dairy-free “Cheese” Fondue. We\'ll practice our knife skills as we cut up bread, Granny Smith apples, carrots and cherry tomatoes to dip in the cheesy fondue sauces.  For dessert, we\'ll make a mouth-watering Chocolate Sauce in which to dip tiny Cookie Dough Balls (egg-free!), cut strawberries and bananas. Vegetarian with optional dairy; no eggs or gluten.   Price includes one child and one adult.', '50', 'April,kids, ages 7-12, child+adult, vegetarian, dairy, egg-free, gluten-free', 'Heather Dickinson', 'Green Lake Village', 'Saturday', '4/2/2016', 'fondue.jpg', '<ul><li>Cheese Fondue</li><li>Chocolate sauce</li><li>Fruit and Vegetables</li></ul>', '16', '0')
var gfwttClass = new Class('Gluten-free  Walk, Talk and Taste', 'Designed especially for shoppers interested in exploring the many gluten-free options available at PCC.', '0', 'April, adults', '', 'Issaquah', 'Monday', '4/18/2016', 'gfwtt.jpg', '<ul><li></li></ul>', '16', '0')
var gfbakingClass = new Class('Gluten-free Baking: SWEET Treats', 'Usher in spring with scrumptious Carrot Cake Cupcakes with Cream Cheese Frosting and Tangy Lemon Bars — all gluten-free! You\'ll learn tips for preparing gluten-free cake batter for the cupcakes and lemon-curd and gluten-free shortbread for the lemon bars. These satisfying treats taste like the real deal; no one will ever guess they are gluten-free! Vegetarian with dairy and eggs; no gluten.', '50', 'May,vegetarian,dairy, eggs, gluten-free', 'Shelley Baumgarten', 'Columbia City', 'Monday', '5/9/2016', 'gfbaking.jpg', '<ul><li>Carrot Cake Cupcakes with Cream Cheese Frosting</li><li>Tangy Lemon Bars</li></ul>', '16', '0')
var budgetClass = new Class('Healthy Eating —  Budget Friendly', 'Time and money are both valuable resources, and sometimes we can find ourselves tight on one or the other or both. Learn how to create quick and easy meals that are delicious, nutritious and cost effective. You\'ll get techniques for meal planning, tips on how to "dress-up" leftovers and recipe substitutions to help stretch your food dollar, as well as tips on how to maximize the nutrition you get from your food purchases. You\'ll love Berry Banana Smoothie; Carrot Cabbage Slaw with Marinated Tofu and Lemon-Tahini Dressing; and Lentil Cakes with Garlic-Feta Sauce. Vegetarian with dairy and eggs.', '45', 'May, adults,vegetarian, dairy, eggs', 'Virginia Newman,  M.S.N.', 'Green Lake Village', 'Monday', '5/23/2016', 'budget.jpg', '<ul><li>Berry Banana Smoothie</li><li>Carrot Cabbage Slaw with Marinated Tofu and Lemon-Tahini Dressing</li><li>Lentil Cakes with Garlic-Feta Sauce</li></ul>', '16', '0')
var sardiniaClass = new Class('Holiday in Sardinia', 'Paola spent part of last summer on Carloforte, a tiny tuna-fishing island in Sardegna, and it was love at first bite. She\'ll introduce you to a sample of Sardinian cuisine as you help prepare Torta di Zucchine (Zucchini Frittata with Lemon Zest) as an appetizer. You will then make Malloreddus alla Campidanese (Handmade Semolina Pasta seasoned with Tomato Sauce and Tuna, as they serve it in Carloforte), and sweet little Pardulas (Sun-shaped Ricotta Pies). With seafood, dairy and eggs.', '50', 'April, adults, seafood,dairy,eggs', 'Paola Albanesi', 'RD', 'Thursday', '4/21/2016', 'sardinia.jpg', '<ul><li>Malloreddus alla Campidanese (Handmade Semolina Pasta seasoned with Tomato Sauce and Tuna, as they serve it in Carloforte)</li><li>Pardulas (Sun-shaped Ricotta Pies)</li></ul>', '16', '0')
var cakeClass = new Class('How to Bake a Cake 101', 'Learn to make three types of cake in this  class devoted to cake mixing and baking. Pastry Chef Laurie Pfalzer takes you back to the  beginning, showing you how to mix and bake Lemon Pound Cake; Vanilla Genoise (sponge cake); and Devil\'s Food Cake. Not all cakes are created equal; you will see that each of these cakes gets a different treatment to give you the best results ever with optimal height, crumb and moisture. You will bake cupcakes, small loaves and 8-inch rounds to take home to  enjoy. Vegetarian with dairy and eggs.', '50', 'May, adults, vegetarian, dairy,eggs', 'Laurie Pfalzer', 'Issaquah', 'Monday', '5/2/2016', 'cake.jpg', '<ul><li>Lemon Pound Cake</li><li>Vanilla Genoise (sponge cake)</li><li> Devil\'s Food Cake</li></ul>', '16', '0')
var seasonClass = new Class('In Season', 'Feel confident preparing an impressive seasonal menu for your friends and loved ones with some savvy tips and creative ideas from Danielle. She will take you through some of her favorite spring recipes that will become your favorites, too! You\'ll help prepare Kale Caesar Salad with Chickpea Croutons; Cashew and Spinach-stuffed Portobello Mushrooms with Sweet Balsamic Drizzle; Seared Ahi with Carrot Ginger Chutney; and a Strawberry Rhubarb Oat and Pecan Crumble. With seafood; no dairy, eggs or gluten.', '50', 'May,adults, seafood, dairy-free,egg-free,gluten-free', 'Danielle Premo', 'Issaquah', 'Thursday', '5/12/2016', 'season.jpg', '<ul><li>Kale Caesar Salad with Chickpea Croutons</li><li>Cashew and Spinach-stuffed Portobello Mushrooms with Sweet Balsamic Drizzle</li><li>Seared Ahi with Carrot Ginger Chutney</li><li> Strawberry Rhubarb Oat and Pecan Crumble.</li></ul>', '16', '0')
var indianClass = new Class('Indian Cuisine —  Under Pressure!', 'Indians use pressure cookers routinely in their cooking, especially to cook dried, whole lentils and beans and vegetables like potatoes, cauliflower and carrots. A pressure cooker cuts cooking time and energy use significantly for the home cook. Archana will showcase several easy Indian recipes (that can be made with or without a pressure cooker), including Mung Bean Lentil Soup with Greens and Roasted  Cumin; Vegetable Biryani (Spice-infused Rice with Peas and Carrots); and Aloo Gobhi  (Potato and Cauliflower with Coriander and Cumin). Vegetarian; no dairy or eggs.', '45', 'April, adults,vegetarian, dairy-free,egg-free', 'Archana Verma', 'Columbia City', 'Monday', '4/11/2016', 'indian.jpg', '<ul><li>Mung Bean Lentil Soup with Greens and Roasted Cumin</li><li>Vegetable Biryani (Spice-infused Rice with Peas and Carrots)</li><li>Aloo Gobhi  (Potato and Cauliflower with Coriander and Cumin)</li></ul>', '16', '0')
var chemClass = new Class('Kitchen Chemistry', 'For ages 10 to 12; kids only. What\'s the "pound" in pound cake? How do eggs make baked goods rise? What\'s the magical ingredient that makes some cookies soft and others crisp? We continue our culinary investigations with a batch of all new sweet and savory recipes. After whipping up heavenly French cheese puffs known as Gougères and Mini Vanilla Bean Pound Cakes, we\'ll taste the results of two variations on the same Oatmeal Cookie recipe, baked with one key difference. Vegetarian with dairy and eggs.', '45', 'April,kids, ages 10-12,vegetarian, dairy, eggs', 'Cam Zarcone', 'RD', 'Saturday', '4/9/2016', 'chem.jpg', '<ul><li>Gougères</li><li>Mini Vanilla Bean Pound Cakes</li><li>Oatmeal Cookie recipe,</li></ul>', '16', '0')
var knifeClass = new Class('Knife Skills', 'Practice knife-handling and learn how to cut safely and efficiently in this skill-building workshop with Chef Seppo. For the most useful practice, bring your own familiar chef knife (or use ours if you don\'t have one). He\'ll review knife selection, introduce honing and sharpening and teach you several different knife techniques. You\'ll sharpen your skills while preparing  ingredients for Lemon Cilantro Chicken Soup and Lemon Cilantro Vegetable Soup, which Seppo will demonstrate in class. Vegetarian with optional poultry; no dairy or eggs. Adults only.', '50', 'April, adults,poultry, dairy-free, egg-free.', 'Seppo Farrey', 'RD', 'Tuesday', '4/5/2016', 'knife.jpg', '<ul><li>Lemon Cilantro Chicken Soup</li><li>Lemon Cilantro Vegetable Soup</li></ul>', '16', '0')
var dumplingClass = new Class('Let\'s Roll: Jiao-Zi Dumplings and Spring Rolls', 'KPLU food commentator and longtime restaurant critic Nancy Leson is an Asian food fanatic convinced that a pantry full of Asian condiments, canned goods, dried noodles and other staples is a sure way to travel without a passport. She\'ll offer a world of advice and chat about Greater Seattle\'s many Asian restaurants while you snack on Quick Japanese Pickles. Then get ready to roll! We\'ll make handmade Pork and Shrimp Jiao-zi, including easy dumpling dough; and Vietnamese Fresh Spring Rolls. With meat and seafood; no dairy or eggs.', '45', 'April, adults,meat,seafood,dairy-free,egg-free', 'Nancy Leson', 'Edmonds', 'Wednesday', '4/20/2016', 'dumpling.jpg', '<ul><li>Pork and Shrimp Jiao-zi</li><li>dumpling dough</li><li>Vietnamese Fresh Spring Rolls</li></ul>', '16', '0')
var panClass = new Class('Mastering the Pan — Sauté, Sear and Pan Roast', 'A good pan is a fundamental kitchen tool, but knowing how to properly use it can be elusive, with useful instruction missing from most cookbooks. In this class, discover how to properly read the temperatures of oils and fats, avoid overcrowding the pan, and understand when to add food to keep it from sticking. Darin will demonstrate how to properly sear, sauté and pan roast like a restaurant chef, so you can approach your favorite recipes with confidence. Together, we\'ll prepare Crispy-skinned Chicken Thighs with Braised Leeks and Mustard; Dry-brined Pork Chops with Sweet and Sour Cherry and Soy Glaze with Garlicky Bok Choy; and Butter-basted Peppercorn Strip Steak with Asparagus and Pine Nuts. With meat, dairy and eggs.', '55', 'April, adults,meat,dairy,eggs', 'Darin Gagner', 'Green Lake Village', 'Monday', '4/4/2016', 'pan.jpg', '<ul><li>Crispy-skinned Chicken Thighs with Braised Leeks and Mustard</li><li>Dry-brined Pork Chops with Sweet and Sour Cherry and Soy Glaze with Garlicky Bok Choy</li><li>Butter-basted Peppercorn Strip Steak with Asparagus and Pine Nuts</li></ul>', '16', '0')
var medClass = new Class('Mediterranean Medley', 'Sureyya specializes in fast, easy and gloriously delicious vegan dishes. It\'s easy to love plant-based eating when you are enjoying these dishes from throughout the Mediterranean region: Turkish Spinach Hummus; Algerian Braised Beans and Lentil Soup with Harissa; Turkish Vegetable Hot Pot; Roasted Beet Salad with Rice and Dill; and Spicy Spanish Mojette (Roasted Vegetable Scoops). Vegetarian; no dairy or eggs.', '45', 'April, adults,vegetarian, dairy-free,egg-free', 'Sureyya Gokeri', 'Columbia City', 'Monday', '4/4/2016', 'med.jpg', '<ul><li>Turkish Spinach Hummus</li><li>Algerian Braised Beans and Lentil Soup with Harissa</li><li>Turkish Vegetable Hot Pot</li><li>Roasted Beet Salad with Rice and Dill</li><li> Spicy Spanish Mojette (Roasted Vegetable Scoops)</li></ul>', '16', '0')
var piemonteseClass = new Class('Menu Piemontese', 'Among Italy\'s many cuisines and wine cultures, Piedmont offers an especially expressive and elegant range of flavors. Join us for a selection of extraordinary wines, chosen to complement our special menu: Bagna Cauda (Warm Parsley, Garlic and Anchovy Dipping Sauce accompanied by a Variety of Colorful Spring Vegetables and Ciabatta Bread);  Tagliolini con Tartufi (Ribbon Pasta with Artichokes and Pea Pods in White Truffle Sauce); Bollito Misto (a Melange of Chicken and Sausages cooked in a Seasoned Broth and served with a Classic Piemontese Green Sauce); and Zabaglione (a frothy Liqueur- infused Flan served with Fresh Strawberries). With meat, seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED', '65', 'June,adults, seafood, age 21+, meat, dairy,eggs', 'Lynne Vea, Jeff Cox,  John White and Leif Olson', 'WS', 'Thursday', '6/9/2016', 'piemontese.jpg', '<ul><li>Bagna Cauda (Warm Parsley, Garlic and Anchovy Dipping Sauce accompanied by a Variety of Colorful Spring Vegetables and Ciabatta Bread)</li><li> Tagliolini con Tartufi (Ribbon Pasta with Artichokes and Pea Pods in White Truffle Sauce)</li><li>Bollito Misto (a Melange of Chicken and Sausages)</li><li> Zabaglione (Liqueur-infused Flan served with Fresh Strawberries)</li></ul>', '16', '0')
var mexClass = new Class('Mexican Fiesta', 'For ages 4 to 6. Your child will love tasting and smelling the flavors of Mexico. We\'ll pick fresh cilantro, dice avocados, sauté onions, and mix cinnamon and chocolate to create a tasty menu of Tortilla Soup; Roasted Sweet Potato Quesadillas; and Mexican Cookies — Olé! Vegetarian with dairy and eggs. Price includes one child and one adult.', '45', 'April, kids, child+adult, vegetarian, dairy, eggs, ages 4-6', 'Kelly Lake', 'Columbia City', 'Saturday', '4/9/2016', 'mex.jpg', '<ul><li>Tortilla Soup</li><li>Roasted Sweet Potato Quesadillas</li><li>Mexican Cookies</li></ul>', '16', '0')
var bagelsClass = new Class('New York-Style Bagels', 'Surprise and delight your family and friends with authentic New York-style bagels crafted by your very own hands. We\'ll prepare dough, shape, boil and then bake five different flavors: Plain, Poppy Seed, Sesame Seed, Onion and Everything Bagels. You will also create some complementary cream cheese spreads —  Garlic and Herb; Vegetable; and Honey Walnut — to accompany your bagels. Vegetarian with eggs and optional dairy.', '50', 'April, adults,vegetarian, dairy, eggs', 'Shelley Baumgarten', 'Issaquah', 'Sunday', '4/3/2016', 'bagels.jpg', '<ul><li>Bagels: Plain, Poppy Seed, Sesame Seed, Onion and Everything Bagels</li><li>Cream cheese spreads: Garlic and Herb, Vegetable, and Honey Walnut</li></ul>', '16', '0')
var nwcelClass = new Class('Northwest Spring  Celebration', 'If there\'s anything in the world better than spring in Cascadia, it\'s spring dining featuring the bounty of Northwest farms, ranches, waters and vineyards. Savor the season with wines from some of our favorite wineries, paired with a menu full of amazing local flavors: Wild Alaskan Spot Prawn Bisque with Strawberry-Peppercorn Splash; Warm Salad of Asparagus and Prosciutto with Roasted Morels and Local Goat Cheese; Whole  Spice-seared Lamb Medallions with Hazelnuts and Sour Cherry-Syrah Coulis; and Honey- Rhubarb Upside-Down Torte. With meat,  seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED', '65', 'April, adults, meat, seafood, dairy, eggs, age 21+', 'Lynne Vea, Mary Kirman, Seri Sedlacek and Stephen Johnson', 'RD', 'Thursday', '4/7/2016', 'nwcel.jpg', '<ul><li>Wild Alaskan Spot Prawn Bisque with Strawberry-Peppercorn Splash</li><li>Warm Salad of Asparagus and Prosciutto with Roasted Morels and Local Goat Cheese</li><li>Whole  Spice-seared Lamb Medallions with Hazelnuts and Sour Cherry-Syrah Coulis</li><li> Honey-Rhubarb Upside-Down Torte</li></ul>', '16', '0')
var pulseClass = new Class('ON THE PULSE', 'Pulses, including lentils, peas and chickpeas, have been part of the world\'s cuisine for centuries, but the ancients who first cultivated these soil-enriching crops wouldn\'t have guessed they were growing the world\'s first superfood. Packed with protein, fiber and a host of vitamins and minerals, pulses are healthy for you and the planet. Work with Chef Erin for some diverse and delicious recipes including Red Lentil and Herb Dip; Pea and Pesto Soup; Chickpea Pizza with Pistachio Pesto; Roasted Cauliflower and Lentil Tacos; and Chickpea Flour Gingersnap Cookies. Vegetarian with dairy and eggs; no gluten.', '50', 'June,adults,vegetarian,dairy,eggs, gluten-free', 'Erin Coopey', 'Issaquah', 'Wednesday', '6/1/2016', 'pulse.jpg', '<ul><li>Red Lentil and Herb Dip</li><li>Pea and Pesto Soup</li><li>Chickpea Pizza with Pistachio Pesto</li><li>Roasted Cauliflower and Lentil Tacos</li><li>Chickpea Flour Gingersnap Cookies</li></ul>', '16', '0')
var pastaClass = new Class('Pasta Workshop', 'Iole has been sharing her love of creating handmade pasta with eager PCC students for two decades now. In this lively workshop, Iole will show you how to create fresh pasta, a staple of Italian home-cooked meals. With a batch of pasta dough, expert guidance and a little  practice, you\'ll become skilled at making Bowtie Pasta with Sugar Plum Tomatoes, Mozzarella and Arugula; Tagliolini with Pesto; and  Fettuccine al Burro e Parmigiano. Iole will also demonstrate how to make ravioli and  tortellini. Vegetarian with dairy and eggs.', '55', 'April, adults,vegetarian, dairy, eggs', 'Iole Aguero', 'Green Lake Aurora', 'Tuesday', '4/5/2016', 'pasta.jpg', '<ul><li>Bowtie Pasta with Sugar Plum Tomatoes, Mozzarella and Arugula</li><li>Tagliolini with Pesto</li><li>Fettuccine al Burro e Parmigiano</li></ul>', '16', '0')
var pizzaClass = new Class('Pizza, Pizza', 'For ages 4 to 6. What\'s not to love about pizza? Iole will show you how to make quick, delicious homemade pizza with just a few  ingredients. Kids will enjoy rolling out the dough and adding the toppings for their very own pizza. We\'ll also make Chocolate Coconut Cookies and transform them into irresistible Ice Cream Sandwiches. Vegetarian with dairy and eggs. Price includes one child and one adult.', '45', 'April,kids,ages 4-6,child+adult,', 'Iole Aguero', 'Issaquah', 'Saturday', '4/2/2016', 'pizza.jpg', '<ul><li>Pizza</li><li>Chocolate Coconut Cookies</li></ul>', '16', '0')
var thaiClass = new Class('The Art of Thai Cuisine', 'Thai food is a snap for everyday cooking with Pranee\'s simple techniques and an abundance of Thai ingredients and fresh herbs within easy reach. Learn how to balance sweet, sour, salty and spicy as Pranee demonstrates four tantalizing Thai dishes, including Laab Moo (Minced Pork Salad with Mint, Cilantro and Green Onion in Spicy Lime and Chili Dressing, served with Sticky Rice); Tom Kha Gai (Chicken in Thai  Ginger and Coconut-Lime Broth with Lemongrass and Lime Leaves); Phanang Goong (Zesty Phanang Curry Prawns with Shredded Lime Leaves); and Kao Neow Mamuang (Sticky Rice with Mango). With meat, poultry and seafood; no dairy or eggs.', '50', 'April, adults,meat, poultry,seafood,dairy-free,egg-free', 'Pranee Halvorsen', 'Green Lake Aurora', 'Thursday', '4/14/2016', 'thai.jpg', '<ul><li>Laab Moo (Minced Pork Salad with Mint, Cilantro and Green Onion in Spicy Lime and Chili Dressing, served with Sticky Rice)</li><li>Tom Kha Gai (Chicken in Thai  Ginger and Coconut-Lime Broth with Lemongrass and Lime Leaves)</li><li>Phanang Goong (Zesty Phanang Curry Prawns with Shredded Lime Leaves)</li><li>Kao Neow Mamuang (Sticky Rice with Mango)</li></ul>', '16', '0')
var grillClass = new Class('The Thrill Of The Grill', 'Participate in our regional spring optimism and be at the ready, spatula in hand, for the first sunny opportunities to start grilling. Lynne\'s irresistible recipes will be paired with cider samplings: Sizzling Grilled Flatbread Pizza 101 with homemade olive oil dough, local cheeses and a variety of toppings; Nut-and-Seed-Crusted Filet of Halibut with two Zesty Sauces; Sticky Chicken with Korean Gochujang Barbecue Sauce; and Rhubarb Fool. With meat, seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED.', '55', 'April, adults, ages 21+,meat, seafood, dairy, eggs', 'Lynne Vea', 'Edmonds', 'Tuesday', '4/5/2016', 'grill.jpg', '<ul><li>Sizzling Grilled Flatbread Pizza 101</li><li>Nut-and-Seed-Crusted Filet of Halibut with two Zesty Sauces</li><li>Sticky Chicken with Korean Gochujang Barbecue Sauce</li><li>Rhubarb Fool</li></ul>', '16', '0')

// Update the HTML for the page  - Deena

// twoday.html
if (document.getElementById('bc1')) {
    var bc1 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="twoday.html">' + twodayClass.name + '</a></li> </ul>';
    var elBc1 = document.getElementById('bc1');
    elBc1.innerHTML = bc1;
    
    var cdImg1 = '<br> <img class="image" src="images/' + twodayClass.image + '" alt="twoday">';
    var elCd1 = document.getElementById('img1');
    
    var cdDesc1 = '<h2>' + twodayClass.name + '</h2><h4>Instructor:' + twodayClass.instructor + '</h4><h3>Menu:</h3>' + twodayClass.menu + '<p>' + twodayClass.description + '</p> <h3>Session:</h3>' + twodayClass.location + ' – ' + twodayClass.day + ', ' + twodayClass.date;
    var elCdDesc1 = document.getElementById('desc1');
    elCdDesc1.innerHTML = cdDesc1;
    
    cdReg1 = '<br><h3>Price: $' + twodayClass.price +  '</h3> <p></p>'
    var elCdReg1 = document.getElementById('reg1');
    elCdReg1.innerHTML = cdReg1;
}
// cook42.html
if (document.getElementById('bc2')) {
    var bc2 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="cook42.html">' + cook42Class.name + '</a></li> </ul>';
    var elBc2 = document.getElementById('bc2');
    elBc2.innerHTML = bc2;
    
    var cdImg2 = '<br> <img class="image" src="images/' + cook42Class.image + '" alt="cook42">';
    var elCd2 = document.getElementById('img2');
    elCd2.innerHTML = cdImg2;
    
    var cdDesc2 = '<h2>' + cook42Class.name + '</h2> <h4>Instructor:' + cook42Class.instructor + '</h4><h3>Menu:</h3>' + cook42Class.menu + '<p>' + cook42Class.description + '</p> <h3>Session:</h3>' + cook42Class.location + ' – ' + cook42Class.day + ', ' + cook42Class.date;
    var elCdDesc2 = document.getElementById('desc2');
    elCdDesc2.innerHTML = cdDesc2;
    
    cdReg2 = '<br><h3>Price: $' + cook42Class.price +  '</h3> <p></p>'
    var elCdReg2 = document.getElementById('reg2');
    elCdReg2.innerHTML = cdReg2;
}
// salmon.html
if (document.getElementById('bc3')) {
    var bc3 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="salmon.html">' + salmonClass.name + '</a></li> </ul>';
    var elBc3 = document.getElementById('bc3');
    elBc3.innerHTML = bc3;
    
    var cdImg3 = '<br> <img class="image" src="images/' + salmonClass.image + '" alt="salmon">';
    var elCd3 = document.getElementById('img3');
    elCd3.innerHTML = cdImg3;
    
    var cdDesc3 = '<h2>' + salmonClass.name + '</h2> <h4>Instructor:' + salmonClass.instructor + '</h4><h3>Menu:</h3>' + salmonClass.menu + '<p>' + salmonClass.description + '</p> <h3>Session:</h3>' + salmonClass.location + ' – ' + salmonClass.day + ', ' + salmonClass.date;
    var elCdDesc3 = document.getElementById('desc3');
    elCdDesc3.innerHTML = cdDesc3;
    
    cdReg3 = '<br><h3>Price: $' + salmonClass.price +  '</h3> <p></p>'
    var elCdReg3 = document.getElementById('reg3');
    elCdReg3.innerHTML = cdReg3;
}    
// aging.html
if (document.getElementById('bc4')) {
    var bc4 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="aging.html">' + agingClass.name + '</a></li> </ul>';
    var elBc4 = document.getElementById('bc4');
    elBc4.innerHTML = bc4;
    
    var cdImg4 = '<br> <img class="image" src="images/' + agingClass.image + '" alt="aging">';
    var elCd4 = document.getElementById('img4');
    elCd4.innerHTML = cdImg4;
    
    var cdDesc4 = '<h2>' + agingClass.name + '</h2> <h4>Instructor:' + agingClass.instructor + '</h4><h3>Menu:</h3>' + agingClass.menu + '<p>' + agingClass.description + '</p> <h3>Session:</h3>' + agingClass.location + ' – ' + agingClass.day + ', ' + agingClass.date;
    var elCdDesc4 = document.getElementById('desc4');
    elCdDesc4.innerHTML = cdDesc4;
    
    cdReg4 = '<br><h3>Price: $' + agingClass.price +  '</h3> <p></p>'
    var elCdReg4 = document.getElementById('reg4');
    elCdReg4.innerHTML = cdReg4;
}
// pie.html
if (document.getElementById('bc5')) {
    var bc5 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="pie.html">' + pieClass.name + '</a></li> </ul>';
    var elBc5 = document.getElementById('bc5');
    elBc5.innerHTML = bc5;
    
    var cdImg5 = '<br> <img class="image" src="images/' + pieClass.image + '" alt="pie">';
    var elCd5 = document.getElementById('img5');
    elCd5.innerHTML = cdImg5;
    
    var cdDesc5 = '<h2>' + pieClass.name + '</h2> <h4>Instructor:' + pieClass.instructor + '</h4><h3>Menu:</h3>' + pieClass.menu + '<p>' + pieClass.description + '</p> <h3>Session:</h3>' + pieClass.location + ' – ' + pieClass.day + ', ' + pieClass.date;
    var elCdDesc5 = document.getElementById('desc5');
    elCdDesc5.innerHTML = cdDesc5;
    
    cdReg5 = '<br><h3>Price: $' + pieClass.price +  '</h3> <p></p>'
    var elCdReg5 = document.getElementById('reg5');
    elCdReg5.innerHTML = cdReg5;
}

// anti.html
if (document.getElementById('bc6')) {
    var bc6 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="anti.html">' + antiClass.name + '</a></li> </ul>';
    var elBc6 = document.getElementById('bc6');
    elBc6.innerHTML = bc6;
    
    var cdImg6 = '<br> <img class="image" src="images/' + antiClass.image + '" alt="anti">';
    var elCd6 = document.getElementById('img6');
    elCd6.innerHTML = cdImg6;
    
    var cdDesc6 = '<h2>' + antiClass.name + '</h2> <h4>Instructor:' + antiClass.instructor + '</h4> <h3>Menu:</h3>' + antiClass.menu + '<p>' + antiClass.description + '</p> <h3>Session:</h3>' + antiClass.location + ' – ' + antiClass.day + ', ' + antiClass.date;
    var elCdDesc6 = document.getElementById('desc6');
    elCdDesc6.innerHTML = cdDesc6;
    
    cdReg6 = '<br><h3>Price: $' + antiClass.price +  '</h3> <p></p>'
    var elCdReg6 = document.getElementById('reg6');
    elCdReg6.innerHTML = cdReg6;
}     

// enchiladas.html
if (document.getElementById('bc7')) {
    var bc7 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="enchiladas.html">' + enchiladasClass.name + '</a></li> </ul>';
    var elBc7 = document.getElementById('bc7');
    elBc7.innerHTML = bc7;
    
    var cdImg7 = '<br> <img class="image" src="images/' + enchiladasClass.image + '" alt="enchiladas">';
    var elCd7 = document.getElementById('img7');
    elCd7.innerHTML = cdImg7;
    
    var cdDesc7 = '<h2>' + enchiladasClass.name + '</h2> <h4>Instructor:' + enchiladasClass.instructor + '</h4> <h3>Menu:</h3>' + enchiladasClass.menu + '<p>' + enchiladasClass.description + '</p> <h3>Session:</h3>' + enchiladasClass.location + ' – ' + enchiladasClass.day + ', ' + enchiladasClass.date;
    var elCdDesc7 = document.getElementById('desc7');
    elCdDesc7.innerHTML = cdDesc7;
    
    cdReg7 = '<br><h3>Price: $' + enchiladasClass.price +  '</h3> <p></p>'
    var elCdReg7 = document.getElementById('reg7');
    elCdReg7.innerHTML = cdReg7;
}

// atw.html
if (document.getElementById('bc8')) {
    var bc8 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="atw.html">' + atwClass.name + '</a></li> </ul>';
    var elBc8 = document.getElementById('bc8');
    elBc8.innerHTML = bc8;
    
    var cdImg8 = '<br> <img class="image" src="images/' + atwClass.image + '" alt="atw">';
    var elCd8 = document.getElementById('img8');
    elCd8.innerHTML = cdImg8;
    
    var cdDesc8 = '<h2>' + atwClass.name + '</h2> <h4>Instructor:' + atwClass.instructor + '</h4><h3>Menu:</h3>' + atwClass.menu + '<p>' + atwClass.description + '</p> <h3>Session:</h3>' + atwClass.location + ' – ' + atwClass.day + ', ' + atwClass.date;
    var elCdDesc8 = document.getElementById('desc8');
    elCdDesc8.innerHTML = cdDesc8;
    
    cdReg8 = '<br><h3>Price: $' + atwClass.price +  '</h3> <p></p>'
    var elCdReg8 = document.getElementById('reg8');
    elCdReg8.innerHTML = cdReg8;
}

// bread.html
if (document.getElementById('bc9')) {
    var bc9 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="bread.html">' + breadClass.name + '</a></li> </ul>';
    var elBc9 = document.getElementById('bc9');
    elBc9.innerHTML = bc9;
    
    var cdImg9 = '<br> <img class="image" src="images/' + breadClass.image + '" alt="bread">';
    var elCd9 = document.getElementById('img9');
    elCd9.innerHTML = cdImg9;
    
    var cdDesc9 = '<h2>' + breadClass.name + '</h2> <h4>Instructor:' + breadClass.instructor + '</h4><h3>Menu:</h3>' + breadClass.menu + '<p>' + breadClass.description + '</p> <h3>Session:</h3>' + breadClass.location + ' – ' + breadClass.day + ', ' + breadClass.date;
    var elCdDesc9 = document.getElementById('desc9');
    elCdDesc9.innerHTML = cdDesc9;
    
    cdReg9 = '<br><h3>Price: $' + breadClass.price +  '</h3> <p></p>'
    var elCdReg9 = document.getElementById('reg9');
    elCdReg9.innerHTML = cdReg9;
}     

// basque.html
if (document.getElementById('bc10')) {
    var bc10 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="basque.html">' + basqueClass.name + '</a></li> </ul>';
    var elBc10 = document.getElementById('bc10');
    elBc10.innerHTML = bc10;
    
    var cdImg10 = '<br> <img class="image" src="images/' + basqueClass.image + '" alt="basque">';
    var elCd10 = document.getElementById('img10');
    elCd10.innerHTML = cdImg10;
    
    var cdDesc10 = '<h2>' + basqueClass.name + '</h2> <h4>Instructor:' + basqueClass.instructor + '</h4><h3>Menu:</h3>' + basqueClass.menu + '<p>' + basqueClass.description + '</p> <h3>Session:</h3>' + basqueClass.location + ' – ' + basqueClass.day + ', ' + basqueClass.date;
    var elCdDesc10 = document.getElementById('desc10');
    elCdDesc10.innerHTML = cdDesc10;
    
    cdReg10 = '<br><h3>Price: $' + basqueClass.price +  '</h3> <p></p>'
    var elCdReg10 = document.getElementById('reg10');
    elCdReg10.innerHTML = cdReg10;
}

// batter.html
if (document.getElementById('bc11')) {
    var bc11 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="batter.html">' + batterClass.name + '</a></li> </ul>';
    var elBc11 = document.getElementById('bc11');
    elBc11.innerHTML = bc11;
    
    var cdImg11 = '<br> <img class="image" src="images/' + batterClass.image + '" alt="batter">';
    var elCd11 = document.getElementById('img11');
    elCd11.innerHTML = cdImg11;
    
    var cdDesc11 = '<h2>' + batterClass.name + '</h2> <h4>Instructor:' + batterClass.instructor + '</h4><h3>Menu:</h3>' + batterClass.menu + '<p>' + batterClass.description + '</p> <h3>Session:</h3>' + batterClass.location + ' – ' + batterClass.day + ', ' + batterClass.date;
    var elCdDesc11 = document.getElementById('desc11');
    elCdDesc11.innerHTML = cdDesc11;
    
    cdReg11 = '<br><h3>Price: $' + batterClass.price +  '</h3> <p></p>'
    var elCdReg11 = document.getElementById('reg11');
    elCdReg11.innerHTML = cdReg11;
} 
// cheese.html
if (document.getElementById('bc12')) {
    var bc12 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="cheese.html">' + cheeseClass.name + '</a></li> </ul>';
    var elBc12 = document.getElementById('bc12');
    elBc12.innerHTML = bc12;
    
    var cdImg12 = '<br> <img class="image" src="images/' + cheeseClass.image + '" alt="cheese">';
    var elCd12 = document.getElementById('img12');
    elCd12.innerHTML = cdImg12;
    
    var cdDesc12 = '<h2>' + cheeseClass.name + '</h2> <h4>Instructor:' + cheeseClass.instructor + '</h4><h3>Menu:</h3>' + cheeseClass.menu + '<p>' + cheeseClass.description + '</p> <h3>Session:</h3>' + cheeseClass.location + ' – ' + cheeseClass.day + ', ' + cheeseClass.date;
    var elCdDesc12 = document.getElementById('desc12');
    elCdDesc12.innerHTML = cdDesc12;
    
    cdReg12 = '<br><h3>Price: $' + cheeseClass.price +  '</h3> <p></p>'
    var elCdReg12 = document.getElementById('reg12');
    elCdReg12.innerHTML = cdReg12;
}

// chicken.html
if (document.getElementById('bc13')) {
    var bc13 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="chicken.html">' + chickenClass.name + '</a></li> </ul>';
    var elBc13 = document.getElementById('bc13');
    elBc13.innerHTML = bc13;
    
    var cdImg13 = '<br> <img class="image" src="images/' + chickenClass.image + '" alt="chicken">';
    var elCd13 = document.getElementById('img13');
    elCd13.innerHTML = cdImg13;
    
    var cdDesc13 = '<h2>' + chickenClass.name + '</h2> <h4>Instructor:' + chickenClass.instructor + '</h4><h3>Menu:</h3>' + chickenClass.menu + '<p>' + chickenClass.description + '</p> <h3>Session:</h3>' + chickenClass.location + ' – ' + chickenClass.day + ', ' + chickenClass.date;
    var elCdDesc13 = document.getElementById('desc13');
    elCdDesc13.innerHTML = cdDesc13;
    
    cdReg13 = '<br><h3>Price: $' + chickenClass.price +  '</h3> <p></p>'
    var elCdReg13 = document.getElementById('reg13');
    elCdReg13.innerHTML = cdReg13;
}

// cldrolls.html
if (document.getElementById('bc14')) {
    var bc14 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="cldrolls.html">' + cldrollsClass.name + '</a></li> </ul>';
    var elBc14 = document.getElementById('bc14');
    elBc14.innerHTML = bc14;
    
    var cdImg14 = '<br> <img class="image" src="images/' + cldrollsClass.image + '" alt="cldrolls">';
    var elCd14 = document.getElementById('img14');
    elCd14.innerHTML = cdImg14;
    
    var cdDesc14 = '<h2>' + cldrollsClass.name + '</h2> <h4>Instructor:' + cldrollsClass.instructor + '</h4><h3>Menu:</h3>' + cldrollsClass.menu + '<p>' + cldrollsClass.description + '</p> <h3>Session:</h3>' + cldrollsClass.location + ' – ' + cldrollsClass.day + ', ' + cldrollsClass.date;
    var elCdDesc14 = document.getElementById('desc14');
    elCdDesc14.innerHTML = cdDesc14;
    
    cdReg14 = '<br><h3>Price: $' + cldrollsClass.price +  '</h3> <p></p>'
    var elCdReg14 = document.getElementById('reg14');
    elCdReg14.innerHTML = cdReg14;
}

// noodles.html
if (document.getElementById('bc15')) {
    var bc15 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="noodles.html">' + noodlesClass.name + '</a></li> </ul>';
    var elBc15 = document.getElementById('bc15');
    elBc15.innerHTML = bc15;
    
    var cdImg15 = '<br> <img class="image" src="images/' + noodlesClass.image + '" alt="noodles">';
    var elCd15 = document.getElementById('img15');
    elCd15.innerHTML = cdImg15;
    
    var cdDesc15 = '<h2>' + noodlesClass.name + '</h2> <h4>Instructor:' + noodlesClass.instructor + '</h4><h3>Menu:</h3>' + noodlesClass.menu + '<p>' + noodlesClass.description + '</p> <h3>Session:</h3>' + noodlesClass.location + ' – ' + noodlesClass.day + ', ' + noodlesClass.date;
    var elCdDesc15 = document.getElementById('desc15');
    elCdDesc15.innerHTML = cdDesc15;
    
    cdReg15 = '<br><h3>Price: $' + noodlesClass.price +  '</h3> <p></p>'
    var elCdReg15 = document.getElementById('reg15');
    elCdReg15.innerHTML = cdReg15;
}

// french.html
if (document.getElementById('bc16')) {
    var bc16 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="french.html">' + frenchClass.name + '</a></li> </ul>';
    var elBc16 = document.getElementById('bc16');
    elBc16.innerHTML = bc16;
    
    var cdImg16 = '<br> <img class="image" src="images/' + frenchClass.image + '" alt="french "><h3>Menu:</h3>' + frenchClass.menu;
    var elCd16 = document.getElementById('img16');
    elCd16.innerHTML = cdImg16;
    
    var cdDesc16 = '<h2>' + frenchClass.name + '</h2> <h4>Instructor:' + frenchClass.instructor + '</h4> <p>' + frenchClass.description + '</p> <h3>Session:</h3>' + frenchClass.location + ' – ' + frenchClass.day + ', ' + frenchClass.date;
    var elCdDesc16 = document.getElementById('desc16');
    elCdDesc16.innerHTML = cdDesc16;
    
    cdReg16 = '<br><h3>Price: $' + frenchClass.price +  '</h3> <p></p>'
    var elCdReg16 = document.getElementById('reg16');
    elCdReg16.innerHTML = cdReg16;
}    
// klatch.html
if (document.getElementById('bc17')) {
    var bc17 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="klatch.html">' + klatchClass.name + '</a></li> </ul>';
    var elBc17 = document.getElementById('bc17');
    elBc17.innerHTML = bc17;
    
    var cdImg17 = '<br> <img class="image" src="images/' + klatchClass.image + '" alt="klatch "><h3>Menu:</h3>' + klatchClass.menu;
    var elCd17 = document.getElementById('img17');
    elCd17.innerHTML = cdImg17;
    
    var cdDesc17 = '<h2>' + klatchClass.name + '</h2> <h4>Instructor:' + klatchClass.instructor + '</h4> <p>' + klatchClass.description + '</p> <h3>Session:</h3>' + klatchClass.location + ' – ' + klatchClass.day + ', ' + klatchClass.date;
    var elCdDesc17 = document.getElementById('desc17');
    elCdDesc17.innerHTML = cdDesc17;
    
    cdReg17 = '<br><h3>Price: $' + klatchClass.price +  '</h3> <p></p>'
    var elCdReg17 = document.getElementById('reg17');
    elCdReg17.innerHTML = cdReg17;
}

// spsoup.html
if (document.getElementById('bc18')) {
    var bc18 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="spsoup.html">' + spsoupClass.name + '</a></li> </ul>';
    var elBc18 = document.getElementById('bc18');
    elBc18.innerHTML = bc18;
    
    var cdImg18 = '<br> <img class="image" src="images/' + spsoupClass.image + '" alt="spsoup "><h3>Menu:</h3>' + spsoupClass.menu;
    var elCd18 = document.getElementById('img18');
    elCd18.innerHTML = cdImg18;
    
    var cdDesc18 = '<h2>' + spsoupClass.name + '</h2> <h4>Instructor:' + spsoupClass.instructor + '</h4> <p>' + spsoupClass.description + '</p> <h3>Session:</h3>' + spsoupClass.location + ' – ' + spsoupClass.day + ', ' + spsoupClass.date;
    var elCdDesc18 = document.getElementById('desc18');
    elCdDesc18.innerHTML = cdDesc18;
    
    cdReg18 = '<br><h3>Price: $' + spsoupClass.price +  '</h3> <p></p>'
    var elCdReg18 = document.getElementById('reg18');
    elCdReg18.innerHTML = cdReg18;
}

// vegan.html
if (document.getElementById('bc19')) {
    var bc19 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="vegan.html">' + veganClass.name + '</a></li> </ul>';
    var elBc19 = document.getElementById('bc19');
    elBc19.innerHTML = bc19;
    
    var cdImg19 = '<br> <img class="image" src="images/' + veganClass.image + '" alt="vegan "><h3>Menu:</h3>' + veganClass.menu;
    var elCd19 = document.getElementById('img19');
    elCd19.innerHTML = cdImg19;
    
    var cdDesc19 = '<h2>' + veganClass.name + '</h2> <h4>Instructor:' + veganClass.instructor + '</h4> <p>' + veganClass.description + '</p> <h3>Session:</h3>' + veganClass.location + ' – ' + veganClass.day + ', ' + veganClass.date;
    var elCdDesc19 = document.getElementById('desc19');
    elCdDesc19.innerHTML = cdDesc19;
    
    cdReg19 = '<br><h3>Price: $' + veganClass.price +  '</h3> <p></p>'
    var elCdReg19 = document.getElementById('reg19');
    elCdReg19.innerHTML = cdReg19;
}     

// ferm.html
if (document.getElementById('bc20')) {
    var bc20 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="ferm.html">' + fermClass.name + '</a></li> </ul>';
    var elBc20 = document.getElementById('bc20');
    elBc20.innerHTML = bc20;
    
    var cdImg20 = '<br> <img class="image" src="images/' + fermClass.image + '" alt="ferm "><h3>Menu:</h3>' + fermClass.menu;
    var elCd20 = document.getElementById('img20');
    elCd20.innerHTML = cdImg20;
    
    var cdDesc20 = '<h2>' + fermClass.name + '</h2> <h4>Instructor:' + fermClass.instructor + '</h4> <p>' + fermClass.description + '</p> <h3>Session:</h3>' + fermClass.location + ' – ' + fermClass.day + ', ' + fermClass.date;
    var elCdDesc20 = document.getElementById('desc20');
    elCdDesc20.innerHTML = cdDesc20;
    
    cdReg20 = '<br><h3>Price: $' + fermClass.price +  '</h3> <p></p>'
    var elCdReg20 = document.getElementById('reg20');
    elCdReg20.innerHTML = cdReg20;
}    
// heart.html
if (document.getElementById('bc21')) {
    var bc21 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="heart.html">' + heartClass.name + '</a></li> </ul>';
    var elBc21 = document.getElementById('bc21');
    elBc21.innerHTML = bc21;
    
    var cdImg21 = '<br> <img class="image" src="images/' + heartClass.image + '" alt="heart "><h3>Menu:</h3>' + heartClass.menu;
    var elCd21 = document.getElementById('img21');
    elCd21.innerHTML = cdImg21;
    
    var cdDesc21 = '<h2>' + heartClass.name + '</h2> <h4>Instructor:' + heartClass.instructor + '</h4> <p>' + heartClass.description + '</p> <h3>Session:</h3>' + heartClass.location + ' – ' + heartClass.day + ', ' + heartClass.date;
    var elCdDesc21 = document.getElementById('desc21');
    elCdDesc21.innerHTML = cdDesc21;
    
    cdReg21 = '<br><h3>Price: $' + heartClass.price +  '</h3> <p></p>'
    var elCdReg21 = document.getElementById('reg21');
    elCdReg21.innerHTML = cdReg21;
}     
// fondue.html
if (document.getElementById('bc22')) {
    var bc22 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="fondue.html">' + fondueClass.name + '</a></li> </ul>';
    var elBc22 = document.getElementById('bc22');
    elBc22.innerHTML = bc22;
    
    var cdImg22 = '<br> <img class="image" src="images/' + fondueClass.image + '" alt="fondue "><h3>Menu:</h3>' + fondueClass.menu;
    var elCd22 = document.getElementById('img22');
    elCd22.innerHTML = cdImg22;
    
    var cdDesc22 = '<h2>' + fondueClass.name + '</h2> <h4>Instructor:' + fondueClass.instructor + '</h4> <p>' + fondueClass.description + '</p> <h3>Session:</h3>' + fondueClass.location + ' – ' + fondueClass.day + ', ' + fondueClass.date;
    var elCdDesc22 = document.getElementById('desc22');
    elCdDesc22.innerHTML = cdDesc22;
    
    cdReg22 = '<br><h3>Price: $' + fondueClass.price +  '</h3> <p></p>'
    var elCdReg22 = document.getElementById('reg22');
    elCdReg22.innerHTML = cdReg22;
}    
// gfwtt.html
if (document.getElementById('bc23')) {
    var bc23 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="gfwtt.html">' + gfwttClass.name + '</a></li> </ul>';
    var elBc23 = document.getElementById('bc23');
    elBc23.innerHTML = bc23;
    
    var cdImg23 = '<br> <img class="image" src="images/' + gfwttClass.image + '" alt="gfwtt "><h3>Menu:</h3>' + gfwttClass.menu;
    var elCd23 = document.getElementById('img23');
    elCd23.innerHTML = cdImg23;
    
    var cdDesc23 = '<h2>' + gfwttClass.name + '</h2> <h4>Instructor:' + gfwttClass.instructor + '</h4> <p>' + gfwttClass.description + '</p> <h3>Session:</h3>' + gfwttClass.location + ' – ' + gfwttClass.day + ', ' + gfwttClass.date;
    var elCdDesc23 = document.getElementById('desc23');
    elCdDesc23.innerHTML = cdDesc23;
    
    cdReg23 = '<br><h3>Price: $' + gfwttClass.price +  '</h3> <p></p>'
    var elCdReg23 = document.getElementById('reg23');
    elCdReg23.innerHTML = cdReg23;
}     
// gfbaking.html
if (document.getElementById('bc24')) {
    var bc24 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="gfbaking.html">' + gfbakingClass.name + '</a></li> </ul>';
    var elBc24 = document.getElementById('bc24');
    elBc24.innerHTML = bc24;
    
    var cdImg24 = '<br> <img class="image" src="images/' + gfbakingClass.image + '" alt="gfbaking "><h3>Menu:</h3>' + gfbakingClass.menu;
    var elCd24 = document.getElementById('img24');
    elCd24.innerHTML = cdImg24;
    
    var cdDesc24 = '<h2>' + gfbakingClass.name + '</h2> <h4>Instructor:' + gfbakingClass.instructor + '</h4> <p>' + gfbakingClass.description + '</p> <h3>Session:</h3>' + gfbakingClass.location + ' – ' + gfbakingClass.day + ', ' + gfbakingClass.date;
    var elCdDesc24 = document.getElementById('desc24');
    elCdDesc24.innerHTML = cdDesc24;
    
    cdReg24 = '<br><h3>Price: $' + gfbakingClass.price +  '</h3> <p></p>'
    var elCdReg24 = document.getElementById('reg24');
    elCdReg24.innerHTML = cdReg24;
}     
// budget.html
if (document.getElementById('bc25')) {
    var bc25 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="budget.html">' + budgetClass.name + '</a></li> </ul>';
    var elBc25 = document.getElementById('bc25');
    elBc25.innerHTML = bc25;
    
    var cdImg25 = '<br> <img class="image" src="images/' + budgetClass.image + '" alt="budget "><h3>Menu:</h3>' + budgetClass.menu;
    var elCd25 = document.getElementById('img25');
    elCd25.innerHTML = cdImg25;
    
    var cdDesc25 = '<h2>' + budgetClass.name + '</h2> <h4>Instructor:' + budgetClass.instructor + '</h4> <p>' + budgetClass.description + '</p> <h3>Session:</h3>' + budgetClass.location + ' – ' + budgetClass.day + ', ' + budgetClass.date;
    var elCdDesc25 = document.getElementById('desc25');
    elCdDesc25.innerHTML = cdDesc25;
    
    cdReg25 = '<br><h3>Price: $' + budgetClass.price +  '</h3> <p></p>'
    var elCdReg25 = document.getElementById('reg25');
    elCdReg25.innerHTML = cdReg25;
}            
// sardinia.html
if (document.getElementById('bc26')) {
    var bc26 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="sardinia.html">' + sardiniaClass.name + '</a></li> </ul>';
    var elBc26 = document.getElementById('bc26');
    elBc26.innerHTML = bc26;
    
    var cdImg26 = '<br> <img class="image" src="images/' + sardiniaClass.image + '" alt="sardinia "><h3>Menu:</h3>' + sardiniaClass.menu;
    var elCd26 = document.getElementById('img26');
    elCd26.innerHTML = cdImg26;
    
    var cdDesc26 = '<h2>' + sardiniaClass.name + '</h2> <h4>Instructor:' + sardiniaClass.instructor + '</h4> <p>' + sardiniaClass.description + '</p> <h3>Session:</h3>' + sardiniaClass.location + ' – ' + sardiniaClass.day + ', ' + sardiniaClass.date;
    var elCdDesc26 = document.getElementById('desc26');
    elCdDesc26.innerHTML = cdDesc26;
    
    cdReg26 = '<br><h3>Price: $' + sardiniaClass.price +  '</h3> <p></p>'
    var elCdReg26 = document.getElementById('reg26');
    elCdReg26.innerHTML = cdReg26;
}     
// cake.html
if (document.getElementById('bc27')) {
    var bc27 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="cake.html">' + cakeClass.name + '</a></li> </ul>';
    var elBc27 = document.getElementById('bc27');
    elBc27.innerHTML = bc27;
    
    var cdImg27 = '<br> <img class="image" src="images/' + cakeClass.image + '" alt="cake "><h3>Menu:</h3>' + cakeClass.menu;
    var elCd27 = document.getElementById('img27');
    elCd27.innerHTML = cdImg27;
    
    var cdDesc27 = '<h2>' + cakeClass.name + '</h2> <h4>Instructor:' + cakeClass.instructor + '</h4> <p>' + cakeClass.description + '</p> <h3>Session:</h3>' + cakeClass.location + ' – ' + cakeClass.day + ', ' + cakeClass.date;
    var elCdDesc27 = document.getElementById('desc27');
    elCdDesc27.innerHTML = cdDesc27;
    
    cdReg27 = '<br><h3>Price: $' + cakeClass.price +  '</h3> <p></p>'
    var elCdReg27 = document.getElementById('reg27');
    elCdReg27.innerHTML = cdReg27;
}     
// season.html
if (document.getElementById('bc28')) {
    var bc28 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="season.html">' + seasonClass.name + '</a></li> </ul>';
    var elBc28 = document.getElementById('bc28');
    elBc28.innerHTML = bc28;
    
    var cdImg28 = '<br> <img class="image" src="images/' + seasonClass.image + '" alt="season "><h3>Menu:</h3>' + seasonClass.menu;
    var elCd28 = document.getElementById('img28');
    elCd28.innerHTML = cdImg28;
    
    var cdDesc28 = '<h2>' + seasonClass.name + '</h2> <h4>Instructor:' + seasonClass.instructor + '</h4> <p>' + seasonClass.description + '</p> <h3>Session:</h3>' + seasonClass.location + ' – ' + seasonClass.day + ', ' + seasonClass.date;
    var elCdDesc28 = document.getElementById('desc28');
    elCdDesc28.innerHTML = cdDesc28;
    
    cdReg28 = '<br><h3>Price: $' + seasonClass.price +  '</h3> <p></p>'
    var elCdReg28 = document.getElementById('reg28');
    elCdReg28.innerHTML = cdReg28;
}     
// indian.html
if (document.getElementById('bc29')) {
    var bc29 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="indian.html">' + indianClass.name + '</a></li> </ul>';
    var elBc29 = document.getElementById('bc29');
    elBc29.innerHTML = bc29;
    
    var cdImg29 = '<br> <img class="image" src="images/' + indianClass.image + '" alt="indian "><h3>Menu:</h3>' + indianClass.menu;
    var elCd29 = document.getElementById('img29');
    elCd29.innerHTML = cdImg29;
    
    var cdDesc29 = '<h2>' + indianClass.name + '</h2> <h4>Instructor:' + indianClass.instructor + '</h4> <p>' + indianClass.description + '</p> <h3>Session:</h3>' + indianClass.location + ' – ' + indianClass.day + ', ' + indianClass.date;
    var elCdDesc29 = document.getElementById('desc29');
    elCdDesc29.innerHTML = cdDesc29;
    
    cdReg29 = '<br><h3>Price: $' + indianClass.price +  '</h3> <p></p>'
    var elCdReg29 = document.getElementById('reg29');
    elCdReg29.innerHTML = cdReg29;
}     
// chem.html
if (document.getElementById('bc30')) {
    var bc30 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="chem.html">' + chemClass.name + '</a></li> </ul>';
    var elBc30 = document.getElementById('bc30');
    elBc30.innerHTML = bc30;
    
    var cdImg30 = '<br> <img class="image" src="images/' + chemClass.image + '" alt="chem "><h3>Menu:</h3>' + chemClass.menu;
    var elCd30 = document.getElementById('img30');
    elCd30.innerHTML = cdImg30;
    
    var cdDesc30 = '<h2>' + chemClass.name + '</h2> <h4>Instructor:' + chemClass.instructor + '</h4> <p>' + chemClass.description + '</p> <h3>Session:</h3>' + chemClass.location + ' – ' + chemClass.day + ', ' + chemClass.date;
    var elCdDesc30 = document.getElementById('desc30');
    elCdDesc30.innerHTML = cdDesc30;
    
    cdReg30 = '<br><h3>Price: $' + chemClass.price +  '</h3> <p></p>'
    var elCdReg30 = document.getElementById('reg30');
    elCdReg30.innerHTML = cdReg30;
}     
// knife.html
if (document.getElementById('bc31')) {
    var bc31 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="knife.html">' + knifeClass.name + '</a></li> </ul>';
    var elBc31 = document.getElementById('bc31');
    elBc31.innerHTML = bc31;
    
    var cdImg31 = '<br> <img class="image" src="images/' + knifeClass.image + '" alt="knife "><h3>Menu:</h3>' + knifeClass.menu;
    var elCd31 = document.getElementById('img31');
    elCd31.innerHTML = cdImg31;
    
    var cdDesc31 = '<h2>' + knifeClass.name + '</h2> <h4>Instructor:' + knifeClass.instructor + '</h4> <p>' + knifeClass.description + '</p> <h3>Session:</h3>' + knifeClass.location + ' – ' + knifeClass.day + ', ' + knifeClass.date;
    var elCdDesc31 = document.getElementById('desc31');
    elCdDesc31.innerHTML = cdDesc31;
    
    cdReg31 = '<br><h3>Price: $' + knifeClass.price +  '</h3> <p></p>'
    var elCdReg31 = document.getElementById('reg31');
    elCdReg31.innerHTML = cdReg31;
}     
// dumpling.html
if (document.getElementById('bc32')) {
    var bc32 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="dumpling.html">' + dumplingClass.name + '</a></li> </ul>';
    var elBc32 = document.getElementById('bc32');
    elBc32.innerHTML = bc32;
    
    var cdImg32 = '<br> <img class="image" src="images/' + dumplingClass.image + '" alt="dumpling "><h3>Menu:</h3>' + dumplingClass.menu;
    var elCd32 = document.getElementById('img32');
    elCd32.innerHTML = cdImg32;
    
    var cdDesc32 = '<h2>' + dumplingClass.name + '</h2> <h4>Instructor:' + dumplingClass.instructor + '</h4> <p>' + dumplingClass.description + '</p> <h3>Session:</h3>' + dumplingClass.location + ' – ' + dumplingClass.day + ', ' + dumplingClass.date;
    var elCdDesc32 = document.getElementById('desc32');
    elCdDesc32.innerHTML = cdDesc32;
    
    cdReg32 = '<br><h3>Price: $' + dumplingClass.price +  '</h3> <p></p>'
    var elCdReg32 = document.getElementById('reg32');
    elCdReg32.innerHTML = cdReg32;
}     
// pan.html
if (document.getElementById('bc33')) {
    var bc33 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="pan.html">' + panClass.name + '</a></li> </ul>';
    var elBc33 = document.getElementById('bc33');
    elBc33.innerHTML = bc33;
    
    var cdImg33 = '<br> <img class="image" src="images/' + panClass.image + '" alt="pan "><h3>Menu:</h3>' + panClass.menu;
    var elCd33 = document.getElementById('img33');
    elCd33.innerHTML = cdImg33;
    
    var cdDesc33 = '<h2>' + panClass.name + '</h2> <h4>Instructor:' + panClass.instructor + '</h4> <p>' + panClass.description + '</p> <h3>Session:</h3>' + panClass.location + ' – ' + panClass.day + ', ' + panClass.date;
    var elCdDesc33 = document.getElementById('desc33');
    elCdDesc33.innerHTML = cdDesc33;
    
    cdReg33 = '<br><h3>Price: $' + panClass.price +  '</h3> <p></p>'
    var elCdReg33 = document.getElementById('reg33');
    elCdReg33.innerHTML = cdReg33;
}     
// med.html
if (document.getElementById('bc34')) {
    var bc34 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="med.html">' + medClass.name + '</a></li> </ul>';
    var elBc34 = document.getElementById('bc34');
    elBc34.innerHTML = bc34;
    
    var cdImg34 = '<br> <img class="image" src="images/' + medClass.image + '" alt="med "><h3>Menu:</h3>' + medClass.menu;
    var elCd34 = document.getElementById('img34');
    elCd34.innerHTML = cdImg34;
    
    var cdDesc34 = '<h2>' + medClass.name + '</h2> <h4>Instructor:' + medClass.instructor + '</h4> <p>' + medClass.description + '</p> <h3>Session:</h3>' + medClass.location + ' – ' + medClass.day + ', ' + medClass.date;
    var elCdDesc34 = document.getElementById('desc34');
    elCdDesc34.innerHTML = cdDesc34;
    
    cdReg34 = '<br><h3>Price: $' + medClass.price +  '</h3> <p></p>'
    var elCdReg34 = document.getElementById('reg34');
    elCdReg34.innerHTML = cdReg34;
}     
// piemontese.html
if (document.getElementById('bc35')) {
    var bc35 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="piemontese.html">' + piemonteseClass.name + '</a></li> </ul>';
    var elBc35 = document.getElementById('bc35');
    elBc35.innerHTML = bc35;
    
    var cdImg35 = '<br> <img class="image" src="images/' + piemonteseClass.image + '" alt="piemontese "><h3>Menu:</h3>' + piemonteseClass.menu;
    var elCd35 = document.getElementById('img35');
    elCd35.innerHTML = cdImg35;
    
    var cdDesc35 = '<h2>' + piemonteseClass.name + '</h2> <h4>Instructor:' + piemonteseClass.instructor + '</h4> <p>' + piemonteseClass.description + '</p> <h3>Session:</h3>' + piemonteseClass.location + ' – ' + piemonteseClass.day + ', ' + piemonteseClass.date;
    var elCdDesc35 = document.getElementById('desc35');
    elCdDesc35.innerHTML = cdDesc35;
    
    cdReg35 = '<br><h3>Price: $' + piemonteseClass.price +  '</h3> <p></p>'
    var elCdReg35 = document.getElementById('reg35');
    elCdReg35.innerHTML = cdReg35;
}     
// mex.html
if (document.getElementById('bc36')) {
    var bc36 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="mex.html">' + mexClass.name + '</a></li> </ul>';
    var elBc36 = document.getElementById('bc36');
    elBc36.innerHTML = bc36;
    
    var cdImg36 = '<br> <img class="image" src="images/' + mexClass.image + '" alt="mex "><h3>Menu:</h3>' + mexClass.menu;
    var elCd36 = document.getElementById('img36');
    elCd36.innerHTML = cdImg36;
    
    var cdDesc36 = '<h2>' + mexClass.name + '</h2> <h4>Instructor:' + mexClass.instructor + '</h4> <p>' + mexClass.description + '</p> <h3>Session:</h3>' + mexClass.location + ' – ' + mexClass.day + ', ' + mexClass.date;
    var elCdDesc36 = document.getElementById('desc36');
    elCdDesc36.innerHTML = cdDesc36;
    
    cdReg36 = '<br><h3>Price: $' + mexClass.price +  '</h3> <p></p>'
    var elCdReg36 = document.getElementById('reg36');
    elCdReg36.innerHTML = cdReg36;
}    
// bagels.html
if (document.getElementById('bc37')) {
    var bc37 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="bagels.html">' + bagelsClass.name + '</a></li> </ul>';
    var elBc37 = document.getElementById('bc37');
    elBc37.innerHTML = bc37;
    
    var cdImg37 = '<br> <img class="image" src="images/' + bagelsClass.image + '" alt="bagels "><h3>Menu:</h3>' + bagelsClass.menu;
    var elCd37 = document.getElementById('img37');
    elCd37.innerHTML = cdImg37;
    
    var cdDesc37 = '<h2>' + bagelsClass.name + '</h2> <h4>Instructor:' + bagelsClass.instructor + '</h4> <p>' + bagelsClass.description + '</p> <h3>Session:</h3>' + bagelsClass.location + ' – ' + bagelsClass.day + ', ' + bagelsClass.date;
    var elCdDesc37 = document.getElementById('desc37');
    elCdDesc37.innerHTML = cdDesc37;
    
    cdReg37 = '<br><h3>Price: $' + bagelsClass.price +  '</h3> <p></p>'
    var elCdReg37 = document.getElementById('reg37');
    elCdReg37.innerHTML = cdReg37;
}     
// nwcel.html
if (document.getElementById('bc38')) {
    var bc38 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="nwcel.html">' + nwcelClass.name + '</a></li> </ul>';
    var elBc38 = document.getElementById('bc38');
    elBc38.innerHTML = bc38;
    
    var cdImg38 = '<br> <img class="image" src="images/' + nwcelClass.image + '" alt="nwcel "><h3>Menu:</h3>' + nwcelClass.menu;
    var elCd38 = document.getElementById('img38');
    elCd38.innerHTML = cdImg38;
    
    var cdDesc38 = '<h2>' + nwcelClass.name + '</h2> <h4>Instructor:' + nwcelClass.instructor + '</h4> <p>' + nwcelClass.description + '</p> <h3>Session:</h3>' + nwcelClass.location + ' – ' + nwcelClass.day + ', ' + nwcelClass.date;
    var elCdDesc38 = document.getElementById('desc38');
    elCdDesc38.innerHTML = cdDesc38;
    
    cdReg38 = '<br><h3>Price: $' + nwcelClass.price +  '</h3> <p></p>'
    var elCdReg38 = document.getElementById('reg38');
    elCdReg38.innerHTML = cdReg38;
}     
// pulse.html
if (document.getElementById('bc39')) {
    var bc39 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="pulse.html">' + pulseClass.name + '</a></li> </ul>';
    var elBc39 = document.getElementById('bc39');
    elBc39.innerHTML = bc39;
    
    var cdImg39 = '<br> <img class="image" src="images/' + pulseClass.image + '" alt="pulse "><h3>Menu:</h3>' + pulseClass.menu;
    var elCd39 = document.getElementById('img39');
    elCd39.innerHTML = cdImg39;
    
    var cdDesc39 = '<h2>' + pulseClass.name + '</h2> <h4>Instructor:' + pulseClass.instructor + '</h4> <p>' + pulseClass.description + '</p> <h3>Session:</h3>' + pulseClass.location + ' – ' + pulseClass.day + ', ' + pulseClass.date;
    var elCdDesc39 = document.getElementById('desc39');
    elCdDesc39.innerHTML = cdDesc39;
    
    cdReg39 = '<br><h3>Price: $' + pulseClass.price +  '</h3> <p></p>'
    var elCdReg39 = document.getElementById('reg39');
    elCdReg39.innerHTML = cdReg39;
}     
// pasta.html
if (document.getElementById('bc40')) {
    var bc40 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="pasta.html">' + pastaClass.name + '</a></li> </ul>';
    var elBc40 = document.getElementById('bc40');
    elBc40.innerHTML = bc40;
    
    var cdImg40 = '<br> <img class="image" src="images/' + pastaClass.image + '" alt="pasta "><h3>Menu:</h3>' + pastaClass.menu;
    var elCd40 = document.getElementById('img40');
    elCd40.innerHTML = cdImg40;
    
    var cdDesc40 = '<h2>' + pastaClass.name + '</h2> <h4>Instructor:' + pastaClass.instructor + '</h4> <p>' + pastaClass.description + '</p> <h3>Session:</h3>' + pastaClass.location + ' – ' + pastaClass.day + ', ' + pastaClass.date;
    var elCdDesc40 = document.getElementById('desc40');
    elCdDesc40.innerHTML = cdDesc40;
    
    cdReg40 = '<br><h3>Price: $' + pastaClass.price +  '</h3> <p></p>'
    var elCdReg40 = document.getElementById('reg40');
    elCdReg40.innerHTML = cdReg40;
}     
// pizza.html
if (document.getElementById('bc41')) {
    var bc41 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="pizza.html">' + pizzaClass.name + '</a></li> </ul>';
    var elBc41 = document.getElementById('bc41');
    elBc41.innerHTML = bc41;
    
    var cdImg41 = '<br> <img class="image" src="images/' + pizzaClass.image + '" alt="pizza "><h3>Menu:</h3>' + pizzaClass.menu;
    var elCd41 = document.getElementById('img41');
    elCd41.innerHTML = cdImg41;
    
    var cdDesc41 = '<h2>' + pizzaClass.name + '</h2> <h4>Instructor:' + pizzaClass.instructor + '</h4> <p>' + pizzaClass.description + '</p> <h3>Session:</h3>' + pizzaClass.location + ' – ' + pizzaClass.day + ', ' + pizzaClass.date;
    var elCdDesc41 = document.getElementById('desc41');
    elCdDesc41.innerHTML = cdDesc41;
    
    cdReg41 = '<br><h3>Price: $' + pizzaClass.price +  '</h3> <p></p>'
    var elCdReg41 = document.getElementById('reg41');
    elCdReg41.innerHTML = cdReg41;
}     
// thai.html
if (document.getElementById('bc42')) {
    var bc42 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="thai.html">' + thaiClass.name + '</a></li> </ul>';
    var elBc42 = document.getElementById('bc42');
    elBc42.innerHTML = bc42;
    
    var cdImg42 = '<br> <img class="image" src="images/' + thaiClass.image + '" alt="thai "><h3>Menu:</h3>' + thaiClass.menu;
    var elCd42 = document.getElementById('img42');
    elCd42.innerHTML = cdImg42;
    
    var cdDesc42 = '<h2>' + thaiClass.name + '</h2> <h4>Instructor:' + thaiClass.instructor + '</h4> <p>' + thaiClass.description + '</p> <h3>Session:</h3>' + thaiClass.location + ' – ' + thaiClass.day + ', ' + thaiClass.date;
    var elCdDesc42 = document.getElementById('desc42');
    elCdDesc42.innerHTML = cdDesc42;
    
    cdReg42 = '<br><h3>Price: $' + thaiClass.price +  '</h3> <p></p>'
    var elCdReg42 = document.getElementById('reg42');
    elCdReg42.innerHTML = cdReg42;
}     
// grill.html
if (document.getElementById('bc43')) {
    var bc43 = '<ul class="breadcrumb">  <li><a href="index.html">Home</a></li>  <li><a href="grill.html">' + grillClass.name + '</a></li> </ul>';
    var elBc43 = document.getElementById('bc43');
    elBc43.innerHTML = bc43;
    
    var cdImg43 = '<br> <img class="image" src="images/' + grillClass.image + '" alt="grill "><h3>Menu:</h3>' + grillClass.menu;
    var elCd43 = document.getElementById('img43');
    elCd43.innerHTML = cdImg43;
    
    var cdDesc43 = '<h2>' + grillClass.name + '</h2> <h4>Instructor:' + grillClass.instructor + '</h4> <p>' + grillClass.description + '</p> <h3>Session:</h3>' + grillClass.location + ' – ' + grillClass.day + ', ' + grillClass.date;
    var elCdDesc43 = document.getElementById('desc43');
    elCdDesc43.innerHTML = cdDesc43;
    
    cdReg43 = '<br><h3>Price: $' + grillClass.price +  '</h3> <p></p>'
    var elCdReg43 = document.getElementById('reg43');
    elCdReg43.innerHTML = cdReg43;
}
