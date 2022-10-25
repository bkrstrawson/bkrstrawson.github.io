// Project Title
// uday bitch
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let grid = [[0,1,0],
  [0,1,0],
  [1,1,1]];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid(grid);
}


function displayGrid(grid){
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;
  for (let y = 0; y <= grid.length; y++){
    for (let x = 0; x <= grid[y].length; x++){
      if (grid[y][x] ===0 ){
        fill ("white");
      }
      else if (grid[y][x] ===1 ){
        fill("black");
      }
      rect( x*cellWidth,y*cellHeight, cellWidth, cellHeight);
    }
  }
}


function mousePressed(){
  let xpos = Math.floor(mouseX / (width/grid[0].length));
  let ypos = Math.floor(mouseY / (height/grid.length) );
  console.log(ypos);
  console.log(xpos);
  if (grid[ypos][xpos] === 0){
    grid[ypos][xpos] = 1;
  }
  else{
    grid[ypos][xpos] = 0;
  }
}