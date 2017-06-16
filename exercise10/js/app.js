$("#box1").on("click" , function() {
    $(this).css("background", "green");
});
     
      $("#button1").click(function()
      {
          alert("Oops!!! You have clicked me..!!!");
      });
  
   $('#para1').css({
       'font-weight':'bold'
});
 $('#para1').css({
     'font-size':'30px'
});

$(document).ready(function()
{
    $("#box3").mouseover(function()
    {
        $("#box3").css("background-color", "green");
    })
    $("#box3").mouseout(function()
    {
        $("#box3").css("background-color", "red");
    });
})
$("#box4").animate({left: '+=395', top: '+=149'}, 2000);


      var $elie = $(".box2"), degree = 0, timer;
      rotate();
      function rotate() {
            $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
            $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
            timer = setTimeout(function () {
                  ++degree; rotate();
            });
      }


$("#input1").focusout(function () {
    console.log($("#input1").val())
});