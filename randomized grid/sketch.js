// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const ROWS = 30;
const COLS = 30;
let grid; 
let cellW;
let cellH;


function setup() {
  createCanvas(windowWidth, windowHeight);
  cellW = width/COLS;
  cellH = height/ROWS;
  grid = create2DArray(ROWS,COLS);
}

function draw() {
  background(220);
  displayGrid(grid);
}


function create2DArray(COLS,ROWS){
  let emptAr = [];
  for (let y = 0; y <ROWS; y ++){
    emptAr.push([]);
    for (let x = 0; x <COLS; x ++){
      emptAr[y].push(0);
    }
  }
  return emptAr;
}

function createRandom2DArray(COLS,ROWS){
  let emptAr = [];
  for (let y = 0; y <ROWS; y ++){
    emptAr.push([]);
    for (let x = 0; x <COLS; x ++){
      if (random(100) > 50){
        emptAr[y].push(1);
      }
      else {
        emptAr[y].push(0);
      }
    }
  }
  return emptAr;
}

function displayGrid(grid){
  for (let y = 0; y <ROWS; y ++){
    for (let x = 0; x <COLS; x ++){
      if (grid[y][x] === 1 ){
        fill("black");
      }
      else if (grid[y][x] === 0){
        fill("white");
      }
      rect( x*cellW, y*cellH, cellW,cellH);
    }
  }

}

function mousePressed(){
  let gridX = Math.floor(mouseX/cellW);
  let gridY = Math.floor(mouseY/cellH);
  console.log(gridX);
  console.log(gridY);
  if (grid[gridY][gridX] === 0){
    grid[gridY][gridX] = 1;
  }
  else if (grid[gridY][gridX] === 1 ){
    grid[gridY][gridX] = 0;
  }
}
  
