var column = 6;
var pyramid = " ";
for (var i = 1; i <= column; i++) {
    for (var j = column; j > i; j--) {
        pyramid += " ";
    }
    for (j = 1; j <= i; j++) {
        pyramid += i + ' ';
    }
    console.log(pyramid);
    pyramid = " ";
}