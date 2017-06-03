var dishes = [];
function generateMenu() {
    return [{
        name: 'Steak',
        time: 5,
        price: 40
    }, {
        name: 'Burger',
        time: 4,
        price: 15
    }, {
        name: 'Shawarma',
        time: 4,
        price: 20
    }, {
        name: 'Pizza',
        time: 3,
        price: 10
    }, {
        name: 'Sushi',
        time: 3,
        price: 15
    }, {
        name: 'Lobster',
        time: 5,
        price: 50
    }, {
        name: 'Carpaccio',
        time: 5,
        price: 25
    }, {
        name: 'Chicken',
        time: 4,
        price: 10
    }, {
        name: 'Wild Rice',
        time: 2,
        price: 5
    }, {
        name: 'Fries',
        time: 1,
        price: 5
    }, {
        name: 'Baked Potato',
        time: 1,
        price: 5
    }, {
        name: 'Salad',
        time: 1,
        price: 5
    }, {
        name: 'Coffee',
        time: 1,
        price: 0
    }, {
        name: 'Tea',
        time: 1,
        price: 0
    }, {
        name: 'Pop',
        time: 1,
        price: 0
    }, {
        name: 'Beer',
        time: 1,
        price: 5
    }, {
        name: 'Wine',
        time: 1,
        price: 10
    }]
}
// order function
function order(maindish, sidedish, drinks) {
    this.maindish = maindish;
    this.sidedish = sidedish;
    this.drinks = drinks;
    console.log(" -------- Main Dish -------- \n\t 1. Steak \n\t 2. Burger \n\t 3. Shawarma \n\t 4. Pizza \n\t 5. Sushi \n\t 6. Carpaccio \n\t 7. Lobster")
    console.log(" -------- Side Dish -------- \n\t 8. Chicken \n\t 9. Wild Rice \n\t 10. Fries \n\t 11. Baked Potato \n\t 12. Salad")
    console.log(" ---------- Drinks --------- \n\t 13. Coffee \n\t 14. Tea \n\t 15. Pop \n\t 16. Beer \n\t 17. Wine ")
    console.log("\n")
    if (maindish != null && sidedish != null && drinks != null && maindish > 0 && maindish < 8 && maindish != 0 && sidedish >= 8 && sidedish <= 12 && sidedish != 0 && drinks >= 13 && drinks <= 17 && drinks != 0) {
        console.log(" You Ordered MainDish is : " + generateMenu()[maindish - 1].name)
        console.log(" You Ordered SideDish is : " + generateMenu()[sidedish - 1].name)
        console.log(" You Ordered Drinks is : " + generateMenu()[drinks - 1].name)
        cook(maindish, sidedish, drinks);
    }
    else console.log("Please Order all different types of dishes!!")
}
order(1, 10, 17);
//cook function
function cook(maindish, sidedish, drinks) {
    this.maindish = maindish;
    this.sidedish = sidedish;
    this.drinks = drinks;
    while (dishes.length > 0) {
        dishes.pop();
    }
    if (maindish != null || maindish >= 1 || maindish <= 7)
        dishes.push(generateMenu()[maindish - 1].time)
    if (sidedish != null || sidedish >= 8 || sidedish <= 12)
        dishes.push(generateMenu()[sidedish - 1].time)
    if (drinks != null || drinks >= 13 || drinks <= 17)
        dishes.push(generateMenu()[drinks - 1].time)
    var sum = 0;
    for (k = 0; k < dishes.length; k++) {
        sum = sum + dishes[k];
    }
    console.log("\n Your Odered Taken Time: ", dishes[0] + " + " + dishes[1] + " + " + dishes[2] + " = " + sum + " Minutes");
    serve(maindish, sidedish, drinks);
}
//serve function
function serve(maindish, sidedish, drinks) {
    this.maindish = maindish;
    this.sidedish = sidedish;
    this.drinks = drinks;
    while (dishes.length > 0) {
        dishes.pop();
    }
    if (maindish != null || maindish >= 1 || maindish <= 7) 
   dishes.push(generateMenu()[maindish - 1].price)
    if (sidedish != null || sidedish >= 8 || sidedish <= 12)
        dishes.push(generateMenu()[sidedish - 1].price)
    if (drinks != null || drinks >= 13 || drinks <= 17)
        dishes.push(generateMenu()[drinks - 1].price)
    var sum = 0;
    for (k = 0; k < dishes.length; k++) {
        sum = sum + dishes[k];
    }
    console.log("\n Your Odered Price: ", dishes[0] + " + " + dishes[1] + " + " + dishes[2] + " = " + sum + " Rupees");
}