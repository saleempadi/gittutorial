//Write your jQuery code in this file
var box4=0;
var box1=0;
var font=0;
var rotation=0;

//Box1 Background Change
$(".box1").on("click", function() {
    $(this).css("background", "green");
    if(box1==0)
  {
 $(this).css("background", "green");
box1++;
}
else
{
 $(this).css("background", "red");
box1--;
}
}); 

// Letter Large and Small
$("#para1").on("click", function() {
  
if(font==0)
  {
$('#para1').css(
      {'font-weight':'400'
});
$('#para1').css(
      {'font-size':'30px'
});
font++;
}
else
{
$('#para1').css(
      {'font-weight':'normal'
});
$('#para1').css(
      {'font-size':'16px'
});
font--;
}
});


//Box2 Rotation
  $(".box2").on("click", function() {

    var $elie = $(".box2"), degree = 0, timer;
    rotate();
    function rotate() {
         $(".box2").css("background", "green");
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
        timer = setTimeout(function() {
            ++degree; rotate();
        });
    } 
    /*
    $(".box1").toggle(function() {
        clearTimeout(timer);
    }, function() {
        rotate();
    });*/
}); 


//Button Click

$("#button1").on("click", function() {
    alert("You Clicked me...!");
}); 


// Box3 Mouse Hover
    $(".box3").mouseover(function(){
        $(".box3").css("background-color", "green");
    });
    $(".box3").mouseout(function(){
        $(".box3").css("background-color", "red");
    });

// Console Log Text Display
$("#input1").focusout(function () {
    console.log($("#input1").val());

});

//Box4 Animate 
$("#box4").on("click", function() {
  
  if(box4==0)
  {
$("#box4").animate({left: '+=400', top: '+=145'}, 2000);
$("#box4").css("background-color", "green");
box4++;
}
else
{
$("#box4").animate({left: '-=400', top: '-=145'}, 2000);
$("#box4").css("background-color", "red");
box4--;
}
});


/* Css Script in animation
.box2 {
    -webkit-animation: spin 5s infinite;   
    animation: spin 5s infinite;
}*/





    


















   