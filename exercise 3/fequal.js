var rows = 4;
var a = 1;
var c= [];
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
        c.push(a);
    }
    a++;
}
console.log(c);