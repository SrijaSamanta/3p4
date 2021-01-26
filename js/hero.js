class hero{
    constructor(x,y,r){

        var opp={
            frictionAir:0.005,
            density: 1.5
        }
        this.body = Bodies.circle(x, y, r/2, opp);
        this.r = r;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        image(this.image, pos.x, pos.y, this.r, this.r);

    }
}