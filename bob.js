class Bob{
constructor(x,y){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x,y,25,options);
    World.add(world,this.body);
    this.radius=25;

    
}
display(){
    push();
    fill("purple");   
    ellipseMode(CENTER);
    strokeWeight(3);
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    ellipse(0,0,this.radius,this.radius);
    pop();
}

}