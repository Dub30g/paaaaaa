class Enemy4 {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.prev = createVector(x, y);
      this.vel = createVector();
      this.acc = createVector();
      this.r = 40;
      this.hitpoint = enemy4Health;
      this.maxHitpoint = 60;
  
  
      let side4 = random([0, 1, 2, 3]);
      if (side4 == 0) {
        this.pos.x = -this.r;  // left side
        this.pos.y = random(0, height);
      } else if (side4 == 1) {
        this.pos.x = random(0, width);  // top side
        this.pos.y = -this.r;
      } else if (side4 == 2) {
        this.pos.x = width + this.r;  // right side
        this.pos.y = random(0, height);
      } else {
        this.pos.x = random(0, width);  // bottom side
        this.pos.y = height + this.r;
      }
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(enemy4Speed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    show() {
      noStroke();
      fill(153,50,204);
      ellipse(this.pos.x, this.pos.y, this.r);
  
      stroke(255);
      strokeWeight(2);
      noFill();
      rect(this.pos.x - 25, this.pos.y - 45, 50, 12);
  
      noStroke();
      fill(255, 0, 0);
      rect(
        this.pos.x - 25,
        this.pos.y - 45,
        map(this.hitpoint, 0, this.maxHitpoint, 0, 50),
        12
      );
    }
  
    attracted(target) {
      var force = p5.Vector.sub(target, this.pos);
      this.acc.add(force);
    }
  
    damage() {
      if (criticalChange == false) {
        this.hitpoint -= bulletDamage;
      }
      if (criticalChange == true) {
        if (int(random(0, 100 / randomCritical)) == 1) {
          this.hitpoint -= bulletDamage * 2;
        } else {
          this.hitpoint -= bulletDamage;
        }
      }
    }
  
    
  }