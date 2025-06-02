// Creating class content for class gallery - Deena
function Class(name, description, instructor, price, seats, booked, flags, location) {
  this.name = name;
  this.description = description;
  this.instructor = instructor;
  this.price = price;
  this.seats = seats;
  this.booked = booked;
  this.flags = flags;
  this.location = location
  this.checkAvailability = function() {
    return this.seats - this.booked;
  };
}

// Create Class objects - Deena

var twodayClass = new Class('2-Day Mystery Basket  Challenge', ‘For ages 10 to 12; kids only. This two-part class is for experienced young cooks who want to take their cooking to the next level. On day one, we’ll cover culinary techniques such as knife skills, tasting adjustments and presentation as we prepare Chicken Noodle Soup; Corn Muffins; Spring Salad with Lemon Dressing; and Strawberry- Rhubarb Tartlets. On day two, each team will be given a basket of 3 to 4 "mystery ingredients," along with other basic ingredients, and develop recipes together. Emphasis will be on a friendly competition, teamwork, taste, presentation and fun! With poultry, dairy and eggs.’, ‘Tamara Guyton’,’90’,16,3,’Kids, Ages 10-12, Poultry, Dairy, Eggs’,’IS’);

var thirtyminClass = new Class('30-minute Cooking for Two', ‘Love to cook but only need to feed one or two people? Want some inspiration for quick dinner meals that are nutritionally balanced and don’t break the bank? In this class, you’ll discover three appealing 30-minute meals: Spanish Seafood Stew with White Fish, Chorizo and Bulgur; Asparagus Pesto Pasta with Chicken and Spring Greens; and Sesame Tofu and Pickled Soba Slaw. We’ll also discuss how to build a pantry of cooking staples and time-saving meal prep tips to keep your kitchen and your cooking organized and efficient. With meat, seafood, dairy and eggs.’, ‘Raquel DeHoyos’,’50’,16,3,’Adults,April,Meat,Seafood,Dairy,Eggs’,’GV’);

var salmonClass = new Class('A Celebration of the Mighty Salmon', ‘Salmon is the king of our regional cuisine and Chef Lynne will take it on parade in full regalia with some impressive dishes paired with regional wines. You’ll quickly gain a loyalty to Homemade Gravlax with Warm Fingerling Potato, Arugula and Caper Salad; Seared Cherry Tomato, Fennel and Olive Oil Gazpacho with Pecorino Puff Pastry Breadsticks; Grilled Lime-Chile-Pumpkin Seed-crusted Salmon with Crabmeat Remoulade; and Strawberry Shortcake with Brown Sugar Scones and Lavender-Grand Marnier Whipped Cream. With seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED.’, ‘Lynne Vea’,’55’,16,3,’Seafood,Dairy,Eggs,Adults,Age 21+,May’,’GA’);

var agingClass = new Class('Aging Gracefully', ‘Is 60 really the new 50? Does the body’s need for specific vitamins and minerals change with age?  As longevity increases, we all want to remain strong and healthy. Marilyn will offer samples and discuss food choices  to support heart, brain, energy and muscle function as we age.’, ‘Marilyn Walls, M.S.’,’10’,16,3,’Lecture,April’,’ED’);

var pieClass = new Class('All About Pie', ‘Take the challenge out of pie crust with a little knowledge, a few handling instructions and quality ingredients. Discover the key to making a tender, flaky and flavorful butter pie crust in this informative hands-on class. Each student will choose to make a 6-inch Sour Cherry and Almond Pie or a Rhubarb Strawberry Pie to bake and take home. We’ll also taste pie in class and Chef Laurie will demonstrate how to make a galette and how to create a lattice crust. We’ll discuss blind baking, flour types and brands and fruit varieties and troubleshoot all of your pie problems. For every season, pie is the answer. Vegetarian with dairy; no eggs.’, ‘Laurie Pfalzer’,’55’,16,3,’Baking, Adults,June,Vegetarian, Dairy’,’IS’);

var antiClass = new Class('Anti-Inflammatory Eating Made Easy', ‘Chronic inflammation can leave you feeling  fatigued, achy and out of balance. The good news is there are a number of appealing, nutritious foods that shut down inflammation and protect against diseases and unhealthy aging. Michelle, a dietitian and author of “Anti-Inflammatory Eating Made Easy,” will discuss how an anti-inflammatory diet can help ease joint pain, improve digestion, increase energy and much more. Sample Calm and Cool Basil Avocado Soup; Roasted Asparagus and Carrots with Lemony Tahini Drizzle; and Salmon and Kale in Creamy Coconut Sauce. With seafood; no dairy or eggs.’, ‘Michelle Babb, M.S., R.D.’,’50’,16,3,’Adults,Seafood,April’,’IS’);

var enchiladasClass = new Class('Anytime Enchiladas', ‘For ages 7 to 9. Impress your family when you make enchiladas for dinner! In this class, you and your small group will prepare Chicken Enchiladas, starting with the sauce all the way to sliding the finished dish into the oven. Learn to take advantage of your kitchen pantry with Easy Cheesy Vegetarian Enchiladas and round out your meal with Roasted Tomato-Jalapeño Salsa; and refreshing Carrot-Jicama Slaw. Meat optional; with dairy; no eggs. Price includes one child and one adult.’, ‘Lisa Crawford’,’50’,16,3,’Meat, Dairy, Kids, Ages 7 to 9, April’,’RD’);

var atwClass = new Class('Around the World in Five Days: Gluten-free Kids’ Cooking Camp', ‘For ages 8 to 15. Future chefs explore the cuisines of many lands in fun hands-on classes, while learning cooking techniques, kitchen safety and delicious recipes using familiar and healthy ingredients. With entrees, side dishes and desserts, each day features a complete meal from different parts of the globe: India, Brazil, Italy, Syria and China. Menus are similar to traditional camp, but with adjustments to accommodate gluten-free campers. Vegetarian with meat options, dairy and eggs; no gluten. Recipes are gluten-free, but PCC classrooms are not gluten-free facilities.’, ‘PCC Cooks Staff’,’185’,16,3,’Vegetarian,meat, dairy, eggs, gluten-free, Kids, ages 8-15’,’’);

var atwClass = new Class('Around the World in Five Days: Kids’ Cooking Camp', ‘Future chefs explore the cuisines of many lands in fun hands-on classes while learning cooking techniques, kitchen safety and delicious recipes using familiar and healthy ingredients. With entrees, side dishes and desserts, each day features a complete meal from different parts of the globe: India, Brazil, Italy, Syria and China. Among the dishes we’ll enjoy  preparing (and eating!) are Indian Mango Lassi; Brazilian Cheese Puffs; Chinese Chop Chop Salad; Syrian Falafels; and Italian  Lemon Tarts. Vegetarian with meat options; dairy and eggs.’, ‘PCC Cooks Staff’,’185’,16,3,’Vegetarian,meat, dairy, eggs, kids, ages 8-15’,’’);

