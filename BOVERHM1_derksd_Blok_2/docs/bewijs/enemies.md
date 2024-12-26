# enemy   

## Introduction:  
Het doel van de speler is overleven. De verschillende vijanden hebben allemaal hetzelfde doel: het vernietigen van de tijdmachine. De obstakels in het spel zijn in de vorm van verschillende vijanden. Deze vijanden zijn elk anders maar hebben allemaal hetzelfde doel: het vernietigen van de tijdmachine. Dit doen ze door in de richting van de tijdmachine te bewegen die zich in het midden van het scherm bevindt. Het maken van een interactief spel vereist dat we verschillende vijanden toe gaan voegen die elk uniek zijn.

## Enemies:

### Enemy List:
De speler begint in het midden van het scherm en de oppositie daarbuiten. Telkens wanneer de oppositie in contact komt met de tijdmachine, verdwijnen ze van het scherm en doen ze schade. Sommige vijanden zijn in staat om meerdere keren geschoten te worden. "Enemy1" is een veel voorkomende vijand die in een rechte lijn richting de tijdmachine beweegt. "Enemy2" is een minder voorkomende vijand die vrij langzaam is maar veel schade kan oplopen. "Enemy3" komt minder vaak voor maar is vrij snel maar kan weinig schade oplopen. 

### Code van Sketch:        
```js
let player;

let bullets = [];
let bulletDamage = 40;

let enemies = [];
let enemies2 = [];
let enemies3 = [];
let attractors = [];
let enemyDamage = 60;

let randomX;
let randomY;

let wait;
let last = 0;
let delaytime = 300;

let crystal = 0;
let points = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Player();
  attractors.push(createVector(width / 2, height / 2));
}
function draw() {
  background(0);

  enemySpawn();

  wait = millis() - last;

  player.show();

  stroke(0, 255, 0);
  point(player.x, player.y);

  for (let i = 0; i < attractors.length; i++) {
    stroke(0, 255, 0);
    point(attractors[i].x, attractors[i].y);
  }

  for (let i = 0; i < bullets.length; ++i) {
    bullets[i].toMouse();
    bullets[i].show();

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

  randomX = random(-80, width + 80);

  randomY = random(-80, height + 80);

  updateHUD();

  if (player.hitpoint <= 0) {
    gameOver();
  }
}

function touchStarted() {
  if (wait >= delaytime) {
    bullets.push(new Bullet(mouseX, mouseY, player.x, player.y));
    last = millis();
  }
}

function updateHUD() {
   noStroke();
  fill(221, 160, 221);
  textSize(42);
  text("crystals: " + crystal, 10, 40);

  noStroke();
  fill(221, 160, 221);
  textSize(42);
  text("health: " + player.hitpoint, width - 230, 40);
}

function gameOver() {
  fill(255);
  background(0);
  textSize(45);
  textAlign(CENTER);
  text("GAME OVER ", width/2, height/2);
  text("THANKS FOR PLAYING ", width/2, height/2 + 45);
  text("Your Score: " + points, width/2, height/2 + 120);
  text("Your Crystals: " + crystal, width/2 + 22, height/2 + 165);
  noLoop();
}
```
De let variabelen bovenin maken de objecten, arrays en getallen die in andere functies gebruikt worden. De updateHUD-functie laat het aantal kristallen zien en levens van de speler. Onderaan staat een if-statement dat wanneer de speler 0 levens hebt het spel eindigt en de speler kan zien hoeveel punten en kristallen hij heeft.


