var girl;
var girlImg;
var backgroundImg;
var bg;

function preload(){
  girlImg = loadAnimation("Girl1.png","Girl2.png","Girl3.png","Girl4.png");

  backgroundImg = loadImage("Backround.png");
}



function setup() {
  createCanvas(800,600);
  
  bg = createSprite(400,300,800,600);
  bg.addImage(backgroundImg);

  girl = createSprite(300, 500, 50, 50);
  girl.addAnimation("running",girlImg);
  girl.scale = 0.5;

}

function draw() {
  background("black");
  
  bg.velocityX = -3

  //reseting the background
  if(bg.x < 200){
    bg.x = bg.width/2
  }
  drawSprites();

}