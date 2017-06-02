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
function dish(dishname) {
    var j = dishname - 1;
    for (var i = 0; i < 1; i++) {
        var thisarg = generateMenu()[j];
        (function (j) {
            this.print = function () {
                value.push(this.name);
            }
            this.print();
        }).call(thisarg, j);
    }
}
function timecal(timeval) {
    var j = timeval - 1;
    for (var i = 0; i < 1; i++) {
        var thisarg = generateMenu()[j];
        (function (j) {
            this.print = function () {
                value.push(this.time);
            }
            this.print();
        }).call(thisarg, j);
    }
}
function price(rate) {
    var j = rate - 1;
    for (var i = 0; i < 1; i++) {
        var thisarg = generateMenu()[j];
        (function (j) {
            this.print = function () {
                value.push(this.price);
            }
            this.print();
        }).call(thisarg, j);
    }
}
function order(maindish, sidedish, drinks) {
    console.log(" -------- Main Dish -------- \n\t 1. Steak \n\t 2. Burger \n\t 3. Shawarma \n\t 4. Pizza \n\t 5. Sushi \n\t 6. Carpaccio \n\t 7. Lobster")
    console.log(" -------- Side Dish -------- \n\t 8. Chicken \n\t 9. Wild Rice \n\t 10. Fries \n\t 11. Baked Potato \n\t 12. Salad")
    console.log(" ---------- Drinks --------- \n\t 13. Coffee \n\t 14. Tea \n\t 15. Pop \n\t 16. Beer \n\t 17. Wine ")
    console.log("\n")
    if (maindish == null|| maindish >7 || maindish==0 ) { console.log(" Please Order Maindish Menus...") }
    else dish(maindish);
    if (sidedish == null || sidedish <8 || sidedish >12 || sidedish==0) console.log(" Please Order Sidedish Menus...")
    else dish(sidedish);
    if (drinks == null || drinks <13 || drinks >17 || drinks==0) console.log(" Please Order Drinks Menus...")
    else dish(drinks);
    if (maindish != null && sidedish != null && drinks != null && maindish > 0 && maindish !=0 && sidedish >=8 && sidedish <=12 && sidedish!=0 && drinks >=13 && drinks <=17 && drinks!=0){
        for (h = 0; h < value.length; h++) {
            if (h == 0) console.log(" You Ordered MainDish is : " + value[h])
            if (h == 1) console.log(" You Ordered SideDish is : " + value[h])
            if (h == 2) console.log(" You Ordered Drinks is : " + value[h])
        }
    }
}
function cook(maindish, sidedish, drinks) {
    order(maindish, sidedish, drinks);
    while (value.length > 0) {
        value.pop();
    }
    if (maindish != null || maindish > 0 || maindish !=0 )  timecal(maindish);
    if (sidedish != null || sidedish >=8 || sidedish <=12 || sidedish==0)  timecal(sidedish);
    if (drinks != null || drinks >=13 || drinks <=17 || drinks==0)    timecal(drinks);
  if (maindish != null && sidedish != null && drinks != null && maindish > 0 && maindish !=0 && sidedish >=8 && sidedish <=12 && sidedish!=0 && drinks >=13 && drinks <=17 && drinks!=0){
        var sum = 0;
        for (h = 0; h < value.length; h++) {
            sum += value[h]
        }
        console.log("\n Your Oder Taken Time: " + value[0] + " + " + value[1] + " + " + value[2] + " = " + sum + " Min")
    }
}
function serve(maindish, sidedish, drinks) {
    cook(maindish, sidedish, drinks);
    while (value.length > 0) {
        value.pop();
    }
   if (maindish != null || maindish > 0 || maindish !=0 ) price(maindish);
      if (sidedish != null || sidedish >=8 || sidedish <=12 || sidedish==0)  price(sidedish);
    if (drinks != null || drinks >=13 || drinks <=17 || drinks==0)     price(drinks);
     if (maindish != null && sidedish != null && drinks != null && maindish > 0 && maindish !=0 && sidedish >=8 && sidedish <=12 && sidedish!=0 && drinks >=13 && drinks <=17 && drinks!=0){
        var sum = 0;
        for (h = 0; h < value.length; h++) {
            sum += value[h]
        }
        console.log("\n Your Oder Price: " + value[0] + " + " + value[1] + " + " + value[2] + " = " + sum + " Rupees")
    }
}
serve(6,7,16);
