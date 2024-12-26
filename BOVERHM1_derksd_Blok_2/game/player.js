class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 100;
    this.hitpoint = 300;
  }

  show() {
    noFill();
    strokeWeight(2);
    stroke(138, 102, 66);
    ellipse(this.x, this.y, this.r);

    noStroke();
    fill(50, 50, 255);
    imageMode(CENTER)
    image(playerimage, this.x, this.y, this.r - 35, this.r - 35);
  };

  damage() {
    this.hitpoint -= enemyDamage;
  }
}