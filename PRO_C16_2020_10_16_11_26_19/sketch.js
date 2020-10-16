
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400);
monkey= createSprite(80,315,20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1;

ground= createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);

invisibleGround = createSprite(200,190,400,10);
invisibleGround.visible = false;


  textSize(20);
  fill("white");
  text("Score: " + score,500,50)
  
  
  
}


function draw() {
background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);
 if (ground.x < 0){
      ground.x = ground.width/2;
 }

if(keyDown("space")) {
        monkey.velocityY = -12;  
    }
    
    monkey.velocityY = monkey.velocityY + 0.8
    monkey.collide(ground);
    bananas();
    obstacles();
  drawSprites();
}

function bananas() {
if(frameCount % 80===0) {
  banana= createSprite(400,Math.round(random(120,200)),10,10);
  banana.velocityX= -5;
  banana.addImage(bananaImage);
  banana.scale= 0.1;
}
}

function obstacles(){
 if (frameCount % 300 === 0){
 var obstacle=createSprite(400,Math.round(random(300,320)),10,10);
   obstacle.velocityX = -5;
   obstacle.addImage = (obstacleImage);
   obstacle.lifetime= 400;
 }  
}



