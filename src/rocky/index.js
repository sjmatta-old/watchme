var rocky = require('rocky');

rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;
  
  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  
  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;

  // Current date/time
  var d = new Date();

  // Set the text color
  ctx.fillStyle = 'white';

  // Center align the text
  ctx.textAlign = 'center';

  // Display the time, in the middle of the screen
  ctx.fillText(d.toLocaleTimeString(), w / 2, h / 2, w);
});