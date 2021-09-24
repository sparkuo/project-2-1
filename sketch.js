var bullet, speed, weight;
var wall,thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed =  random(223,321);
  weight = random(30,52);
  
  bullet= createSprite(50, 200, 50, 50);
  bullet.shapeColor='white';
  bullet.velocityX=speed;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(0,0,0);
  
      if (hascollided(bullet,wall)){
        bullet.x=wall.x-(wall.width/2);
        bullet.velocityX=0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    
      if (damage>10){
        wall.shapeColor='red';
      }
    
      if (damage<10){
      wall.shapeColor='green';
      }
    }
    drawSprites();
   
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}