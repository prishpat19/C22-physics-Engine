const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var a;
var ball;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
  world = engine.world;

var a_options = {
  isStatic : true

}



  a = Bodies.rectangle(200, 390, 200, 20, a_options);

  World.add(world,a);
  console.log(a);

  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball);
  

}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);  
rect(a.position.x, a.position.y, 400, 20);

ellipseMode(CENTER);
ellipse(ball.position.x, ball.position.y, 20, 20);
}