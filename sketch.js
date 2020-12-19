const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;
 

function setup() {
  createCanvas(windowWidth/2, windowHeight);
  engine = Engine.create();
  world = engine.world;

  bob1 = new Pendulum(width/2,height/2,"red");
  bob2 = new Pendulum((width/2)-65,height/2,"green");
  bob3 = new Pendulum((width/2)-130,height/2,"blue");
  bob4 = new Pendulum((width/2)+65,height/2,"yellow");
  bob5 = new Pendulum((width/2)+130,height/2,"pink");
  sling1 = new Sling(bob1.body,{x:width/2, y:(height/2)-220});
  sling2 = new Sling(bob2.body,{x:(width/2)-65, y: (height/2)-220});
  sling3 = new Sling(bob3.body,{x:(width/2)-130, y: (height/2)-220});
  sling4 = new Sling(bob4.body,{x:(width/2)+65, y: (height/2)-220});
  sling5 = new Sling(bob5.body,{x:(width/2)+130, y: (height/2)-220});


    Engine.run(engine);
    
  }
 


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bob3.body,{x:mouseX, y: mouseY});
}



 

