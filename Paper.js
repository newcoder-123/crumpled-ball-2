class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x 
        this.y = y 
        this.radius = radius
        this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
        this.image = loadImage("paperball.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        fill("white")
        rotate(angle)
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,50,50)
        /*translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)*/
        //ellipse(0,0,this.radius,this.radius)
        pop()
    }
}