var size = 5;
var output = " ";
for (var i = 1; i <= size; i++) {
    for (var j = size; j > i; j--) {
        output += " ";
    }
    for (j = 1; j <= i; j++) {
        output += i + ' ';
    }
    console.log(output);
   output = " ";
}