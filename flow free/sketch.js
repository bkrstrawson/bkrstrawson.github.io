// flow
// bes
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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



function setup() {
  createCanvas(windowWidth, windowHeight);
  createGrid();
  grid[0][0] = "G";
  grid[4][0] = "R";
  grid[3][1] = "R";
  grid[4][4] = "G";
  grid[1][4] = "Y";
  grid[0][3] = "Y";
  grid[4][3] = "B";
  grid[2][3] = "B";
}

function draw() {
  background(220);
  drawStuff();
  displayGrid(grid);
  drawCircles(grid);
  checkcollisons();
  drawLines();
  checkWin();
}
function drawStuff(){//just for uday
  if (mouseX < width && mouseX>0){
    xpos = Math.floor ((mouseX-width/4)/cellsize); 
  }
  if (mouseY < height && mouseY>0){
    ypos = Math.floor (mouseY/cellsize);
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
      if(grid[y][x] === "G"){
        fill ("green");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/2);
      }
      if(grid[y][x] === "B"){
        fill ("blue");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/2);
      }
      if(grid[y][x] === "R"){
        fill ("red");
        circle(x*cellsize+ width/4 +cellsize/2,y*cellsize+cellsize/2,cellsize/2);
      }
      if(grid[y][x] === "Y"){
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
    if (grid[ypos][xpos]==="G" || grid[ypos][xpos]==="g" ){
      colorState = "green";
    }
    else if (grid[ypos][xpos]==="B"|| grid[ypos][xpos]==="b"){
      colorState = "blue";
    }
    else if (grid[ypos][xpos]==="Y" || grid[ypos][xpos]==="y"){
      colorState = "yellow";
    }
    else if (grid[ypos][xpos]==="R"|| grid[ypos][xpos]==="r" ){
      colorState = "red";
    }
    else {
      colorState = " "; 
    }
  }

  if(mouseIsPressed){
    
    if (xpos === xposPast +1 || xpos === xposPast -1 || ypos === yposPast +1 ||ypos ===yposPast -1){
      if ((grid [yposPast][xposPast] === "endr" || grid [yposPast][xposPast] === "R") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="R")&&!rDone){
        if (grid [yposPast][xposPast] !== "R") {
          grid [yposPast][xposPast] = "r";
        }
        if (grid[ypos][xpos] === "R"){
          rDone = true;
        }
        else {
          grid[ypos][xpos] = "endr";
        }
      }
      if ((grid [yposPast][xposPast] === "endb" || grid [yposPast][xposPast] === "B") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="B")&&!bDone){
        if (grid [yposPast][xposPast] !== "B") {
          grid [yposPast][xposPast] = "b";
        }
        if (grid[ypos][xpos] === "B"){
          bDone = true;
        }
        else {
          grid[ypos][xpos] = "endb";
        }
      }
      if ((grid [yposPast][xposPast] === "endy" || grid [yposPast][xposPast] === "Y") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="Y")&&!yDone){
        if (grid [yposPast][xposPast] !== "Y") {
          grid [yposPast][xposPast] = "y";
        }
        if (grid[ypos][xpos] === "Y"){
          yDone = true;
        }
        else {
          grid[ypos][xpos] = "endy";
        }
      }
      if ((grid [yposPast][xposPast] === "endg" || grid [yposPast][xposPast] === "G") && (grid[ypos][xpos]===0 || grid[ypos][xpos]==="G")&& !gDone){
        if (grid [yposPast][xposPast] !== "G") {
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
  xposPast = xpos;
  yposPast = ypos;
}

function checkcollisons(){
  if (xpos === xposPast +1 || xpos === xposPast -1 || ypos === yposPast +1 ||ypos ===yposPast -1){
    if (grid[ypos][xpos]  !==0){
      if (grid[ypos][xpos] ==="r"||grid[ypos][xpos] ==="endr"){
        if (colorState ==="r" && grid[yposPast][xposPast] === "endr" && grid[ypos][xpos] ==="r" ){
          grid[yposPast][xposPast] = 0;
          grid[ypos][xpos] ==="endr";
        }
        else{
          deleteLine("r");
        }
      }
      if (grid[ypos][xpos] ==="g" ||grid[ypos][xpos] ==="endg"){
        deleteLine("g");
      }
      if (grid[ypos][xpos] ==="y"||grid[ypos][xpos] ==="endy"){
        deleteLine("y");
      }
      if (grid[ypos][xpos] ==="b"||grid[ypos][xpos] ==="endb"){
        deleteLine("b");
      }
    }
  }
}
//&& grid[ypos][xpos]  !=="G" && grid[ypos][xpos]  !=="Y" && grid[ypos][xpos]  !=="R" && grid[ypos][xpos]  !=="B"){

function deleteLine(cDel){
  if(mouseIsPressed){// && (xposPast !==0 || yposPast !== 0)){
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
  if (grid[ypos][xpos]==="G"){
    console.log("178")
    deleteLine("g");
  }
  if (grid[ypos][xpos]==="R"){
    deleteLine("r");
  }
  if (grid[ypos][xpos]==="B"){
    deleteLine("b");
  }
  if (grid[ypos][xpos]==="Y"){
    deleteLine("y");
  }
}