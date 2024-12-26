# bullet

### maken van kogel klasse:            
```js
class Bullet {
  constructor(angle) {
    this.speed = 10;
    this.x = 0;
    this.y = 0;
    this.r = 15;
    this.angle = angle;
  };

  shoot(targetX, targetY) {
    this.x = player.x;
    this.y = player.y;
    this.angle += atan2(targetY - this.y, targetX - this.x);
  };

  show = function () {
    fill(255, 0, 0);
    stroke(128, 128, 0);
    ellipse(this.x, this.y, this.r);
  };

  update() {
    this.x += this.speed * cos(this.angle);
    this.y += this.speed * sin(this.angle);
  };
};
```

### maken van kogel reeks:    
```js
```   
```js
let bullets = [];
```
```js
  for (let i = 0; i < bullets.length; ++i) {
    bullets[i].show();
    bullets[i].update();

    if (
      bullets[i].x > -bullets[i].r &&
      bullets[i].x < width + bullets[i].r &&
      bullets[i].y > -bullets[i].r &&
      bullets[i].y < height + bullets[i].r
    ) {
    } else {
      bullets.splice(i, 1);
      }
  }
```

### maken van schiet knop:  
```js
let wait;
let last = 0;
let delaytime = 300;
let bulletAmount = 1;
```  
```js
  if (wait >= delaytime) {
    for (let a = 0; a < bulletAmount; a++) {
      let angle = map(a, 0, bulletAmount, 0, TWO_PI);
      let bullet = new Bullet(angle);
      bullet.shoot(mouseX, mouseY);
      bullets.push(bullet);
    }
      last = millis();
    }
```
De speler kan schieten met de linker- of rechtermuisknop. Er bestaat een afkoeling voor het schieten zodat de speler niet oneindig veel kogels kan schieten. 

### Bronnen:  
 
