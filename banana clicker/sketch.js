// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let imgGameBackGround;
let imgStartBackGround;
let imgBanana;
let imgorange;
let imgTitleBananan;
let clickerFont;
let banana = 0;
let bananaPerSecond = 0;
let orange = 0;
let orangePerSecond =0;
let chimp = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let sometime = 1000;
let state = "start";

let bananaXArray =[];
let bananaYArray = [];

 let x =0;
 let y =0;
 let gameY = 0;
 
function preload() {
  imgGameBackGround = loadImage("banana clicker background1.png");
  imgBanana = loadImage("banana.png");
  imgorange = loadImage("orange.png");
  imgTitleBananan = loadImage("bananan font banana.png");
  imgStartBackGround =loadImage("banana background startscreen.jpg");
  clickerFont =loadFont("Minimal Performance.ttf");
}
function setup() {
  frameRate(30);
}

function mousePressed(){
  if (state==="game")
  banana+=1;
  console.log(banana);
  
  randomBanana();
   
}
function draw(){
  createCanvas(windowWidth,windowHeight);
  statScreen();
  gameRunning();
  console.log(bananaXArray);
  console.log(y-bananaYArray[1]> windowHeight);
  console.log(windowHeight)
  console.log (y-bananaYArray[1])

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
      bananaPerSecond+=random(chimp);
    }
  }
  if (keyCode === 52){//basic gorilla gives 15 banana per second costs 500 banan
    if (banana >= 500){//4
      banana-=500;
      bananaPerSecond+=15;
    }
  }
  if (keyCode === 53){//basic orangutan gives 1 orange per 1 seconds costs 2000 banan
    if (banana >= 2000){//5
      banana-=2000;
      orangePerSecond+=1;
    }
  }
}

function drawBananaNumber(){
  rect(0,0,textWidth(banana)+75,65);
  stroke(0);
  fill(0);
  textSize(8);
  text(bananaPerSecond+" per second ",10,55);
  textSize(32);
  text(banana, 10, 35);
  fill("white"); 
  image(imgBanana,textWidth(banana)+20,0,50,50);
}
function drawOrangeNumber(){
  if (orange!== 0){
    rect(0,65,textWidth(orange)+75,65);
    stroke(0);
    fill(0);
    textSize(8);
    text(orangePerSecond+" per second ",10,120);
    textSize(32);
    text(orange, 10,100);
    fill("white"); 
    image(imgorange,textWidth(orange)+20,65,50,50);
  }
}
 function moveNanner(){
  y+=5
   for (let i = bananaXArray.length; i > 0; i --){
    let bananax = bananaXArray[i-1];
    let bananay = y-bananaYArray[i-1];
    image(imgBanana,bananax,bananay,50,50)
    if (y-bananaYArray[i-1]> windowHeight){
  //     bananaXArray.reverse()
  //  bananaXArray = bananaXArray.pop()
  //   bananaXArray.reverse()
  bananaXArray=bananaXArray.slice(1)
  bananaYArray=bananaYArray.slice(1)
    }

   }
  //  
  }

 function randomBanana(){
   bananaXArray.push(random(0,windowWidth))
   bananaYArray.push(y-40)
 }

function perSecond(){
  if (millis() >=sometime){
    banana +=bananaPerSecond;
    orange += orangePerSecond;
    sometime = millis() +1000;

  }
}
function gameRunning(){
  if (state === "game"){
    image(imgGameBackGround, 0, 0, windowWidth, windowHeight);
    drawBananaNumber();
    drawOrangeNumber();
    moveNanner();
    perSecond();
  }
}
function statScreen(){
  if (state === "start"){
    drawStartstuff();
    startButton();
  }
}

function drawStartstuff(){
  image(imgStartBackGround, 0, 0, windowWidth, windowHeight);
  fill("white");
  rect(windowWidth/2-300,50,600,300,);
  image(imgTitleBananan,windowWidth/2-750,-250,1500,800);
  textFont(clickerFont);
  textSize(45);
  fill("black");
  let x = textWidth("Clicker");
  text("Clicker",windowWidth/2-x/2,250,500,300);
}

function startButton(){
  if (mouseX > windowWidth/2-200 && mouseX < windowWidth/2+200 && mouseY > windowHeight-300 && mouseY < windowHeight-175){
    fill("black");
    rect(windowWidth/2-200,windowHeight-300,400,125);
    fill("white");
    text("Start",windowWidth/2-textWidth("start")/2,windowHeight-200);
    if (mouseIsPressed){
      state = "game";
    }
  }
  else{
    fill("white");
    rect(windowWidth/2-200,windowHeight-300,400,125);
    fill("black");
    text("Start",windowWidth/2-textWidth("start")/2,windowHeight-200);
  }
}