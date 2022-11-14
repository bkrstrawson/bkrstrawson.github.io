// flow
// bes
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let grid = [];
let lineGrid = [];
let gridSize = 5;
let cellsize;
let colorState = " ";
let xpos;
let ypos;
let xposPast;
let yposPast;
let rDone = false;
let bDone = false;
let gDone = false;
let yDone = false;
let allDone = false;
let onScreen = false;
let index;
let level;
let levelname;
let levels;
let gameState = 0;
let pastgameState = 0;
let liner = 10;
let lineg = 10;
let lineb = 10;
let liney = 10;
let title;
let endscreen;

function preload(){
  levels = loadStrings("levels/level");
  title = loadImage("title.jpg");
  endscreen = loadImage("end screen.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createGrid();
}

function draw() {
  console.log(gameState);
  if (gameState !== 7){
    drawStuff();
    if (gameState !== 0){  
      displayGrid(grid);
      noStroke();
      drawCircles(grid);
      checkcollisons();
      drawLines();
      connectLines();

      if (onScreen){
        changeLines();
      }
      checkWin();
    }
    else {
      drawTitle();
      startButton();
    }
  
    changeLevel();
  }
}

function drawStuff(){//just the stuff that nees to happen in the draw loop and doesnt fit anywhere else(only to clean up thye draw loop because uday said it was gross)
  if (Math.floor ((mouseX-width/4)/cellsize) <=4 && Math.floor ((mouseX-width/4)/cellsize) >=0 && (Math.floor (mouseY/cellsize) <=4 && Math.floor (mouseY/cellsize)>=0)){
    xpos = Math.floor ((mouseX-width/4)/cellsize); 
    ypos = Math.floor (mouseY/cellsize);
    onScreen = true;
  }
  else{
    onScreen = false;
    deleteLine(colorState);
  }
  cellsize = height/gridSize;
}

function createGrid(){//creates an empty grid for line grid when there is a new level
  for (let i = 0; i < gridSize; i ++){
    lineGrid.push([]);
    for (let k = 0; k < gridSize; k ++){
      lineGrid[i].push(0);

    }
  }
}

function drawTitle(){//draws title image
  image(title,width/4,0,height,height);
}

function startButton(){//draws start button and makes it clickable
  textSize(50);
  if (mouseX > windowWidth/2-200 && mouseX < windowWidth/2+200 && mouseY > windowHeight-300 && mouseY < windowHeight-175){
    stroke(255);
    fill("black");
    rect(windowWidth/2-200,windowHeight-300,400,125);
    fill("white");
    text("Start",windowWidth/2-textWidth("start")/2,windowHeight-200);
    if (mouseIsPressed){
      gameState = 1;
    }
  }
  else{
    fill("white");
    rect(windowWidth/2-200,windowHeight-300,400,125);
    fill("black");
    text("Start",windowWidth/2-textWidth("start")/2,windowHeight-200);
  }
}

function displayGrid(grid) {//displays the empty grid
  stroke(255);
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      fill("black");
      
      rect(x*cellsize + width/4, y*cellsize, cellsize, cellsize);
    }
  }
}

function drawCircles(grid){//looks at each spot in the grid and draws either the big circle or the little circle of the color
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if(grid[y][x] === "G1"||grid[y][x] === "G"){
        fill ("green");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/2);
      }
      if(grid[y][x] === "B"||grid[y][x] === "B1"){
        fill ("blue");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/2);
      }
      if(grid[y][x] === "R"||grid[y][x] === "R1"){
        fill ("red");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/2);
      }
      if(grid[y][x] === "Y"||grid[y][x] === "Y1"){
        fill ("yellow");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/2);
      }
      if(grid[y][x] === "g"|| grid[y][x] === "endg"){
        fill ("green");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/3);
      }
      if(grid[y][x] === "b"||grid[y][x] === "endb"){
        fill ("blue");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/3);
      }
      if(grid[y][x] === "r"|| grid[y][x] === "endr"){
        fill ("red");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/3);
      }
      if(grid[y][x] === "y"|| grid[y][x] === "endy"){
        fill ("yellow");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/3);
      }
    }
  }
}

