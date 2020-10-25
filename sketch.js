
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stoneobject,treeo,boy
var chain,stone
function preload()
{
boy=loadImage("boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stoneobject=new stone(253,420,30)
roofObject=new roof(width/2,height/4,width/7,20);
treeo=new tree(200,100,200,20)
mango1=new mango(200,100,100,20)
mango2=new mango(200,300,100,20)
mango3=new mango(300,100,100,20)
mango4=new mango(100,100,100,20)
mango5=new mango(200,100,100,20)
boy=(50,100,20,20)
chain1=new chain(boy,stoneobject)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  treeo.display();
  roofObject.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain1.show();
  stoneobject.display()
  detectcollision(stoneobject,mango1)
  detectcollision(stoneobject,mango2)
  detectcollision(stoneobject,mango3)
  detectcollision(stoneobject,mango4)
  detectcollision(stoneobject,mango5)
  drawSprites();
 
}

function KeyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(stoneobject,{x:235,y:420})
		chain1.attach(stoneobject.body);
	}
}
function mouseDragged() {
    Matter.Body.setPosition(stoneobject.body, {x:mouseX,y:mouseY})
}
function mouseReleased() {
    chain1.fly()
}

function detectcollision(stone,mango){
	mangobodyposition=mango.body.position
	stonebodyposition=stone.body.position

	var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
	if(distance<=mango,r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false)
	}
}