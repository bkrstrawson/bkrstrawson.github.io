// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  display();
 
}

function spawnCircle(){
  let  thisCircle = {
    x: mouseX,
    y: mouseY,
    rad: random(25-75),
    
  };
  theCircles.push ( thisCircle);
}

function mousePressed(){
  spawnCircle();
}
function display(){
  for (let i = 0; i < theCircles.length; i++){
    fill ("red");
    circle(theCircles[i].x,theCircles[i].y,theCircles[i].rad);
  }
}