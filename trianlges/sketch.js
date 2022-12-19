// THE TRIAGNLES ARE TAKING OVER !!!L.FVK,SGBFVISGUDBCX

let triagnles = [
  {x:500,y:100},
  {x:100,y:600},
  {x:900,y:600}
];

function setup() {
  createCanvas(1000,700);
}

function draw() {
  background(220);
  triangles(triagnles,5);
}

function triangles(points,depth){
  triangle(points[0].x,points[0].y,points[1].x,points[1].y,points[2].x,points[2].y);
  if(depth>0){
    triangles([points[0],getMid(points[0],points[1]),getMid(points[0],points[2])],depth-1);
    triangles([points[1],getMid(points[1],points[2]),getMid(points[1],points[0])],depth-1);
    triangles([points[2],getMid(points[2],points[0]),getMid(points[2],points[1])],depth-1);
  }
}

function getMid(p1,p2){
  let xDiff = p1.x +p2.x;
  let yDiff = p1.y+ p2.y;
  let midpoint = {x:xDiff/2, y:yDiff/2};
  return midpoint;
}
  
