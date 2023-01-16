// oop intro

class Dog{
  constructor(name){
    this.name = name;
    this.age = 0;
  }

  bark(){
    console.log("WOOF! says " +this.name);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
