var garden,rabbit;
var gardenImg,rabbitImg;
var appleimage;
var orangeimage;
var redimage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png");
  orangeimage = loadImage("orangeLeaf.png");
  redimage = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleimage);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;
}
function createOranges(){
  orange=createSprite(random(50,350),40,10,10);
  orange.addImage(orangeimage);
  orange.scale=0.07;
  orange.velocityY=3;
  orange.lifetime=150;
}
function createRedL(){
  red=createSprite(random(50,350),40,10,10);
  red.addImage(redimage);
  red.scale=0.07;
  red.velocityY=3;
  red.lifetime=150;
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX
  drawSprites();
  var ran=Math.round(random(1,3))
  if(frameCount%80==0){
    if(ran==1){
      createApples();
    }
    else if(ran==2){
createRedL()
    }
    else {
      createOranges();
    }
  }
}