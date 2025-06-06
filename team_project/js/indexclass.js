// Creating class content for class gallery - Deena
function Class(name, description, price, flags, instructor, image, menu) {
  this.name = name;
  this.description = description; 
  this.price = price;
 //  this.seats = seats;
  // this.booked = booked;
  this.flags = flags;
  this.instructor = instructor;
  // this.location = location;
  this.image = image;
  this.menu = menu;
  //this.checkAvailability = function() { return this.seats - this.booked; };
}

// Create Class objects - Deena

var twodayClass = new Class('2-Day Mystery Basket  Challenge','For ages 10 to 12; kids only. This two-part class is for experienced young cooks who want to take their cooking to the next level. On day one, we\'ll cover culinary techniques such as knife skills, tasting adjustments and presentation as we prepare Chicken Noodle Soup; Corn Muffins; Spring Salad with Lemon Dressing; and Strawberry- Rhubarb Tartlets. On day two, each team will be given a basket of 3 to 4 "mystery ingredients," along with other basic ingredients, and develop recipes together. Emphasis will be on a friendly competition, teamwork, taste, presentation and fun! With poultry, dairy and eggs.','90','Kids, Ages 10-12, Poultry, Dairy, Eggs','Tamara Guyton','twoday.jpg','<ul><li>* Chicken Noodle Soup; Corn Muffins; Spring Salad with Lemon Dressing; Strawberry- Rhubarb Tartlets</li></ul>');

var cook42Class = new Class('30-minute Cooking for Two', 'Love to cook but only need to feed one or two people? Want some inspiration for quick dinner meals that are nutritionally balanced and don\'t break the bank? In this class, you\'ll discover three appealing 30-minute meals: Spanish Seafood Stew with White Fish, Chorizo and Bulgur; Asparagus Pesto Pasta with Chicken and Spring Greens; and Sesame Tofu and Pickled Soba Slaw. We\'ll also discuss how to build a pantry of cooking staples and time-saving meal prep tips to keep your kitchen and your cooking organized and efficient. With meat, seafood, dairy and eggs.','50','Adults,April,Meat,Seafood,Dairy,Eggs', 'Raquel DeHoyos','cook42.jpg','<ul><li>Spanish Seafood Stew with White Fish, Chorizo and Bulgur; Asparagus Pesto Pasta with Chicken and Spring Greens; and Sesame Tofu and Pickled Soba Slaw</li></ul>');

var salmonClass = new Class('A Celebration of the Mighty Salmon', 'Salmon is the king of our regional cuisine and Chef Lynne will take it on parade in full regalia with some impressive dishes paired with regional wines. You\'ll quickly gain a loyalty to Homemade Gravlax with Warm Fingerling Potato, Arugula and Caper Salad; Seared Cherry Tomato, Fennel and Olive Oil Gazpacho with Pecorino Puff Pastry Breadsticks; Grilled Lime-Chile-Pumpkin Seed-crusted Salmon with Crabmeat Remoulade; and Strawberry Shortcake with Brown Sugar Scones and Lavender-Grand Marnier Whipped Cream. With seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED.','55','Seafood,Dairy,Eggs,Adults,Age 21+,May', 'Lynne Vea','salmon.jpg','<ul><li>Homemade Gravlax with Warm Fingerling Potato; Arugula and Caper Salad; Seared Cherry Tomato, Fennel and Olive Oil Gazpacho with Pecorino Puff Pastry Breadsticks; Grilled Lime-Chile-Pumpkin Seed-crusted Salmon with Crabmeat Remoulade; Strawberry Shortcake with Brown Sugar Scones and Lavender-Grand Marnier Whipped Cream.</li></ul>');

var agingClass = new Class('Aging Gracefully', 'Is 60 really the new 50? Does the body\'s need for specific vitamins and minerals change with age?  As longevity increases, we all want to remain strong and healthy. Marilyn will offer samples and discuss food choices  to support heart, brain, energy and muscle function as we age.','10','Lecture,April', 'Marilyn Walls, M.S.','aging.jpg','<ul><li></li></ul>');

var pieClass = new Class('All About Pie', 'take the challenge out of pie crust with a little knowledge, a few handling instructions and quality ingredients. Discover the key to making a tender, flaky and flavorful butter pie crust in this informative hands-on class. Each student will choose to make a 6-inch Sour Cherry and Almond Pie or a Rhubarb Strawberry Pie to bake and take home. We\'ll also taste pie in class and Chef Laurie will demonstrate how to make a galette and how to create a lattice crust. We\'ll discuss blind baking, flour types and brands and fruit varieties and troubleshoot all of your pie problems. For every season, pie is the answer. Vegetarian with dairy; no eggs.','55','Baking, Adults,June,Vegetarian, Dairy', 'Laurie Pfalzer','pie.jpg','<ul><li>Sour Cherry and Almond Pie; Rhubarb Strawberry Pie</li></ul>');

var antiClass = new Class('Anti-Inflammatory Eating Made Easy', 'Chronic inflammation can leave you feeling  fatigued, achy and out of balance. The good news is there are a number of appealing, nutritious foods that shut down inflammation and protect against diseases and unhealthy aging. Michelle, a dietitian and author of “Anti-Inflammatory Eating Made Easy,” will discuss how an anti-inflammatory diet can help ease joint pain, improve digestion, increase energy and much more. Sample Calm and Cool Basil Avocado Soup; Roasted Asparagus and Carrots with Lemony Tahini Drizzle; and Salmon and Kale in Creamy Coconut Sauce. With seafood; no dairy or eggs.','50','Adults,Seafood,April', 'Michelle Babb, M.S., R.D.','anti.jpg','<ul><li>Basil Avocado Soup; Roasted Asparagus and Carrots with Lemony Tahini Drizzle; Salmon and Kale in Creamy Coconut Sauce</li></ul>');

var enchiladasClass = new Class('Anytime Enchiladas', 'For ages 7 to 9. Impress your family when you make enchiladas for dinner! In this class, you and your small group will prepare Chicken Enchiladas, starting with the sauce all the way to sliding the finished dish into the oven. Learn to take advantage of your kitchen pantry with Easy Cheesy Vegetarian Enchiladas and round out your meal with Roasted Tomato-Jalapeño Salsa; and refreshing Carrot-Jicama Slaw. Meat optional; with dairy; no eggs. Price includes one child and one adult.','50','Meat, Dairy, Kids, Ages 7 to 9, April', 'Lisa Crawford','enchiladas.jpg','<ul><li>Vegetarian Enchiladas; Roasted Tomato-Jalapeño Salsa; Carrot-Jicama Slaw</li></ul>');

var atwClass = new Class('Around the World in Five Days: Gluten-free Kids Cooking Camp', 'For ages 8 to 15. Future chefs explore the cuisines of many lands in fun hands-on classes, while learning cooking techniques, kitchen safety and delicious recipes using familiar and healthy ingredients. With entrees, side dishes and desserts, each day features a complete meal from different parts of the globe: India, Brazil, Italy, Syria and China. Menus are similar to traditional camp, but with adjustments to accommodate gluten-free campers. Vegetarian with meat options, dairy and eggs; no gluten. Recipes are gluten-free, but PCC classrooms are not gluten-free facilities.','185','vegetarian,meat, dairy, eggs, gluten-free, Kids, ages 8-15', 'PCC Cooks Staff','atw.jpg','<ul><li></li></ul>');

var atwClass = new Class('Around the World in Five Days: Kids Cooking Camp', 'Future chefs explore the cuisines of many lands in fun hands-on classes while learning cooking techniques, kitchen safety and delicious recipes using familiar and healthy ingredients. With entrees, side dishes and desserts, each day features a complete meal from different parts of the globe: India, Brazil, Italy, Syria and China. Among the dishes we\'ll enjoy  preparing (and eating!) are Indian Mango Lassi; Brazilian Cheese Puffs; Chinese Chop Chop Salad; Syrian Falafels; and Italian  Lemon Tarts. Vegetarian with meat options; dairy and eggs.','185','vegetarian,meat, dairy, eggs, kids, ages 8-15', 'PCC Cooks Staff','atw.jpg','<ul><li>Indian Mango Lassi; Brazilian Cheese Puffs; Chinese Chop Chop Salad; Syrian Falafels; and Italian  Lemon Tarts</li></ul>');

var breadClass = new Class('Artisan Breads:  Ciabatta and Pizza', 'Ciabatta and pizza are go-to hearth breads when baking at home. Chef Laurie will show you that it\'s easy to get an artisan bakery result in your own oven with a little knowledge and some simple techniques. Using the same dough, you will make traditional Italian bread with substantial crusts that has full flavors due to slow fermentation and the starter that is made the day before. You will see and handle the Ciabatta bread in all stages from starter to freshly baked and you\'ll make your own  Ciabatta Pizza from the Ciabatta dough to enjoy in class. Come with your questions! You will leave class with dough to finish baking at home and lots of information to help you to start making artisan bread at home. Vegetarian with meat and dairy optional; no eggs.','50','vegetarian,Meat,Dairy,April', 'Laurie Pfalzer','bread.jpg','<ul><li>Ciabatta bread; Ciabatta Pizza</li></ul>');

