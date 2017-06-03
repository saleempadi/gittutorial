 var array = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = array[0];
function high(largest) {
for (var i = 0; i <= largest; i++) {
        if (array[i] > largest) {
            var largest = array[i];
        }
    }
    console.log(largest);
}
high(largest);
