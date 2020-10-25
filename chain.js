class chain{
    constructor(a,b){
    var options={
        bodyA:a,
        bodyB:b,
        stiffness:0.02,
        length:10
        }
    this.Chain=Matter.Constraint.create(options)
    World.add(world,this.Chain)
    }
    show()
    {
        if(this.Chain.bodyA!=null)
        line (this.Chain.bodyA.position.x,this.Chain.bodyA.position.y,this.Chain.bodyB.x,this.Chain.bodyB.y) 
        
    }
    fly()
    {
        this.Chain.bodyA=null
    }
}