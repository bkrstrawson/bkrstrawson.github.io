// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = []
cellsize = 150
gridSize = 5
function setup() {
  createCanvas(windowWidth, windowHeight);
  createGrid()
  grid[4][4] = "R";
  grid[2][3] = "R";
  grid[0][4] = "G";
  grid[1][1] = "G";
  grid[1][2] = "Y";
  grid[3][2] = "Y";
  grid[0][0] = "B";
  grid[4][0] = "B";
}

function draw() {
  background(220);
  displayGrid()
drawCircles()
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
  stroke(255)
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      fill("black");
      
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