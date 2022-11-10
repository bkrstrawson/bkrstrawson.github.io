// flow
// bes
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redwire;

let grid = [];
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
let onScreen = false;
let index;
let level;
let levels;
let levelname;
let gameState = "title";

function preload(){
  levels = loadStrings("levels/level");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createGrid();
  grid[0][4] = "R";
  grid[4][0] = "R";
  grid[4][3] = "G";
  grid[2][3] = "G";
  grid[4][4] = "Y";
  grid[3][2] = "Y";
  grid[1][1] = "B";
  grid[2][4] = "B";
}

function draw() {

  

  if (gameState !== "title"){
    drawStuff();
    displayGrid(grid);
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
  }
}

function drawStuff(){//just for uday
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
function createGrid(){
  for (let i = 0; i < gridSize; i ++){
    grid.push([]);
    for (let k = 0; k < gridSize; k ++){
      grid[i].push(0);

    }
  }
}

function drawTitle(){
  background(220);
  fill ("white");
  rect(windowWidth/2-300,50,600,300,);
  textSize(45);
  fill("black");
  let x = textWidth("Flow Free");
  text("Flow Free",windowWidth/2-x/2,250,500,300);
}

function displayGrid(grid) {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      fill("white");
      
      rect(x*cellsize + width/4, y*cellsize, cellsize, cellsize);
    }
  }
}

function drawCircles(grid){
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

function drawLines(){
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

function changeLines(){
  if(mouseIsPressed){
    
    if ((xpos === xposPast +1 || xpos === xposPast -1) && ypos === yposPast || (ypos === yposPast +1 || ypos ===yposPast -1) && xpos === xposPast ){
      if ((grid [yposPast][xposPast] === "endr" || grid [yposPast][xposPast] === "R") && (grid[ypos][xpos]==="g" || grid[ypos][xpos]==="b" || grid[ypos][xpos]==="y" || grid[ypos][xpos]===0 || grid[ypos][xpos]==="R")&&!rDone){
        if (grid [yposPast][xposPast] !== "R1"){
          if (grid [yposPast][xposPast] === "R") {
            grid [yposPast][xposPast] = "R1";
          }
          else{
            grid [yposPast][xposPast] = "r";
          }
          if (grid[ypos][xpos] === "R"){
            rDone = true;
          }
          else {
            grid[ypos][xpos] = "endr";
          }
        }
      }
      if ((grid [yposPast][xposPast] === "endb" || grid [yposPast][xposPast] === "B") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="g" || grid[ypos][xpos]==="r" || grid[ypos][xpos]==="y" || grid[ypos][xpos]==="B")&&!bDone){
        if (grid [yposPast][xposPast] !== "B1"){
          if (grid [yposPast][xposPast] === "B") {
            grid [yposPast][xposPast] = "B1";
          }
          else{
            grid [yposPast][xposPast] ="b";
          }
          if (grid[ypos][xpos] === "B"){
            bDone = true;
          }
          else {
            grid[ypos][xpos] = "endb";
          }
        }
      }
      if ((grid [yposPast][xposPast] === "endy" || grid [yposPast][xposPast] === "Y") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="g" || grid[ypos][xpos]==="b" || grid[ypos][xpos]==="r" || grid[ypos][xpos]==="Y")&&!yDone){
        if (grid [yposPast][xposPast] !== "Y1"){
          if (grid [yposPast][xposPast] === "Y") {
            grid [yposPast][xposPast] = "Y1";
          }
          else{
            grid [yposPast][xposPast] = "y";
          }
          if (grid[ypos][xpos] === "Y"){
            yDone = true;
          }
          else {
            grid[ypos][xpos] = "endy";
          }
        }
      }
      if ((grid [yposPast][xposPast] === "endg" || grid [yposPast][xposPast] === "G") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="r" || grid[ypos][xpos]==="b" || grid[ypos][xpos]==="y" || grid[ypos][xpos]==="G")&& !gDone){
        if (grid [yposPast][xposPast] !== "G1"){
          if (grid [yposPast][xposPast] === "G") {
            grid [yposPast][xposPast] = "G1";
          }
          else{
            grid [yposPast][xposPast] = "g";
          }
          if (grid[ypos][xpos] === "G"){
            gDone = true;
          }
          else {
            grid[ypos][xpos] = "endg";
          }
        }
      }
    }
  }


  

  xposPast = xpos;
  yposPast = ypos;
}

function checkcollisons(){
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

function deleteLine(cDel){
  if(mouseIsPressed){
    if(cDel === "r"){
      rDone=false;
    }
    if(cDel === "y"){
      yDone=false;
    }
    if(cDel === "b"){
      bDone=false;
    }
    if(cDel === "g"){
      gDone=false;
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
      }
    }
  }
}

function checkWin(){
  if (rDone && bDone && gDone && yDone){
    console.log("you win");
  }
}

function mousePressed(){
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

function connectLines(){
  fill("black");
  for (let y=0; y < gridSize; y++) {
    for (let x=0; x < gridSize; x++) {
      if (grid[y][x] !== 0){
        if(x !==0){
          if (grid[y][x] === grid[y][x-1] || grid[y][x-1] === "end" + grid[y][x] ||  grid[y][x] === "end" +grid[y][x-1]){//} || grid[y][x].toLowerCase()=== grid[y][x-1].toLowerCase()) {
            rect(x*cellsize + width/4  ,y*cellsize + cellsize/3 ,cellsize/2 , cellsize/3);
          }
        }
      }
    }
  }
}

function doLevels(name){
  index = levels.indexOf(name);
  levelname = levels[index];
  level = loadJSON("levels/" + levelname +".json");
  grid = level;
}