function drawLines(){//changes colorstate based on what color your hovering on
  if (xpos >= 0 && xpos < gridSize && ypos >=0 && ypos < gridSize) {
    if (grid[ypos][xpos]==="G" || grid[ypos][xpos]==="endg" ){
      colorState = "g";
    }
    else if (grid[ypos][xpos]==="B"|| grid[ypos][xpos]==="endb"){
      colorState = "b";
    }
    else if (grid[ypos][xpos]==="Y" || grid[ypos][xpos]==="endy"){
      colorState = "y";
    }
    else if (grid[ypos][xpos]==="R"|| grid[ypos][xpos]==="endr" ){
      colorState = "r";
    }
    else {
      colorState = " "; 
    }
  }
}

function changeLines(){//when moved to a new cell it changes that cell to the correct color only if the previous cell is the end of the line
  if(mouseIsPressed){
    if ((xpos === xposPast +1 || xpos === xposPast -1) && ypos === yposPast || (ypos === yposPast +1 || ypos ===yposPast -1) && xpos === xposPast ){
      if ((grid [yposPast][xposPast] === "endr" || grid [yposPast][xposPast] === "R") && (grid[ypos][xpos]==="g" || grid[ypos][xpos]==="b" || grid[ypos][xpos]==="y" || grid[ypos][xpos]===0 || grid[ypos][xpos]==="R")&&!rDone){
        if (grid [yposPast][xposPast] !== "R1"){
          if (grid [yposPast][xposPast] === "R") {
            grid [yposPast][xposPast] = "R1";
            lineGrid[yposPast][xposPast] = "r"+ liner;
            liner ++;
          }
          else{
            grid [yposPast][xposPast] = "r";
          }
          if (grid[ypos][xpos] === "R"){
            lineGrid[ypos][xpos] = "r"+ liner;
            liner ++;
            rDone = true;
          }
          else {
            grid[ypos][xpos] = "endr";
            lineGrid[ypos][xpos] = "r"+ liner;
            liner ++;
          }
        }
      }
      if ((grid [yposPast][xposPast] === "endb" || grid [yposPast][xposPast] === "B") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="g" || grid[ypos][xpos]==="r" || grid[ypos][xpos]==="y" || grid[ypos][xpos]==="B")&&!bDone){
        if (grid [yposPast][xposPast] !== "B1"){
          if (grid [yposPast][xposPast] === "B") {
            grid [yposPast][xposPast] = "B1";
            lineGrid[yposPast][xposPast] = "b"+ lineb;
            lineb ++;
          }
          else{
            grid [yposPast][xposPast] ="b";
          }
          if (grid[ypos][xpos] === "B"){
            lineGrid[ypos][xpos] = "b"+ lineb;
            lineb ++;
            bDone = true;
          }
          else {
            grid[ypos][xpos] = "endb";
            lineGrid[ypos][xpos] = "b"+ lineb;
            lineb ++;
          }
        }
      }
      if ((grid [yposPast][xposPast] === "endy" || grid [yposPast][xposPast] === "Y") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="g" || grid[ypos][xpos]==="b" || grid[ypos][xpos]==="r" || grid[ypos][xpos]==="Y")&&!yDone){
        if (grid [yposPast][xposPast] !== "Y1"){
          if (grid [yposPast][xposPast] === "Y") {
            grid [yposPast][xposPast] = "Y1";
            lineGrid[yposPast][xposPast] = "y"+ liney;
            liney ++;
          }
          else{
            grid [yposPast][xposPast] = "y";
          }
          if (grid[ypos][xpos] === "Y"){
            lineGrid[ypos][xpos] = "y"+ liney;
            liney ++;
            yDone = true;
          }
          else {
            grid[ypos][xpos] = "endy";
            lineGrid[ypos][xpos] = "y"+ liney;
            liney ++;
          }
        }
      }
      if ((grid [yposPast][xposPast] === "endg" || grid [yposPast][xposPast] === "G") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="r" || grid[ypos][xpos]==="b" || grid[ypos][xpos]==="y" || grid[ypos][xpos]==="G")&& !gDone){
        if (grid [yposPast][xposPast] !== "G1"){
          if (grid [yposPast][xposPast] === "G") {
            grid [yposPast][xposPast] = "G1";
            lineGrid[yposPast][xposPast] = "g"+ lineg;
            lineg ++;
          }
          else{
            grid [yposPast][xposPast] = "g";
          }
          if (grid[ypos][xpos] === "G"){
            lineGrid[ypos][xpos] = "g"+ lineg;
            lineg ++;
            gDone = true;
          }
          else {
            grid[ypos][xpos] = "endg";
            lineGrid[ypos][xpos] = "g"+ lineg;
            lineg ++;
          }
        }
      }
    }
  }
  xposPast = xpos;
  yposPast = ypos;
}

