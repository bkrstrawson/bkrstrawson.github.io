// square around edge
// ben
// sept 26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 1;
let y = 0;
let speed = 10;
let squaresize = 30;
let direction  = "east";
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  drawsquare();
}
function drawsquare(){
  square(x,y,squaresize);
  if (x <=0 && y >= 0){
    y-=speed;
    x = 0;
    direction = "north";
  }
  else if (y <= 0 && x<= windowWidth-squaresize){
    x+=speed;
    y= 0;
    direction="east";
  }
  else if (x>= windowWidth-squaresize && y<= windowHeight-squaresize){
    y+= speed;
    x = windowWidth-squaresize;
    direction = "south";
  }
  else if (y >= windowHeight-squaresize && x>=0){
    x-=speed;
    y=windowHeight-squaresize;
    direction = "west";
  }
  else {
    if (direction === "south"){
      x = windowWidth-squaresize;
    }

    else {
      y = windowHeight-squaresize;
    }
  }
}