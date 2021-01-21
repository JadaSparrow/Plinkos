class Particle{
    constructor(x,y,radius){
        var options={
            'restituition' : 0.4
        }
        this.radius=radius;

        this.body = Bodies.circle(x,y,radius,options);
        this.color=color(random(0,225), random(0,225), random(0,225));
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}