class bob{
    constructor(x,y){

    var Options= {
        restitution : 1 ,
        friction : 0 ,
        isStatic : false  ,
        density :0.8
    }

    this.body = Bodies.circle(x,y,10,Options)
    World.add(world,this.body)
    }

    display(){
        push ()
        fill("white")
        ellipseMode(RADIUS)
      
        ellipse(this.body.position.x,this.body.position.y,10,10)
       
        pop ()

    }
}