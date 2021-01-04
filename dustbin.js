class Dustbin {

    constructor(x,y,width,height) {
        
        var options = {

            isStatic:true,
            restituition:0.1,
            friction:0,
            density:1            

        }

    this.x=x;
    this.y=y;
    this.width=width;    
    this.height=height;
    this.body=Bodies.rect(this.x, this.y, this.width, this.height, options)
    World.add(world, this.body);

    }
    display() {

        var dustbinpos = this.body.position;

        push()
        translate(dustbinpos.x, dustbinpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255, 0, 255)
        pop()

    }
}
