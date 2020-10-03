
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime = 0;
var score = 0;
var gameState = "start";
var groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 


}
function setup(){
  monkey=createSprite(80,380);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.2;
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
   
  obstacleGroup=createGroup();
  bananaGroup=createGroup();
}


function draw() {
 
 background("white");
  
console.log(monkey.y);
if (keyDown("space")&&monkey.y>=338.6
) {
  
      monkey.velocityY = -20;
      survivalTime = survivalTime +1;
}
  monkey.velocityY=monkey.velocityY+0.8;
       text("Survival time =  " + survivalTime, 220, 20);
           text("Score =  " + score, 120, 20);
  edges=createEdgeSprites();
  monkey.collide(edges);
  
  obsta();
  spawnbananas();
  drawSprites()
}
function obsta(){

  if(frameCount%120===0){
    obstacle=createSprite(200,380);
  obstacle.addImage(obstacleImage);
  obstacle.x=Math.round(random(300,500));
  obstacle.scale=0.2;
  obstacle.velocityX=-9;
    obstacleGroup.add(obstacle);
     
  obstacle.lifetime=124;
  }
  if (monkey.isTouching(obstacleGroup)) {
    obstacleGroup.destroyEach();
    survivalTime=survivalTime-4;
    
  }
  
}

function spawnbananas() {


  if (frameCount % 100 === 0) {
    banana = createSprite(550, 200, 20, 20);
    banana.addImage("l", bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(180, 250));
    banana.velocityX = -12;
    banana.lifetime = 50;
    bananaGroup.add(banana);


  }
  if (monkey.isTouching(bananaGroup)) {

    bananaGroup.destroyEach();
    survivalTime = survivalTime + 2;
    score=score+1;

  }
}