### Code in enemySpawn:      
```js
function enemySpawn() {
    for (let e = 0; e < enemies.length; e++) {
      for (let j = 0; j < attractors.length; j++) {
        enemies[e].attracted(attractors[j]);
      }
      enemies[e].update();
      enemies[e].show();
    }
  
    if (randomX <= width && randomX >= 0 && randomY <= height && randomY >= 0) {
    } else {
      if (int(random(1, 80)) == 4) {
        var enemy = new Enemy1(randomX, randomY);
        enemies.push(enemy);
      }
    }
  
    for (let e = 0; e < enemies.length; e++) {
      for (let i = 0; i < bullets.length; ++i) {
        var d = dist(
          bullets[i].x,
          bullets[i].y,
          enemies[e].pos.x,
          enemies[e].pos.y
        );
  
        if (d + 32 < bullets[i].r + enemies[e].r) {
          bullets.splice(i, 1);
          enemies[e].damage();
        }
        if (enemies[e].hitpoint <= 0) {
          enemies.splice(e, 1);
          if (int(random(0, 3)) == 2) {
            crystal += int(random(1, 3));
          }
        }
      }
    }
  
    for (let e = 0; e < enemies.length; e++) {
      var p = dist(player.x, player.y, enemies[e].pos.x, enemies[e].pos.y);
  
      if (p + 75 < player.r + enemies[e].r) {
        enemies.splice(e, 1);
        enemyDamage = 60;
        player.damage();
      }
    }
  
    for (let e2 = 0; e2 < enemies2.length; e2++) {
      for (let j = 0; j < attractors.length; j++) {
        enemies2[e2].attracted(attractors[j]);
      }
      enemies2[e2].update();
      enemies2[e2].show();
    }
  
    if (randomX <= width && randomX >= 0 && randomY <= height && randomY >= 0) {
    } else {
      if (int(random(1, 45)) == 4) {
        var enemy2 = new Enemy2(randomX, randomY);
        enemies2.push(enemy2);
      }
    }
  
    for (let e2 = 0; e2 < enemies2.length; e2++) {
      for (let i = 0; i < bullets.length; ++i) {
        var d = dist(
          bullets[i].x,
          bullets[i].y,
          enemies2[e2].pos.x,
          enemies2[e2].pos.y
        );
  
        if (d + 25 < bullets[i].r + enemies2[e2].r) {
          bullets.splice(i, 1);
          enemies2[e2].damage();
        }
        if (enemies2[e2].hitpoint <= 0) {
          enemies2.splice(e2, 1);
  
          if (int(random(0, 3)) == 0) {
            crystal += 1;
          }
        }
      }
    }
  
    for (let e2 = 0; e2 < enemies2.length; e2++) {
      var p = dist(player.x, player.y, enemies2[e2].pos.x, enemies2[e2].pos.y);
  
      if (p + 62 < player.r + enemies2[e2].r) {
        enemies2.splice(e2, 1);
        enemyDamage = 30;
        player.damage();
      }
    }
  
    for (let e3 = 0; e3 < enemies3.length; e3++) {
      for (let j = 0; j < attractors.length; j++) {
        enemies3[e3].attracted(attractors[j]);
      }
      enemies3[e3].update();
      enemies3[e3].show();
    }
  
    if (randomX <= width && randomX >= 0 && randomY <= height && randomY >= 0) {
    } else {
      if (int(random(1, 250)) == 4) {
        var enemy3 = new Enemy3(randomX, randomY);
        enemies3.push(enemy3);
      }
    }
  
    for (let e3 = 0; e3 < enemies3.length; e3++) {
      for (let i = 0; i < bullets.length; ++i) {
        var d = dist(
          bullets[i].x,
          bullets[i].y,
          enemies3[e3].pos.x,
          enemies3[e3].pos.y
        );
  
        if (d + 40 < bullets[i].r + enemies3[e3].r) {
          bullets.splice(i, 1);
          enemies3[e3].damage();
        }
        if (enemies3[e3].hitpoint <= 0) {
          enemies3.splice(e3, 1);
          if (int(random(0, 2)) == 0) {
            crystal += int(random(1, 4));
          }
        }
      }
    }
  
    for (let e3 = 0; e3 < enemies3.length; e3++) {
      var p = dist(player.x, player.y, enemies3[e3].pos.x, enemies3[e3].pos.y);
  
      if (p + 88 < player.r + enemies3[e3].r) {
        enemies3.splice(e3, 1);
        enemyDamage = 90;
        player.damage();
      }
    }
}

```
In de enemySpawn-functie laat het de vijanden zien en bewegen. Elke vijanden kan een kans hebben om gebouwd te worden. De verschillende vijanden hebben elk een kans om kristallen te laten vallen en geven altijd punten wanneer je ze vernietigt. Ook wordt de positie van de vijanden hier bepaalt.

