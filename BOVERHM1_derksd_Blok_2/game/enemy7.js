class Enemy7 {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.prev = createVector(x, y);
      this.vel = createVector();
      this.acc = createVector();
      this.r = 160;
      this.hitpoint = enemy7Health;
      this.maxHitpoint = 1000;
  
  
      let side7 = random([0, 1, 2, 3]);
      if (side7 == 0) {
        this.pos.x = -this.r;  // left side
        this.pos.y = random(0, height);
      } else if (side7 == 1) {
        this.pos.x = random(0, width);  // top side
        this.pos.y = -this.r;
      } else if (side7 == 2) {
        this.pos.x = width + this.r;  // right side
        this.pos.y = random(0, height);
      } else {
        this.pos.x = random(0, width);  // bottom side
        this.pos.y = height + this.r;
      }
      
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(enemy7Speed);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    show() {
      noStroke();
      fill(102, 0, 0);
      ellipse(this.pos.x, this.pos.y, this.r);
  
      stroke(255);
      strokeWeight(2);
      noFill();
      rect(this.pos.x - 70, this.pos.y - 120, 140, 25);
  
      noStroke();
      fill(255, 0, 0);
      rect(
        this.pos.x - 70,
        this.pos.y - 120,
        map(this.hitpoint, 0, this.maxHitpoint, 0, 140),
        25
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
  