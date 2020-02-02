console.log("hello");
// document.getElementById("slider__nut-1").onmouseup = showCoords(event);

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  console.log(x, y);

  if (x > 500 && x < 600 && y > 200 && y < 300) {
    console.log("lon hon 500");
  }
  onmousemove = function(params) {
    document.getElementById("slider__nut-1").style.left = x - 10 + "px";
  };
}
