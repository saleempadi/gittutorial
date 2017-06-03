var arr1 = ['Hello', 'World'];

var cnt = " ";
function displll(line,character)
{
for (var i = 1; i <= line; i++) {
    for (var j = 1; j <= character; j++) {
        if (j == character || j == 1 || i == 1 || i == line)
            cnt += "*";
        else
{

   if (i==2 && j == 3)
    cnt+=" "+ arr1[0]+" ";
    else if (i==3 && j==4)
    cnt+=" "+ arr1[1]+" ";
}

       

   }
    console.log(cnt);
    cnt = " ";
}
}
displll(arr1.length+2,9);