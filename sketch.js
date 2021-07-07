var ship, ship_moving;
var sea, seaImg;
function preload(){
ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200, 200, 400, 400);
  sea.addImage(seaImg);
  sea.velocityX = -2;

  ship = createSprite(200, 300);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.25;
}

function draw() {
drawSprites();
 
}