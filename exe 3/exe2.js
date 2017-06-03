var a = [3, 6, 2, 56, 32, 5, 89, 32];
var larger = a[0];
function high(larger) {
    for (var i = 0; i <= larger; i++) {
        if (a[i] > larger) {
            var larger = a[i];
        }
    }
    console.log(larger);
}
high(larger);