function checkcollisons(){//checks to see if the lines collide and prompts the line to be deleted
  if (xpos === xposPast +1 || xpos === xposPast -1 || ypos === yposPast +1 ||ypos ===yposPast -1){
    if (grid[ypos][xpos]  !==0){
      if (grid[ypos][xpos] ==="r"|| grid[ypos][xpos] ==="endr"){    
        deleteLine("r");
      }
      if (grid[ypos][xpos] ==="g" || grid[ypos][xpos] ==="endg"){
        deleteLine("g");
      }
      if (grid[ypos][xpos] ==="y"|| grid[ypos][xpos] ==="endy"){
        deleteLine("y");
      }
      if (grid[ypos][xpos] ==="b"|| grid[ypos][xpos] ==="endb"){
        deleteLine("b");
      }
    }
  }
}

function deleteLine(cDel){//deletes a line
  if(mouseIsPressed){
    if(cDel === "r"){
      rDone=false;
      liner = 10;
    }
    if(cDel === "y"){
      yDone=false;
      liney = 10;
    }
    if(cDel === "b"){
      bDone=false;
      lineb = 10;
    }
    if(cDel === "g"){
      gDone=false;
      lineg = 10;
    }
    for (let y=0; y<gridSize; y++) {
      for (let x=0; x<gridSize; x++) {
        if (grid[y][x] === cDel || grid[y][x] === "end" + cDel){
          grid[y][x] =0; 

        }
        if (grid[y][x] === "G1"){
          grid[y][x] = "G";
        }
        if (grid[y][x] === "Y1"){
          grid[y][x] = "Y";
        }
        if (grid[y][x] === "R1"){
          grid[y][x] = "R";
        }
        if (grid[y][x] === "B1"){
          grid[y][x] = "B";
        }
        if (lineGrid[y][x][0] ===cDel){
          lineGrid[y][x] = 0;
        }
      }
    }
  }
}

function checkWin(){//checks to see if all the lines are completed
  if (rDone && bDone && gDone && yDone){
    allDone = true; 
    fill(255,255,255,200   );
    rect(width/4,0,height,height);
    nextButton();
  }
}

function mousePressed(){//prompts line delets if clicked on circle of that color
  if (!allDone){
    if (grid[ypos][xpos]==="G" || grid[ypos][xpos]==="G1"){
      deleteLine("g");
    }
    if (grid[ypos][xpos]==="R"|| grid[ypos][xpos]==="R1"){
      deleteLine("r");
    }
    if (grid[ypos][xpos]==="B"|| grid[ypos][xpos]==="B1"){
      deleteLine("b");
    }
    if (grid[ypos][xpos]==="Y"|| grid[ypos][xpos]==="Y1"){
      deleteLine("y");
    }
  }
}

