
function setup() {
  createCanvas(400, 400);
}

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
//
// }


let draw = (x, y) => {
  if (x > 100) {
    fill(0);
  } else {
    fill(255);
  }
  let mouseX = x;
  let mouseY = y;
  ellipse(mouseX, mouseY, 280, 280);

}



let drawing = (x, y)=>{
  if(x > 100){
    console.log(x)
  } else {
    console.log('nope')
  }
  }






// <!--  tracking.js script-->
      window.onload = function() {

        // var video = document.getElementById('video');
        // var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var tracker = new tracking.ObjectTracker('face');

        tracker.setInitialScale(4);
        tracker.setStepSize(2);
        tracker.setEdgesDensity(0.1);

        tracking.track('#video', tracker, { camera: true });

        tracker.on('track', function(event) {
          context.clearRect(0, 0, canvas.width, canvas.height);

          event.data.forEach(function(rect) {
            // console.log(rect, 1);
            context.strokeStyle = '#a64ceb';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
            draw(rect.x, rect.y);
            // drawing(rect.x, rect.y);
            // console.log(rect.x, rect.y)
          });
        });
      };