var basqueClass = new Class('Basque Country Cooking', 'Nestled between the Pyrenees Mountains and the Atlantic Ocean, the Basque region features some of the finest food in Spain. With French and Spanish influences, the cuisine makes the best of the ocean and mountains with fresh fish, vibrant vegetables and spiced sausages. Join Chef Erin to make a variety of classic and contemporary Basque dishes including: Chorizos a la Sidra (Chorizo in Cider); Piperrada (Basque Eggs with Mixed Vegetables); Puerros a la Vinagreta (Leeks with Vinaigrette); Merluza en Salsa Verde (Mixed Seafood in Parsley and Wine Sauce); and Helado de Queso Fresco con Salsa de Frutos Rojos (Cream Cheese Ice Cream with Red Berry Sauce). With meat, seafood, dairy and eggs; no gluten.','55','meat, seafood, dairy, eggs, gluten-free, adults, April', 'Erin Coopey','basque.jpg','<ul><li>Chorizos a la Sidra (Chorizo in Cider); Piperrada (Basque Eggs with Mixed Vegetables); Puerros a la Vinagreta (Leeks with Vinaigrette); Merluza en Salsa Verde (Mixed Seafood in Parsley and Wine Sauce); Helado de Queso Fresco con Salsa de Frutos Rojos (Cream Cheese Ice Cream with Red Berry Sauce).</li></ul>');

var batterClass = new Class('Batter\'s Up! Pancakes and Crepes', 'For ages 7 to 9. Discover how easy it is to make a batch of pancake batter from scratch. We\'ll use a thick batter on a griddle to make old-fashioned buttermilk pancakes with oat flour and a higher protein variation using whole-wheat flour and ricotta cheese. Then we\'ll get out our crêpe pans and make a thin batter to make French Crêpes. We\'ll serve them with homemade Whipped Honey Butter and Naturally Sweet Berry Sauce. Vegetarian with dairy and eggs. Price includes one child and one adult.','50','kids, ages 7-9, vegetarian, dairy, eggs, April', 'Gill Dey','batter.jpg','<ul><li>Pancakes;Crepes;Whipped Honey Butter; Naturally Sweet Berry Sauce</li></ul>');

var cheeseClass = new Class('Cheesemaking Workshop', 'Chef, dairymaid and cheesemaker Jackie Freeman will be your guide for a fast-paced evening of hands-on cheesemaking. In a small group setting, we\'ll work together to create Buttermilk Cheese, Queso Blanco, Ricotta and Fresh Mozzarella. Jackie will discuss the basic principles of cheesemaking, including equipment use and care, ingredients and supplies. We will taste our work in class and discuss more recipes to try at home. Vegetarian with dairy; no eggs or gluten.','50','adults, vegetarian, dairy, gluten-free, egg-free, April', 'Jackie Freeman','cheese.jpg','<ul><li>Buttermilk Cheese;Queso Blanco;Ricotta;Fresh Mozzarella</li></ul>');

var chickenClass = new Class('Chicken 101', 'Get some go-to meals lined up with easy  weeknight chicken dishes. In class you will  learn techniques for selecting, storing, breaking down and preparing the world\'s favorite white meat. Together, you\'ll prepare Chicken Thighs Braised in White Wine with Fingerling Potatoes and Tarragon; Spatchcock Chicken with Radishes, Leeks and Carrots; and Chicken, Pea and  Mushroom Risotto. You\'ll also sample Lesa\'s Simplest Roast Chicken Stock. With poultry  and dairy; no eggs.','55','adults, poultry, dairy, egg-free, May', 'Lesa Sullivan','chicken.jpg','<ul><li>Chicken Thighs Braised in White Wine with Fingerling Potatoes and Tarragon; Spatchcock Chicken with Radishes, Leeks and Carrots; and Chicken, Pea and  Mushroom Risotto</li></ul>');

var cldrollsClass = new Class('Chinese Lazy Dragon Rolls', 'For ages 12 and up; teens only. “Lazy Dragon” stuffed rolled buns, also known as “Meat Dragon,” are large steamed Chinese rolls filled with meat and are a popular local snack in Beijing. They are especially sought after in springtime because Chinese people believe eating these rolls will help to get rid of laziness and give people energy and a good start for a new year. We will learn how to prepare the dough and make “Meat Dragons” with pork filling. Christina will also demo a “Veggie Dragon” with baked tofu and carrot filling. Then we will enjoy our creations with Soy Vinegar Dipping Sauce. With meat; no dairy or eggs.','45','kids, ages 12+,meat, daiy-free, egg-free, April', 'Christina Chung','cldrolls.jpg','<ul><li>“Meat Dragons” with pork filling; “Veggie Dragon” with baked tofu and carrot filling; Soy Vinegar Dipping Sauce</li></ul>');

var noodlesClass = new Class('Classic Chinese Noodles', 'Every region in China has its own style of making noodles and preparing noodle dishes. Christina will teach you how to make two classic noodle dishes from different regions. First we\'ll prepare the dough to make Buckwheat “Fire Cracker” Noodles and Millet Ge Da Noodles. Then we\'ll  use our freshly made noodles in two dishes:  Xinjiang-style Hot and Sour “Fire Cracker”  Noodle Soup and Old Beijing-style Stir-fried  Ge Da Noodles with Five-Spice Soy Miso Sauce; with ingredients such as baked tofu, edamame, mushrooms and vegetables. Vegetarian; no dairy or eggs.','50','vegetarian, adults, May', 'Christina Chung','noodles.jpg','<ul><li>Buckwheat “Fire Cracker” Noodles; Millet Ge Da Noodles; Xinjiang-style Hot and Sour “Fire Cracker”  Noodle Soup; Old Beijing-style Stir-fried  Ge Da Noodles with Five-Spice Soy Miso Sauce</li></ul>');

var frenchClass = new Class('Classic French Cooking', 'Chef Michael will guide you through some of the time-honored methods of French cuisine, inspiring confidence with techniques that are often misunderstood as too complicated or time-consuming. The results will be magnifique as we prepare some French all-stars: Aparagus Salad with Hard-boiled Egg and Caper Vinaigrette; Salmon en Papillote with Morel Mushrooms and  Sauce Beurre Blanc; and Apple Tarte Tatin (an upside-down pastry) with Cinnamon Ice Cream. With seafood, dairy and eggs.','55','April, adults,seafood,dairy,eggs', 'Michael Diem','french.jpg','<ul><li>Aparagus Salad with Hard-boiled Egg and Caper Vinaigrette; Salmon en Papillote with Morel Mushrooms and  Sauce Beurre Blanc; Apple Tarte Tatin (an upside-down pastry) with Cinnamon Ice Cream</li></ul>');

var klatchClass = new Class('Coffee Klatch', 'Spend an evening with Chef Becky over coffee-inspired dishes that are a real conversation piece. Perk up to some slightly addictive main dishes like Coffee and Chocolate-braised Short Ribs with Polenta; and Coffee and Spice-coated Salmon Tacos with Charred Cabbage, Tropical Fruit Salsa and Avocado Cream. Your heart will beat a little faster when you take a sweet bite of Caramel and Coffee Truffles; and Seattle-style Espresso Tiramisu. With meat, seafood, dairy and eggs.','50','April, adults,meat,seafood,dairy,eggs', 'Becky Selengut','klatch.jpg','<ul><li>Coffee and Chocolate-braised Short Ribs with Polenta; Coffee and Spice-coated Salmon Tacos with Charred Cabbage, Tropical Fruit Salsa and Avocado Cream; Caramel and Coffee Truffles; Espresso Tiramisu</li></ul>');

var cwrClass = new Class('Cooking Without Recipes', 'This class is for home cooks who are truly ready to set aside their cookbooks and step outside the box to explore cooking spontaneously and seasonally. Darin will provide a lecture and handouts on the basics of building flavor and pairing ingredients, then the class will work as a whole to pair fresh produce from the aisles with chicken thighs, salmon  and pork loin. A full pantry of ingredients  will be provided. Take the leap! With meat, seafood, dairy and eggs.','55','June, adults,meat,seafood,dairy,eggs', 'Darin Gagner','cwr.jpg','<ul><li></li></ul>');

var spsoupClass = new Class('Easy Soups for Springtime', 'Danielle loves to create easy-to-follow recipes using each season\'s best produce and inspire her students to recreate whole-foods-based seasonal dishes at home. Soups that can be added into your weekly menu plan are a great start!  Join her for this fun and informative hands-on class to create a sampling of soups, including Curried Carrot and Ginger Soup with Cilantro Oil; Hearty Vegetable Minestrone with Fava Beans; Creamy Spring Garlic and Red Potato Soup; and Miso Soup in a rich Mushroom Stock. Vegetarian; no dairy, eggs or gluten.','50','April, adults,vegetarian, dairy-free,egg-free,gluten-free', 'Danielle Premo','spsoup.jpg','<ul><li>Curried Carrot and Ginger Soup with Cilantro Oil; Hearty Vegetable Minestrone with Fava Beans; Creamy Spring Garlic and Red Potato Soup; Miso Soup in a rich Mushroom Stock</li></ul>');

var veganClass = new Class('Elegant Vegan Dining', 'Ready to eat healthy this spring? Join Chef Lesa in the kitchen for another collection of vegan recipes based around seasonal produce. These dishes are great for sides and snacks and become an entrée in a snap. Together, you will prepare and enjoy Pea Pancakes with Cashew Crème and Mint Pesto; Eggless Asparagus Quiche; Grilled Fava Mash with Walnut Oil; and Steamed Artichokes with Potato Garlic Dipping Sauce. Vegetarian; no dairy or eggs.','50','April, adults, vegetarian, vegan, dairy-free, egg-free', 'Lesa Sullivan','vegan.jpg','<ul><li>Pea Pancakes with Cashew Crème and Mint Pesto; Eggless Asparagus Quiche; Grilled Fava Mash with Walnut Oil; and Steamed Artichokes with Potato Garlic Dipping Sauce</li></ul>');

