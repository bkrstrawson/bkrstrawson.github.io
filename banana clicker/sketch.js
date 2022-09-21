// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let imgBackGround;
let imgBanana;
let banana = 0;
let bananaPerSecond = 0;
function preload() {
  imgBackGround = loadImage("banana clicker background1.png");
  imgBanana = loadImage("banana.png")
}
function setup() {

  createCanvas(windowWidth,windowHeight);
  
}

function mouseClicked(){
  banana+=1;
  console.log(banana);
  randomBanana();
}
function draw(){
  //image(imgBackGround, 0, 0, windowWidth, windowHeight);
  drawBananaNumber();
}
function keyPressed(){
  if (keyCode === 49){
    banana--;
    bananaPerSecond+=1;

  }
}
function drawBananaNumber(){
  let s = banana;
  rect(0,0,textWidth(s)+75,50);
  stroke(0);
  fill(0);
  textSize(32);
  text(s, 10, 30);
  fill("white"); 
  image(imgBanana,(textWidth(s)+20),0,50,50);
}
function randomBanana(){
  let height = windowHeight;
  let bananay=0;
  let bananax = random(0,windowWidth);
  while (height >=0 ){
    height-=0.01;
    image(imgBanana,bananax,bananay,30,30);
    bananay+=0.01
    
  }
}