var breadClass = new Class('Artisan Breads:  Ciabatta and Pizza', ‘Ciabatta and pizza are go-to hearth breads when baking at home. Chef Laurie will show you that it’s easy to get an artisan bakery result in your own oven with a little knowledge and some simple techniques. Using the same dough, you will make traditional Italian bread with substantial crusts that has full flavors due to slow fermentation and the starter that is made the day before. You will see and handle the Ciabatta bread in all stages from starter to freshly baked and you’ll make your own  Ciabatta Pizza from the Ciabatta dough to enjoy in class. Come with your questions! You will leave class with dough to finish baking at home and lots of information to help you to start making artisan bread at home. Vegetarian with meat and dairy optional; no eggs.’, ‘Laurie Pfalzer’,’50’,16,3,’Vegetarian,Meat,Dairy,April’,’GV’);

var basqueClass = new Class('Basque Country Cooking', ‘Nestled between the Pyrenees Mountains and the Atlantic Ocean, the Basque region features some of the finest food in Spain. With French and Spanish influences, the cuisine makes the best of the ocean and mountains with fresh fish, vibrant vegetables and spiced sausages. Join Chef Erin to make a variety of classic and contemporary Basque dishes including: Chorizos a la Sidra (Chorizo in Cider); Piperrada (Basque Eggs with Mixed Vegetables); Puerros a la Vinagreta (Leeks with Vinaigrette); Merluza en Salsa Verde (Mixed Seafood in Parsley and Wine Sauce); and Helado de Queso Fresco con Salsa de Frutos Rojos (Cream Cheese Ice Cream with Red Berry Sauce). With meat, seafood, dairy and eggs; no gluten.’, ‘Erin Coopey’,’55’,16,3,’meat, seafood, dairy, eggs, gluten-free, adults, April’,’GA’);

var batterClass = new Class('Batter’s Up! Pancakes and Crepes', ‘For ages 7 to 9. Discover how easy it is to make a batch of pancake batter from scratch. We’ll use a thick batter on a griddle to make old-fashioned buttermilk pancakes with oat flour and a higher protein variation using whole-wheat flour and ricotta cheese. Then we’ll get out our crêpe pans and make a thin batter to make French Crêpes. We’ll serve them with homemade Whipped Honey Butter and Naturally Sweet Berry Sauce. Vegetarian with dairy and eggs. Price includes one child and one adult.’, ‘Gill Dey’,’50’,16,3,’kids, ages 7-9, vegetarian, dairy, eggs, April’,’GA’);

var cheeseClass = new Class('Cheesemaking Workshop', ‘Chef, dairymaid and cheesemaker Jackie Freeman will be your guide for a fast-paced evening of hands-on cheesemaking. In a small group setting, we’ll work together to create Buttermilk Cheese, Queso Blanco, Ricotta and Fresh Mozzarella. Jackie will discuss the basic principles of cheesemaking, including equipment use and care, ingredients and supplies. We will taste our work in class and discuss more recipes to try at home. Vegetarian with dairy; no eggs or gluten.’, ‘Jackie Freeman’,’50’,16,3,’adults, vegetarian, dairy, gluten-free, egg-free, April’,’CC’);

var chickenClass = new Class('Chicken 101', ‘Get some go-to meals lined up with easy  weeknight chicken dishes. In class you will  learn techniques for selecting, storing, breaking down and preparing the world’s favorite white meat. Together, you’ll prepare Chicken Thighs Braised in White Wine with Fingerling Potatoes and Tarragon; Spatchcock Chicken with Radishes, Leeks and Carrots; and Chicken, Pea and  Mushroom Risotto. You’ll also sample Lesa’s Simplest Roast Chicken Stock. With poultry  and dairy; no eggs.’, ‘Lesa Sullivan’,’55’,16,3,’adults, poultry, dairy, egg-free, May’,’IS’);

var cldrollsClass = new Class('Chinese Lazy  Dragon Rolls', ‘For ages 12 and up; teens only. “Lazy Dragon” stuffed rolled buns, also known as “Meat Dragon,” are large steamed Chinese rolls filled with meat and are a popular local snack in Beijing. They are especially sought after in springtime because Chinese people believe eating these rolls will help to get rid of laziness and give people energy and a good start for a new year. We will learn how to prepare the dough and make “Meat Dragons” with pork filling. Christina will also demo a “Veggie Dragon” with baked tofu and carrot filling. Then we will enjoy our creations with Soy Vinegar Dipping Sauce. With meat; no dairy or eggs.’, ‘Christina Chung’,’45’,16,3,’kids, ages 12+,meat, daiy-free, egg-free, April’,’IS’);

var noodlesClass = new Class('Classic Chinese Noodles', ‘Every region in China has its own style of making noodles and preparing noodle dishes. Christina will teach you how to make two classic noodle dishes from different regions. First we’ll prepare the dough to make Buckwheat “Fire Cracker” Noodles and Millet Ge Da Noodles. Then we’ll  use our freshly made noodles in two dishes:  Xinjiang-style Hot and Sour “Fire Cracker”  Noodle Soup and Old Beijing-style Stir-fried  Ge Da Noodles with Five-Spice Soy Miso Sauce; with ingredients such as baked tofu, edamame, mushrooms and vegetables. Vegetarian; no dairy or eggs.’, ‘Christina Chung’,’50’,16,3,’vegetarian, adults, May’,’ED’);

var frenchClass = new Class('Classic French Cooking', ‘Chef Michael will guide you through some of the time-honored methods of French cuisine, inspiring confidence with techniques that are often misunderstood as too complicated or time-consuming. The results will be magnifique as we prepare some French all-stars: Aparagus Salad with Hard-boiled Egg and Caper Vinaigrette; Salmon en Papillote with Morel Mushrooms and  Sauce Beurre Blanc; and Apple Tarte Tatin (an upside-down pastry) with Cinnamon Ice Cream. With seafood, dairy and eggs.’, ‘Michael Diem’,’55’,16,3,’April, adults,seafood,dairy,eggs’,’ED’);

var klatchClass = new Class('Coffee Klatch', ‘Spend an evening with Chef Becky over coffee-inspired dishes that are a real conversation piece. Perk up to some slightly addictive main dishes like Coffee and Chocolate-braised Short Ribs with Polenta; and Coffee and Spice-coated Salmon Tacos with Charred Cabbage, Tropical Fruit Salsa and Avocado Cream. Your heart will beat a little faster when you take a sweet bite of Caramel and Coffee Truffles; and Seattle-style Espresso Tiramisu. With meat, seafood, dairy and eggs.’, ‘Becky Selengut’,’50’,16,3,’April, adults,meat,seafood,dairy,eggs’,’IS’);

var cwrClass = new Class('Cooking Without Recipes', ‘This class is for home cooks who are truly ready to set aside their cookbooks and step outside the box to explore cooking spontaneously and seasonally. Darin will provide a lecture and handouts on the basics of building flavor and pairing ingredients, then the class will work as a whole to pair fresh produce from the aisles with chicken thighs, salmon  and pork loin. A full pantry of ingredients  will be provided. Take the leap! With meat, seafood, dairy and eggs.’, ‘Darin Gagner’,’55’,16,3,’June, adults,meat,seafood,dairy,eggs’,’GV’);

var spsoupClass = new Class('Easy Soups for Springtime', ‘Danielle loves to create easy-to-follow recipes using each season’s best produce and inspire her students to recreate whole-foods-based seasonal dishes at home. Soups that can be added into your weekly menu plan are a great start!  Join her for this fun and informative hands-on class to create a sampling of soups, including Curried Carrot and Ginger Soup with Cilantro Oil; Hearty Vegetable Minestrone with Fava Beans; Creamy Spring Garlic and Red Potato Soup; and Miso Soup in a rich Mushroom Stock. Vegetarian; no dairy, eggs or gluten.’, ‘Danielle Premo’,’50’,16,3,’April, adults,vegetarian, dairy-free,egg-free,gluten-free’,’WS’);

