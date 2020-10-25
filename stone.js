class stone {
    constructor(x,y){
        var options={
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
        }
        World.add(world,this.body)
        this.image = loadImage("stone.png");
    }
  
  
    

}