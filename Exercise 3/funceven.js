var a = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5];
var b = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5];
iseven(a, b);
function iseven(num1, num2) {
    for (var i = 0; i < num1.length; i++) {
        if (num1[i] % 2 == 0) {
            console.log(a[i]);
        }
        if (num2[i] % 2 == 0) {
            console.log(b[i]);
        }
    }
}
