
var path;
var runner;
var bomb;
var coin;
var engdrink;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  engdrinkImg = loadImage("energyDrink.png");


}

function setup(){
  createCanvas(400,400);
  //create sprites here

//Moving Background
path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;
 
runner = createSprite(200,350);
runner.addAnimation("loading",runnerImg);
runner.scale=0.1;

bomb = createSprite(80,50);
bomb.addImage(bombImg);
bomb.velocityY = 4
bomb.scale=0.1;

coin = createSprite(300,280);
coin.addImage(coinImg);
coin.velocityY = 4
coin.scale=0.5;

engdrink = createSprite(200,200);
engdrink.addImage(engdrinkImg);
engdrink.velocityY = 4
engdrink.scale=0.2;





}




function draw() {
  background(0);

  
  if(path.y > 400){
    path.y = height/2;
  }
  
  if(bomb.y > 400){
    bomb.y = 0;
  }
  if(coin.y > 400){
    coin.y = 0;
  }
  if(engdrink.y > 400){
    engdrink.y = 0;
  }
  
  if(engdrink.isTouching(runner)){
  path.velocityY = path.velocityY+0.5;
  }
  
  if(bomb.isTouching(runner)){
  path.velocityY = path.velocityY-0.5;
  }

  if(keyDown(LEFT_ARROW)){
  runner.x = runner.x-10
  }

  if(keyDown(RIGHT_ARROW)){
    runner.x = runner.x+10
    }
  
    if(keyDown(UP_ARROW)){
      runner.y = runner.y-10
      }
      
   if(keyDown(DOWN_ARROW)){
        runner.y = runner.y+10
        }
  
  
  
  
  
  
  drawSprites();




}
