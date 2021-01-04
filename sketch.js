
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	paper1 = new Paper(280, 630, 2);

}


function draw() {
  background(0);
	
  Mark1 = createSprite(1020, 590, 20, 100);    
  Mark2 = createSprite(1120, 630, 200, 20);    
  Mark3 = createSprite(1220, 590, 20, 100);  

  paper1.display();

  drawSprites();
 
}

function keyPressed() {

if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paperObject.body.paperObject.body.position, {x:85, y:-85});

}

}