var fermClass = new Class('Fermented and Cultured Foods', 'For centuries, fermentation has been used around the world as a health-promoting method for preserving foods. Today, fermented and cultured foods are recognized as enzyme-rich, probiotic super-foods that can aid digestion and detoxification, boost immunity, curb cravings and enhance the nutritional profile of dishes. Birgitte will guide you through the process of making Kombucha; Traditional Beet Kvass; Sourdough Starter; and Sourdough Pancakes with Cultured Fruit Sauce. You\'ll also learn the basics of making homemade Sauerkraut and take home your own jar. Vegetarian with optional dairy (whey); no eggs or gluten.','55','April,adults,vegetarian, dairy, egg-free,gluten-free', 'Birgitte Antonsen','ferm.jpg','<ul><li>Kombucha; Traditional Beet Kvass; Sourdough Starter; Sourdough Pancakes with Cultured Fruit Sauce</li></ul>');

var heartClass = new Class('Food as Medicine:  Heart Health', 'Tanmeet is an Integrative Family Physician with a passion for using food as medicine. We\'ll get the perfect pairing as Chef Becky combines  her amazing cooking skills with Dr. Sethi\'s knowledge. With samplings of wine and green tea, we\'ll hear in depth about heart healthy ingredients as Becky does her handiwork to transform them into delicious dishes like Massaged Kale Salad with Brown Rice, Red Cabbage and Avocado; Roasted Salmon with White Beans, Radicchio, Salsa Verde and Toasted Almonds; Chocolate Terrine with Hibiscus, Genmaicha and Salted Hazelnut Powders; and Blueberry and Basil Sorbet. With seafood and dairy; no eggs.','55','April, adults, seafood,dairy,egg-free', 'Becky Selengut and  Tanmeet Sethi, M.D.','heart.jpg','<ul><li>Massaged Kale Salad with Brown Rice, Red Cabbage and Avocado; Roasted Salmon with White Beans, Radicchio, Salsa Verde and Toasted Almonds; Chocolate Terrine with Hibiscus, Genmaicha and Salted Hazelnut Powders; and Blueberry and Basil Sorbet.</li></ul>');

var fondueClass = new Class('Fun with Fondue', 'For ages 7 to 12. In this gluten-free class, we\'ll make a Gruyère and Swiss Cheese Fondue and a Dairy-free “Cheese” Fondue. We\'ll practice our knife skills as we cut up bread, Granny Smith apples, carrots and cherry tomatoes to dip in the cheesy fondue sauces.  For dessert, we\'ll make a mouth-watering Chocolate Sauce in which to dip tiny Cookie Dough Balls (egg-free!), cut strawberries and bananas. Vegetarian with optional dairy; no eggs or gluten.   Price includes one child and one adult.','50','April,kids, ages 7-12, child+adult, vegetarian, dairy, egg-free, gluten-free', 'Heather Dickinson','fondue.jpg','<ul><li>Cheese Fondue; Chocolate sauce; Fruit and Vegetables</li></ul>');

var gfwttClass = new Class('Gluten-free  Walk, Talk and Taste', 'Designed especially for shoppers interested in exploring the many gluten-free options available at PCC.','0','April, adults', '','gfwtt.jpg','<ul><li></li></ul>');

var gfbakingClass = new Class('Gluten-free Baking: SWEET Treats', 'Usher in spring with scrumptious Carrot Cake Cupcakes with Cream Cheese Frosting and Tangy Lemon Bars — all gluten-free! You\'ll learn tips for preparing gluten-free cake batter for the cupcakes and lemon-curd and gluten-free shortbread for the lemon bars. These satisfying treats taste like the real deal; no one will ever guess they are gluten-free! Vegetarian with dairy and eggs; no gluten.','50','May,vegetarian,dairy, eggs, gluten-free', 'Shelley Baumgarten','gfbaking.jpg','<ul><li>Carrot Cake Cupcakes with Cream Cheese Frosting; Tangy Lemon Bars</li></ul>');

var budgetClass = new Class('Healthy Eating —  Budget Friendly', 'Time and money are both valuable resources, and sometimes we can find ourselves tight on one or the other or both. Learn how to create quick and easy meals that are delicious, nutritious and cost effective. You\'ll get techniques for meal planning, tips on how to "dress-up" leftovers and recipe substitutions to help stretch your food dollar, as well as tips on how to maximize the nutrition you get from your food purchases. You\'ll love Berry Banana Smoothie; Carrot Cabbage Slaw with Marinated Tofu and Lemon-Tahini Dressing; and Lentil Cakes with Garlic-Feta Sauce. Vegetarian with dairy and eggs.','45','May, adults,vegetarian, dairy, eggs', 'Virginia Newman,  M.S.N.','budget.jpg','<ul><li>Berry Banana Smoothie; Carrot Cabbage Slaw with Marinated Tofu and Lemon-Tahini Dressing; Lentil Cakes with Garlic-Feta Sauce</li></ul>');

var sardiniaClass = new Class('Holiday in Sardinia', 'Paola spent part of last summer on Carloforte, a tiny tuna-fishing island in Sardegna, and it was love at first bite. She\'ll introduce you to a sample of Sardinian cuisine as you help prepare Torta di Zucchine (Zucchini Frittata with Lemon Zest) as an appetizer. You will then make Malloreddus alla Campidanese (Handmade Semolina Pasta seasoned with Tomato Sauce and Tuna, as they serve it in Carloforte), and sweet little Pardulas (Sun-shaped Ricotta Pies). With seafood, dairy and eggs.','50','April, adults, seafood,dairy,eggs', 'Paola Albanesi','sardinia.jpg','<ul><li>Malloreddus alla Campidanese (Handmade Semolina Pasta seasoned with Tomato Sauce and Tuna, as they serve it in Carloforte), and sweet little Pardulas (Sun-shaped Ricotta Pies)</li></ul>');

var cakeClass = new Class('How to Bake a Cake 101', 'Learn to make three types of cake in this  class devoted to cake mixing and baking. Pastry Chef Laurie Pfalzer takes you back to the  beginning, showing you how to mix and bake Lemon Pound Cake; Vanilla Genoise (sponge cake); and Devil\'s Food Cake. Not all cakes are created equal; you will see that each of these cakes gets a different treatment to give you the best results ever with optimal height, crumb and moisture. You will bake cupcakes, small loaves and 8-inch rounds to take home to  enjoy. Vegetarian with dairy and eggs.','50','May, adults, vegetarian, dairy,eggs', 'Laurie Pfalzer','cake.jpg','<ul><li>Lemon Pound Cake; Vanilla Genoise (sponge cake); and Devil\'s Food Cake</li></ul>');

var seasonClass = new Class('IN SEASON', 'Feel confident preparing an impressive seasonal menu for your friends and loved ones with some savvy tips and creative ideas from Danielle. She will take you through some of her favorite spring recipes that will become your favorites, too! You\'ll help prepare Kale Caesar Salad with Chickpea Croutons; Cashew and Spinach-stuffed Portobello Mushrooms with Sweet Balsamic Drizzle; Seared Ahi with Carrot Ginger Chutney; and a Strawberry Rhubarb Oat and Pecan Crumble. With seafood; no dairy, eggs or gluten.','50','May,adults, seafood, dairy-free,egg-free,gluten-free', 'Danielle Premo', 'season.jpg','<ul><li>Kale Caesar Salad with Chickpea Croutons; Cashew and Spinach-stuffed Portobello Mushrooms with Sweet Balsamic Drizzle; Seared Ahi with Carrot Ginger Chutney;  Strawberry Rhubarb Oat and Pecan Crumble.</li></ul>');

var indianClass = new Class('Indian Cuisine —  Under Pressure!', 'Indians use pressure cookers routinely in their cooking, especially to cook dried, whole lentils and beans and vegetables like potatoes, cauliflower and carrots. A pressure cooker cuts cooking time and energy use significantly for the home cook. Archana will showcase several easy Indian recipes (that can be made with or without a pressure cooker), including Mung Bean Lentil Soup with Greens and Roasted  Cumin; Vegetable Biryani (Spice-infused Rice with Peas and Carrots); and Aloo Gobhi  (Potato and Cauliflower with Coriander and Cumin). Vegetarian; no dairy or eggs.','45','April, adults,vegetarian, dairy-free,egg-free', 'Archana Verma','indian.jpg','<ul><li>Mung Bean Lentil Soup with Greens and Roasted  Cumin; Vegetable Biryani (Spice-infused Rice with Peas and Carrots); Aloo Gobhi  (Potato and Cauliflower with Coriander and Cumin)</li></ul>');

var chemClass = new Class('Kitchen Chemistry', 'For ages 10 to 12; kids only. What\'s the "pound" in pound cake? How do eggs make baked goods rise? What\'s the magical ingredient that makes some cookies soft and others crisp? We continue our culinary investigations with a batch of all new sweet and savory recipes. After whipping up heavenly French cheese puffs known as Gougères and Mini Vanilla Bean Pound Cakes, we\'ll taste the results of two variations on the same Oatmeal Cookie recipe, baked with one key difference. Vegetarian with dairy and eggs.','45','April,kids, ages 10-12,vegetarian, dairy, eggs', 'Cam Zarcone','chem.jpg','<ul><li>Gougères; Mini Vanilla Bean Pound Cakes;Oatmeal Cookie recipe,</li></ul>');

var knifeClass = new Class('Knife Skills', 'Practice knife-handling and learn how to cut safely and efficiently in this skill-building workshop with Chef Seppo. For the most useful practice, bring your own familiar chef knife (or use ours if you don\'t have one). He\'ll review knife selection, introduce honing and sharpening and teach you several different knife techniques. You\'ll sharpen your skills while preparing  ingredients for Lemon Cilantro Chicken Soup and Lemon Cilantro Vegetable Soup, which Seppo will demonstrate in class. Vegetarian with optional poultry; no dairy or eggs. Adults only.','50','April, adults,poultry, dairy-free, egg-free.', \'seppo Farrey','knife.jpg','<ul><li>Lemon Cilantro Chicken Soup; Lemon Cilantro Vegetable Soup</li></ul>');

