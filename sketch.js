const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2= new Box(170,250,50,50);
    ground= new Ground(200,390,400,5);
    console.log(box1);
}

function draw(){
    background(150,20,50);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();

   
}