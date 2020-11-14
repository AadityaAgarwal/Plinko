class Particles{

    constructor(x,y){

       this.obj= Bodies.circle(x,y,10,{restitution: 0.4});
       this.color= color(random(0,255), random(0,255),random(0,255));
       World.add(world,this.obj);

    }

    display(){
        
        var angle= this.obj.angle;

        push();
        translate(this.obj.position.x,this.obj.position.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}