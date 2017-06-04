
let faces = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  if(faces.length == 0) {
    background(0, 255, 0);
  } else {
    background(faces[0].x, faces[0].y, 0, 30);
  }
  faces.forEach(face => {
    console.log(face)
    drawFace(face);
  });
  drawFunStuff();
}

function drawFace(faceObj) {
  if (faceObj.x > 100) {
    fill(0);
  } else {
    fill(255, 0, 0);
  }
  let mappedX = map(faceObj.x, 0, 320, 0, width * devicePixelRatio);
  let mappedY = map(faceObj.y, 0, 240, 0, height * devicePixelRatio);
  ellipse(mappedX, mappedY, faceObj.width, faceObj.height)
}

function drawFunStuff() {

}

/*
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
*/


// <!--  tracking.js script-->
window.onload = function() {
  var tracker = new tracking.ObjectTracker("face");
  tracker.setInitialScale(4);
  tracker.setStepSize(.5);
  tracker.setEdgesDensity(0.1);

  tracking.track("#video", tracker, { camera: true });

  tracker.on("track", function(event) {
    if(event.data.length > 0) { // hang on to last faces if no new faces were found
      faces = event.data;
    }
  });
};


/*
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.strokeStyle = '#a64ceb';
      context.strokeRect(rect.x, rect.y, rect.width, rect.height);
      context.font = '11px Helvetica';
      context.fillStyle = "#fff";
      context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
      context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
      draw(rect.x, rect.y);
      // drawing(rect.x, rect.y);
      // console.log(rect.x, rect.y)
      */
