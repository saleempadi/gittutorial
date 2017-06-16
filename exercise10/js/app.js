//box 1 click change to green
$(".box1").on("click", function () {
      $(this).css("background", "green");
});

//box 2 click the box rotate and chage color to blue
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

//Para change the font style and font size
$('#para1').css(
      {
            'font-weight': 'bold'
      });
$('#para1').css(
      {
            'font-size': '25px'
      });


//Button1 click it's shows a alert mssage
$("#button1").click(function () {
      alert("The user click the button");
});

//box 3 mouse move out it chage to green
$('#box3').hover(
      function () {
            $(this).css({ "background-color": "green" });
      },
      function () {
            $(this).css({ "background-color": "red" });
      }
);

//text box entry display to console
$("#input1").focusout(function () {
      console.log($("#input1").val());

});

//box 4 animation move left top to right down
$("#box4").animate({ left: '+=395', top: '+=149' }, 8000);


