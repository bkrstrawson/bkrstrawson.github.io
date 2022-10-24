// noise
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let allCIrcles =[]

function keyPressed(){
  let theBalls ={
    x: random(width),
    y: random(height),
    rad:random(50,100),
    time: random(50000),
  };
  allCIrcles.push(theBalls)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(0)
  for (let i = 0; i< allCIrcles.length; i++){
    allCIrcles[i].y = noise(allCIrcles[i].time*height)
    allCIrcles[i].x = noise(allCIrcles[i].time*width)
    circle(allCIrcles[i].x,allCIrcles[i].y,allCIrcles[i].rad)
  // time += 0.01;
  // x = noise(time)*width;
  // y = noise(time+1000)*height;
  // circle (x,y,rad*2);
}
}
