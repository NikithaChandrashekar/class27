class SlingShot{
    constructor(bodyA,pointB){

        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
    
        }
        
        this.sling = Constraint.create(option);
        World.add(world,this.sling);
        this.pointB=pointB;

    

    


    }
    display(){
        if (this.sling.bodyA){

    strokeWeight(5);
    var  posA=this.sling.bodyA.position;
    var posB=this.pointB;

    line( posA.x,posA.y,posB.x,posB.y);
    

        }
        
    }
    fly() {

        this.sling.bodyA=null;

    }
}