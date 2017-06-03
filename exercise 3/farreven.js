 const arr1 = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5];
const arr2 = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5];
var arr3 = [];
var arr4 = [];
function even1(num) {

    if ((num % 2) == 0) { arr3.push(num); }
}
function even2(num) {
    if ((num % 2) == 0) { arr4.push(num); }

}

for (i = 0; i <= arr1.length; i++) {
    even1(arr1[i]);
}
for (i = 0; i <= arr2.length; i++) {
    even2(arr2[i]);
}
console.log(arr3, arr4);
