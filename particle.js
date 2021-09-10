class Particle {
  constructor(x, y, r) {
    var options = {
      isStatic:false
    }
    this.r = r;
    this.body = Bodies.circle(x, y, r, options);
    this.color = color(random(0, 255), random(0, 255), random(0, 255))
    World.add(world, this.body);
  }
  
  display() {
    var pos = this.body.position;
  
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    noStroke();
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r);
    pop();
  }
};