var dumplingClass = new Class('LET\'s ROLL: JIAO-ZI DUMPLINGS AND SPRING ROLLS', 'KPLU food commentator and longtime restaurant critic Nancy Leson is an Asian food fanatic convinced that a pantry full of Asian condiments, canned goods, dried noodles and other staples is a sure way to travel without a passport. She\'ll offer a world of advice and chat about Greater Seattle\'s many Asian restaurants while you snack on Quick Japanese Pickles. Then get ready to roll! We\'ll make handmade Pork and Shrimp Jiao-zi, including easy dumpling dough; and Vietnamese Fresh Spring Rolls. With meat and seafood; no dairy or eggs.','45','April, adults,meat,seafood,dairy-free,egg-free', 'Nancy Leson','dumpling.jpg','<ul><li>Pork and Shrimp Jiao-zi;dumpling dough;Vietnamese Fresh Spring Rolls</li></ul>');

var panClass = new Class('Mastering the Pan — Sauté, Sear and Pan Roast', 'A good pan is a fundamental kitchen tool, but knowing how to properly use it can be elusive, with useful instruction missing from most cookbooks. In this class, discover how to properly read the temperatures of oils and fats, avoid overcrowding the pan, and understand when to add food to keep it from sticking. Darin will demonstrate how to properly sear, sauté and pan roast like a restaurant chef, so you can approach your favorite recipes with confidence. Together, we\'ll prepare Crispy-skinned Chicken Thighs with Braised Leeks and Mustard; Dry-brined Pork Chops with Sweet and Sour Cherry and Soy Glaze with Garlicky Bok Choy; and Butter-basted Peppercorn Strip Steak with Asparagus and Pine Nuts. With meat, dairy and eggs.','55','April, adults,meat,dairy,eggs', 'Darin Gagner','pan.jpg','<ul><li>Crispy-skinned Chicken Thighs with Braised Leeks and Mustard; Dry-brined Pork Chops with Sweet and Sour Cherry and Soy Glaze with Garlicky Bok Choy; Butter-basted Peppercorn Strip Steak with Asparagus and Pine Nuts</li></ul>');

var medClass = new Class('Mediterranean Medley', 'Sureyya specializes in fast, easy and gloriously delicious vegan dishes. It\'s easy to love plant-based eating when you are enjoying these dishes from throughout the Mediterranean region: Turkish Spinach Hummus; Algerian Braised Beans and Lentil Soup with Harissa; Turkish Vegetable Hot Pot; Roasted Beet Salad with Rice and Dill; and Spicy Spanish Mojette (Roasted Vegetable Scoops). Vegetarian; no dairy or eggs.','45','April, adults,vegetarian, dairy-free,egg-free', 'Sureyya Gokeri','med.jpg','<ul><li>Turkish Spinach Hummus; Algerian Braised Beans and Lentil Soup with Harissa; Turkish Vegetable Hot Pot; Roasted Beet Salad with Rice and Dill; and Spicy Spanish Mojette (Roasted Vegetable Scoops)</li></ul>');

var piemonteseClass = new Class('Menu Piemontese', 'Among Italy\'s many cuisines and wine cultures, Piedmont offers an especially expressive and elegant range of flavors. Join us for a selection of extraordinary wines, chosen to complement our special menu: Bagna Cauda (Warm Parsley, Garlic and Anchovy Dipping Sauce accompanied by a Variety of Colorful Spring Vegetables and Ciabatta Bread);  Tagliolini con Tartufi (Ribbon Pasta with Artichokes and Pea Pods in White Truffle Sauce); Bollito Misto (a Melange of Chicken and Sausages cooked in a Seasoned Broth and served with a Classic Piemontese Green Sauce); and Zabaglione (a frothy Liqueur- infused Flan served with Fresh Strawberries). With meat, seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED','65','June,adults, seafood, age 21+, meat, dairy,eggs', 'Lynne Vea, Jeff Cox,  John White and Leif Olson','piemontese.jpg','<ul><li>Bagna Cauda (Warm Parsley, Garlic and Anchovy Dipping Sauce accompanied by a Variety of Colorful Spring Vegetables and Ciabatta Bread);  Tagliolini con Tartufi (Ribbon Pasta with Artichokes and Pea Pods in White Truffle Sauce); Bollito Misto (a Melange of Chicken and Sausages cooked in a Seasoned Broth and served with a Classic Piemontese Green Sauce); and Zabaglione (a frothy Liqueur- infused Flan served with Fresh Strawberries)</li></ul>');

var mexClass = new Class('Mexican Fiesta', 'For ages 4 to 6. Your child will love tasting and smelling the flavors of Mexico. We\'ll pick fresh cilantro, dice avocados, sauté onions, and mix cinnamon and chocolate to create a tasty menu of Tortilla Soup; Roasted Sweet Potato Quesadillas; and Mexican Cookies — Olé! Vegetarian with dairy and eggs. Price includes one child and one adult.','45','April, kids, child+adult, vegetarian, dairy, eggs, ages 4-6', 'Kelly Lake','mex.jpg','<ul><li>Tortilla Soup; Roasted Sweet Potato Quesadillas; Mexican Cookies</li></ul>');

var bagelsClass = new Class('New York-Style Bagels', 'Surprise and delight your family and friends with authentic New York-style bagels crafted by your very own hands. We\'ll prepare dough, shape, boil and then bake five different flavors: Plain, Poppy Seed, Sesame Seed, Onion and Everything Bagels. You will also create some complementary cream cheese spreads —  Garlic and Herb; Vegetable; and Honey Walnut — to accompany your bagels. Vegetarian with eggs and optional dairy.','50','April, adults,vegetarian, dairy, eggs', 'Shelley Baumgarten','bagels.jpg','<ul><li>Bagels: Plain, Poppy Seed, Sesame Seed, Onion and Everything Bagels;Cream cheese spreads: Garlic and Herb, Vegetable, and Honey Walnut</li></ul>');

var nwcelClass = new Class('Northwest Spring  Celebration', 'If there\'s anything in the world better than spring in Cascadia, it\'s spring dining featuring the bounty of Northwest farms, ranches, waters and vineyards. Savor the season with wines from some of our favorite wineries, paired with a menu full of amazing local flavors: Wild Alaskan Spot Prawn Bisque with Strawberry-Peppercorn Splash; Warm Salad of Asparagus and Prosciutto with Roasted Morels and Local Goat Cheese; Whole  Spice-seared Lamb Medallions with Hazelnuts and Sour Cherry-Syrah Coulis; and Honey- Rhubarb Upside-Down Torte. With meat,  seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED','65','April, adults, meat, seafood, dairy, eggs, age 21+', 'Lynne Vea, Mary Kirman, Seri Sedlacek and Stephen Johnson','nwcel.jpg','<ul><li>Wild Alaskan Spot Prawn Bisque with Strawberry-Peppercorn Splash; Warm Salad of Asparagus and Prosciutto with Roasted Morels and Local Goat Cheese; Whole  Spice-seared Lamb Medallions with Hazelnuts and Sour Cherry-Syrah Coulis; and Honey- Rhubarb Upside-Down Torte</li></ul>');

var pulseClass = new Class('ON THE PULSE', 'Pulses, including lentils, peas and chickpeas, have been part of the world\'s cuisine for centuries, but the ancients who first cultivated these soil-enriching crops wouldn\'t have guessed they were growing the world\'s first superfood. Packed with protein, fiber and a host of vitamins and minerals, pulses are healthy for you and the planet. Work with Chef Erin for some diverse and delicious recipes including Red Lentil and Herb Dip; Pea and Pesto Soup; Chickpea Pizza with Pistachio Pesto; Roasted Cauliflower and Lentil Tacos; and Chickpea Flour Gingersnap Cookies. Vegetarian with dairy and eggs; no gluten.','50','June,adults,vegetarian,dairy,eggs, gluten-free', 'Erin Coopey','pulse.jpg','<ul><li>Red Lentil and Herb Dip; Pea and Pesto Soup; Chickpea Pizza with Pistachio Pesto; Roasted Cauliflower and Lentil Tacos;Chickpea Flour Gingersnap Cookies</li></ul>');

var pastaClass = new Class('Pasta Workshop', 'Iole has been sharing her love of creating handmade pasta with eager PCC students for two decades now. In this lively workshop, Iole will show you how to create fresh pasta, a staple of Italian home-cooked meals. With a batch of pasta dough, expert guidance and a little  practice, you\'ll become skilled at making Bowtie Pasta with Sugar Plum Tomatoes, Mozzarella and Arugula; Tagliolini with Pesto; and  Fettuccine al Burro e Parmigiano. Iole will also demonstrate how to make ravioli and  tortellini. Vegetarian with dairy and eggs.','55','April, adults,vegetarian, dairy, eggs', 'Iole Aguero','pasta.jpg','<ul><li>Bowtie Pasta with Sugar Plum Tomatoes, Mozzarella and Arugula; Tagliolini with Pesto; and  Fettuccine al Burro e Parmigiano</li></ul>');

var pizzaClass = new Class('Pizza, Pizza', 'For ages 4 to 6. What\'s not to love about pizza? Iole will show you how to make quick, delicious homemade pizza with just a few  ingredients. Kids will enjoy rolling out the dough and adding the toppings for their very own pizza. We\'ll also make Chocolate Coconut Cookies and transform them into irresistible Ice Cream Sandwiches. Vegetarian with dairy and eggs. Price includes one child and one adult.','45','April,kids,ages 4-6,child+adult,', 'Iole Aguero','pizza.jpg','<ul><li></li></ul>');

var probioticsClass = new Class('Probiotics 101', 'Every day we learn more about the many health benefits attributed to probiotics — tiny bacteria with long names like bifidobacteria bifidum. Nick will explain the basics of the foods that contain them — from sauerkraut to kombucha — why you need them and how to select the best  probiotic foods and supplements.','10','May, adults, lecture', 'Nick Rose, M.S.','probiotics.jpg','<ul><li></li></ul>');

