// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let enemy;
let shipImage, bulletImage, enemyImage;
let theBullets = [];
let enemyDead = false;


function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
  enemyImage = loadImage("assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
  enemy = new Alien(width/2, 30 ,10,enemyImage);
}

function draw() {
  background("black");
 
  for (let i = theBullets.length-1; i>0; i--){
    theBullets[i].display();
    theBullets[i].update();
    enemy.isDead(theBullets[i]);

    if(theBullets[i].isOnScreen()){
      theBullets.splice(i,1);
    }
    
  }
  enterprise.update();
  enterprise.display();
  if(!enemyDead) {
    enemy.update();
    enemy.display();
  }
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.speed = 6;
  }

  update() {
    if(keyIsDown(87)) { // W
      this.y -= this.speed;
    }
    if(keyIsDown(68)) { // D
      this.x += this.speed;
    }
    if(keyIsDown(65)) { // A
      this.x -= this.speed;
    }
    if(keyIsDown(83)) { // S
      this.y += this.speed;
    }
  }

  display() {
    image(this.image, this.x, this.y);
  }

  handleKeyPress(other) {
    if (keyIsDown(32)) {
      let bullet = new Bullet(this.x + this.image.width/2,this.y,0,8,bulletImage);
      theBullets.push(bullet);
      console.log(bullet.x >this.x)
      console.log(bullet.x + bullet.image.width < this.x + this.image.width)
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.image = theImage;
  }

  update() {
    this.y -= this.dy;
  }

  display() {
    image(this.image,this.x-this.image.width/2,this.y);
  }

  isOnScreen() {
    return this.y < 0;
  }
}

class Alien{
  constructor(x,y,speed,image){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.image = image; 
  }

  display(){
    image(this.image, this.x,this.y, 100, 100);
  }

  update(){
    if(random(0,100) > 50){
      this.x +=this.speed;//moves right
    }
    else{
      this.x -= this.speed;//moves left
    }
  }
  
  isDead(bullet) {
    if (bullet.y + bullet.image.height <= this.y + 100){
      if (bullet.x + bullet.image.width < this.x + this.image.width && bullet.x >this.x){
        enemyDead = true;
      }
    }
    
  }
}