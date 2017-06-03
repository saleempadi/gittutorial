const PERSONDATA = [{
    name: "Michael",
    rank: 4,
    age: 19,
    score: 66
}, {
    name: "Emily",
    rank: 7,
    age: 22,
    score: 37
}, {
    name: "Sam",
    rank: 2,
    age: 23,
    score: 80
}, {
    name: "William",
    rank: 10,
    age: 26,
    score: 11
}, {
    name: "James",
    rank: 8,
    age: 26,
    score: 28
}, {
    name: "Mia",
    rank: 5,
    age: 28,
    score: 54
}, {
    name: "Isabella",
    rank: 1,
    age: 31,
    score: 100
}, {
    name: "Alex",
    rank: 3,
    age: 34,
    score: 75
}, {
    name: "Olivia",
    rank: 6,
    age: 36,
    score: 42
}, {
    name: "Geoff",
    rank: 9,
    age: 41,
    score: 19
}]
function search(listitem, name) {
    var d = [];
    console.log("\n----------  Searched Name : " + name + " ----------")
    for (var i = 0; i < listitem.length; i++) {
        if (listitem[i].name == name) {
            d.push("Position:" + i, listitem[i])
        }
    }
    if (d.length == 0) console.log("Name Not Found...")
    else if (d != 0) console.log(d)
}
function greater(listitem, score) {
    var temp = [];
    console.log("\n----------  Score Greaterthan " + score + " ----------")
    for (var i = 0; i < listitem.length; i++) {
        if (listitem[i].score >= score) {
            console.log("Position:", i, "Value:", listitem[i])
            temp.push(i)
        }
    }
    if (temp.length == 0) console.log("Item Not Found...")
}
function sorted(listitem) {
    var a = [];
    for (i = 0; i < listitem.length; ++i) {
        for (j = i + 1; j < listitem.length; ++j) {
            if (listitem[i].rank > listitem[j].rank) {
                a = listitem[i];
                listitem[i] = listitem[j];
                listitem[j] = a;
            }
        }
    }
    console.log("\n----------  Sorted Based on Rank ----------")
    if (listitem.length == 0) console.log("Item Not Found...")
    else console.log(listitem)
}
search(PERSONDATA, 'James')
greater(PERSONDATA, 50);
sorted(PERSONDATA);