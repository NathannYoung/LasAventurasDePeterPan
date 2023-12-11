
let app;


function setup() {
  createCanvas(windowWidth, windowHeight);
  app = new App();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  relatoManager.windowResized();
}

function draw() {
  app.dibujar();
}


function mousePressed() {
  app.mousePresionado();
 
}

function mouseReleased() {
  app.mouseLiberado();
 
}
