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
let orange = 0;
let orangePerSecond =0;
// let x =0;
// let y =0;
// let bananax = random(0,windowWidth); 
function preload() {
  imgBackGround = loadImage("banana clicker background1.png");
  imgBanana = loadImage("banana.png");
}
function setup() {
  frameRate(30);
  createCanvas(windowWidth,windowHeight);
  
}

function mouseClicked(){
  banana+=1;
  console.log(banana);
  // randomBanana();
   
}
function draw(){
  image(imgBackGround, 0, 0, windowWidth, windowHeight);
  drawBananaNumber();
  //moveNanner();
  perSecond();
}
function keyPressed(){//basic baboon gives 1 banana per second costs 50 banan
  if (keyCode === 49){
    if (banana >= 50){
      banana-=50;
      bananaPerSecond+=1;
    }
  }
  if (keyCode === 49){//basic orangutan gives 1 orange per 10 seconds costs 1000 banan
    if (banana >= 50){
      banana-=50;
      bananaPerSecond+=1;
    }
  }
  if (keyCode === 50){//basic mandril gives 5 banana per second costs 200 banan
    if (banana >= 200){
      banana-=200;
      bananaPerSecond+=5;
    }
  }
  if (keyCode === 51){//more complex chimpanzee gives between 5 and 25 banana per second costs 500 banan
    if (banana >= 500){
      banana-=500;
      bananaPerSecond+=random(5,25);
    }
  }
  if (keyCode === 52){//basic gorilla gives 15 banana per second costs 500 banan
    if (banana >= 500){
      banana-=500;
      bananaPerSecond+=15;
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
  image(imgBanana,textWidth(banana)+20,0,50,50);
}
// function randomBanana(){
  
//   }

// function moveNanner(){
//   image(imgBanana,bananax, y ,30,30);
//   y++;
// }

function perSecond(){
  if (frameCount% 30 ===0){
    banana +=bananaPerSecond;
  }
  if (frameCount%300 ===0){
    orange += orangePerSecond;
  }
}