var veganClass = new Class('Elegant Vegan Dining', ‘Ready to eat healthy this spring? Join Chef Lesa in the kitchen for another collection of vegan recipes based around seasonal produce. These dishes are great for sides and snacks and become an entrée in a snap. Together, you will prepare and enjoy Pea Pancakes with Cashew Crème and Mint Pesto; Eggless Asparagus Quiche; Grilled Fava Mash with Walnut Oil; and Steamed Artichokes with Potato Garlic Dipping Sauce. Vegetarian; no dairy or eggs.’, ‘Lesa Sullivan’,’50’,16,3,’April, adults, vegetarian, vegan, dairy-free, egg-free’,’GA’);

var fermClass = new Class('Fermented and Cultured Foods', ‘For centuries, fermentation has been used around the world as a health-promoting method for preserving foods. Today, fermented and cultured foods are recognized as enzyme-rich, probiotic super-foods that can aid digestion and detoxification, boost immunity, curb cravings and enhance the nutritional profile of dishes. Birgitte will guide you through the process of making Kombucha; Traditional Beet Kvass; Sourdough Starter; and Sourdough Pancakes with Cultured Fruit Sauce. You’ll also learn the basics of making homemade Sauerkraut and take home your own jar. Vegetarian with optional dairy (whey); no eggs or gluten.’, ‘Birgitte Antonsen’,’55’,16,3,’April,adults,vegetarian, dairy, egg-free,gluten-free’,’IS’);

var heartClass = new Class('Food as Medicine:  Heart Health', ‘Tanmeet is an Integrative Family Physician with a passion for using food as medicine. We’ll get the perfect pairing as Chef Becky combines  her amazing cooking skills with Dr. Sethi’s knowledge. With samplings of wine and green tea, we’ll hear in depth about heart healthy ingredients as Becky does her handiwork to transform them into delicious dishes like Massaged Kale Salad with Brown Rice, Red Cabbage and Avocado; Roasted Salmon with White Beans, Radicchio, Salsa Verde and Toasted Almonds; Chocolate Terrine with Hibiscus, Genmaicha and Salted Hazelnut Powders; and Blueberry and Basil Sorbet. With seafood and dairy; no eggs.’, ‘Becky Selengut and  Tanmeet Sethi, M.D.’,’55’,16,3,’April, adults, seafood,dairy,egg-free’,’GV’);

var fondueClass = new Class('Fun with Fondue', ‘For ages 7 to 12. In this gluten-free class, we’ll make a Gruyère and Swiss Cheese Fondue and a Dairy-free “Cheese” Fondue. We’ll practice our knife skills as we cut up bread, Granny Smith apples, carrots and cherry tomatoes to dip in the cheesy fondue sauces.  For dessert, we’ll make a mouth-watering Chocolate Sauce in which to dip tiny Cookie Dough Balls (egg-free!), cut strawberries and bananas. Vegetarian with optional dairy; no eggs or gluten.   Price includes one child and one adult.’, ‘Heather Dickinson’,’50’,16,3,’April,kids, ages 7-12, child+adult, vegetarian, dairy, egg-free, gluten-free’,’GV’);

var gfwttClass = new Class('Gluten-free  Walk, Talk and Taste', ‘Designed especially for shoppers interested in exploring the many gluten-free options available at PCC.’, ‘’,’0’,16,3,’April, adults’,’IS’);

var gfbakingClass = new Class('Gluten-free Baking: SWEET Treats', ‘Usher in spring with scrumptious Carrot Cake Cupcakes with Cream Cheese Frosting and Tangy Lemon Bars — all gluten-free! You’ll learn tips for preparing gluten-free cake batter for the cupcakes and lemon-curd and gluten-free shortbread for the lemon bars. These satisfying treats taste like the real deal; no one will ever guess they are gluten-free! Vegetarian with dairy and eggs; no gluten.’, ‘Shelley Baumgarten’,’50’,16,3,’May,vegetarian,dairy, eggs, gluten-free’,’CC’);

var budgetClass = new Class('Healthy Eating —  Budget Friendly', ‘Time and money are both valuable resources, and sometimes we can find ourselves tight on one or the other or both. Learn how to create quick and easy meals that are delicious, nutritious and cost effective. You’ll get techniques for meal planning, tips on how to "dress-up" leftovers and recipe substitutions to help stretch your food dollar, as well as tips on how to maximize the nutrition you get from your food purchases. You’ll love Berry Banana Smoothie; Carrot Cabbage Slaw with Marinated Tofu and Lemon-Tahini Dressing; and Lentil Cakes with Garlic-Feta Sauce. Vegetarian with dairy and eggs.’, ‘Virginia Newman,  M.S.N.’,’45’,16,3,’May, adults,vegetarian, dairy, eggs’,’GV’);

var sardiniaClass = new Class('Holiday in Sardinia', ‘Paola spent part of last summer on Carloforte, a tiny tuna-fishing island in Sardegna, and it was love at first bite. She’ll introduce you to a sample of Sardinian cuisine as you help prepare Torta di Zucchine (Zucchini Frittata with Lemon Zest) as an appetizer. You will then make Malloreddus alla Campidanese (Handmade Semolina Pasta seasoned with Tomato Sauce and Tuna, as they serve it in Carloforte), and sweet little Pardulas (Sun-shaped Ricotta Pies). With seafood, dairy and eggs.’, ‘Paola Albanesi’,’50’,16,3,’April, adults, seafood,dairy,eggs’,’RD’);

var cakeClass = new Class('How to Bake a Cake 101', ‘Learn to make three types of cake in this  class devoted to cake mixing and baking. Pastry Chef Laurie Pfalzer takes you back to the  beginning, showing you how to mix and bake Lemon Pound Cake; Vanilla Genoise (sponge cake); and Devil’s Food Cake. Not all cakes are created equal; you will see that each of these cakes gets a different treatment to give you the best results ever with optimal height, crumb and moisture. You will bake cupcakes, small loaves and 8-inch rounds to take home to  enjoy. Vegetarian with dairy and eggs.’, ‘Laurie Pfalzer’,’50’,16,3,’May, adults, vegetarian, dairy,eggs’,’IS’);

var seasonClass = new Class('IN SEASON', ‘Feel confident preparing an impressive seasonal menu for your friends and loved ones with some savvy tips and creative ideas from Danielle. She will take you through some of her favorite spring recipes that will become your favorites, too! You’ll help prepare Kale Caesar Salad with Chickpea Croutons; Cashew and Spinach-stuffed Portobello Mushrooms with Sweet Balsamic Drizzle; Seared Ahi with Carrot Ginger Chutney; and a Strawberry Rhubarb Oat and Pecan Crumble. With seafood; no dairy, eggs or gluten.’, ‘Danielle Premo’,’50’,16,3,’May,adults, seafood, dairy-free,egg-free,gluten-free’,’IS’);

