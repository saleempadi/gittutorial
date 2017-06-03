var arr1 = ['Maplebots Team', 'kumhammed', 'saleem', 'jihan', 'sasikumar', 'tamilselvan', 'kaviyarasu', 'gowtham', 'kiruthika', 'universe'];

var dis = " ";
function displll(line, character) {
    for (var i = 1; i <= line; i++) {
        for (var j = 1; j <= character; j++) {
            if (j == character || j == 1 || i == 1 || i == line)
                dis += "*";
            else {
                for (var z = 2; z <= Math.max.apply(Math, arr1.map(function (el) { return el.length })) + 4; z++) {
                    if (i == z && j == z + 1) {
                        if (arr1[z - 2].length != Math.max.apply(Math, arr1.map(function (el) { return el.length }))) {
                            var c = (Math.max.apply(Math, arr1.map(function (el) { return el.length })) + 4) - arr1[z - 2].length;



                            dis += " " + arr1[z - 2];
                            for (var n = 1; n <= Math.round(c) - 2; n++) {

                                dis += " ";
                            }

                        }
                        else
                            dis += " " + arr1[z - 2] + " ";
                    }
                }

            }

        }
        console.log(dis);
        dis = " ";
    }
}
displll(arr1.length + 2, Math.max.apply(Math, arr1.map(function (el) { return el.length })) + 5);