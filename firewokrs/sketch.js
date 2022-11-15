// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let fireworksAR =[];
class particle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = random(-5,5);
    this.dy = random(-5,5);
    this.r=0;
    this.b=0;
    this.g=0;
    this.alpha=255;
    this.color = color(this.r,this.g,this.b,this.alpha);
    this.rad = 2;
  }
  update(){
    //move
    this.x +=this.dx;
    this.y += this.dy;
    //alpha
    this.alpha--;
    this.color = color(this.r,this.g,this.b,this.alpha);
  }
  display(){
    fill(this.color);
    stroke(this.color);
    circle(this.x,this.y,this.rad);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for(let i = 0; i<fireworksAR.length; i++){
    fireworksAR[i].update();
    fireworksAR[i].display();
    if(fireworksAR[i].alpha <= 0){
      fireworksAR.
    }
  }
}

function mousePressed(){
  let red = random(255);
  let blue = random(255);
  let green = random(255);
  for(let i = 0; i<100; i++){
    let someparticle = new particle(mouseX,mouseY);
    someparticle.r = red
    someparticle.g = green
    someparticle.b = blue
    fireworksAR.push(someparticle);
  }
}
