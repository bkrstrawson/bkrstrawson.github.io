// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let guy;
let bulletsAR = [];

class bullet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
  }
  move(){
    this.x -= this.dx;
  }
  display(){
    fill("black");
    circle(this.x,this.y,20);
  }
  delete(){
    return this.x < 0;
  }
}

function preload(){
  guy = loadImage("guy w gun.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(guy,width-guy.width,0);
  for (let i = bulletsAR.length-1; i > 0; i --){
    bulletsAR[i].display();
    bulletsAR[i].move();
    if (bulletsAR[i].delete()){
      bulletsAR.splice(i, 1);
    }
  }
}

function mousePressed(){
  let bullets = new bullet(609,168);
  bulletsAR.push(bullets);
}
