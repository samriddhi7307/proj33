var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions = [];  
var particles =[];
var plinkos = [];
var divisions,plinkos,particle;
//var Particles;
var divisionHeight=300;
var score =0;
var turn = 0;
var count = 0;

var gameState = "PLAY";
var PLAY;
var END;
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
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score;
    /* if(particle != null){
      particle.display();
      if(particle.body.position.y>750){
          if(particle.body.position.x<300){
              score+=500;
              particle=null;
              if( count>= 5 ){
                textSize(30);
                fill("red");
                stroke("red") 
                text("GAME OVER",400,400); 
              }
    }
      }     // console.log("o");
  }*/
    }
    if(particle!=null)
     {
        particle.display();
    if (particle.body.position.y>760) 
    { 
      if (particle.body.position.x < 300) 
      {
         score=score+500;
          particle=null; 
          if ( count>= 5) gameState ="end";
         }
          else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
          { score = score + 100; particle=null; 
            if ( count>= 5) gameState ="end";
           }
            else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) 
            { score = score + 200;
               particle=null;
                if ( count>= 5) gameState ="end"; 
              }
            }
          }
    //console.log(particle.body.position.x);
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   

  
   push();
   textSize(30);
   fill("yellow");
   text("SCORE : "+score,10,40);
   pop();
   textSize(25);
   text("500",100,515);
   textSize(25);
   text("500",20,515);
   textSize(25);
   text("500",180,515);
   textSize(25);
   text("500",260,515);
   textSize(26);
   text("100",335,515);
   textSize(26);
   text("100",415,515);
   textSize(26);
   text("100",495,515);
   textSize(26);
   text("200",575,515);
   textSize(26);
   text("200",655,515);
   textSize(26);
   text("200",735,515);
  }
  
function mousePressed(){
  if(gameState!=="END"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}
