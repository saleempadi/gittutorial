fun(6);
function fun(value) {
    var angle = "", i, j;
    for (i = 1; i <= value; i++) {
        for (j = 1; j <= i; j++) {
            angle += i;
        }
        console.log(angle);
        angle = "";
    }
}