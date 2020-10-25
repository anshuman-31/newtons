
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.constraint;

var bobobject1,bobObject2,bobObject3,bobObject4,bobObject5;
var constraintLog;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Roof(400,50,500,5)


	/*var options={
		isStatic:true,

	}
	this.body=Bodies.rectangle(200,50,200,5,options);
	World.add(world, this.body);
	

	Engine.run(engine);

	var options = {
		bodyA: Bob.body,
		bodyB:constraintLog.body,
		stiffness: 0.04,
		length: 10,


	}
	var chain = Constraint.create(options);
	World.add(world, chain);

}*/
}


function draw() {
  rectMode(CENTER);
  background(0);
  /*constraintLog.display();
  rect(body.position.x,body.position.y,200,5),*/
  
 // rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
  ground.display();

  drawSprites();
 
}



