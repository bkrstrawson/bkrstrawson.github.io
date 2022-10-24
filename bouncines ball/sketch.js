// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theCircles =[];



function setup() {
  createCanvas(windowWidth, windowHeight);
  theCircles.push(spawnBall(100,100));
}

function draw() {
  background(220);
  moveCircle();
  drawCircle();

}

function spawnBall(tempx, tempy){
  let newBall = {
    x:tempx,
    y:tempy,
    rad: random(25,100),
    dx : random(-5,5),
    dy: random(-5,5),
    Thecolor: color(random(255),random(255),random(255),random(255))
  };
  return newBall;
}
function drawCircle(){
  for (let thisCircle of theCircles) {
    noStroke();
    fill(thisCircle.Thecolor);
    circle(thisCircle.x,thisCircle.y,thisCircle.rad*2);
  }
}


function moveCircle(){
  for (let i = 0; i <theCircles.length;i++ ){
    theCircles[i].x += theCircles[i].dx;
    theCircles[i].y += theCircles[i].dy;

    if (theCircles[i].x + theCircles[i].rad > width || theCircles[i].x - theCircles[i].rad <0){
      theCircles[i].dx *= -1;
    }
    if (theCircles[i].y + theCircles[i].rad > height || theCircles[i].y - theCircles[i].rad <0){
      theCircles[i].dy *= -1;
    }
  }
}

function mousePressed(){
  theCircles.push(spawnBall(mouseX,mouseY));
}
