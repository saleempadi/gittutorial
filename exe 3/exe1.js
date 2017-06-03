const arr1 = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5];
const arr2 = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5];
function even(num) {
    if ((num % 2) == 0) {
        console.log(num);
    }

}
for (i = 0; i <= arr1.length; i++) {

    even(arr1[i]);
}