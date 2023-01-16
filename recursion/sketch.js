// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  console.log(factorial(6))
}

function draw() {
  background(220);
}

function factorial(n){
  if (n === 1){
    return 1
  }
  else{
    return n *factorial(n-1)
  }
}
