class Plinko{
   constructor(x,y){
      var opts={isStatic: true}
     this.obj= Bodies.circle(x,y,10,opts);
     World.add(world,this.obj);   
   }

   display(){
      var angle= this.obj.angle;
      push();
      translate(this.obj.position.x,this.obj.position.y);
      rotate(angle);
    ellipseMode(RADIUS);
    fill("white");
    ellipse(this.obj.position.x,this.obj.position.y,10,10);
    pop();
   }
}