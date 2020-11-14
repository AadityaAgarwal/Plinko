class Wall{

    constructor(x,y,w,h){
        var opts= {isStatic: true}
        this.obj= Bodies.rectangle(x,y,w,h,opts);
        this.w= w;
        this.h= h;
        World.add(world,this.obj);
    }

    display(){

        rectMode(CENTER);
        fill("white");
        rect(this.obj.position.x,this.obj.position.y,this.w,this.h);
    }
}