const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Events = Matter.Events;


//create CONSTANT my engine and my world
var engine, world ; 

var particles = [];
var plinkos = [];
var divisions = [];
//var score = 0;
//var particle;
//var PLAY=0;
//var END=1;
//var gameState=PLAY;
var divisionHeight=300;
//var score =0;
//var count=0;

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

    

    
}
 


function draw() {

  background("black");
  Engine.update(engine);

  textSize(30)
  fill("white");
  text(500,15, 600);
  text(500, 95,600);
  text(500, 175,600);
  text(500, 255,600);
  text(100,335,600);
  text(100,415,600);
  text(100,495,600);
  text(200,575,600);
  text(200,655,600);
  text(200,735,600);
  //text("Score : "+ score,20,30);
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //if (count==5){
    //gameState=END;
  // }
   
}


/*function mousePressed(){

  if (gameState==PLAY){
    particle=new Particle(mouseX, 10,10,10);
    count=count+1;
  }

}*/