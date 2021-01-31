var fairy,fairyImage,fairy_flying;
var star,starImage;
var background;

function preload(){
  fairyImage=loadImage("fairy.png");
  fairy_flying=loadAnimation("fairy1.png,fairy2.png");
  starImage=loadImage("star.png"); 
  background=loadImage("starnight.png");
}

function setup() {
  createCanvas(400,400);
  fairy=createSprite(51,304,10,10);
  fairy.addImage(fairyImage);
  fairy.scale=0.1;

  star=createSprite(342,50,10,10);
  star.addImage(starImage);
  star.scale=0.1;

  background.addImage(background);
}


function draw() {
  background(background);
  if(keyDown(RIGHT_ARROW)){
   fairy.addAnimation(fairy_flying);
   fairy.velocityX=2;
   }
   if(fairy.x=338){
   star.velocityY=2;
   }
   



drawSprites();
}
