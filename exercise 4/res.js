function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}

function order(maindish,sidedish,drinks){
    this.maindish=maindish;
    this.sidedish=sidedish;
    this.drinks=drinks;
    if(this.maindish==undefined||this.sidedish==undefined||this.drinks==undefined){
         console.logg("again order dishes:");
    return;
    }
else
{
    console.log("maindish is:" ,this.maindish);
    console.log("sidedish is:" , this.sidedish);
    console.log("drink is:" , this.drinks);
     cook(this.maindish,this.sidedish,this.drinks);
}
}
function cook(maindish,sidedish,drinks)
{
    let menuitems=generateMenu();
    let totalTime=0;
     for(i=0;i<menuitems.length;i++){
        if(menuitems[i].name==maindish||menuitems[i].name==sidedish||menuitems[i].name==drinks)
               totalTime +=menuitems[i].time;

     }
          console.log("\n your wait time is", totalTime , "seconds");
          setTimeout(serve,totalTime * 100,maindish,sidedish,drinks);
     }
function serve(maindish,sidedish,drinks){
    let menuitems=generateMenu();
    let totalAmount=0;
    for(i=0;i<menuitems.length;i++){
        if(menuitems[i].name==maindish||menuitems[i].name==sidedish||menuitems[i].name==drinks)
            totalAmount +=menuitems[i].price;
    }
    console.log("your price is:", totalAmount, "rupees");
}
order('Pizza','Fries','Wine');
