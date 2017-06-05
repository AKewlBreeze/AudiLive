let faces = [];
let system;



function setup() {
  createCanvas(600, 600);
  system = new ParticleSystem(createVector(width/2, 50));
}

function draw() {
  if(faces.length == 0) {
    background(153, 0, 0);
  } else {
    background(faces[0].x, faces[0].y, 0, 30);
  }
  faces.forEach(face => {
    drawFace(face);
    system.addParticle();
    system.run();

  });


}


var Particle = function(position) {
  this.acceleration = createVector(0, 0.05, 250);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 1000.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};


Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};


Particle.prototype.display = function() {
  stroke(20, this.lifespan);
  strokeWeight(1);
  fill(127, this.lifespan);
  triangle(this.position.x, this.position.y, 0, 0);

};


Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};


var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};



function drawFace(faceObj) {
  if (faceObj.x > 250) {
    fill(0);
  } else {
    fill(250);
  }
  let mappedX = map(faceObj.x, 0, 320, 0, width * devicePixelRatio);
  let mappedY = map(faceObj.y, 0, 240, 0, height * devicePixelRatio);
  triangle(mappedX, mappedY, faceObj.width, faceObj.height)
}


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
