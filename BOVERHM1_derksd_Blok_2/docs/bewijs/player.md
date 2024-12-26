# player      

## Introductie:  
Voor ons spel moeten we een manier hebben voor speler om te kunnen communiceren met zijn omgeving. Hier maken we een lichaam voor die door de speler bestuurd kan worden.                               

## Code van player:    
```js
class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.r = 100;
    this.hitpoint = 300;
  };

  show() {
    noFill();
    strokeWeight(2);
    stroke(138, 102, 66);
    ellipse(this.x, this.y, this.r);

    noStroke();
    fill(50, 50, 255);
    ellipse(this.x, this.y, this.r - 35);
  };

  damage() {
    this.hitpoint -= enemyDamage;
  };
};
```
De speler staat altijd in het midden vanwege de vaste waardes van **width** en **height**. De vorm van de speler is die van een 50 pixels brede en 50 pixels hoge ellips. De kleur van de ellips is een gemengde kleur **fill(50, 50, 255)**. In de **damage()** functie gaat de variabel **hitpoint** naar beneden als een vijand tegen de speler aanbotst.          
