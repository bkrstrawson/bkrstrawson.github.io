// Banana Clicker
// Ben Strawson
// oct
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"




let imgGameBackGround;
let imgStartBackGround;
let imgBanana;
let imgorange;
let imgTitleBananan;
let imgChimp;
let imgBaboon;
let imgMandrill;
let imgOragutan;
let imgGorilla;

let clickerFont;
let banana = 0;
let bananaPerSecond = 0;
let orange = 0;
let orangePerSecond =0;
let chimp = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let sometime = 1000;
let state = "start";
let banana1;
let orange1; 

let bananaXArray =[];
let bananaYArray = [];

let x =0;
let y =0;
let gameY = 0;
 
function preload() {//loading images and fonts
  imgGameBackGround = loadImage("imgs/banana clicker background1.png");
  imgBanana = loadImage("imgs/banana.png");
  imgorange = loadImage("imgs/orange.png");
  imgTitleBananan = loadImage("imgs/bananan font banana.png");
  imgStartBackGround =loadImage("imgs/banana background startscreen.jpg");

  imgBaboon = loadImage("imgs/baboon.jpg");
  imgChimp = loadImage("imgs/chimp.png");
  imgMandrill = loadImage("imgs/mandrill.png");
  imgGorilla = loadImage("imgs/gorilla.png");
  imgOragutan = loadImage("imgs/orangutan.png");

  clickerFont =loadFont("Minimal Performance.ttf");
}
function setup() {//sets frame rate
  frameRate(30);
}

function mousePressed(){//when mouse pressed adds banana to count and starts the banana animation
  if (state==="game") {
    banana+=49;
    randomBanana();
  }

}
function draw(){
  createCanvas(windowWidth,windowHeight);
  if (windowWidth <= 600){
    background("red");
    textSize(25);
    fill("black");
    text("PlEASE USE A BIGGER SCREEN", 25, windowHeight/2,windowWidth,windowHeight);
  }
  else if (windowHeight <= 600){
    background("red");
    fill("black");
    textSize(25);
    text("PlEASE USE A BIGGER SCREEN",25, windowHeight/2,windowWidth,windowHeight);
  }
  else{
    //  console.log(windowWidth)
    //  console.log(windowHeight)
    statScreen();
    gameRunning();
  }
}
function keyPressed(){//if one of the shop kesy are pressed buys the monkey and increases banana per second
  if (keyCode === 49){//basic baboon gives 1 banana per second costs 50 banan
    if (banana >= 50){//1
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

function drawBananaNumber(){//draws banana score
  banana1 = round(banana);
  textSize(32);
  rect(0,0,textWidth(banana1)+75,65);
  stroke(0);
  fill(0);
  textSize(8);
  text(bananaPerSecond+" per second ",10,55);
  textSize(32);
  text(banana1, 10, 35);
  fill("white"); 
  image(imgBanana,textWidth(banana1)+20,0,50,50);
}
function drawOrangeNumber(){//draws orange score
  if (orange!== 0){
    orange1 = round(orange);
    rect(0,65,textWidth(orange1)+75,65);
    stroke(0);
    fill(0);
    textSize(8);
    text(orangePerSecond+" per second ",10,120);
    textSize(32);
    text(orange1, 10,100);
    fill("white"); 
    image(imgorange,textWidth(orange1)+20,65,50,50);
  }
}
function moveNanner(){//does the banana animation
  y+=5;
  for (let i = bananaXArray.length; i > 0; i --){
    let bananax = bananaXArray[i-1];
    let bananay = y-bananaYArray[i-1]-100;
    image(imgBanana,bananax,bananay,50,50);
    if (y-bananaYArray[i-1]-100> windowHeight){
      bananaXArray=bananaXArray.slice(1);
      bananaYArray=bananaYArray.slice(1);
    }

  }
}

function randomBanana(){//makes a new banana at a random x to animate
  bananaXArray.push(random(0,windowWidth));
  bananaYArray.push(y-40);
}

function perSecond(){//happens 1 time per second, increases banana and orange by how many per secod
  if (millis() >=sometime){
    banana +=bananaPerSecond/10;
    orange += orangePerSecond/10;
    sometime = millis() +100;
    
  }
}
function gameRunning(){//draw loop for when game is running
  if (state === "game"){
    image(imgGameBackGround, 0, 0, windowWidth, windowHeight);
    drawBananaNumber();
    drawOrangeNumber();
    moveNanner();
    perSecond();
    drawMonkeys();
  }
}
function statScreen(){//draw loop for when start screen
  if (state === "start"){
    drawStartstuff();
    startButton();
  }
}

function drawStartstuff(){//draws title
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

function startButton(){//draws start button and makes it clickable
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
function drawMonkeys(){
  if (banana >= 50){
    image(imgBaboon, windowWidth/6,windowHeight/5 *3  ,200,200);
    if (mouseX >= windowWidth/6 && mouseX <=windowWidth/6 +200 && mouseY >=windowHeight/5 *3 && mouseY <=windowHeight/5 *3 + 200){
      drawMonkeyInfomation("1","50","1","banana","baboon");
    }
  }
  if (banana >= 200){
    image (imgMandrill, windowWidth/5*2,windowHeight/7*4, 150,150);
    if (mouseX >= windowWidth/5*2 && mouseX <=windowWidth/5*2 +150 && mouseY >=windowHeight/7 *4 && mouseY <=windowHeight/7 *4+150){
      drawMonkeyInfomation("2","200","5","banana","mandrill");
    }
  }
  if (banana >=500){
    image (imgGorilla, windowWidth/7 * 3, windowHeight/3, 250,250);
    if (mouseX >= windowWidth/7 *3 && mouseX <=windowWidth/7*3 +250 && mouseY >=windowHeight/3 && mouseY <=windowHeight/3 +200){
      drawMonkeyInfomation("4","500","15","banana","gorilla");
    }
    image (imgChimp, windowWidth/7 * 6, windowHeight/9*6, 200,200);
    if (mouseX >= windowWidth/7*6 && mouseX <=windowWidth/7*6 +200 && mouseY >=windowHeight/9 *6 && mouseY <=windowHeight/9 *6 +200){
      drawMonkeyInfomation("3","500","5-25","banana",+"chimpanzee");
    }
  }
  if (banana >= 2000){
    image (imgOragutan,windowWidth/9*6,windowHeight/2,300,300);
    if (mouseX >= windowWidth/9*6 && mouseX <=windowWidth/9*6 +300 && mouseY >=windowHeight/2 && mouseY <=windowHeight/2 +200){
      drawMonkeyInfomation("5","2000","1","orange","orangutan");
    }
  }
  
  
}
function drawMonkeyInfomation(buyKey,cost,numberOfBanana,fruit,monkeyType){
  fill("white");
  rect(windowWidth/2 - 200, 0, 400,160);
  textSize(18);
  fill("black");
  text("monkey information",windowWidth/2 - textWidth("monkey information")/2,30);
  textSize(15);
  text ( monkeyType, windowWidth/2 - textWidth( monkeyType)/2,60);
  text("Buy key = " + buyKey,windowWidth/2 - textWidth("Buy key = ")/2,90);
  text ("cost "+ cost + " bananas",windowWidth/2 - textWidth("cost "+ cost+ " bananas")/2,120);
  text (numberOfBanana +" "+ fruit + "s per second" ,windowWidth/2 - textWidth(numberOfBanana + fruit + "s per second"/2),150);
}