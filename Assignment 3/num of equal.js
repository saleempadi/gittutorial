
var angle = "";
triangle(6);
function triangle(val)
{
for (var i = 0; i <= val; i++) {
    for (var j = 0; j <= i; j++) {
        angle += i + "";
    }
    console.log(angle);
    angle = "";
}
}