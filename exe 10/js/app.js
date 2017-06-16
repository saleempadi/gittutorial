
    $("button").click(function(){
       alert("Alert...");
    
});
$('#para1').css(
      {
            'font-weight': 'bold'
      });
$('#para1').css(
      {
            'font-size': '25px'
      });
 
$(".box1").on("click", function () {
      $(this).css("background", "green");
});


$(".box2").on("click", function () {
      var $elie = $(".box2"), degree = 0, timer;
      rotate();
      function rotate() {
            $(".box2").css("background", "blue");
            $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)' });
            $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)' });
            timer = setTimeout(function () {
                  ++degree; rotate();
            });
      }
});
$('#box3').hover(
      function () {
            $(this).css({ "background-color": "green" });
      },
      function () {
            $(this).css({ "background-color": "red" });
      }
);

$("#input1").focusout(function () {
      console.log($("#input1").val());

});

//box 4 animation move left top to right down
$("#box4").animate({ left: '+=395', top: '+=149' }, 8000);


