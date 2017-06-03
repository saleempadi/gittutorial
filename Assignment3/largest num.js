var array = [5, 6, 7, 8, 32, 45, 38];
var largest = array[0];
high(largest);
function high(largest) {
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > largest) {
            var largest = array[i];
        }
    }
    console.log(largest);
}
