
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,paper,dustbinObj;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground= new Ground(width/2,700,width,20);
	paper = new Paper(50,600);
	dustbinObj= new dustbin(1200,680);

	
	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1000,
		  height: 400,
		  wireframes: false
		}
	  });

	Engine.run(engine);
  
}


function draw() {
	background("grey");
	Engine.update(engine);
  rectMode(CENTER);
 
  paper.display();
  ground.display();
  dustbinObj.display();
  

 
}

function keyPressed() {
        
	if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:220,y:-225}) ;
}
}



