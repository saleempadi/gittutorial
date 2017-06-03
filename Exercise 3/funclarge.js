var a = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5, 11];
islarge(a);
function islarge(num1) 
{
    var c = num1[0];
    for (var i = 1; i < num1.length; i++)
        if (c < num1[i])
            c = num1[i];
    console.log(c);

}