var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);


  movingRect.velocityX=-5;
  fixedRect.velocityX = 5;


}

function draw() {
  background(255,255,255);  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;


if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 )
  {
    
    movingRect.velocityX=  movingRect.velocityX * (-1);
  fixedRect.velocityX =  fixedRect.velocityX *(-1);

  }

  drawSprites();
}
