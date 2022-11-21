// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let guy;
let bulletsAR = [];
let flash = 0
let flashimg;

class bullet{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = 5;
  }
  move(){
    this.x += this.dx;
  }
  display(){
    fill("grey");
    circle(this.x+40,this.y,20);
    fill("yellow")
    rect(this.x,this.y-10,40,20)
  }
  delete(){
    return this.x > width;
  }
}

function preload(){
  guy = loadImage("guy w gun.png");
  flashimg = loadImage("flash.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(guy,0,0);
  if (flash > 0){
    image(flashimg,690,125)
    flash --
      }
  for (let i = bulletsAR.length-1; i > 0; i --){
    bulletsAR[i].display();
    bulletsAR[i].move();
    if (bulletsAR[i].delete()){
      bulletsAR.splice(i, 1);
    }
  }
  fill("white")
rect(1151,255,55,20)
fill("black")
text("GREGory",1151,270)
}

function mousePressed(){
  let bullets = new bullet(692,168);
  bulletsAR.push(bullets);
flash = 15
}

