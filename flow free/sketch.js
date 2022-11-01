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



function setup() {
  createCanvas(windowWidth, windowHeight);
  createGrid();
  grid[0][0] = "R";
  grid[4][0] = "R";
  grid[3][1] = "G";
  grid[4][2] = "G";
  grid[1][4] = "Y";
  grid[0][3] = "Y";
  grid[4][3] = "B";
  grid[2][3] = "B";
}

function draw() {
  background(220);
  cellsize = height/gridSize;
  displayGrid(grid);
 
 
  drawCircles(grid);
  
  xpos = Math.floor ((mouseX-width/4)/cellsize)  ;
  ypos = Math.floor (mouseY/cellsize)  ;
  drawLines();
  //console.log(xpos) ;
  // console.log(ypos) ;
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
  console.log(colorState);
  //console.log(xpos)
  // console.log(ypos)
  if(mouseIsPressed){
    
    if (xpos === xposPast +1 || xpos === xposPast -1 || ypos === yposPast +1 ||ypos ===yposPast -1){
      if ((grid [yposPast][xposPast] === "endr" || grid [yposPast][xposPast] === "R") && grid[ypos][xpos]===0){
        if (grid [yposPast][xposPast] !== "R") {
          grid [yposPast][xposPast] = "r";
        }
        if (grid[ypos][xpos] === "R"){
          console.log ("you win");
        }
        else {
          grid[ypos][xpos] = "endr";
        }
      }
    }
  }
  xposPast = xpos;
  yposPast = ypos;
}