var saucesClass = new Class('Quick and Easy  Italian Pasta Sauces', 'Using a few well-chosen ingredients, quick cooking techniques, a pinch of perfect seasoning and a dash of love, Iole will show you how you can make dishes that will please the whole family any time that you crave pasta. You\'ll marvel at the simple prep for complex flavors in dishes such as Pasta with Tuna, Olives and Lemon; Pasta with Eggplant, Sugar Plum Tomatoes and Fresh Mozzarella; Pasta with Broccoli Pesto; and Pasta with Pistachio Pesto. With seafood, dairy and eggs.','45','June, adults,seafood, dairy, eggs', 'Iole Aguero','sauces.jpg','<ul><li>Pasta with Tuna, Olives and Lemon; Pasta with Eggplant, Sugar Plum Tomatoes and Fresh Mozzarella; Pasta with Broccoli Pesto; Pasta with Pistachio Pesto</li></ul>');

var mealsClass = new Class('Quick and Ridiculously Delicious Weeknight Meals', 'You\'ve had a busy day, but dinner won\'t put itself on the table. Chef Erin to the rescue! There\'s no better way to make sure you eat a home-cooked meal after a long day at work than to have a plan. You\'ll get four nights\'worth of dependable weeknight meal ideas from Chef Erin as you help prepare Skillet Lasagna; Shrimp Veracruz; Red Lentil Curry; and Pan-roasted Chicken with Honeyed Carrots and Pistachios. With meat, seafood, dairy and eggs.','55','May,adults, meat, seafood, dairy,eggs', 'Erin Coopey','meals.jpg','<ul><li>Skillet Lasagna; Shrimp Veracruz; Red Lentil Curry; and Pan-roasted Chicken with Honeyed Carrots and Pistachios</li></ul>');

var theoClass = new Class('Recipes from  Theo Chocolate', 'Theo Chocolate, the first Organic and Fair Trade certified bean-to-bar chocolate factory in North America, is dedicated to making the world a better place and is finding ways to do so through their passion, bringing out the best in cocoa beans. Get a unique look into the world of chocolate making as Theo Chocolatier Katy Radtke demonstrates the technique for making perfect table-tempered chocolate and reveals the art of properly cooking sugar for all types of uses. Katy will create two amazing recipes from the Theo Chocolate cookbook that are truly a treat to make: Vanilla Salted Caramels; and Fig, Fennel and Almond Dacquoise with Dark Chocolate Cream. Sample treats during the class and take a few home for later as well. Vegetarian with dairy and eggs.','60','April,adults,vegetarian, dairy, egg-free,gluten-free', 'Katy Radtke, Theo Chocolatier','theo.jpg','<ul><li>Vanilla Salted Caramels; Fig, Fennel and Almond Dacquoise with Dark Chocolate Cream</li></ul>');

var rawClass = new Class('Refreshing Raw Foods', 'As we transition to warmer weather, reap the benefits of incorporating more raw foods into your diet. Fresh, high-energy foods can help clear out toxins and unwanted winter weight.  Nutritionist Ami Karnosh will discuss some of the advantages of raw foods as she demonstrates Savory Spring Salad Rolls with Creamy Almond Dipping Sauce; Curried Sweet Potato Salad with Walnuts and Parsley; Phad Thai with Fresh Vegetable Ribbons, Herbs and Soy Ginger Sauce; and No-bake Banana Cocoa Nib Blondies. Vegetarian; no eggs or dairy.','45','May, adults,vegetarian,dairy-free,egg-free', 'Ami Karnosh, M.S., C.N.','raw.jpg','<ul><li>Savory Spring Salad Rolls with Creamy Almond Dipping Sauce; Curried Sweet Potato Salad with Walnuts and Parsley; Phad Thai with Fresh Vegetable Ribbons, Herbs and Soy Ginger Sauce; No-bake Banana Cocoa Nib Blondies</li></ul>');

var sauces2Class = new Class('Sauces — Classic and  Contemporary', 'Chef Darin will take you through the world of contemporary and classic sauces so you can approach any main dish with confidence. Classic reduction and emulsion sauces will be covered, along with vegetable-based relishes, pestos and purees. Ratios will be provided along with the recipes to further open a world of spontaneity and exploration. We will make a simple Dry-brined Chicken; Vegetables; and Sirloin Roast, then make the following sauces to top them: Red Wine Demi-glace; Chermoula; Almond and Olive Relish; Arugula Pesto; Sherry Vinaigrette; Nuoc Cham; and Rouille. With meat, seafood (fish sauce), dairy and eggs.','55','May,adults,meat, seafood, dairy, eggs', 'Darin Gagner','sauces2.jpg','<ul><li>Dry-brined Chicken; Vegetables; and Sirloin Roast; Red Wine Demi-glace; Chermoula; Almond and Olive Relish; Arugula Pesto; Sherry Vinaigrette; Nuoc Cham; Rouille</li></ul>');

var detoxClass = new Class('Spring Detox','Supporting your body\'s own detoxification  system is important for overall health and  vitality. Using food as medicine, registered  dietitian and nutritionist Kory DeAngelo will explain how to support and optimize your body\'s own internal spring cleaning processes and present recipes to lighten up your diet. You\'ll welcome healthful foods like Creamy Beet Soup; Quinoa and White Bean Salad; Crunchy Cabbage Slaw; and Milk Thistle Tea. Vegetarian; no dairy or eggs.','45','April,adults,Vegetarian,ddairy-free,egg-free', 'Kory DeAngelo, M.S.,  R.D.N., C.D.','detox.jpg','<ul><li>Creamy Beet Soup; Quinoa and White Bean Salad; Crunchy Cabbage Slaw; Milk Thistle Tea</li></ul>');

var greensClass = new Class('Spring Greens', 'Discover the bounty of spring with an array of seasonal greens, starting with a side-by-side greens tasting. Get tips for utilizing these nutrition powerhouses in your everyday dishes and for overcoming bitterness. Rachel will demonstrate a full menu highlighting these beautiful greens: Caldo Verde, a traditional Portuguese Greens Soup; Salmon with Wild Green Pesto; Colcannon (a versatile dish of mashed potatoes, leeks and sautéed greens); and Fennel, Celery and Apple Salad. Greens in every bite!  With meat, seafood, dairy; no eggs.','50','April, adults,meat, seafood, dairy,egg-free', 'Rachel Duboff','greens.jpg','<ul><li>Caldo Verde-Portuguese Greens Soup; Salmon with Wild Green Pesto; Colcannon (a versatile dish of mashed potatoes, leeks and sautéed greens);  Fennel, Celery and Apple Salad</li></ul>');

var stirClass = new Class('Stir It Up', 'For ages 2 to 3. Even little ones can have fun in the kitchen, measuring, mixing and stirring to make treats for themselves. They will make their very own customized Great Granola with lots of ingredient choices; Power Muffins; and Fruity Ambrosia Salad. Vegetarian, with eggs and optional dairy. Price includes one child and one adult.','45','April, kids, ages 2-3, child+adult, vegetarian, eggs, dairy', 'Ami Karnosh  and Annie Wilson','stir.jpg','<ul><li>Great Granola;Power Muffins;Fruity Ambrosia Salad</li></ul>');

var shortClass = new Class('Strawberry Shortcake', 'For ages 4 to 6. What is a cookbook? How do you measure ingredients? These are essential skills that help us create magic in the kitchen. Learn about kitchen basics while we work in small groups to create scrumptious Strawberry Shortcake with Whipped Cream. Vegetarian with dairy and eggs. Price includes one child and one adult.','45','April, kids, ages 4-6, child+adult, vegetarian, dairy, eggs.', 'Maria Galvao','short.jpg','<ul><li>Strawberry Shortcake; Whipped Cream</li></ul>');

var tacoClass = new Class('Taco Night', 'For ages 13 and up with one adult guest.  You can\'t go wrong with a taco bar with lots of  customizable options. We\'ll work together to create a fabulous taco party from scratch, including Homemade Flour Tortillas; Black Beans; Spanish Rice; Carne Asada; Shredded Cabbage, Avocados and Fresh Salsa. You\'ll get some great tips for creating your own taco night for friends and family at home. With meat and vegetarian options and dairy; no eggs. Price includes one teen and one adult.','50','April, kids, ages 13+,child+adult, meat ,vegetarian, dairy, egg-free', 'Yary Oslund','taco.jpg','<ul><li>Homemade Flour Tortillas; Black Beans; Spanish Rice; Carne Asada; Shredded Cabbage, Avocados and Fresh Salsa</li></ul>');

var tamaleClass = new Class('Tamales and Salsas', 'You look forward to tamales from the farmers market or food truck; now learn how to make them at home yourself in this informative hands-on class. Devra will teach you an easy method for this festive, versatile dish, along with a tantalizing trio of homemade salsas to liven up your meal. We\'ll make Tamales with two different fillings —Black Bean; and Roasted Vegetables with Queso Fresco — and top them with Pico de Gallo; Roasted Tomato Salsa; and Roasted Serrano  Hot Sauce. Vegetarian with dairy; no eggs.','50','April, adults,vegetarian, dairy, egg-free', 'Devra Gartenstein','tamale.jpg','<ul><li>Tamales: Black Bean and Roasted Vegetables with Queso Fresco;Pico de Gallo; Roasted Tomato Salsa; Roasted Serrano Hot Sauce</li></ul>');

