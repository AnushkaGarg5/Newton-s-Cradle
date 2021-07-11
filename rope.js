class Rope {
    constructor(body1 ,body2,pointA,pointB ){

    this.pointA = pointA
    this.pointB = pointB
    

    var options = {
        //pointA :  {x:this.bodyA.x, y :this.bodyA.y} ,
        bodyA : body1 ,
        bodyB : body2 ,
        pointB : {x:this.pointA, y:this.pointB} } 

      this.rope = Matter.Constraint.create(options)
       World.add(world,this.rope)
      }

    display(){
        //push ()
       // rectMode(CENTER)
       // fill ("white")

        var pointA = this.rope.bodyA.position
        var pointB = this.rope.bodyB.position
        strokeWeight(2)
        line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
        //pop ()
    }


}
