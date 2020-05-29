window.onload = function () {
  //Select what we want to drag
  var ball = document.querySelector("#ball")

  //Listen to the touchmove event, every time it fires, grab
  //the location of the touch then assign it to ball
  ball.addEventListener("touchmove", function (ev) {
    //Grab the location of touch
    var touchLocation = ev.targetTouches[0]

    //assig ball new coordinates based on the touch
    ball.style.left = touchLocation.pageX + "px"
    ball.style.top = touchLocation.pageY + "px"
  })
}
