

var arr1 = ['The Quick', 'Brown', 'fox'];

var sphere = Math.max.apply(Math, arr1.map(function (array) {
    return array.length
}));

var space = " ";
hollow(arr1.length + 2, Math.max.apply(Math, arr1.map(function (array) { return array.length })) + 5); // function Declaration

function hollow(line, character) // function definition
{
    for (var i = 1; i <= line; i++) {
        for (var j = 1; j <= character; j++) {
            if (j == character || j == 1 || i == 1 || i == line)
                space = space + "*";
            else {
                for (var z = 2; z <= sphere + 4; z++) {
                    if (i == z && j == z + 1) {
                        if (arr1[z - 2].length != sphere) {
                            var c = (sphere + 4) - arr1[z - 2].length;
                            space = space + " " + arr1[z - 2];
                            for (var n = 1; n <= c - 2; n++) {
                                space = space + " ";
                            }
                        }
                        else
                            space = space + " " + arr1[z - 2] + "  ";
                    }
                }
            }
        }
        console.log(space);
        space = " ";
    }
}
