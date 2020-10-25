const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,550,70,70);
    box2 = new Box(900,550,70,70);
   

    pig1 = new pig(800,550);

    log1 = new log(800,500,PI/2,280);

    box3 = new Box(700,450,70,70);
    box4 = new Box(900,450,70,70);
   
    box5 = new Box(800,350,70,70);

    pig2 = new pig(800,450);

    log2 = new log(800,400,PI/2,280);
    log3 = new log(750,350,PI/7,100);
    log4 = new log(850,350,-PI/7,100);

    bird1 = new bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    log1.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}