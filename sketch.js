var player
var ground

function setup() {
  createCanvas(1000,700);
  player=createSprite(400,600,50,50)
  player.shapeColor="yellow"
  ground=createSprite(500,699,1000,20)
  ground.shapeColor="green"
}

function draw() {
  background("cyan");  

  if(keyDown("LEFT_ARROW")){
    player.x=player.x-5
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+5
  }
  drawSprites();
}