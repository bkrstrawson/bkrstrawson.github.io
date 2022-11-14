// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Walker{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 10; 
    this.rad = 10;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.rad*2);
  }

  move(){
    
    let choice = random(100);
    if (choice < 25){
      this.y-= this.speed;
    }
  
    else if (choice < 50){
      this.y+= this.speed;
    }
    else if (choice < 75 ){
      this.x-= this.speed;
    }
    else if (choice < 100  ){
      this.x+= this.speed;
    }

}
}



let uday;
let saabir;
let ashley;
let ben;
let lila

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  uday = new Walker(width/2,height/2);
  saabir = new Walker(width/2,height/2);
  ashley = new Walker(width/2,height/2);
  ben =  new Walker(width/2,height/2);
  lila =  new Walker(width/2,height/2);
  ben. color = "purple";
  ashley.color = "green";
  saabir.color = "blue";
  lila.color = "orange"
}

function draw() {

  uday.display();
  saabir.display();
  ashley.display();
  ben.display();
  lila.display()

  uday.move();
  saabir.move();
  ashley.move();
  ben.move();
  lila.move()



}
