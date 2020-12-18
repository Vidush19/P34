var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle;
var turn = 0;
var gameState = "play";
var ground;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    ground = new Ground(width/2,height,width,30);
    
  }
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   ground.display();
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }
  if(particle != null){
    particle.display();
    if(particle.body.position.y==760){
      if(particle.body.position.x<300){
        score += 500;
        particle = null;
        turn++;
      }
      if(particle.body.position.x<520 && particle.body.position.x>300){
        score += 100;
        particle = null;
        turn++;
      }
      if(particle.body.position.x>540){
        score += 200;
        particle = null;
        turn++;
      }
    }
  } 

 
  // for (var j = 0; j < particles.length; j++) {
   
  //    particles[j].display();
  //  }
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(turn>=5){
     gameState = "end";
   }
   if(gameState != "play"){
     textSize(48);
     fill("white");
     text("GAME OVER",width/2-100,height/2);
   }
   fill(255);
   textSize(24);
   text("500",20,500);
   text("500",100,500);
   text("500",180,500);
   text("500",260,500);
   text("100",340,500);
   text("100",420,500);
   text("100",500,500);
   text("200",580,500);
   text("200",660,500);
   text("200",740,500);
   fill("yellow");
   textSize(32);
   text("Score: "+score,20,50);
}

function mousePressed() {
  if(gameState !== "end"){
    particle = new Particle(mouseX, 10, 10);
  }
}


 

