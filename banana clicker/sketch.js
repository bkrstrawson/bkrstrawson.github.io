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
let array = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,2]
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
  drawOrangeNumber();
  //moveNanner();
  perSecond();
}
function keyPressed(){//basic baboon gives 1 banana per second costs 50 banan
  if (keyCode === 49){//1
    if (banana >= 50){
      banana-=50;
      bananaPerSecond+=1;
    }
  }

  if (keyCode === 50){//basic mandril gives 5 banana per second costs 200 banan
    if (banana >= 200){//2
      banana-=200;
      bananaPerSecond+=5;
    }
  }
  if (keyCode === 51){//more complex chimpanzee gives between 5 and 25 banana per second costs 500 banan
    if (banana >= 500){//3
      banana-=500;
      bananaPerSecond+=random(array);
    }
  }
  if (keyCode === 52){//basic gorilla gives 15 banana per second costs 500 banan
    if (banana >= 500){//4
      banana-=500;
      bananaPerSecond+=15;
    }
  }
  if (keyCode === 53){//basic orangutan gives 1 orange per 10 seconds costs 2000 banan
    if (banana >= 2000){//5
      banana-=2000;
      bananaPerSecond+=1;
    }
  }
}

function drawBananaNumber(){
  rect(0,0,textWidth(banana)+75,50);
  stroke(0);
  fill(0);
  textSize(32);
  text(banana, 10, 35);
  fill("white"); 
  image(imgBanana,textWidth(banana)+20,0,50,50);
}
function drawOrangeNumber(){
  rect(0,50,textWidth(orange)+75,50);
  stroke(0);
  fill(0);
  textSize(32);
  text(orange, 10,85);
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