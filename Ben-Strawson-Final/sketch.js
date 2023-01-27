// Balls oop final 
// Ben Strawson
// jan 27th
//
// Extra for Experts:
// if you click on a ball it will disapear 
// the balls bounce off of each other(sorta)

let ballsAR = [];

class Balls {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.xSpeed = random(-5,5);
    this.ySpeed = random(-5,5);
    this.rad = random(40,50);
    this.color = color(random(0,255),random(0,255),random(0,255));
  }

  move(){//moves ball
    if(this.x + this.xSpeed >= width || this.x + this.xSpeed <= 0){//checks to see if it would go off screen 
      this.xSpeed = this.xSpeed * -1;//makes the ball move the other direction if it would have gone off screeen

    }
    this.x += this.xSpeed;
  
    if(this.y + this.ySpeed >= height || this.y + this.ySpeed <= 0){
      this.ySpeed = this.ySpeed * -1;
    }
    this.y += this.ySpeed;
  }
  display(){//displays a circle
    fill(this.color);
    circle(this.x,this.y,this.rad*2);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <=5; i++){// repeats 5 times to make 5 balls
    let ball = new Balls(random(0,width),random(0,height));
    ballsAR.push(ball);
  }
}

function draw() {
  background(220);
  for (let i = ballsAR.length-1; i > 0; i--){//moves and displays each ball i the ball array
    ballsAR[i].move();
    ballsAR[i].display();
  }
  collide();
}

function keyTyped(){//adds new ball when a key is pressed
  let ball = new Balls(random(0,width),random(0,height));
  ballsAR.push(ball);
}

function mouseClicked(){//if mouse is clicked on a ball it deletes it 
  for (let i = ballsAR.length-1; i > 0; i--){
    if (dist (ballsAR[i].x, ballsAR[i].y, mouseX, mouseY) <= ballsAR[i].rad){
      ballsAR.splice(i,1);
    }
  }
}

function collide(){//makes the balls bounce off of each other in a wack way
  for (let i = ballsAR.length-1; i > 0; i--){
    for (let j = ballsAR.length-1; j > 0; j--){
      if (i !== j){
        if(dist(ballsAR[i].x, ballsAR[i].y, ballsAR[j].x, ballsAR[j].y) <= ballsAR[i].rad+ballsAR[j].rad){
          ballsAR[i].xSpeed = ballsAR[i].xSpeed *-1;
          ballsAR[i].ySpeed = ballsAR[i].ySpeed *-1;
          ballsAR[i].move();
          ballsAR[j].xSpeed = ballsAR[j].xSpeed *-1;
          ballsAR[j].ySpeed = ballsAR[j].ySpeed *-1;
          ballsAR[j].move();
        }
      }
    }
  }
}