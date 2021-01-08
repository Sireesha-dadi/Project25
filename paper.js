class Paper{

    constructor(x,y){
        
        var options={
            'restitution':0.3,
            'isStatic':false,
            'friction':0,
            'density':1.2
        }
        this.body= Bodies.circle(x,y,30,options);
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
      // ellipseMode(RADIUS);
       //rectMode(CENTER)
       // fill("pink");
       // ellipse(0,0,20,20);
       imageMode(CENTER);
       image(this.image,0,0,30);
        pop()
    }

}