var rows = 5;
var a = " ";
for (var i = 1; i <= rows; i++) 
{
    for (var j = 1; j <= i; j++) 
    {
        a = a + i + " ";
    }
    console.log(a);
    a = " ";
}