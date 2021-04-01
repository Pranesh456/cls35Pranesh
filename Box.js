class Box{
  constructor(x,y,width,height){
      var options ={
       density:1,
       friction:0.005,
       isStatic:true,
       restitution:0.5 //mam i dont know the value of restitution so gave random value
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body)
      this.width=width;
      this.height=height;
  }

  display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      ellipse(0,0,this.width,this.height)
      pop();
      }
}