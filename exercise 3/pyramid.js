var Rows = 4;
var state = " ";
for (var i = 1; i <= Rows; i++) {
    for (var j = Rows; j > i; j--) {
        state += " ";
    }
    for (j = 1; j <= i; j++) {
        state += i + ' ';
    }
    console.log(state);
    state = " ";
}
