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
var search = function (person) {
    for (var look in PERSONDATA) {
        if (PERSONDATA[look].name == person) {
            console.log("# " + look, PERSONDATA[look]);
            return look, PERSONDATA[look];
        }
    }
    if (PERSONDATA[look].name != person) {
        console.log("Name not found");
    }
};
search("Alex");

function filterPERSONDATA(grade) {
    return function filter(PERSONDATA) {
        return PERSONDATA.score >= 50;
    };
}
var scores = PERSONDATA.filter(filterPERSONDATA("scores"));
console.log("\n The Person data of highest scores that greater than 50 are\n", scores);

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < PERSONDATA.length - 1; i++) {
            if (PERSONDATA[i].rank > PERSONDATA[i + 1].rank) {
                var temp = PERSONDATA[i];
                PERSONDATA[i] = PERSONDATA[i + 1];
                PERSONDATA[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
bubbleSort(PERSONDATA);
console.log("\n The sorted data by ranks are \n", PERSONDATA);