### Code in Enemy1:                    
```js
class Enemy1 {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.prev = createVector(x, y);
      this.vel = createVector();
      this.acc = createVector();
      this.r = 50;
      this.hitpoint = 100;
      this.maxHitpoint = 100;
    }

    update() {
      this.vel.add(this.acc);
      this.vel.limit(1);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    show() {
      noStroke();
      fill(255, 165, 0);
      ellipse(this.pos.x, this.pos.y, this.r);

      stroke(255);
      strokeWeight(2);
      noFill();
      rect(this.pos.x - 30, this.pos.y - 55, 60, 15);

      noStroke();
      fill(255, 0, 0);
      rect(
        this.pos.x - 30,
        this.pos.y - 55,
        map(this.hitpoint, 0, this.maxHitpoint, 0, 60),
        15
      );
    }

    attracted(target) {
      var force = p5.Vector.sub(target, this.pos);
      this.acc.add(force);
    }

    damage() {
      this.hitpoint -= bulletDamage;
    } 
}

```  
In de constructor van Enemy1 staan een aantal dingen: De positie, snelheid, versnelling, radius en hoeveelheid hitpoints. Je kan in de update-functie zien dat de maximum snelheid 1.0 is. In de show-functie wordt de positie, vorm en kleur bepaalt, de vijand heeft een radius van 50 en een oranje kleur. Ook begint de vijand buiten het scherm. De attracted-functie zorgt ervoor dat de vijand in een bepaalde richting beweegt en de damage-functie laat zien hoeveel schade de vijand kan oplopen.

### Code van Enemy2:              
```js
class Enemy2 {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.prev = createVector(x, y);
      this.vel = createVector();
      this.acc = createVector();
      this.r = 30;
      this.hitpoint = 20;
      this.maxHitpoint = 20;
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(2.5);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    show() {
      noStroke();
      fill(255, 0, 165);
      ellipse(this.pos.x, this.pos.y, this.r);
  
      stroke(255);
      strokeWeight(2);
      noFill();
      rect(this.pos.x - 20, this.pos.y - 40, 40, 10);
  
      noStroke();
      fill(255, 0, 0);
      rect(
        this.pos.x - 20,
        this.pos.y - 40,
        map(this.hitpoint, 0, this.maxHitpoint, 0, 40),
        10
      );
    }
  
    attracted(target) {
      var force = p5.Vector.sub(target, this.pos);
      this.acc.add(force);
    }
  
    damage() {
      this.hitpoint -= bulletDamage;
    }
}

```
In de constructor van Enemy2 staan een aantal dingen: De positie, snelheid, versnelling, radius en hoeveelheid hitpoints. Je kan in de update-functie zien dat de maximum snelheid 2.5 is. In de show-functie wordt de positie, vorm en kleur bepaalt, de vijand heeft een radius van 30 en een roze kleur. Ook begint de vijand buiten het scherm. De attracted-functie zorgt ervoor dat de vijand in een bepaalde richting beweegt en de damage-functie laat zien hoeveel schade de vijand kan oplopen.

### Code van Enemy3:              
```js
class Enemy3 {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.prev = createVector(x, y);
      this.vel = createVector();
      this.acc = createVector();
      this.r = 80;
      this.hitpoint = 200;
      this.maxHitpoint = 200;
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(0.8);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    show() {
      noStroke();
      fill(255, 0, 0);
      ellipse(this.pos.x, this.pos.y, this.r);
  
      stroke(255);
      strokeWeight(2);
      noFill();
      rect(this.pos.x - 40, this.pos.y - 75, 80, 15);
  
      noStroke();
      fill(255, 0, 0);
      rect(
        this.pos.x - 40,
        this.pos.y - 75,
        map(this.hitpoint, 0, this.maxHitpoint, 0, 80),
        15
      );
    }
  
    attracted(target) {
      var force = p5.Vector.sub(target, this.pos);
      this.acc.add(force);
    }
  
    damage() {
      this.hitpoint -= bulletDamage;
    }
}

```
In de constructor van Enemy3 staan een aantal dingen: De positie, snelheid, versnelling, radius en hoeveelheid hitpoints. Je kan in de update-functie zien dat de maximum snelheid 0.8 is. In de show-functie wordt de positie, vorm en kleur bepaalt, de vijand heeft een radius van 80 en een rode kleur. Ook begint de vijand buiten het scherm. De attracted-functie zorgt ervoor dat de vijand in een bepaalde richting beweegt en de damage-functie laat zien hoeveel schade de vijand kan oplopen.

