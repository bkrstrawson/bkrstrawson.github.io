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
    if (banana >= 50){
      banana-=50;
      bananaPerSecond+=1;
    }
  }
}
function drawBananaNumber(){
  rect(0,0,textWidth(banana)+75,50);
  stroke(0);
  fill(0);
  textSize(32);
  text(banana, 10, 30);
  fill("white"); 
  image(imgBanana,(textWidth(banana)+20),0,50,50);
}
function randomBanana(){
  
  let bananay=0;
  let bananax = random(0,windowWidth); 
  for (let height = windowHeight; height >0; height-=0.01){
    bananay +=0.01;
    image(imgBanana,bananax, bananay,30,30);
  }
}