var thaiClass = new Class('The Art of Thai Cuisine', 'Thai food is a snap for everyday cooking with Pranee\'s simple techniques and an abundance of Thai ingredients and fresh herbs within easy reach. Learn how to balance sweet, sour, salty and spicy as Pranee demonstrates four tantalizing Thai dishes, including Laab Moo (Minced Pork Salad with Mint, Cilantro and Green Onion in Spicy Lime and Chili Dressing, served with Sticky Rice); Tom Kha Gai (Chicken in Thai  Ginger and Coconut-Lime Broth with Lemongrass and Lime Leaves); Phanang Goong (Zesty Phanang Curry Prawns with Shredded Lime Leaves); and Kao Neow Mamuang (Sticky Rice with Mango). With meat, poultry and seafood; no dairy or eggs.','50','April, adults,meat, poultry,seafood,dairy-free,egg-free', 'Pranee Halvorsen','thai.jpg','<ul><li>Laab Moo (Minced Pork Salad with Mint, Cilantro and Green Onion in Spicy Lime and Chili Dressing, served with Sticky Rice); Tom Kha Gai (Chicken in Thai  Ginger and Coconut-Lime Broth with Lemongrass and Lime Leaves); Phanang Goong (Zesty Phanang Curry Prawns with Shredded Lime Leaves); Kao Neow Mamuang (Sticky Rice with Mango)</li></ul>');

var brazilClass = new Class('THE BEST OF BRAZIL', 'Get ready to dive into Brazilian food culture in honor of the 2016 Summer Olympics in Rio.  Brazil is a melting pot of colors, flavors and customs, and its cuisine is similarly varied.  Yary will demonstrate one of Brazil\'s best-loved dishes, Feijoada (traditional meat stew) served with Sautéed Collard Greens and Rice; along with Virgin Caipirinha (a refreshing Citrus Ginger drink); Piri Piri Grilled Shrimp with Mango Sauce; and Pudim de Laranja (Brazilian Orange Flan). With meat, seafood, dairy and eggs.','50','April, adults, meat, seafood, dairy,eggs', 'Yary Oslund','brazil.jpg','<ul><li>Feijoada (traditional meat stew) served with Sautéed Collard Greens and Rice; along with Virgin Caipirinha (a refreshing Citrus Ginger drink); Piri Piri Grilled Shrimp with Mango Sauce; Pudim de Laranja (Brazilian Orange Flan)</li></ul>');

var grillClass = new Class('THE THRILL OF THE GRILL', 'Participate in our regional spring optimism and be at the ready, spatula in hand, for the first sunny opportunities to start grilling. Lynne\'s irresistible recipes will be paired with cider samplings: Sizzling Grilled Flatbread Pizza 101 with homemade olive oil dough, local cheeses and a variety of toppings; Nut-and-Seed-Crusted Filet of Halibut with two Zesty Sauces; Sticky Chicken with Korean Gochujang Barbecue Sauce; and Rhubarb Fool. With meat, seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED.','55','April, adults, ages 21+,meat, seafood, dairy, eggs', 'Lynne Vea','grill.jpg','<ul><li>Sizzling Grilled Flatbread Pizza 101; Nut-and-Seed-Crusted Filet of Halibut with two Zesty Sauces; Sticky Chicken with Korean Gochujang Barbecue Sauce; Rhubarb Fool</li></ul>');

var tomatoClass = new Class('Tomaticus Galoricus:', 'Farmer Sarah Cassidy, the Tomato Whisperer, will reveal secrets to growing healthy, prolific and tasty tomatoes in our unpredictable Pacific Northwest climate. Select the perfect tomato for almost any location and get techniques on pruning, trellising and proper "dry farming" methods. You\'ll work hands-on applying these lessons to your own baby tomato plant to take home. You\'ll be on your way to growing amazing tomatoes, and lots of them, so we\'ll also talk about ways to put up your bounty including Roasted Tomatoes.','45','May,adults,lecture', 'Sarah Cassidy','tomato.jpg','<ul><li></li></ul>');

var sushiClass = new Class('Vegetarian Sushi Rolls Made Easy', 'Maki sushi is “rolled sushi” with narrow strips of different ingredients layered on a bed of vinegared rice and spread on a sheet of toasted nori (seaweed). Come learn the most effective technique for successful sushi and practice with expert help. A wide variety of colorful, refreshing ingredients will be used to make sushi rolls, from avocado to spinach to tofu, and you can get creative at home with more. Seppo will show you how to make perfect sushi rice, prepare beautiful rolls and serve your creations with elegance. Vegetarian; no dairy or eggs.','50','May, adults,vegetarian,dairy-free,egg-free', 'Seppo Farrey','Sushi.jpg','<ul><li>Sushi rolls</li></ul>');

var wttClass = new Class('Walk, Talk and Taste', 'This 90-minute free class and tour, led by a PCC Nutrition Educator, takes you through our aisles to discover the many choices in organic produce, sustainably raised products, bulk foods and much more. Taste many products you haven\'t tried before and learn about how they are produced. Make connections between your food choices and health, the environment and the local and global community in a fun, informative free class.','0','April, lecture, adults', 'Nick Rose, M.S. or  Marilyn Walls, M.S.','wtt.jpg','<ul><li></li></ul>');

var bugsClass = new Class('We Love Bugs!', 'For ages 2 to 3. Come apply your creativity to making edible bugs. We\'ll start with rolling out sugar cookie dough, then mold or cut and  decorate some cookie bugs. While our creations are baking, we\'ll apply our skills to veggie bugs.  Lots of ideas will be supplied, and you can  create your own bug sensations as well!  Vegetarian with dairy and eggs. Price includes one child and one adult.','45','April,kids, ages 2-3, baking, child+adult, vegetarian, dairy, eggs', 'Kim Trimmer','bugs.jpg','<ul><li>Sugar cookies</li></ul>');


// Update the HTML for the page  - Deena

var details1 = ' <div data-name="' + twodayClass.name + '" data-flag="' + twodayClass.flags;
     details1 += '"> <a href="twoday.html"><img src="images/twoday.jpg" class="image" alt="2-Day Mystery Basket  Challenge"> <br> ';
     details1 +=  twodayClass.name +  '  </a></div>  ';
var elClass1 = document.getElementById('Class1');
elClass1.innerHTML = details1;

var details2 = ' <div data-name="' + cook42Class.name + '" data-flag="' + cook42Class.flags;
    details2 += '"> <a href="cook42.html"><img src="images/cook42.jpg" class="image" alt="30-minute Cooking for Two"> <br> ';
    details2 +=  cook42Class.name +  '  </a></div>  ';
var elClass2 = document.getElementById('Class2');
elClass2.innerHTML = details2;

var details3 = ' <div data-name="' + salmonClass.name + '" data-flag="' + salmonClass.flags;
     details3 += '"> <a href="salmon.html"><img src="images/salmon.jpg" class="image" alt="A Celebration of the Mighty Salmon"> <br> ';
    details3 +=  salmonClass.name +  '  </a></div>  ';
var elClass3 = document.getElementById('Class3');
elClass3.innerHTML = details3;

var details4 = ' <div data-name="' + agingClass.name + '" data-flag="' + agingClass.flags;
     details4 += '"> <a href="aging.html"><img src="images/aging.jpg" class="image" alt="Aging Gracefully"> <br>';
    details4 +=  agingClass.name +  '  </a></div>  ';
var elClass4 = document.getElementById('Class4');
elClass4.innerHTML = details4;

var details5 = ' <div data-name="' + pieClass.name + '" data-flag="' + pieClass.flags;
     details5 += '"> <a href="pie.html"><img src="images/pie.jpg" class="image" alt="All About Pie"> <br> ';
    details5 +=  pieClass.name +  '  </a></div>  ';
var elClass5 = document.getElementById('Class5');
elClass5.innerHTML = details5;

var details6 = ' <div data-name="' + antiClass.name + '" data-flag="' + antiClass.flags;
     details6 += '"> <a href="anti.html"><img src="images/anti.jpg" class="image" alt="Anti-Inflammatory Eating Made Easy"> <br> ';
    details6 +=  antiClass.name +  '  </a></div>  ';
var elClass6 = document.getElementById('Class6');
elClass6.innerHTML = details6;

var details7 = ' <div data-name="' + enchiladasClass.name + '" data-flag="' + enchiladasClass.flags;
     details7 += '"> <a href="enchiladas.html"><img src="images/enchiladas.jpg" class="image" alt="Anytime Enchiladas"> <br> ';
    details7 +=  enchiladasClass.name +  '  </a></div>  ';
var elClass7 = document.getElementById('Class7');
elClass7.innerHTML = details7;

var details8 = ' <div data-name="' + atwClass.name + '" data-flag="' + atwClass.flags;
     details8 += '"> <a href="atw.html"><img src="images/atw.jpg" class="image" alt="Around the World in Five Days: Gluten-free Kids’ Cooking Camp"> <br> ';
    details8 +=  atwClass.name +  '  </a></div>  ';
var elClass8 = document.getElementById('Class8');
elClass8.innerHTML = details8;

var details9 = ' <div data-name="' + atwClass.name + '" data-flag="' + atwClass.flags;
     details9 += '"> <a href="atw.html"><img src="images/atw.jpg" class="image" alt="Around the World in Five Days: Kids’ Cooking Camp"> <br> ';
    details9 +=  atwClass.name +  '  </a></div>  ';
var elClass9 = document.getElementById('Class9');
elClass9.innerHTML = details9;

var details10 = ' <div data-name="' + breadClass.name + '" data-flag="' + breadClass.flags;
     details10 += '"> <a href="bread.html"><img src="images/bread.jpg" class="image" alt="Artisan Breads: Ciabatta and Pizza"> <br> ';
    details10 +=  breadClass.name +  '  </a></div>  ';
var elClass10 = document.getElementById('Class10');
elClass10.innerHTML = details10;

var details11 = ' <div data-name="' + basqueClass.name + '" data-flag="' + basqueClass.flags;
     details11 += '"> <a href="basque.html"><img src="images/basque.jpg" class="image" alt="Basque Country Cooking"> <br> ';
    details11 +=  basqueClass.name +  '  </a></div>  ';
