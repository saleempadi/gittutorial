
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
function order(maindish, sidedish, drinks) {
    this.maindish1 = maindish;
    this.sidedish1 = sidedish;
    this.drinks1 = drinks;
    if (this.maindish1 == undefined || this.sidedish1 == undefined || this.drinks1 == undefined) {
        console.log("Error !Order Again");
        return;
    }
    else {
        console.log("Maindish ia an :", this.maindish1);
        console.log("Sidedish is an :", this.sidedish1);
        console.log("Drinks : ", this.drinks1);
        cook(this.maindish1, this.sidedish1, this.drinks1);
    }
}
function cook(maindish, sidedish, drinks) {
    let menuItems = generateMenu();
    let totalTime = 0;
    for (i = 0; i < menuItems.length; i++) {
        if (menuItems[i].name == maindish || menuItems[i].name == sidedish || menuItems[i].name == drinks)
            totalTime += menuItems[i].time;
    }
    console.log("\nTotal Time to Taken Your Order :", totalTime, "Seconds");
    setTimeout(serve, totalTime * 1000, maindish, sidedish, drinks);
}
function serve(maindish, sidedish, drinks) {
    let menuItems = generateMenu();
    let totalPrice = 0;
    for (i = 0; i < menuItems.length; i++) {
        if (menuItems[i].name == maindish || menuItems[i].name == sidedish || menuItems[i].name == drinks)
            totalPrice += menuItems[i].price;
    }
    console.log("\nTotal Price :", totalPrice, "Rupees");
}
order('Steak', 'Fries', 'Pop');
