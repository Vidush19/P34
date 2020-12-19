class Pendulum{
    constructor(x,y,color){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
        };
        this.x = x;
        this.y = y;
        this.color = color;
        this.body = Bodies.rectangle(this.x, this.y, 40, 40, options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke(this.color);
        fill(0);
        ellipse(0, 0, 60, 60);
        pop();
    }
}