function doLevels(name){//uday sandhu code that i borrowed i am very thankful  // uses level.txt as an index for the levels and then sets grid to equal a saved grid with the base level
  index = levels.indexOf(name);
  levelname = levels[index];
  level = loadJSON("levels/" + levelname +".json");
  grid = level;
}

function changeLevel(){// prompts the level change or the end screen
  if (gameState !== pastgameState){
    if (gameState === 7){
      displayEndScreen();
    }
    else{
      let lvl = str(gameState);
      doLevels(lvl); 
      lineGrid = [];
      createGrid();
    }
  }
  pastgameState = gameState;
}

function nextButton(){//draws next button and makes it clickable
  if (mouseX > windowWidth/2-200 && mouseX < windowWidth/2+200 && mouseY > windowHeight-300 && mouseY < windowHeight-175){
    fill("black");
    rect(windowWidth/2-200,windowHeight-300,400,125);
    fill("white");
    text("Next Level",windowWidth/2-textWidth("Next Level")/2,windowHeight-200);
    if (mouseIsPressed){
      gameState ++; 
      rDone = false;
      gDone = false;
      bDone = false;
      yDone = false;
      allDone = false;
    }
  }
  else{
    stroke(51);
    fill("white");
    rect(windowWidth/2-200,windowHeight-300,400,125);
    fill("black");
    text("Next Level",windowWidth/2-textWidth("Next Level")/2,windowHeight-200);
  }
}

function connectLines(){//draws the rectangles that connect the dots to make them look like lines
  fill("black");
  for (let y=0; y < gridSize; y++) {
    for (let x=0; x < gridSize; x++) {
      if (lineGrid[y][x] !== 0){
        noStroke();
        if (lineGrid[y][x][0] === "r"){
          fill("red");
        }
        if (lineGrid[y][x][0] === "b"){
          fill("blue");
        }
        if (lineGrid[y][x][0] === "y"){
          fill("yellow");
        }
        if (lineGrid[y][x][0] === "g"){
          fill("green");
        }
        if(x !==0){
          if (lineGrid[y][x][0] === lineGrid[y][x-1][0]){
            if (int(lineGrid[y][x-1].substring(1)) === int(lineGrid[y][x].substring(1))-1 || int(lineGrid[y][x-1].substring(1)) === int(lineGrid[y][x].substring(1))+1){
              rect(x*cellsize + width/4  ,y*cellsize + cellsize/3 ,cellsize/2 , cellsize/3);
            }
          }
        }
        if(x !==4){
          if (lineGrid[y][x][0] === lineGrid[y][x+1][0]){
            if (int(lineGrid[y][x+1].substring(1)) === int(lineGrid[y][x].substring(1))-1 || int(lineGrid[y][x+1].substring(1)) === int(lineGrid[y][x].substring(1))+1){
              rect(x*cellsize + width/4 + cellsize/2 ,y*cellsize + cellsize/3 ,cellsize/2 , cellsize/3);
            }
          }
        }
        if(y !==0){
          if (lineGrid[y][x][0] === lineGrid[y-1][x][0]){
            if (int(lineGrid[y-1][x].substring(1)) === int(lineGrid[y][x].substring(1))-1 || int(lineGrid[y-1][x].substring(1)) === int(lineGrid[y][x].substring(1))+1){
              rect(x*cellsize + width/4 + cellsize/3 ,y*cellsize  ,cellsize/3 , cellsize/2);
            }
          }
        }
        if(y !==4){
          if (lineGrid[y][x][0] === lineGrid[y+1][x][0]){
            if (int(lineGrid[y+1][x].substring(1)) === int(lineGrid[y][x].substring(1))-1 || int(lineGrid[y+1][x].substring(1)) === int(lineGrid[y][x].substring(1))+1){
              rect(x*cellsize + width/4 + cellsize/3  ,y*cellsize + cellsize/2 ,cellsize/3 , cellsize/2);
            }
          }
        }
      }
    }
  }
}
function displayEndScreen(){//displays end screen image
  image(endscreen,width/4,0,height,height);
}