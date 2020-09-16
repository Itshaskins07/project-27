
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	bobObject1=new Bob(138,503,20,20);
	bobObject2=new Bob(193,505,20,20);
	bobObject3=new Bob(250,300,20,20);
	bobObject4=new Bob(300,300,20,20);
	bobObject5=new Bob(400,450,20,20);
	roofObject=new Roof(250,250,300,50); 
	rope1=new Rope(bobObject1.body,roofObject.body,-4*2,0);
	rope2=new Rope(bobObject1.body,roofObject.body,-2*2,0);
	rope3=new Rope(bobObject1.body,roofObject.body,0,0);
	rope4=new Rope(bobObject1.body,roofObject.body,2*2,0);
	rope5=new Rope(bobObject1.body,roofObject.body,4*2,0);
	
}


function draw() {
background("gray");	
Engine.update(engine);  	
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
roofObject.display();

text(mouseX+","+mouseY,mouseX,mouseY);
  rectMode(CENTER);
  
  drawSprites();
 
}

