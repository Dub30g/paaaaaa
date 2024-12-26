class Bullet {
  constructor(angle) {
    this.speed = 10;
    this.x = 0;
    this.y = 0;
    this.r = 15;
    this.angle = angle;
  }

  shoot(targetX, targetY) {
    this.x = player.x;
    this.y = player.y;
    this.angle += atan2(targetY - this.y, targetX - this.x);
  }

  show = function () {
    fill(255, 0, 0);
    stroke(128, 128, 0);
    ellipse(this.x, this.y, this.r);
  };

  update() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
  }
}

