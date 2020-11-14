const Engine= Matter.Engine;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const World= Matter.World

var plinkos=[];
var particles=[];

var engine,world;

var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,ground;
var ball;

function setup() {
  createCanvas(800,400);
  
  engine= Engine.create();
  world= engine.world;

  
  
  w1= new Wall(10,310,10,160);
  w2= new Wall(90,310,10,160);
  w3= new Wall(170,310,10,160);
  w4= new Wall(250,310,10,160);
  w5= new Wall(330,310,10,160);
  w6= new Wall(410,310,10,160);
  w7= new Wall(490,310,10,160);
  w8= new Wall(570,310,10,160);
  w9= new Wall(650,310,10,160);
  w10= new Wall(730,310,10,160);
  ground= new Wall(400,390,800,10);

  ball= new Particles(400,200);

    
  for (var j= 50; j<=800; j=j+50){
    plinkos.push(new Plinko(j,10));
  }
   
  for (var j= 60; j<=800; j=j+50){
    plinkos.push(new Plinko(j,50));
  }
 for (var j= 50; j<=800; j=j+50){
    plinkos.push(new Plinko(j,30));
  }
  for (var j= 50; j<=800; j=j+50){
    plinkos.push(new Plinko(j,70));
  }

  
}

function draw() {

  rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.update(engine);
  background(0);  

  w1.display();
  w2.display();
  w3.display();
  w4.display();
  w5.display();
  w6.display();
  w7.display();
  w8.display();
  w9.display();
  w10.display();
  ground.display();
  //plinkos.display();

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  for(var r= 0; r< particles.length; r=r+1){
    particles[r].display();
  }

 ball.display();

 for(var i=0; i< plinkos.length; i=i+1){
  plinkos[i].display();
}

  drawSprites();
}