var indianClass = new Class('Indian Cuisine —  Under Pressure!', ‘Indians use pressure cookers routinely in their cooking, especially to cook dried, whole lentils and beans and vegetables like potatoes, cauliflower and carrots. A pressure cooker cuts cooking time and energy use significantly for the home cook. Archana will showcase several easy Indian recipes (that can be made with or without a pressure cooker), including Mung Bean Lentil Soup with Greens and Roasted  Cumin; Vegetable Biryani (Spice-infused Rice with Peas and Carrots); and Aloo Gobhi  (Potato and Cauliflower with Coriander and Cumin). Vegetarian; no dairy or eggs.’, ‘Archana Verma’,’45’,16,3,’April, adults,vegetarian, dairy-free,egg-free’,’CC’);

var chemClass = new Class('Kitchen Chemistry', ‘For ages 10 to 12; kids only. What's the "pound" in pound cake? How do eggs make baked goods rise? What's the magical ingredient that makes some cookies soft and others crisp? We continue our culinary investigations with a batch of all new sweet and savory recipes. After whipping up heavenly French cheese puffs known as Gougères and Mini Vanilla Bean Pound Cakes, we'll taste the results of two variations on the same Oatmeal Cookie recipe, baked with one key difference. Vegetarian with dairy and eggs.’, ‘Cam Zarcone’,’45’,16,3,’April,kids, ages 10-12,vegetarian, dairy, eggs’,’RD’);

var knifeClass = new Class('Knife Skills', ‘Practice knife-handling and learn how to cut safely and efficiently in this skill-building workshop with Chef Seppo. For the most useful practice, bring your own familiar chef knife (or use ours if you don’t have one). He’ll review knife selection, introduce honing and sharpening and teach you several different knife techniques. You’ll sharpen your skills while preparing  ingredients for Lemon Cilantro Chicken Soup and Lemon Cilantro Vegetable Soup, which Seppo will demonstrate in class. Vegetarian with optional poultry; no dairy or eggs. Adults only.’, ‘Seppo Farrey’,’50’,16,3,’April, adults,poultry, dairy-free, egg-free.’,’RD’);

var dumplingClass = new Class('LET’S ROLL: JIAO-ZI DUMPLINGS AND SPRING ROLLS', ‘KPLU food commentator and longtime restaurant critic Nancy Leson is an Asian food fanatic convinced that a pantry full of Asian condiments, canned goods, dried noodles and other staples is a sure way to travel without a passport. She’ll offer a world of advice and chat about Greater Seattle’s many Asian restaurants while you snack on Quick Japanese Pickles. Then get ready to roll! We’ll make handmade Pork and Shrimp Jiao-zi, including easy dumpling dough; and Vietnamese Fresh Spring Rolls. With meat and seafood; no dairy or eggs.’, ‘Nancy Leson’,’45’,16,3,’April, adults,meat,seafood,dairy-free,egg-free’,’ED’);

var panClass = new Class('Mastering the Pan — Sauté, Sear and Pan Roast', ‘A good pan is a fundamental kitchen tool, but knowing how to properly use it can be elusive, with useful instruction missing from most cookbooks. In this class, discover how to properly read the temperatures of oils and fats, avoid overcrowding the pan, and understand when to add food to keep it from sticking. Darin will demonstrate how to properly sear, sauté and pan roast like a restaurant chef, so you can approach your favorite recipes with confidence. Together, we’ll prepare Crispy-skinned Chicken Thighs with Braised Leeks and Mustard; Dry-brined Pork Chops with Sweet and Sour Cherry and Soy Glaze with Garlicky Bok Choy; and Butter-basted Peppercorn Strip Steak with Asparagus and Pine Nuts. With meat, dairy and eggs.’, ‘Darin Gagner’,’55’,16,3,’April, adults,meat,dairy,eggs’,’GV’);

var medClass = new Class('Mediterranean Medley', ‘Sureyya specializes in fast, easy and gloriously delicious vegan dishes. It’s easy to love plant-based eating when you are enjoying these dishes from throughout the Mediterranean region: Turkish Spinach Hummus; Algerian Braised Beans and Lentil Soup with Harissa; Turkish Vegetable Hot Pot; Roasted Beet Salad with Rice and Dill; and Spicy Spanish Mojette (Roasted Vegetable Scoops). Vegetarian; no dairy or eggs.’, ‘Sureyya Gokeri’,’45’,16,3,’April, adults,vegetarian, dairy-free,egg-free’,’CC’);

var piemonteseClass = new Class('Menu Piemontese', ‘Among Italy’s many cuisines and wine cultures, Piedmont offers an especially expressive and elegant range of flavors. Join us for a selection of extraordinary wines, chosen to complement our special menu: Bagna Cauda (Warm Parsley, Garlic and Anchovy Dipping Sauce accompanied by a Variety of Colorful Spring Vegetables and Ciabatta Bread);  Tagliolini con Tartufi (Ribbon Pasta with Artichokes and Pea Pods in White Truffle Sauce); Bollito Misto (a Melange of Chicken and Sausages cooked in a Seasoned Broth and served with a Classic Piemontese Green Sauce); and Zabaglione (a frothy Liqueur- infused Flan served with Fresh Strawberries). With meat, seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED’, ‘Lynne Vea, Jeff Cox,  John White and Leif Olson’,’65’,16,3,’June,adults, seafood, age 21+, meat, dairy,eggs’,’WS’);

var mexClass = new Class('Mexican Fiesta', ‘For ages 4 to 6. Your child will love tasting and smelling the flavors of Mexico. We’ll pick fresh cilantro, dice avocados, sauté onions, and mix cinnamon and chocolate to create a tasty menu of Tortilla Soup; Roasted Sweet Potato Quesadillas; and Mexican Cookies — Olé! Vegetarian with dairy and eggs. Price includes one child and one adult.’, ‘Kelly Lake’,’45’,16,3,’April, kids, child+adult, vegetarian, dairy, eggs, ages 4-6’,’CC’);

var bagelsClass = new Class('New York-Style Bagels', ‘Surprise and delight your family and friends with authentic New York-style bagels crafted by your very own hands. We’ll prepare dough, shape, boil and then bake five different flavors: Plain, Poppy Seed, Sesame Seed, Onion and Everything Bagels. You will also create some complementary cream cheese spreads —  Garlic and Herb; Vegetable; and Honey Walnut — to accompany your bagels. Vegetarian with eggs and optional dairy.’, ‘Shelley Baumgarten’,’50’,16,3,’April, adults,vegetarian, dairy, eggs’,’IS’);

var nwcelClass = new Class('Northwest Spring  Celebration', ‘If there’s anything in the world better than spring in Cascadia, it’s spring dining featuring the bounty of Northwest farms, ranches, waters and vineyards. Savor the season with wines from some of our favorite wineries, paired with a menu full of amazing local flavors: Wild Alaskan Spot Prawn Bisque with Strawberry-Peppercorn Splash; Warm Salad of Asparagus and Prosciutto with Roasted Morels and Local Goat Cheese; Whole  Spice-seared Lamb Medallions with Hazelnuts and Sour Cherry-Syrah Coulis; and Honey- Rhubarb Upside-Down Torte. With meat,  seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED’, ‘Lynne Vea, Mary Kirman, Seri Sedlacek and Stephen Johnson’,’65’,16,3,’April, adults, meat, seafood, dairy, eggs, age 21+’,’RD’);

var pulseClass = new Class('ON THE PULSE', ‘Pulses, including lentils, peas and chickpeas, have been part of the world’s cuisine for centuries, but the ancients who first cultivated these soil-enriching crops wouldn’t have guessed they were growing the world’s first superfood. Packed with protein, fiber and a host of vitamins and minerals, pulses are healthy for you and the planet. Work with Chef Erin for some diverse and delicious recipes including Red Lentil and Herb Dip; Pea and Pesto Soup; Chickpea Pizza with Pistachio Pesto; Roasted Cauliflower and Lentil Tacos; and Chickpea Flour Gingersnap Cookies. Vegetarian with dairy and eggs; no gluten.’, ‘Erin Coopey’,’50’,16,3,’June,adults,vegetarian,dairy,eggs, gluten-free’,’IS’);

var pastaClass = new Class('Pasta Workshop', ‘Iole has been sharing her love of creating handmade pasta with eager PCC students for two decades now. In this lively workshop, Iole will show you how to create fresh pasta, a staple of Italian home-cooked meals. With a batch of pasta dough, expert guidance and a little  practice, you’ll become skilled at making Bowtie Pasta with Sugar Plum Tomatoes, Mozzarella and Arugula; Tagliolini with Pesto; and  Fettuccine al Burro e Parmigiano. Iole will also demonstrate how to make ravioli and  tortellini. Vegetarian with dairy and eggs.’, ‘Iole Aguero’,’55’,16,3,’April, adults,vegetarian, dairy, eggs’,’GA’);

var pizzaClass = new Class('Pizza, Pizza', ‘For ages 4 to 6. What’s not to love about pizza? Iole will show you how to make quick, delicious homemade pizza with just a few  ingredients. Kids will enjoy rolling out the dough and adding the toppings for their very own pizza. We’ll also make Chocolate Coconut Cookies and transform them into irresistible Ice Cream Sandwiches. Vegetarian with dairy and eggs. Price includes one child and one adult.’, ‘Iole Aguero’,’45’,16,3,’April,kids,ages 4-6,child+adult,’,’IS’);

var probioticsClass = new Class('Probiotics 101', ‘Every day we learn more about the many health benefits attributed to probiotics — tiny bacteria with long names like bifidobacteria bifidum. Nick will explain the basics of the foods that contain them — from sauerkraut to kombucha — why you need them and how to select the best  probiotic foods and supplements.’, ‘Nick Rose, M.S.’,’10’,16,3,’May, adults, lecture’,’CC’);

var saucesClass = new Class('Quick and Easy  Italian Pasta Sauces', ‘Using a few well-chosen ingredients, quick cooking techniques, a pinch of perfect seasoning and a dash of love, Iole will show you how you can make dishes that will please the whole family any time that you crave pasta. You'll marvel at the simple prep for complex flavors in dishes such as Pasta with Tuna, Olives and Lemon; Pasta with Eggplant, Sugar Plum Tomatoes and Fresh Mozzarella; Pasta with Broccoli Pesto; and Pasta with Pistachio Pesto. With seafood, dairy and eggs.’, ‘Iole Aguero’,’45’,16,3,’June, adults,seafood, dairy, eggs’,’’);

var mealsClass = new Class('Quick and Ridiculously Delicious Weeknight Meals', ‘You’ve had a busy day, but dinner won’t put itself on the table. Chef Erin to the rescue! There’s no better way to make sure you eat a home-cooked meal after a long day at work than to have a plan. You’ll get four nights’ worth of dependable weeknight meal ideas from Chef Erin as you help prepare Skillet Lasagna; Shrimp Veracruz; Red Lentil Curry; and Pan-roasted Chicken with Honeyed Carrots and Pistachios. With meat, seafood, dairy and eggs.’, ‘Erin Coopey’,’55’,16,3,’May,adults, meat, seafood, dairy,eggs’,’GA’);

var theoClass = new Class('Recipes from  Theo Chocolate', ‘Theo Chocolate, the first Organic and Fair Trade certified bean-to-bar chocolate factory in North America, is dedicated to making the world a better place and is finding ways to do so through their passion, bringing out the best in cocoa beans. Get a unique look into the world of chocolate making as Theo Chocolatier Katy Radtke demonstrates the technique for making perfect table-tempered chocolate and reveals the art of properly cooking sugar for all types of uses. Katy will create two amazing recipes from the Theo Chocolate cookbook that are truly a treat to make: Vanilla Salted Caramels; and Fig, Fennel and Almond Dacquoise with Dark Chocolate Cream. Sample treats during the class and take a few home for later as well. Vegetarian with dairy and eggs.’, ‘Katy Radtke, Theo Chocolatier’,’60’,16,3,’April,adults,vegetarian, dairy, egg-free,gluten-free’,’GV’);

var rawClass = new Class('Refreshing Raw Foods', ‘As we transition to warmer weather, reap the benefits of incorporating more raw foods into your diet. Fresh, high-energy foods can help clear out toxins and unwanted winter weight.  Nutritionist Ami Karnosh will discuss some of the advantages of raw foods as she demonstrates Savory Spring Salad Rolls with Creamy Almond Dipping Sauce; Curried Sweet Potato Salad with Walnuts and Parsley; Phad Thai with Fresh Vegetable Ribbons, Herbs and Soy Ginger Sauce; and No-bake Banana Cocoa Nib Blondies. Vegetarian; no eggs or dairy.’, ‘Ami Karnosh, M.S., C.N.’,’45’,16,3,’May, adults,vegetarian,dairy-free,egg-free’,’CC’);

var sauces2Class = new Class('Sauces — Classic and  Contemporary', ‘Chef Darin will take you through the world of contemporary and classic sauces so you can approach any main dish with confidence. Classic reduction and emulsion sauces will be covered, along with vegetable-based relishes, pestos and purees. Ratios will be provided along with the recipes to further open a world of spontaneity and exploration. We will make a simple Dry-brined Chicken; Vegetables; and Sirloin Roast, then make the following sauces to top them: Red Wine Demi-glace; Chermoula; Almond and Olive Relish; Arugula Pesto; Sherry Vinaigrette; Nuoc Cham; and Rouille. With meat, seafood (fish sauce), dairy and eggs.’, ‘Darin Gagner’,’55’,16,3,’May,adults,meat, seafood, dairy, eggs’,’IS’);

var detoxClass = new Class('Spring Detox', ‘Supporting your body’s own detoxification  system is important for overall health and  vitality. Using food as medicine, registered  dietitian and nutritionist Kory DeAngelo will explain how to support and optimize your body’s own internal spring cleaning processes and present recipes to lighten up your diet. You’ll welcome healthful foods like Creamy Beet Soup; Quinoa and White Bean Salad; Crunchy Cabbage Slaw; and Milk Thistle Tea. Vegetarian; no dairy or eggs.’, ‘Kory DeAngelo, M.S.,  R.D.N., C.D.’,’45’,16,3,’April,adults,Vegetarian,ddairy-free,egg-free’,’IS’);

var greensClass = new Class('Spring Greens', ‘Discover the bounty of spring with an array of seasonal greens, starting with a side-by-side greens tasting. Get tips for utilizing these nutrition powerhouses in your everyday dishes and for overcoming bitterness. Rachel will demonstrate a full menu highlighting these beautiful greens: Caldo Verde, a traditional Portuguese Greens Soup; Salmon with Wild Green Pesto; Colcannon (a versatile dish of mashed potatoes, leeks and sautéed greens); and Fennel, Celery and Apple Salad. Greens in every bite!  With meat, seafood, dairy; no eggs.’, ‘Rachel Duboff’,’50’,16,3,’April, adults,meat, seafood, dairy,egg-free’,’ED’);

var stirClass = new Class('Stir It Up', ‘For ages 2 to 3. Even little ones can have fun in the kitchen, measuring, mixing and stirring to make treats for themselves. They will make their very own customized Great Granola with lots of ingredient choices; Power Muffins; and Fruity Ambrosia Salad. Vegetarian, with eggs and optional dairy. Price includes one child and one adult.’, ‘Ami Karnosh  and Annie Wilson’,’45’,16,3,’April, kids, ages 2-3, child+adult, vegetarian, eggs, dairy’,’GA’);

var shortClass = new Class('Strawberry Shortcake', ‘For ages 4 to 6. What is a cookbook? How do you measure ingredients? These are essential skills that help us create magic in the kitchen. Learn about kitchen basics while we work in small groups to create scrumptious Strawberry Shortcake with Whipped Cream. Vegetarian with dairy and eggs. Price includes one child and one adult.’, ‘Maria Galvao’,’45’,16,3,’April, kids, ages 4-6, child+adult, vegetarian, dairy, eggs.’,’RD’);

var tacoClass = new Class('Taco Night', ‘For ages 13 and up with one adult guest.  You can’t go wrong with a taco bar with lots of  customizable options. We’ll work together to create a fabulous taco party from scratch, including Homemade Flour Tortillas; Black Beans; Spanish Rice; Carne Asada; Shredded Cabbage, Avocados and Fresh Salsa. You’ll get some great tips for creating your own taco night for friends and family at home. With meat and vegetarian options and dairy; no eggs. Price includes one teen and one adult.’, ‘Yary Oslund’,’50’,16,3,’April, kids, ages 13+,child+adult, meat ,vegetarian, dairy, egg-free’,’CC’);

var tamaleClass = new Class('Tamales and Salsas', ‘You look forward to tamales from the farmers market or food truck; now learn how to make them at home yourself in this informative hands-on class. Devra will teach you an easy method for this festive, versatile dish, along with a tantalizing trio of homemade salsas to liven up your meal. We’ll make Tamales with two different fillings —Black Bean; and Roasted Vegetables with Queso Fresco — and top them with Pico de Gallo; Roasted Tomato Salsa; and Roasted Serrano  Hot Sauce. Vegetarian with dairy; no eggs.’, ‘Devra Gartenstein’,’50’,16,3,’April, adults,vegetarian, dairy, egg-free’,’WS’);

var thaiClass = new Class('The Art of Thai Cuisine', ‘Thai food is a snap for everyday cooking with Pranee’s simple techniques and an abundance of Thai ingredients and fresh herbs within easy reach. Learn how to balance sweet, sour, salty and spicy as Pranee demonstrates four tantalizing Thai dishes, including Laab Moo (Minced Pork Salad with Mint, Cilantro and Green Onion in Spicy Lime and Chili Dressing, served with Sticky Rice); Tom Kha Gai (Chicken in Thai  Ginger and Coconut-Lime Broth with Lemongrass and Lime Leaves); Phanang Goong (Zesty Phanang Curry Prawns with Shredded Lime Leaves); and Kao Neow Mamuang (Sticky Rice with Mango). With meat, poultry and seafood; no dairy or eggs.’, ‘Pranee Halvorsen’,’50’,16,3,’April, adults,meat, poultry,seafood,dairy-free,egg-free’,’GA’);

var brazilClass = new Class('THE BEST OF BRAZIL', ‘Get ready to dive into Brazilian food culture in honor of the 2016 Summer Olympics in Rio.  Brazil is a melting pot of colors, flavors and customs, and its cuisine is similarly varied.  Yary will demonstrate one of Brazil’s best-loved dishes, Feijoada (traditional meat stew) served with Sautéed Collard Greens and Rice; along with Virgin Caipirinha (a refreshing Citrus Ginger drink); Piri Piri Grilled Shrimp with Mango Sauce; and Pudim de Laranja (Brazilian Orange Flan). With meat, seafood, dairy and eggs.’, ‘Yary Oslund’,’50’,16,3,’April, adults, meat, seafood, dairy,eggs’,’GV’);

var grillClass = new Class('THE THRILL OF THE GRILL', ‘Participate in our regional spring optimism and be at the ready, spatula in hand, for the first sunny opportunities to start grilling. Lynne’s irresistible recipes will be paired with cider samplings: Sizzling Grilled Flatbread Pizza 101 with homemade olive oil dough, local cheeses and a variety of toppings; Nut-and-Seed-Crusted Filet of Halibut with two Zesty Sauces; Sticky Chicken with Korean Gochujang Barbecue Sauce; and Rhubarb Fool. With meat, seafood, dairy and eggs. AGE 21 AND OVER; PHOTO ID REQUIRED.’, ‘Lynne Vea’,’55’,16,3,’April, adults, ages 21+,meat, seafood, dairy, eggs’,’ED’);

var tomatoClass = new Class('Tomaticus Galoricus:', ‘Farmer Sarah Cassidy, the Tomato Whisperer, will reveal secrets to growing healthy, prolific and tasty tomatoes in our unpredictable Pacific Northwest climate. Select the perfect tomato for almost any location and get techniques on pruning, trellising and proper "dry farming" methods. You’ll work hands-on applying these lessons to your own baby tomato plant to take home. You’ll be on your way to growing amazing tomatoes, and lots of them, so we’ll also talk about ways to put up your bounty including Roasted Tomatoes.’, ‘Sarah Cassidy’,’45’,16,3,’May,adults,lecture’,’GV’);

var sushiClass = new Class('Vegetarian Sushi Rolls Made Easy', ‘Maki sushi is “rolled sushi” with narrow strips of different ingredients layered on a bed of vinegared rice and spread on a sheet of toasted nori (seaweed). Come learn the most effective technique for successful sushi and practice with expert help. A wide variety of colorful, refreshing ingredients will be used to make sushi rolls, from avocado to spinach to tofu, and you can get creative at home with more. Seppo will show you how to make perfect sushi rice, prepare beautiful rolls and serve your creations with elegance. Vegetarian; no dairy or eggs.’, ‘Seppo Farrey’,’50’,16,3,’May, adults,vegetarian,dairy-free,egg-free’,’WS’);

var wttClass = new Class('Walk, Talk and Taste', ‘This 90-minute free class and tour, led by a PCC Nutrition Educator, takes you through our aisles to discover the many choices in organic produce, sustainably raised products, bulk foods and much more. Taste many products you haven’t tried before and learn about how they are produced. Make connections between your food choices and health, the environment and the local and global community in a fun, informative free class.’, ‘Nick Rose, M.S. or  Marilyn Walls, M.S.’,’0’,16,3,’April, lecture, adults’,’IS’);

var bugsClass = new Class('We Love Bugs!', ‘For ages 2 to 3. Come apply your creativity to making edible bugs. We'll start with rolling out sugar cookie dough, then mold or cut and  decorate some cookie bugs. While our creations are baking, we'll apply our skills to veggie bugs.  Lots of ideas will be supplied, and you can  create your own bug sensations as well!  Vegetarian with dairy and eggs. Price includes one child and one adult.’, ‘Kim Trimmer’,’45’,16,3,’April,kids, ages 2-3, baking, child+adult, vegetarian, dairy, eggs’,’RD’);

var Class = new Class('', ‘’, ‘’,’’,16,3,’’,’’);


// Update the HTML for the page  - Deena

var details1 = ' </h4> ' + twodayClass.name +  '   ';
    details1+= twodayClass.checkAvailability()+  ' </h4>’;
var elClass1 = document.getElementById('Class1');
elClass1.innerHTML = details1;

var details2 = ' </h4> ' + thirtyminClass.name +  '   ';
    details2+= thirtyminClass.checkAvailability()+  ' </h4>’;
var elClass2 = document.getElementById('Class2');
elClass2.innerHTML = details2;

var details3 = ' </h4> ' + salmonClass.name +  '   ';
    details3+= salmonClass.checkAvailability()+  ' </h4>’;
var elClass3 = document.getElementById('Class3');
elClass3.innerHTML = details3;

var details4 = ' </h4> ' + agingClass.name +  '   ';
    details4+= agingClass.checkAvailability()+  ' </h4>’;
var elClass4 = document.getElementById('Class4');
elClass4.innerHTML = details4;

var details5 = ' </h4> ' + pieClass.name +  '   ';
    details5+= pieClass.checkAvailability()+  ' </h4>’;
var elClass5 = document.getElementById('Class5');
elClass5.innerHTML = details5;

var details6 = ' </h4> ' + antiClass.name +  '   ';
    details6+= antiClass.checkAvailability()+  ' </h4>’;
var elClass6 = document.getElementById('Class6');
elClass6.innerHTML = details6;

var details7 = ' </h4> ' + enchiladasClass.name +  '   ';
    details7+= enchiladasClass.checkAvailability()+  ' </h4>’;
var elClass7 = document.getElementById('Class7');
elClass7.innerHTML = details7;

var details8 = ' </h4> ' + atwClass.name +  '   ';
    details8+= atwClass.checkAvailability()+  ' </h4>’;
var elClass8 = document.getElementById('Class8');
elClass8.innerHTML = details8;

var details9 = ' </h4> ' + atwClass.name +  '   ';
    details9+= atwClass.checkAvailability()+  ' </h4>’;
var elClass9 = document.getElementById('Class9');
elClass9.innerHTML = details9;

var details10 = ' </h4> ' + breadClass.name +  '   ';
    details10+= breadClass.checkAvailability()+  ' </h4>’;
var elClass10 = document.getElementById('Class10');
elClass10.innerHTML = details10;

var details11 = ' </h4> ' + basqueClass.name +  '   ';
    details11+= basqueClass.checkAvailability()+  ' </h4>’;
var elClass11 = document.getElementById('Class11');
elClass11.innerHTML = details11;

var details12 = ' </h4> ' + batterClass.name +  '   ';
    details12+= batterClass.checkAvailability()+  ' </h4>’;
var elClass12 = document.getElementById('Class12');
elClass12.innerHTML = details12;

var details13 = ' </h4> ' + cheeseClass.name +  '   ';
    details13+= cheeseClass.checkAvailability()+  ' </h4>’;
var elClass13 = document.getElementById('Class13');
elClass13.innerHTML = details13;

var details14 = ' </h4> ' + chickenClass.name +  '   ';
    details14+= chickenClass.checkAvailability()+  ' </h4>’;
var elClass14 = document.getElementById('Class14');
elClass14.innerHTML = details14;

var details15 = ' </h4> ' + cldrollsClass.name +  '   ';
    details15+= cldrollsClass.checkAvailability()+  ' </h4>’;
var elClass15 = document.getElementById('Class15');
elClass15.innerHTML = details15;

var details16 = ' </h4> ' + noodlesClass.name +  '   ';
    details16+= noodlesClass.checkAvailability()+  ' </h4>’;
var elClass16 = document.getElementById('Class16');
elClass16.innerHTML = details16;

var details17 = ' </h4> ' + frenchClass.name +  '   ';
    details17+= frenchClass.checkAvailability()+  ' </h4>’;
var elClass17 = document.getElementById('Class17');
elClass17.innerHTML = details17;

var details18 = ' </h4> ' + klatchClass.name +  '   ';
    details18+= klatchClass.checkAvailability()+  ' </h4>’;
var elClass18 = document.getElementById('Class18');
elClass18.innerHTML = details18;

var details19 = ' </h4> ' + cwrClass.name +  '   ';
    details19+= cwrClass.checkAvailability()+  ' </h4>’;
var elClass19 = document.getElementById('Class19');
elClass19.innerHTML = details19;

var details20 = ' </h4> ' + spsoupClass.name +  '   ';
    details20+= spsoupClass.checkAvailability()+  ' </h4>’;
var elClass20 = document.getElementById('Class20');
elClass20.innerHTML = details20;

var details21 = ' </h4> ' + veganClass.name +  '   ';
    details21+= veganClass.checkAvailability()+  ' </h4>’;
var elClass21 = document.getElementById('Class21');
elClass21.innerHTML = details21;

var details22 = ' </h4> ' + fermClass.name +  '   ';
    details22+= fermClass.checkAvailability()+  ' </h4>’;
var elClass22 = document.getElementById('Class22');
elClass22.innerHTML = details22;

var details23 = ' </h4> ' + heartClass.name +  '   ';
    details23+= heartClass.checkAvailability()+  ' </h4>’;
var elClass23 = document.getElementById('Class23');
elClass23.innerHTML = details23;

var details24 = ' </h4> ' + fondueClass.name +  '   ';
    details24+= fondueClass.checkAvailability()+  ' </h4>’;
var elClass24 = document.getElementById('Class24');
elClass24.innerHTML = details24;

var details25 = ' </h4> ' + gfwttClass.name +  '   ';
    details25+= gfwttClass.checkAvailability()+  ' </h4>’;
var elClass25 = document.getElementById('Class25');
elClass25.innerHTML = details25;

var details26 = ' </h4> ' + gfbakingClass.name +  '   ';
    details26+= gfbakingClass.checkAvailability()+  ' </h4>’;
var elClass26 = document.getElementById('Class26');
elClass26.innerHTML = details26;

var details27 = ' </h4> ' + budgetClass.name +  '   ';
    details27+= budgetClass.checkAvailability()+  ' </h4>’;
var elClass27 = document.getElementById('Class27');
elClass27.innerHTML = details27;

var details28 = ' </h4> ' + sardiniaClass.name +  '   ';
    details28+= sardiniaClass.checkAvailability()+  ' </h4>’;
var elClass28 = document.getElementById('Class28');
elClass28.innerHTML = details28;

var details29 = ' </h4> ' + cakeClass.name +  '   ';
    details29+= cakeClass.checkAvailability()+  ' </h4>’;
var elClass29 = document.getElementById('Class29');
elClass29.innerHTML = details29;

var details30 = ' </h4> ' + seasonClass.name +  '   ';
    details30+= seasonClass.checkAvailability()+  ' </h4>’;
var elClass30 = document.getElementById('Class30');
elClass30.innerHTML = details30;

var details31 = ' </h4> ' + indianClass.name +  '   ';
    details31+= indianClass.checkAvailability()+  ' </h4>’;
var elClass31 = document.getElementById('Class31');
elClass31.innerHTML = details31;

var details32 = ' </h4> ' + chemClass.name +  '   ';
    details32+= chemClass.checkAvailability()+  ' </h4>’;
var elClass32 = document.getElementById('Class32');
elClass32.innerHTML = details32;

var details33 = ' </h4> ' + knifeClass.name +  '   ';
    details33+= knifeClass.checkAvailability()+  ' </h4>’;
var elClass33 = document.getElementById('Class33');
elClass33.innerHTML = details33;

var details34 = ' </h4> ' + dumplingClass.name +  '   ';
    details34+= dumplingClass.checkAvailability()+  ' </h4>’;
var elClass34 = document.getElementById('Class34');
elClass34.innerHTML = details34;

var details35 = ' </h4> ' + panClass.name +  '   ';
    details35+= panClass.checkAvailability()+  ' </h4>’;
var elClass35 = document.getElementById('Class35');
elClass35.innerHTML = details35;

var details36 = ' </h4> ' + medClass.name +  '   ';
    details36+= medClass.checkAvailability()+  ' </h4>’;
var elClass36 = document.getElementById('Class36');
elClass36.innerHTML = details36;

var details37 = ' </h4> ' + piemonteseClass.name +  '   ';
    details37+= piemonteseClass.checkAvailability()+  ' </h4>’;
var elClass37 = document.getElementById('Class37');
elClass37.innerHTML = details37;

var details38 = ' </h4> ' + mexClass.name +  '   ';
    details38+= mexClass.checkAvailability()+  ' </h4>’;
var elClass38 = document.getElementById('Class38');
elClass38.innerHTML = details38;

var details39 = ' </h4> ' + bagelsClass.name +  '   ';
    details39+= bagelsClass.checkAvailability()+  ' </h4>’;
var elClass39 = document.getElementById('Class39');
elClass39.innerHTML = details39;

var details40 = ' </h4> ' + nwcelClass.name +  '   ';
    details40+= nwcelClass.checkAvailability()+  ' </h4>’;
var elClass40 = document.getElementById('Class40');
elClass40.innerHTML = details40;

var details41 = ' </h4> ' + pulseClass.name +  '   ';
    details41+= pulseClass.checkAvailability()+  ' </h4>’;
var elClass41 = document.getElementById('Class41');
elClass41.innerHTML = details41;

var details42 = ' </h4> ' + pastaClass.name +  '   ';
    details42+= pastaClass.checkAvailability()+  ' </h4>’;
var elClass42 = document.getElementById('Class42');
elClass42.innerHTML = details42;

var details43 = ' </h4> ' + pizzaClass.name +  '   ';
    details43+= pizzaClass.checkAvailability()+  ' </h4>’;
var elClass43 = document.getElementById('Class43');
elClass43.innerHTML = details43;

var details44 = ' </h4> ' + probioticsClass.name +  '   ';
    details44+= probioticsClass.checkAvailability()+  ' </h4>’;
var elClass44 = document.getElementById('Class44');
elClass44.innerHTML = details44;

var details45 = ' </h4> ' + saucesClass.name +  '   ';
    details45+= saucesClass.checkAvailability()+  ' </h4>’;
var elClass45 = document.getElementById('Class45');
elClass45.innerHTML = details45;

var details46 = ' </h4> ' + mealsClass.name +  '   ';
    details46+= mealsClass.checkAvailability()+  ' </h4>’;
var elClass46 = document.getElementById('Class46');
elClass46.innerHTML = details46;

var details47 = ' </h4> ' + theoClass.name +  '   ';
    details47+= theoClass.checkAvailability()+  ' </h4>’;
var elClass47 = document.getElementById('Class47');
elClass47.innerHTML = details47;

var details48 = ' </h4> ' + rawClass.name +  '   ';
    details48+= rawClass.checkAvailability()+  ' </h4>’;
var elClass48 = document.getElementById('Class48');
elClass48.innerHTML = details48;

var details49 = ' </h4> ' + sauces2Class.name +  '   ';
    details49+= sauces2Class.checkAvailability()+  ' </h4>’;
var elClass49 = document.getElementById('Class49');
elClass49.innerHTML = details49;

var details50 = ' </h4> ' + detoxClass.name +  '   ';
    details50+= detoxClass.checkAvailability()+  ' </h4>’;
var elClass50 = document.getElementById('Class50');
elClass50.innerHTML = details50;

var details51 = ' </h4> ' + greensClass.name +  '   ';
    details51+= greensClass.checkAvailability()+  ' </h4>’;
var elClass51 = document.getElementById('Class51');
elClass51.innerHTML = details51;

var details52 = ' </h4> ' + stirClass.name +  '   ';
    details52+= stirClass.checkAvailability()+  ' </h4>’;
var elClass52 = document.getElementById('Class52');
elClass52.innerHTML = details52;

var details53 = ' </h4> ' + shortClass.name +  '   ';
    details53+= shortClass.checkAvailability()+  ' </h4>’;
var elClass53 = document.getElementById('Class53');
elClass53.innerHTML = details53;

var details54 = ' </h4> ' + tacoClass.name +  '   ';
    details54+= tacoClass.checkAvailability()+  ' </h4>’;
var elClass54 = document.getElementById('Class54');
elClass54.innerHTML = details54;

var details55 = ' </h4> ' + tamaleClass.name +  '   ';
    details55+= tamaleClass.checkAvailability()+  ' </h4>’;
var elClass55 = document.getElementById('Class55');
elClass55.innerHTML = details55;

var details56 = ' </h4> ' + thaiClass.name +  '   ';
    details56+= thaiClass.checkAvailability()+  ' </h4>’;
var elClass56 = document.getElementById('Class56');
elClass56.innerHTML = details56;

var details57 = ' </h4> ' + brazilClass.name +  '   ';
    details57+= brazilClass.checkAvailability()+  ' </h4>’;
var elClass57 = document.getElementById('Class57');
elClass57.innerHTML = details57;

var details58 = ' </h4> ' + grillClass.name +  '   ';
    details58+= grillClass.checkAvailability()+  ' </h4>’;
var elClass58 = document.getElementById('Class58');
elClass58.innerHTML = details58;

var details59 = ' </h4> ' + tomatoClass.name +  '   ';
    details59+= tomatoClass.checkAvailability()+  ' </h4>’;
var elClass59 = document.getElementById('Class59');
elClass59.innerHTML = details59;

var details60 = ' </h4> ' + sushiClass.name +  '   ';
    details60+= sushiClass.checkAvailability()+  ' </h4>’;
var elClass60 = document.getElementById('Class60');
elClass60.innerHTML = details60;

var details61 = ' </h4> ' + wttClass.name +  '   ';
    details61+= wttClass.checkAvailability()+  ' </h4>’;
var elClass61 = document.getElementById('Class61');
elClass61.innerHTML = details61;

var details62 = ' </h4> ' + bugsClass.name +  '   ';
    details62+= bugsClass.checkAvailability()+  ' </h4>’;
var elClass62 = document.getElementById('Class62');
elClass62.innerHTML = details62;



