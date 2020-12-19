const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  gameState = "start";
var ground, gameState,engine, world,dustbin,paper;
var dbImage;
function preload(){
dbImage= loadImage("Dustbin.png");

}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  engine = Engine.create();
  world = engine.world;
  

  dustbin = new Dustbin(700, 390, 100, 10);
  paper = new Paper(100, 300, 30);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
  textSize(20);
  fill("red");

  Engine.run(engine);
}

function draw() {
  if (gameState === "start") {
    background("Black");
   
    text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  if (gameState === "play") {
    background("white");
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 10)
    push();
    imageMode(CENTER);
    image(dbImage, 700,320,150,150 );
    pop();
    dustbin.display();
    paper.display();

  }
}


function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 50,
      y: -50
    });
  }
}

