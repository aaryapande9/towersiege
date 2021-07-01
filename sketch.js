
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var holder,ball,ground;
var stand1,stand2;
var slingshot;
var polygon_IMG;

function preload(){
  polygon_IMG = loadImage("polygonIMG.png")
}


function setup(){
  engine = Engine.create();
  world = engine.world;

createCanvas(990,600)
//creating objects using Ground.js
ground = new Ground();
stand1 = new Ground(390,300,250,10);
stand2 = new Ground(700,200,200,10);
 //creating blocks using Box.js
 //set 1/level 1
 block1 = new Box(300,275,30,40);
 fill("blue");
 block2 = new Box(330,275,30,40);
 fill("blue")
 block3 = new Box(360,275,30,40);
 fill("blue");
 block4 = new Box(390,275,30,40);
fill("blue");
 block5 = new Box(420,275,30,40);
 fill("blue");
 block6 = new Box(450,275,30,40);
 fill("blue");
 block7 = new Box(480,275,30,40);
 fill("blue");
 //level 2
 block8 = new Box(280,275,30,40);
 fill("blue");
 block9 = new Box(280,275,30,40);
 fill("blue");
 block10 = new Box(280,275,30,40);
 fill("blue");
 block11 = new Box(280,275,30,40);
 fill("blue");
 block12 = new Box(280,275,30,40);
 fill("blue");
//level 3
block13 = new Box(340,195,30,40);
fill("green");
block14 = new Box(370,195,30,40);
fill("green");
block15 = new Box(400,195,30,40);
fill("green");
block16 = new Box(430,195,30,40);
fill("green");
block17 = new Box(460,195,30,40);
fill("green");
//level 4
block18 = new Box(385,115,30,40);
fill("black");
//set 2/lelvel 1
Block1 = new Box(640,175,30,40);
fill("blue");
Block2 = new Box(640,175,30,40);
fill("blue");
Block3 = new Box(640,175,30,40);
fill("blue");
Block4 = new Box(640,175,30,40);
fill("blue");
Block5 = new Box(640,175,30,40);
fill("blue");
// level 2
Block6 = new Box(670,135,30,40);
fill("green");
Block7 = new Box(670,135,30,40);
fill("green");
Block8 = new Box(670,135,30,40);
fill("green");
//level 3
Block9 = new Box(700,95,30,40);
fill("pink");
//ball with slings
ball = Bodies.circle(50,200,20);
World.add(world,ball);
slingshot = new SlingShot(ball,{x:200,y:200});

}

function draw() {
  background("white");
  Engine.update(engine); 
  //displaying 
  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  Block8.display();
  Block9.display();

  imageMode (CENTER);
  image (polygon_IMG,ball.position.x,ball.position.y,40,40);
  //ball = addImage("polygon_IMG",polygon_IMG);
slingshot.display();
 
  drawSprites();
}

function MouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function MouseReleased(){
  slingshot.fly();
}