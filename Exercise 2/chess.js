var x = 8;
var y = 4;
var a = '';
for (var i = 1; i<=x; i++) 
{
  for (var j = 1; j<=y; j++) 
  {
    if (i % 2 == 0)
      a = a + "* ";
    else
      a = a + " #";
  }
  console.log(a)
  a = '';
}