var elClass11 = document.getElementById('Class11');
elClass11.innerHTML = details11;

var details12 = ' <div data-name="' + batterClass.name + '" data-flag="' + batterClass.flags;
     details12 += '"> <a href="batter.html"><img src="images/batter.jpg" class="image" alt="Batter’s Up! Pancakes and Crepes"> <br> ';
    details12 +=  batterClass.name +  '  </a></div>  ';
var elClass12 = document.getElementById('Class12');
elClass12.innerHTML = details12;

var details13 = ' <div data-name="' + cheeseClass.name + '" data-flag="' + cheeseClass.flags;
     details13 += '"> <a href="cheese.html"><img src="images/cheese.jpg" class="image" alt="Cheesemaking Workshop"> <br> ';
    details13 +=  cheeseClass.name +  '  </a></div>  ';
var elClass13 = document.getElementById('Class13');
elClass13.innerHTML = details13;
/*
var details14 = ' <div data-name="' + chickenClass.name + '" data-flag="' + chickenClass.flags;
     details14 += '"> <a href="chicken.html"><img src="images/chicken.jpg" class="image" alt="Chicken 101"> ';
    details14 +=  chickenClass.name +  '  </a></div>  ';
var elClass14 = document.getElementById('Class14');
elClass14.innerHTML = details14;

var details15 = ' <div data-name="' + cldrollsClass.name + '" data-flag="' + cldrollsClass.flags;
     details15 += '"> <a href="cldrolls.html"><img src="images/cldrolls.jpg" class="image" alt="Chinese Lazy  Dragon Rolls"> ';
    details15 +=  cldrollsClass.name +  '  </a></div>  ';
var elClass15 = document.getElementById('Class15');
elClass15.innerHTML = details15;

var details16 = ' <div data-name="' + noodlesClass.name + '" data-flag="' + noodlesClass.flags;
     details16 += '"> <a href="noodles.html"><img src="images/noodles.jpg" class="image" alt=""> ';
    details16 +=  noodlesClass.name +  '  </a></div>  ';
var elClass16 = document.getElementById('Class16');
elClass16.innerHTML = details16;

var details17 = ' <div data-name="' + frenchClass.name + '" data-flag="' + frenchClass.flags;
     details17 += '"> <a href="french.html"><img src="images/french.jpg" class="image" alt=""> ';
    details17 +=  frenchClass.name +  '  </a></div>  ';
var elClass17 = document.getElementById('Class17');
elClass17.innerHTML = details17;

var details18 = ' <div data-name="' + klatchClass.name + '" data-flag="' + klatchClass.flags;
     details18 += '"> <a href="klatch.html"><img src="images/klatch.jpg" class="image" alt=""> ';
    details18 +=  klatchClass.name +  '  </a></div>  ';
var elClass18 = document.getElementById('Class18');
elClass18.innerHTML = details18;

var details19 = ' <div data-name="' + cwrClass.name + '" data-flag="' + cwrClass.flags;
     details19 += '"> <a href="cwr.html"><img src="images/cwr.jpg" class="image" alt=""> ';
    details19 +=  cwrClass.name +  '  </a></div>  ';
var elClass19 = document.getElementById('Class19');
elClass19.innerHTML = details19;

var details20 = ' <div data-name="' + spsoupClass.name + '" data-flag="' + spsoupClass.flags;
     details20 += '"> <a href="spsoup.html"><img src="images/spsoup.jpg" class="image" alt=""> ';
    details20 +=  spsoupClass.name +  '  </a></div>  ';
var elClass20 = document.getElementById('Class20');
elClass20.innerHTML = details20;

var details21 = ' <div data-name="' + veganClass.name + '" data-flag="' + veganClass.flags;
     details21 += '"> <a href="vegan.html"><img src="images/vegan.jpg" class="image" alt=""> ';
    details21 +=  veganClass.name +  '  </a></div>  ';
var elClass21 = document.getElementById('Class21');
elClass21.innerHTML = details21;

var details22 = ' <div data-name="' + fermClass.name + '" data-flag="' + fermClass.flags;
     details22 += '"> <a href="ferm.html"><img src="images/ferm.jpg" class="image" alt=""> ';
    details22 +=  fermClass.name +  '  </a></div>  ';
var elClass22 = document.getElementById('Class22');
elClass22.innerHTML = details22;

var details23 = ' <div data-name="' + heartClass.name + '" data-flag="' + heartClass.flags;
     details23 += '"> <a href="heart.html"><img src="images/heart.jpg" class="image" alt=""> ';
    details23 +=  heartClass.name +  '  </a></div>  ';
var elClass23 = document.getElementById('Class23');
elClass23.innerHTML = details23;

var details24 = ' <div data-name="' + fondueClass.name + '" data-flag="' + fondueClass.flags;
     details24 += '"> <a href="fondue.html"><img src="images/fondue.jpg" class="image" alt=""> ';
    details24 +=  fondueClass.name +  '  </a></div>  ';
var elClass24 = document.getElementById('Class24');
elClass24.innerHTML = details24;

var details25 = ' <div data-name="' + gfwttClass.name + '" data-flag="' + gfwttClass.flags;
     details25 += '"> <a href="gfwtt.html"><img src="images/gfwtt.jpg" class="image" alt=""> ';
    details25 +=  gfwttClass.name +  '  </a></div>  ';
var elClass25 = document.getElementById('Class25');
elClass25.innerHTML = details25;

var details26 = ' <div data-name="' + gfbakingClass.name + '" data-flag="' + gfbakingClass.flags;
     details26 += '"> <a href="gfbaking.html"><img src="images/gfbaking.jpg" class="image" alt=""> ';
    details26 +=  gfbakingClass.name +  '  </a></div>  ';
var elClass26 = document.getElementById('Class26');
elClass26.innerHTML = details26;

var details27 = ' <div data-name="' + budgetClass.name + '" data-flag="' + budgetClass.flags;
     details27 += '"> <a href="budget.html"><img src="images/budget.jpg" class="image" alt=""> ';
    details27 +=  budgetClass.name +  '  </a></div>  ';
var elClass27 = document.getElementById('Class27');
elClass27.innerHTML = details27;
*/
var details28 = ' <div data-name="' + sardiniaClass.name + '" data-flag="' + sardiniaClass.flags;
     details28 += '"> <a href="sardinia.html"><img src="images/sardinia.png" class="image" alt="Holiday in Sardinia"> <br> ';
    details28 +=  sardiniaClass.name +  ' </a></div>  ';
var elClass28 = document.getElementById('Class28');
elClass28.innerHTML = details28;

var details29 = ' <div data-name="' + cakeClass.name + '" data-flag="' + cakeClass.flags;
     details29 += '"> <a href="cake.html"><img src="images/cake.jpg" class="image" alt="How to Bake a Cake 101"> <br> ';
    details29 +=  cakeClass.name +  '  </a></div>  ';
var elClass29 = document.getElementById('Class29');
elClass29.innerHTML = details29;

var details30 = ' <div data-name="' + seasonClass.name + '" data-flag="' + seasonClass.flags;
     details30 += '"> <a href="season.html"><img src="images/season.jpg" class="image" alt="In season"> <br> ';
    details30 +=  seasonClass.name +  '  </a></div>  ';
var elClass30 = document.getElementById('Class30');
elClass30.innerHTML = details30;

var details31 = ' <div data-name="' + indianClass.name + '" data-flag="' + indianClass.flags;
     details31 += '"> <a href="indian.html"><img src="images/indian.jpg" class="image" alt="Indian Cuisine Under Pressure!"> <br> ';
    details31 +=  indianClass.name +  '  </a></div>  ';
var elClass31 = document.getElementById('Class31');
elClass31.innerHTML = details31;

var details32 = ' <div data-name="' + chemClass.name + '" data-flag="' + chemClass.flags;
     details32 += '"> <a href="chem.html"><img src="images/chem.jpg" class="image" alt="Kitchen Chemistry"> <br> ';
    details32 +=  chemClass.name +  '  </a></div>  ';
var elClass32 = document.getElementById('Class32');
elClass32.innerHTML = details32;

var details33 = ' <div data-name="' + knifeClass.name + '" data-flag="' + knifeClass.flags;
     details33 += '"> <a href="knife.html"><img src="images/knife.jpg" class="image" alt="Knife Skills"> <br> ';
    details33 +=  knifeClass.name +  '  </a></div>  ';
var elClass33 = document.getElementById('Class33');
elClass33.innerHTML = details33;

var details34 = ' <div data-name="' + dumplingClass.name + '" data-flag="' + dumplingClass.flags;
     details34 += '"> <a href="dumpling.html"><img src="images/dumpling.jpg" class="image" alt="Let\'s Roll: Jiao-zi dumplings and spring rolls"> <br> ';
    details34 +=  dumplingClass.name +  '  </a></div>  ';
var elClass34 = document.getElementById('Class34');
elClass34.innerHTML = details34;

var details35 = ' <div data-name="' + panClass.name + '" data-flag="' + panClass.flags;
     details35 += '"> <a href="pan.html"><img src="images/pan.jpg" class="image" alt="Mastering the Pan Sauté, Sear and Pan Roast"> <br> ';
    details35 +=  panClass.name +  '  </a></div>  ';
var elClass35 = document.getElementById('Class35');
elClass35.innerHTML = details35;

var details36 = ' <div data-name="' + medClass.name + '" data-flag="' + medClass.flags;
     details36 += '"> <a href="med.html"><img src="images/med.jpg" class="image" alt="Mediterranean Medley"> <br> ';
    details36 +=  medClass.name +  '  </a></div>  ';
var elClass36 = document.getElementById('Class36');
elClass36.innerHTML = details36;

