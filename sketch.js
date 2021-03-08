var mario, ground, ground1;
var backgroundImg, marioImg1;
var level=1;
var mushroom, mushroomImg, mushroom2;
var enemy, enemyImg;
var camera;

function preload(){
  marioImg1=loadImage("Mario small.png")
  marioImg2=loadImage("Mario medium.png")
  marioImg3=loadImage("Mario big.png");
  mushroomImg=loadImage("mushroom.png");
}

function setup() {
  createCanvas(6000,650, WEBGL);
  mario=createSprite(100,747, 50,50);
  mushroom=createSprite(200,740,50,20);
  ground=createSprite(0,760,1000,400);
  mushroom.addImage(mushroomImg);
  enemy=createSprite(250, 740, 50,50);
  camera= createCamera();
  setCamera=camera;
}

function draw() {
  background("cyan");
  mario.collide(ground);
  mushroom.collide(ground);
  if(mario.isTouching(mushroom)){
    level+=1;
    mushroom.destroy();
  }
  mario.scale=0.2;
  mushroom.scale=0.5;
  movement();
  MarioSize();
  
  drawSprites();
}

function MarioSize(){
  if(level==1){
    mario.addImage(marioImg1);
  }
  if(level==2){
      mario.addImage(marioImg2)
  }
  if(level==3){
    mario.addImage(marioImg3);
  }
}

function movement(){
  if(keyDown("up")||keyDown("space")){
    mario.y=mario.y-50;
  }
  if(keyDown("left")){
    mario.x-=10;
  }
  if(keyDown("right")){
    mario.x+=10;
  }
  mario.y=mario.y+10;
}