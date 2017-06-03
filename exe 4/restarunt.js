var value = [];
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
var sum=0;
var a=(this.maindish != null || this.maindish > 0 || this.maindish != 0);
function order(maindish, sidedish, drinks) {
    this.maindish = maindish;
    this.sidedish = sidedish;
    this.drinks = drinks;
    console.log(" -------- Main Dish -------- \n\t 1. Steak \n\t 2. Burger \n\t 3. Shawarma \n\t 4. Pizza \n\t 5. Sushi \n\t 6. Carpaccio \n\t 7. Lobster")
    console.log(" -------- Side Dish -------- \n\t 8. Chicken \n\t 9. Wild Rice \n\t 10. Fries \n\t 11. Baked Potato \n\t 12. Salad")
    console.log(" ---------- Drinks --------- \n\t 13. Coffee \n\t 14. Tea \n\t 15. Pop \n\t 16. Beer \n\t 17. Wine \n ")
    if (this.maindish == null || this.maindish > 7 || this.maindish == 0 || this.maindish < 0) console.log(" Please Order Maindish Menus...")
    else value.push(generateMenu()[maindish - 1].name)
    if (this.sidedish == null || this.sidedish < 8 || this.sidedish > 12 || this.sidedish == 0) console.log(" Please Order Sidedish Menus...")
    else value.push(generateMenu()[sidedish - 1].name)
    if (this.drinks == null || this.drinks < 13 || this.drinks > 17 || this.drinks == 0) console.log(" Please Order Drinks Menus...")
    else value.push(generateMenu()[drinks - 1].name)
    if (this.maindish != null && this.sidedish != null && this.drinks != null && this.maindish > 0 && this.maindish != 0 && this.sidedish >= 8 && this.sidedish <= 12 && this.sidedish != 0 && this.drinks >= 13 && this.drinks <= 17 && this.drinks != 0) {
        for (h = 0; h < value.length; h++) {
            if (h == 0) console.log(" You Ordered MainDish is : " + value[h])
            if (h == 1) console.log(" You Ordered SideDish is : " + value[h])
            if (h == 2) console.log(" You Ordered Drinks is : " + value[h])
        }
        cook(maindish, sidedish, drinks);
    }
}
function cook(maindish, sidedish, drinks) {
    while (value.length > 0) {
        value.pop();
    }
    if (a) value.push(generateMenu()[this.maindish - 1].time)
    if (this.sidedish != null || this.sidedish >= 8 || this.sidedish <= 12 || this.sidedish == 0) value.push(generateMenu()[this.sidedish - 1].time)
    if (this.drinks != null || this.drinks >= 13 || this.drinks <= 17 || this.drinks == 0) value.push(generateMenu()[this.drinks - 1].time)
    for (h = 0; h < value.length; h++) {
       sum += value[h]
    }
    console.log("\n Your Oder Taken Time: " + value[0] + " + " + value[1] + " + " + value[2] + " = " + sum + " Min");
    serve(maindish, sidedish, drinks);
}
function serve(maindish, sidedish, drinks) {
 {
        value.pop();
    }
    if (a) value.push(generateMenu()[this.maindish - 1].price)
    if (this.sidedish != null || this.sidedish >= 8 || this.sidedish <= 12 || this.sidedish == 0) value.push(generateMenu()[this.sidedish - 1].price)
    if (this.drinks != null || this.drinks >= 13 || this.drinks <= 17 || this.drinks == 0) value.push(generateMenu()[this.drinks - 1].price)
    for (h = 0; h < value.length; h++) {
        sum += value[h]
    }
    console.log("\n Your Oder Price: " + value[0] + " + " + value[1] + " + " + value[2] + " = " + sum + " Rupees");
}
order(1, 9, 14)