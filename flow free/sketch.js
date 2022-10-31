// flow
// bes
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [];
let gridSize = 5;
let cellsize;
let colorState;
let xpos;
let ypos;



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
  console.log(grid);
  drawCircles(grid);
  xpos = Math.floor(mouseX/cellsize);
  ypos = Math.floor(mouseY/cellsize);
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
    }
  }
}

function drawLines(){
  if (grid[ypos][xpos]==="G"){
    colorState = "green"
  }
  if (grid[ypos][xpos]==="B"){
    colorState = "blue"
  }
  if (grid[ypos][xpos]==="Y"){
    colorState = "yellow"
  }
  if (grid[ypos][xpos]==="R"){
    colorState = "red"
  }
  while(mouseIsPressed){
    
  }
}