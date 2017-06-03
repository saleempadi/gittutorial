var array1 = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5];
var array2 = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5];
iseven(array1, array2);
function iseven(number1, number2) 
{
    for (var i = 0; i < number1.length; i++)
    {
        if (number1[i] % 2 == 0)
        {
            console.log(array1[i]);

      }

if (number2[i] % 2 == 0)
        {
            console.log(array2[i]);
        }    }

}
