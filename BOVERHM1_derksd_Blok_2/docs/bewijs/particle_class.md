# particles    

## Introduction:  
Voor de derde sprint wou ik een particle systeem gaan maken. Deze komt tevoorschijn wanneer een vijand dood gespliced wordt uit de array.  

### particle array:      
```js
let particles = []; // Particle array  
```
Een array van meerdere particles.  

### for loops in functie draw():    
```js
  for (let particle of particles) {
    let gravity = createVector(0, 0.2);
      particle.applyForce(gravity);
      particle.update();
      particle.show();
    }
  
  for (let i = particles.length - 1; i >= 0; i--) {
    if (particles[i].finished()) {
    particles.splice(i, 1);
    }
}
```
De waarde van de variabele gravity staat tussen 0 en 0.2 en bepaalt met hoeveel de versnelling omhoog gaat wat de valversnelling van een particle indirect bepaalt.  

### particle class:       
```js
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.r = 4;
    this.lifetime = 255;
    }
  
    finished() {
      return this.lifetime < 0;
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
  
      this.lifetime -= 5;
    }
  
    show() {
      stroke(255, this.lifetime);
      strokeWeight(2);
      fill(255, this.lifetime);
  
      ellipse(this.pos.x, this.pos.y, this.r * 2);
    }
}
```
De radius van de ellipse is 4 pixels.  De x- en y-positie worden door de constructor bepaalt. De snelheid is zit tussen 0.5 en 2. De duur van een particle is 255 en gaat telkens omlaag met 5 zoals gezien in de functie update(). Wanneer deze waarde onder de nul staat laat de ellipse zich niet meer zien. In de functie show() staat namelijk dat de slagkleur en kleur van de ellipse telkens met 5 omlaag gaan.  

### bronnen:    
[The Coding Train Particle System Simulation](https://www.youtube.com/watch?v=syR0klfncCk&t=399s)
Hier kon ik een particle systeem mee bouwen

[The Coding Train Many Particle Systems](https://www.youtube.com/watch?v=wDYD3JVtOys)
Hier kon ik meerdere particle systeems mee bouwen en ze makkelijker oproepen

