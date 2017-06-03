var i, j, n, c, z, values = ['Maplebots Team', 'kumhammed', 'saleem', 'jihan', 'sasikumar', 'tamilselvan', 'kaviyarasu', 'gowtham', 'kiruthika'];
var arraymax = Math.max.apply(Math, values.map(function (el) { return el.length }));

rectangularframe(values.length + 2, arraymax + 5);

function rectangularframe(line, character) {
    var dis = " ";                                       //temprovary storage
    for (i = 1; i <= line; i++) {
        for (j = 1; j <= character; j++) {
            if (j == character || j == 1 || i == 1 || i == line)
                dis += "*";
            else {
                for (z = 2; z <= arraymax; z++) {
                    if (i == z && j == z + 1) {
                        if (values[z - 2].length != arraymax) {
                            c = (arraymax + 4) - values[z - 2].length;
                            dis += " " + values[z - 2];
                            for (n = 1; n <= c - 2; n++) { dis += " " }
                        }
                        else
                            dis += " " + values[z - 2] + "  ";
                    }
                }
            }
        }
        console.log(dis);
        dis = " ";
    }
}