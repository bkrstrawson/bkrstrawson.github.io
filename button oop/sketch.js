// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let button;
let state = 0;
let buttonAR= [];

class Button{
  constructor(x,y,width,height,color1,color2){
    this.x = x-width/2;
    this.y = y-height/2;
    this.width = width;
    this.height = height;
    this.color1 = color1;
    this.color2 = color2;
  }
  display(){
    if (mouseX > this.x && mouseX < this.x +this.width && mouseY > this.y && mouseY < this.y + this.height){
      fill(this.color1);
  
    }
    else {
      fill(this.color2);
    }
    rect(this.x,this.y,this.width,this.height);
  }

  clicked(){
    if (mouseX > this.x && mouseX < this.x +this.width && mouseY > this.y && mouseY < this.y + this.height && mouseIsPressed){
      state++;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = new Button(width/2,height/2, 100,40,"red","blue");
  buttonAR.push(button);
  button = new Button(200,100, 100,40,"green","yellow");
  buttonAR.push(button);
}

function draw() {
  background(220);
  console.log(state);
  for(let i = 0 ; i < buttonAR.length; i++){
    buttonAR[i].display();
    buttonAR[i].clicked();
  }
}
