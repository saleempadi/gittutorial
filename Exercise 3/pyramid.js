var n = 5;
var a = " ";
for (var i = 1; i <= n; i++) 
{
    for (var j = n; j > i; j--) 
    {
        a = a + " ";
    }
    for (j = 1; j <= i; j++) 
    {
        a = a + i + ' ';
    }

    console.log(a);
    a = " ";
}

