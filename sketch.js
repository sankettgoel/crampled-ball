
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,ground,paper


function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin= new dustbin(1200,650)
	paper= new paper(200,450,40)
	ground= new ground(width/2,670,width,20)


	var render= Render.create
	({
		element: document.body,
		engine: engine,
		options: 
		{
			width: 1200,
			height: 700,
			wireFrames: false
		}
	});

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  
  dustbin.display()
  paper.display()
  ground.display()
  drawSprites();

  function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}


}



