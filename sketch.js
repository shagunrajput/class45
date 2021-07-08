var Shagun;
var bg;
var ground;

var treebranch,puddle,mountain;
var snowmonster;
var snowflakes;
var healthbar,candyImg;
var bullet;
var castle,castleImg;
var shagunImg;

var  gameState="play";
var score=0;
var life=4;
var obstacleGroup;
var energybarGroup;

function preload(){
snowmonster=loadImage("snowMonster2.png");
treebranch=loadImage("hurdl2.png");
bg=loadImage("snowImg2.jpg");
candyImg=loadImage("candy.gif");
castleImg=loadImage("castle.png");
shagunImg=loadAnimation("frames/0.png","frames/1.png","frames/2.png","frames/3.png","frames/4.png","frames/5.png");
}

function setup()
{

  createCanvas(1000,600);
  
  
  ground=createSprite(600,590,1600,20);
  bkground=createSprite(700,300,2800,600);
  Shagun=createSprite(70,520,55,95);
    Shagun.addAnimation("running",shagunImg);
  bkground.addImage(bg);
  console.log(bkground.x) ;
  obstacleGroup= new Group ();
  energybarGroup= new Group ();
}

function draw()
{
  background("skyblue");
  if(gameState==="play")
  {
          bkground.velocityX=-3;

          if(bkground.x<=50 )   
          {
            console.log(bkground.x)
              bkground.x=bkground.width/2;

          }
          if (frameCount % 150 === 0)
          {
          spawnObstacles();
        }

        if (frameCount % 700 === 0)
          {
          spawnenergybar();
        }

          if (keyDown("SPACE") && Shagun.y>350){
            Shagun.velocityY=-11;
            
          }
          Shagun.velocityY=Shagun.velocityY+0.5;
          Shagun.collide(ground);
          drawSprites();
  }

    
}

function spawnObstacles()
{
  
    var obstacle = createSprite(800,530,10,40);
    obstacle.velocityX = -3;
    obstacle.lifetime=550;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(snowmonster);
                obstacle.scale=0.3;
               break;
       case 2: obstacle.addImage(treebranch);
                obstacle.scale=0.2;
                obstacle.y=570;
               break;
       
      default: break;
     }

     obstacleGroup.add(obstacle);
  
}

function spawnenergybar(){
  var energybar = createSprite(1100,530,10,40);
    energybar.velocityX = -3;
    energybar.lifetime=550;
    energybarGroup.add(energybar);
    energybar.addImage(candyImg);
    energybar.scale=0.1;
    
}