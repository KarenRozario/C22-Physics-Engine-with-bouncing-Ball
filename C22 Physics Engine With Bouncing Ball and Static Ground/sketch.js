const Engine = Matter.Engine //part of matter.js library hence Matter.Engine, etc
const World = Matter.World //Matter.Engine becomes Engine, etc
const Bodies = Matter.Bodies

var engine, world
var ground //var object renamed ground
var ball

function setup() {
  var canvas = createCanvas(400, 400)
  //createSprite(200, 200, 50, 50)

  engine = Engine.create() // to create a new 'engine'
  world = engine.world //  world is created using the engine

  var ground_options = {
    isStatic: true,
  }

  ground = Bodies.rectangle(200, 390, 200, 20, ground_options)
  World.add(world, ground)

  //console.log(rect(ground.position.x, ground.position.y))
  console.log(ground.type)
  console.log(ground.position.x)
  console.log(ground.position.y)

  var ball_options = {
    restitution: 1.0,
  }

  ball = Bodies.circle(200, 100, 20, ball_options)
  World.add(world, ball)
}

function draw() {
  background(0)
  Engine.update(engine) //Applies the laws of physics in 2D field
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20)

  drawSprites()
}
