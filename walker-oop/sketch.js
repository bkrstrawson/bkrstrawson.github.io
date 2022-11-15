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
    this.speed = 5; 
    this.rad = 5;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x,this.y,this.rad*2);
  }

  move(){
    
    let choice = random(100);
    if (choice < 25){ //up
      if (this.y-this.speed >= 0){
        this.y-= this.speed;
      }
    }
  
    else if (choice < 50){ // down
      if(this.y+this.speed <= height){
        this.y+= this.speed;
      }
    }
    else if (choice < 75 ){
      if (this.x-this.speed >= 0){
        this.x-= this.speed;
      }
    }
    else if (choice < 100  ){
      if (this.x+this.speed <= width){
        this.x+= this.speed;
      }
    }

  }
}



let walkerAr= [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  spawnWalker();
}

function draw() {

  for (let i = 0; i < walkerAr.length; i ++) {
    walkerAr[i].move();
    walkerAr[i].display();
  }
}

function spawnWalker(){
  let uday = new Walker(width/2,height/2);

  let saabir = new Walker(width/2,height/2);
  let ashley = new Walker(width/2,height/2);
  let ben =  new Walker(width/2,height/2);
  let lila =  new Walker(width/2,height/2);
  ben. color = "purple";
  ashley.color = "green";
  saabir.color = "blue";
  lila.color = "orange";
  walkerAr.push(uday);
  walkerAr.push(ashley);
  walkerAr.push(lila);
  walkerAr.push(ben);
  walkerAr.push(saabir);
}