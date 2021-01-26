
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper1; 
var dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);
	paper1 = new Paper(30,650,40);

	dustbin1 = new Dustbin(605,601,15,100);
	dustbin2 = new Dustbin(660,660,100,15);
	dustbin3 = new Dustbin(710,601,15,100);
	

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  ground.display(); 
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  if(keyCode=== UP_ARROW){

	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:5,y:-10});	
  }

  
  drawSprites();
 
}



