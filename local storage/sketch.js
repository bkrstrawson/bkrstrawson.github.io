// 9/11 was the amercas fualt
// saddam hussein 
// sept 11 2001
//
// Extra for Experts:
// the pentagon
// the white house(didnt finish)

let number = 0;
let high = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highscore")!== null){
    high = getItem("highscore");
  }
  else{
    storeItem("highscore",0);
  }
}

function draw() {
  background(220);
  fill("black");
  textSize(150);
  text(number,width/2,height/2);

  fill("red");
  text(high,50,height-100);
}

function mousePressed(){
  number+= 1;
  if(number > getItem("highscore")){
    high = number;
    storeItem("highscore",number);
  }
}