var details37 = ' <div data-name="' + piemonteseClass.name + '" data-flag="' + piemonteseClass.flags;
     details37 += '"> <a href="piemontese.html"><img src="images/piemontese.jpg" class="image" alt="Menu Piemontese"> <br> ';
    details37 +=  piemonteseClass.name +  '  </a></div>  ';
var elClass37 = document.getElementById('Class37');
elClass37.innerHTML = details37;

var details38 = ' <div data-name="' + mexClass.name + '" data-flag="' + mexClass.flags;
     details38 += '"> <a href="mex.html"><img src="images/mex.jpg" class="image" alt="Mexican Fiesta"> ';
    details38 +=  mexClass.name +  '  </a></div>  ';
var elClass38 = document.getElementById('Class38');
elClass38.innerHTML = details38;

var details39 = ' <div data-name="' + bagelsClass.name + '" data-flag="' + bagelsClass.flags;
     details39 += '"> <a href="bagels.html"><img src="images/bagels.jpg" class="image" alt="New York-Style Bagels"> <br> ';
    details39 +=  bagelsClass.name +  '  </a></div>  ';
var elClass39 = document.getElementById('Class39');
elClass39.innerHTML = details39;
/*
var details40 = ' <div data-name="' + nwcelClass.name + '" data-flag="' + nwcelClass.flags;
     details40 += '"> <a href="nwcel.html"><img src="images/nwcel.jpg" class="image" alt=""> ';
    details40 +=  nwcelClass.name +  '  </a></div>  ';
var elClass40 = document.getElementById('Class40');
elClass40.innerHTML = details40;

var details41 = ' <div data-name="' + pulseClass.name + '" data-flag="' + pulseClass.flags;
     details41 += '"> <a href="pulse.html"><img src="images/pulse.jpg" class="image" alt=""> ';
    details41 +=  pulseClass.name +  '  </a></div>  ';
var elClass41 = document.getElementById('Class41');
elClass41.innerHTML = details41;

var details42 = ' <div data-name="' + pastaClass.name + '" data-flag="' + pastaClass.flags;
     details42 += '"> <a href="pasta.html"><img src="images/pasta.jpg" class="image" alt=""> ';
    details42 +=  pastaClass.name +  '  </a></div>  ';
var elClass42 = document.getElementById('Class42');
elClass42.innerHTML = details42;

var details43 = ' <div data-name="' + pizzaClass.name + '" data-flag="' + pizzaClass.flags;
     details43 += '"> <a href="pizza.html"><img src="images/pizza.jpg" class="image" alt=""> ';
    details43 +=  pizzaClass.name +  '  </a></div>  ';
var elClass43 = document.getElementById('Class43');
elClass43.innerHTML = details43;

var details44 = ' <div data-name="' + probioticsClass.name + '" data-flag="' + probioticsClass.flags;
     details44 += '"> <a href="probiotics.html"><img src="images/probiotics.jpg" class="image" alt=""> ';
    details44 +=  probioticsClass.name +  '  </a></div>  ';
var elClass44 = document.getElementById('Class44');
elClass44.innerHTML = details44;

var details45 = ' <div data-name="' + saucesClass.name + '" data-flag="' + saucesClass.flags;
     details45 += '"> <a href="sauces.html"><img src="images/sauces.jpg" class="image" alt=""> ';
    details45 +=  saucesClass.name +  '  </a></div>  ';
var elClass45 = document.getElementById('Class45');
elClass45.innerHTML = details45;

var details46 = ' <div data-name="' + mealsClass.name + '" data-flag="' + mealsClass.flags;
     details46 += '"> <a href="meals.html"><img src="images/meals.jpg" class="image" alt=""> ';
    details46 +=  mealsClass.name +  '  </a></div>  ';
var elClass46 = document.getElementById('Class46');
elClass46.innerHTML = details46;

var details47 = ' <div data-name="' + theoClass.name + '" data-flag="' + theoClass.flags;
     details47 += '"> <a href="theo.html"><img src="images/theo.jpg" class="image" alt=""> ';
    details47 +=  theoClass.name +  '  </a></div>  ';
var elClass47 = document.getElementById('Class47');
elClass47.innerHTML = details47;

var details48 = ' <div data-name="' + rawClass.name + '" data-flag="' + rawClass.flags;
     details48 += '"> <a href="raw.html"><img src="images/raw.jpg" class="image" alt=""> ';
    details48 +=  rawClass.name +  '  </a></div>  ';
var elClass48 = document.getElementById('Class48');
elClass48.innerHTML = details48;

var details49 = ' <div data-name="' + sauces2Class.name + '" data-flag="' + sauces2Class.flags;
     details49 += '"> <a href="sauces2.html"><img src="images/sauces2.jpg" class="image" alt=""> ';
    details49 +=  sauces2Class.name +  '  </a></div>  ';
var elClass49 = document.getElementById('Class49');
elClass49.innerHTML = details49;

var details50 = ' <div data-name="' + detoxClass.name + '" data-flag="' + detoxClass.flags;
     details50 += '"> <a href="detox.html"><img src="images/detox.jpg" class="image" alt=""> ';
    details50 +=  detoxClass.name +  '  </a></div>  ';
var elClass50 = document.getElementById('Class50');
elClass50.innerHTML = details50;

var details51 = ' <div data-name="' + greensClass.name + '" data-flag="' + greensClass.flags;
     details51 += '"> <a href="greens.html"><img src="images/greens.jpg" class="image" alt=""> ';
    details51 +=  greensClass.name +  '  </a></div>  ';
var elClass51 = document.getElementById('Class51');
elClass51.innerHTML = details51;

var details52 = ' <div data-name="' + stirClass.name + '" data-flag="' + stirClass.flags;
     details52 += '"> <a href="stir.html"><img src="images/stir.jpg" class="image" alt=""> ';
    details52 +=  stirClass.name +  '  </a></div>  ';
var elClass52 = document.getElementById('Class52');
elClass52.innerHTML = details52;

var details53 = ' <div data-name="' + shortClass.name + '" data-flag="' + shortClass.flags;
     details53 += '"> <a href="short.html"><img src="images/short.jpg" class="image" alt=""> ';
    details53 +=  shortClass.name +  '  </a></div>  ';
var elClass53 = document.getElementById('Class53');
elClass53.innerHTML = details53;

var details54 = ' <div data-name="' + tacoClass.name + '" data-flag="' + tacoClass.flags;
     details54 += '"> <a href="taco.html"><img src="images/taco.jpg" class="image" alt=""> ';
    details54 +=  tacoClass.name +  '  </a></div>  ';
var elClass54 = document.getElementById('Class54');
elClass54.innerHTML = details54;

var details55 = ' <div data-name="' + tamaleClass.name + '" data-flag="' + tamaleClass.flags;
     details55 += '"> <a href="tamale.html"><img src="images/tamale.jpg" class="image" alt=""> ';
    details55 +=  tamaleClass.name +  '  </a></div>  ';
var elClass55 = document.getElementById('Class55');
elClass55.innerHTML = details55;
*/
var details56 = ' <div data-name="' + thaiClass.name + '" data-flag="' + thaiClass.flags;
     details56 += '"> <a href="thai.html"><img src="images/thai.jpg" class="image" alt="The Art of Thai Cuisine"> <br> ';
    details56 +=  thaiClass.name +  '  </a></div>  ';
var elClass56 = document.getElementById('Class56');
elClass56.innerHTML = details56;

var details57 = ' <div data-name="' + brazilClass.name + '" data-flag="' + brazilClass.flags;
     details57 += '"> <a href="brazil.html"><img src="images/brazil.jpg" class="image" alt="The Best of Brazil"> <br> ';
    details57 +=  brazilClass.name +  '  </a></div>  ';
var elClass57 = document.getElementById('Class57');
elClass57.innerHTML = details57;

var details58 = ' <div data-name="' + grillClass.name + '" data-flag="' + grillClass.flags;
     details58 += '"> <a href="grill.html"><img src="images/grillchkn.jpg" class="image" alt="The Thrill of the Grill"> <br> ';
    details58 +=  grillClass.name +  '  </a></div>  ';
var elClass58 = document.getElementById('Class58');
elClass58.innerHTML = details58;

var details59 = ' <div data-name="' + tomatoClass.name + '" data-flag="' + tomatoClass.flags;
     details59 += '"> <a href="tomato.html"><img src="images/tomato.jpg" class="image" alt="Tomaticus Galoricus"> <br> ';
    details59 +=  tomatoClass.name +  '  </a></div>  ';
var elClass59 = document.getElementById('Class59');
elClass59.innerHTML = details59;

var details60 = ' <div data-name="' + sushiClass.name + '" data-flag="' + sushiClass.flags;
     details60 += '"> <a href="sushi.html"><img src="images/sushi.jpg" class="image" alt="Vegetarian Sushi Rolls Made Easy"> <br> ';
    details60 +=  sushiClass.name +  '  </a></div>  ';
var elClass60 = document.getElementById('Class60');
elClass60.innerHTML = details60;

var details61 = ' <div data-name="' + wttClass.name + '" data-flag="' + wttClass.flags;
     details61 += '"> <a href="wtt.html"><img src="images/wtt.jpg" class="image" alt="Walk, Talk and Taste"> <br> ';
    details61 +=  wttClass.name +  '  </a></div>  ';
var elClass61 = document.getElementById('Class61');
elClass61.innerHTML = details61;

var details62 = ' <div data-name="' + bugsClass.name + '" data-flag="' + bugsClass.flags;
     details62 += '"> <a href="bugs.html"><img src="images/bugs.jpg" class="image" alt="We Love Bugs!"> <br> ';
    details62 +=  bugsClass.name +  '  </a></div>  ';
var elClass62 = document.getElementById('Class62');
elClass62.innerHTML = details62;

