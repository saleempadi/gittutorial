var arr1 = ['wezkoz', 'maple '];

var dis = " ";
function sample(line, char) {
    for (var i = 1; i <= line; i++) {
        for (var j = 1; j <= char; j++) {
            if (j == char || j == 1 || i == 1 || i == line)
                dis += "*";
            else {

                if (i == 2 && j == 3)
                    dis += " " + arr1[0] + " ";
                else if (i == 3 && j == 4)
                    dis += " " + arr1[1] + " ";
            }



        }
        console.log(dis);
        dis = " ";
    }
}
sample(arr1.length + 2, 9);