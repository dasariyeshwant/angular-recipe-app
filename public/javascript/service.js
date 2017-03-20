app.service('mainService', function(){

	// this.getRecipeList = function() {
	// 	return this.recipeInformation;
	// }


	this.recipeInformation = [
			{
			"id": 1,
			"title": "Strawberry Chocolate",
			"description": "cool strawbery",
			"rating": "1",
			"totalRatingNumber": "200",
			"images": ["chocolate-covered-strawberry.jpg", "item2.jpg", "item3.jpg", "item4.jpg"],
			"chef": {
				"firstName": "James",
				"lastName": "Franklin",
				"email": "asdfasdf",
				"avatar": "pp1.jpg",
				"chefType": "pastry chef"
			},
			"background": "rgb(98, 43, 17)",
			"ingredients": [	"box Betty Crocker™ SuperMoist™ strawberry cake mix ",
							"Water, vegetable oil and eggs called for on cake mix box",
							"1 bag (12 oz) semisweet chocolate chips (2 cups)",
							"3/4 cup whipping cream", 
							"24 fresh small whole strawberries"],
			"directions": [	"Heat oven to 350°F (325°F for dark or nonstick pans). Place paper baking cup in each of 24 regular-size muffin cups.",
				 			"Make and bake cake mix as directed on box for cupcakes, using water, oil and eggs. Cool 10 minutes; remove from pans to cooling racks. Cool completely, about 30 minutes.",
				 			"In medium heatproof bowl, place chocolate chips. In 2-cup microwavable measuring cup, microwave whipping cream uncovered on High 1 minute or until hot; pour over chocolate chips and stir until smooth.",
				 			"Set aside 1 cup chocolate mixture for dipping strawberries. Frost cupcakes with remaining chocolate mixture. Dip strawberries, one at a time, halfway into reserved chocolate mixture. Garnish each cupcake with dipped strawberry."]
		},{
			"id": 2,
			"title": "vanila pineapple cake",
			"description": "cool vanila",
			"rating": "1",
			"totalRatingNumber": "150",
			"images": ["item1.jpg", "item2.jpg", "item3.jpg", "item4.jpg"],
			"chef": {
				"firstName": "Sophia",
			"lastName": "zoe",
			"email": "asdfashjjdf",
			"avatar": "pp2.jpg",
			"chefType": "vegetable chef"
			},
			"background": "rgb(209, 108, 89)",
			"ingredients": ["A pinch of salt", "2tsp black pepper", "Casews"],
			"directions": ["Add warm water", "Then add a salt", "cool vanila is done"]
		},{
			"id": 3,
			"title": "Roast Sticky Chicken-Rotisserie Style",
			"description": "Ever wish you could get that restaurant-style rotisserie chicken at home? Well, with minimal preparation and about 5 hours cooking time (great for the weekends!) you can! I don't bother to baste the bird, though some like to for the first hour. The pan juices always caramelize at the bottom, and the chicken will turn golden brown...fall-off-the-bone good!",
			"totalRatingNumber": "160",
			"images": ["roasted_chicken1.jpg", "roasted_chicken2.jpg", "roasted_chicken3.jpg"],
			"chef": {
				"firstName": "Lilly",
				"lastName": "Holzer",
				"email": "asdfashjjdf",
				"avatar": "pp3.jpg",
				"chefType": "Grill chef"
			},
			"background": "rgb(242, 129, 0)",
			"ingredients": [	"4 teaspoons salt",
							"2 teaspoons paparika",
							"1 teaspoon onion powder",
							"1 teaspoon white pepper",
							"1/2 teaspoon cayene pepper",
							"1/2 teaspoon garlic powder",
							"2 onions"],
			"directions": [	"In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel. Rub each chicken inside and out with spice mixture. Place 1 onion into the cavity of each chicken. Place chickens in a resealable bag or double wrap with plastic wrap. Refrigerate overnight, or at least 4 to 6 hours.",
							"Preheat oven to 250 degrees F (120 degrees C).",
							"Place chickens in a roasting pan. Bake uncovered for 5 hours, to a minimum internal temperature of 180 degrees F (85 degrees C). Let the chickens stand for 10 minutes before carving."]
		},{
			"id": 4,
			"title": "Grilled Chicken Kabobs with Thai Peanut Sauce",
			"description": "Quick-cooking chicken kabobs take on the flavor of Thailand thanks to a pleasing peanut sauce.",
			"totalRatingNumber": "175",
			"images": ["grilled-chicken1.jpg", "grilled-chicken2.jpg", "griller-chicken.jpg"],
			"chef": {
				"firstName": "brookstone",
		    	"lastName": "David",
		    	"email": "asdfashjjdf",
		    	"avatar": "pp1.jpg",
		    	"chefType": "roast chef"
			},
			"background": "#fcae05",
			"ingredients": [	"1/2 cup creamy peanut butter",
							"1/4 cup rice vinegar",
							"1/3 cup sugar",
							"1/4 teaspoon red pepper sauce", 
							"6 boneless skinless chicken breasts (2 lb), each cut lengthwise into 4 strips",
							"1 large red bell pepper, cut into 24 pieces",
							"Cooking spray"],
			"directions": [	"Heat gas or charcoal grill. In 2-quart saucepan, mix peanut butter, soy sauce and vinegar until smooth. Stir in sugar and pepper sauce. Cook over medium-high heat about 2 minutes, stirring constantly, until thickened. Place 3/4 cup sauce in small serving bowl to use as dipping sauce.",
							"On each of 6 (12-inch) metal skewers, thread 4 chicken strips and 4 bell pepper pieces alternately, leaving about 1/4-inch space between each piece. Brush chicken and bell pepper with some of the remaining sauce.",
							"Spray kabobs with cooking spray to prevent sticking. Place kabobs on grill over medium heat. Cover grill; cook 5 minutes. Turn kabobs and brush with sauce; cook 2 to 3 minutes longer or until chicken is no longer pink in center. Discard any remaining sauce used for brushing kabobs during grilling. Serve kabobs with reserved sauce for dipping."]
		},{
			"id": 5,
			"title": "Strawberry Chocolate",
			"description": "cool strawbery",
			"rating": "1",
			"totalRatingNumber": "200",
			"images": ["chocolate-covered-strawberry.jpg", "item2.jpg", "item3.jpg", "item4.jpg"],
			"chef": {
				"firstName": "James",
			"lastName": "Franklin",
			"email": "asdfasdf",
			"avatar": "pp1.jpg",
			"chefType": "pastry chef"
			},
			"background": "rgb(98, 43, 17)",
			"ingredients": [	"box Betty Crocker™ SuperMoist™ strawberry cake mix ",
							"Water, vegetable oil and eggs called for on cake mix box",
							"1 bag (12 oz) semisweet chocolate chips (2 cups)",
							"3/4 cup whipping cream", 
							"24 fresh small whole strawberries"],
			"directions": [	"Heat oven to 350°F (325°F for dark or nonstick pans). Place paper baking cup in each of 24 regular-size muffin cups.",
				 			"Make and bake cake mix as directed on box for cupcakes, using water, oil and eggs. Cool 10 minutes; remove from pans to cooling racks. Cool completely, about 30 minutes.",
				 			"In medium heatproof bowl, place chocolate chips. In 2-cup microwavable measuring cup, microwave whipping cream uncovered on High 1 minute or until hot; pour over chocolate chips and stir until smooth.",
				 			"Set aside 1 cup chocolate mixture for dipping strawberries. Frost cupcakes with remaining chocolate mixture. Dip strawberries, one at a time, halfway into reserved chocolate mixture. Garnish each cupcake with dipped strawberry."]
		},{
			"id": 6,
			"title": "vanila pineapple cake",
			"description": "cool vanila",
			"rating": "1",
			"totalRatingNumber": "150",
			"images": ["item1.jpg", "item2.jpg", "item3.jpg", "item4.jpg"],
			"chef": {
				"firstName": "Sophia",
			"lastName": "zoe",
			"email": "asdfashjjdf",
			"avatar": "pp2.jpg",
			"chefType": "vegetable chef"
			},
			"background": "rgb(209, 108, 89)",
			"ingredients": ["A pinch of salt", "2tsp black pepper", "Casews"],
			"directions": ["Add warm water", "Then add a salt", "cool vanila is done"]
		},{
			"id": 7,
			"title": "Roast Sticky Chicken-Rotisserie Style",
			"description": "Ever wish you could get that restaurant-style rotisserie chicken at home? Well, with minimal preparation and about 5 hours cooking time (great for the weekends!) you can! I don't bother to baste the bird, though some like to for the first hour. The pan juices always caramelize at the bottom, and the chicken will turn golden brown...fall-off-the-bone good!",
			"totalRatingNumber": "160",
			"images": ["roasted_chicken1.jpg", "roasted_chicken2.jpg", "roasted_chicken3.jpg"],
			"chef": {
				"firstName": "Lilly",
				"lastName": "Holzer",
				"email": "asdfashjjdf",
				"avatar": "pp3.jpg",
				"chefType": "Grill chef"
			},
			"background": "rgb(242, 129, 0)",
			"ingredients": [	"4 teaspoons salt",
							"2 teaspoons paparika",
							"1 teaspoon onion powder",
							"1 teaspoon white pepper",
							"1/2 teaspoon cayene pepper",
							"1/2 teaspoon garlic powder",
							"2 onions"],
			"directions": [	"In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel. Rub each chicken inside and out with spice mixture. Place 1 onion into the cavity of each chicken. Place chickens in a resealable bag or double wrap with plastic wrap. Refrigerate overnight, or at least 4 to 6 hours.",
							"Preheat oven to 250 degrees F (120 degrees C).",
							"Place chickens in a roasting pan. Bake uncovered for 5 hours, to a minimum internal temperature of 180 degrees F (85 degrees C). Let the chickens stand for 10 minutes before carving."]
		},{
			"id": 8,
			"title": "Grilled Chicken Kabobs with Thai Peanut Sauce",
			"description": "Quick-cooking chicken kabobs take on the flavor of Thailand thanks to a pleasing peanut sauce.",
			"totalRatingNumber": "175",
			"images": ["grilled-chicken1.jpg", "grilled-chicken2.jpg", "griller-chicken.jpg"],
			"chef": {
				"firstName": "brookstone",
		    	"lastName": "David",
		    	"email": "asdfashjjdf",
		    	"avatar": "pp1.jpg",
		    	"chefType": "roast chef"
			},
			"background": "#fcae05",
			"ingredients": [	"1/2 cup creamy peanut butter",
							"1/4 cup rice vinegar",
							"1/3 cup sugar",
							"1/4 teaspoon red pepper sauce", 
							"6 boneless skinless chicken breasts (2 lb), each cut lengthwise into 4 strips",
							"1 large red bell pepper, cut into 24 pieces",
							"Cooking spray"],
			"directions": [	"Heat gas or charcoal grill. In 2-quart saucepan, mix peanut butter, soy sauce and vinegar until smooth. Stir in sugar and pepper sauce. Cook over medium-high heat about 2 minutes, stirring constantly, until thickened. Place 3/4 cup sauce in small serving bowl to use as dipping sauce.",
							"On each of 6 (12-inch) metal skewers, thread 4 chicken strips and 4 bell pepper pieces alternately, leaving about 1/4-inch space between each piece. Brush chicken and bell pepper with some of the remaining sauce.",
							"Spray kabobs with cooking spray to prevent sticking. Place kabobs on grill over medium heat. Cover grill; cook 5 minutes. Turn kabobs and brush with sauce; cook 2 to 3 minutes longer or until chicken is no longer pink in center. Discard any remaining sauce used for brushing kabobs during grilling. Serve kabobs with reserved sauce for dipping."]
		},{
			"id": 9,
			"title": "Strawberry Chocolate",
			"description": "cool strawbery",
			"rating": "1",
			"totalRatingNumber": "200",
			"images": ["chocolate-covered-strawberry.jpg", "item2.jpg", "item3.jpg", "item4.jpg"],
			"chef": {
				"firstName": "James",
			"lastName": "Franklin",
			"email": "asdfasdf",
			"avatar": "pp1.jpg",
			"chefType": "pastry chef"
			},
			"background": "rgb(98, 43, 17)",
			"ingredients": [	"box Betty Crocker™ SuperMoist™ strawberry cake mix ",
							"Water, vegetable oil and eggs called for on cake mix box",
							"1 bag (12 oz) semisweet chocolate chips (2 cups)",
							"3/4 cup whipping cream", 
							"24 fresh small whole strawberries"],
			"directions": [	"Heat oven to 350°F (325°F for dark or nonstick pans). Place paper baking cup in each of 24 regular-size muffin cups.",
				 			"Make and bake cake mix as directed on box for cupcakes, using water, oil and eggs. Cool 10 minutes; remove from pans to cooling racks. Cool completely, about 30 minutes.",
				 			"In medium heatproof bowl, place chocolate chips. In 2-cup microwavable measuring cup, microwave whipping cream uncovered on High 1 minute or until hot; pour over chocolate chips and stir until smooth.",
				 			"Set aside 1 cup chocolate mixture for dipping strawberries. Frost cupcakes with remaining chocolate mixture. Dip strawberries, one at a time, halfway into reserved chocolate mixture. Garnish each cupcake with dipped strawberry."]
		},{
			"id": 10,
			"title": "vanila pineapple cake",
			"description": "cool vanila",
			"rating": "1",
			"totalRatingNumber": "150",
			"images": ["item1.jpg", "item2.jpg", "item3.jpg", "item4.jpg"],
			"chef": {
				"firstName": "Sophia",
			"lastName": "zoe",
			"email": "asdfashjjdf",
			"avatar": "pp2.jpg",
			"chefType": "vegetable chef"
			},
			"background": "rgb(209, 108, 89)",
			"ingredients": ["A pinch of salt", "2tsp black pepper", "Casews"],
			"directions": ["Add warm water", "Then add a salt", "cool vanila is done"]
		},{
			"id": 11,
			"title": "Roast Sticky Chicken-Rotisserie Style",
			"description": "Ever wish you could get that restaurant-style rotisserie chicken at home? Well, with minimal preparation and about 5 hours cooking time (great for the weekends!) you can! I don't bother to baste the bird, though some like to for the first hour. The pan juices always caramelize at the bottom, and the chicken will turn golden brown...fall-off-the-bone good!",
			"totalRatingNumber": "160",
			"images": ["roasted_chicken1.jpg", "roasted_chicken2.jpg", "roasted_chicken3.jpg"],
			"chef": {
				"firstName": "Lilly",
				"lastName": "Holzer",
				"email": "asdfashjjdf",
				"avatar": "pp3.jpg",
				"chefType": "Grill chef"
			},
			"background": "rgb(242, 129, 0)",
			"ingredients": [	"4 teaspoons salt",
							"2 teaspoons paparika",
							"1 teaspoon onion powder",
							"1 teaspoon white pepper",
							"1/2 teaspoon cayene pepper",
							"1/2 teaspoon garlic powder",
							"2 onions"],
			"directions": [	"In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel. Rub each chicken inside and out with spice mixture. Place 1 onion into the cavity of each chicken. Place chickens in a resealable bag or double wrap with plastic wrap. Refrigerate overnight, or at least 4 to 6 hours.",
							"Preheat oven to 250 degrees F (120 degrees C).",
							"Place chickens in a roasting pan. Bake uncovered for 5 hours, to a minimum internal temperature of 180 degrees F (85 degrees C). Let the chickens stand for 10 minutes before carving."]
		},{
			"id": 12,
			"title": "Grilled Chicken Kabobs with Thai Peanut Sauce",
			"description": "Quick-cooking chicken kabobs take on the flavor of Thailand thanks to a pleasing peanut sauce.",
			"totalRatingNumber": "175",
			"images": ["grilled-chicken1.jpg", "grilled-chicken2.jpg", "griller-chicken.jpg"],
			"chef": {
				"firstName": "brookstone",
		    	"lastName": "David",
		    	"email": "asdfashjjdf",
		    	"avatar": "pp1.jpg",
		    	"chefType": "roast chef"
			},
			"background": "#fcae05",
			"ingredients": [	"1/2 cup creamy peanut butter",
							"1/4 cup rice vinegar",
							"1/3 cup sugar",
							"1/4 teaspoon red pepper sauce", 
							"6 boneless skinless chicken breasts (2 lb), each cut lengthwise into 4 strips",
							"1 large red bell pepper, cut into 24 pieces",
							"Cooking spray"],
			"directions": [	"Heat gas or charcoal grill. In 2-quart saucepan, mix peanut butter, soy sauce and vinegar until smooth. Stir in sugar and pepper sauce. Cook over medium-high heat about 2 minutes, stirring constantly, until thickened. Place 3/4 cup sauce in small serving bowl to use as dipping sauce.",
							"On each of 6 (12-inch) metal skewers, thread 4 chicken strips and 4 bell pepper pieces alternately, leaving about 1/4-inch space between each piece. Brush chicken and bell pepper with some of the remaining sauce.",
							"Spray kabobs with cooking spray to prevent sticking. Place kabobs on grill over medium heat. Cover grill; cook 5 minutes. Turn kabobs and brush with sauce; cook 2 to 3 minutes longer or until chicken is no longer pink in center. Discard any remaining sauce used for brushing kabobs during grilling. Serve kabobs with reserved sauce for dipping."]
		}];
});