const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup() {
  createCanvas(800,400);
  engine - Engine.create();
  world -  enngine.world;


  var ground_options={
    isStatic: true
  }
  ground = Bodies.rectangle(200,100,50,50,ground_options);
  World.add(world,ground);

  var ball_options={
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,50);
  World.add(world,ball);

  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0);  
 rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50)
 
  ellipseMode(RADIUS);
  ellipse(ball.postion.x,ball.postion.y,20,20)
}