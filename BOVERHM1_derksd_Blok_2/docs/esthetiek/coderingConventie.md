# codering conventie

Codeconventies verbeteren de leesbaarheid, waardoor de lezers nieuwe code sneller en grondiger kunnen begrijpen. Ze hebben de volgende doelen: Ze zorgen voor een consistent uiterlijk van de code, zodat lezers zich kunnen concentreren op de inhoud en niet op de lay-out. Ze stellen lezers in staat de code sneller te begrijpen door aannames te doen op basis van eerdere ervaringen. Ze vergemakkelijken het kopiëren, wijzigen en onderhouden van de code.  

## Richtlijnen voor programmeren:  
- Naamgevings- en declaratieregels voor variabelen en functies.        
- Regels voor het gebruik van witruimte, inspringen en opmerkingen.      
- Programmeerpraktijken en -principes.  

Namen van variabelen:        
```js
```
Alle namen beginnen met een letter.

Ruimtes rond operatoren:            
```js
```  
Plaats altijd spaties rond operatoren ( = + - * / ), en na komma's.

Code inspringen:    
```js
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
    ellipse(this.x, this.y, this.r - 35);
  }
}
```
2 spaties voor het inspringen van codeblokken.    

## Voordelen van codeerconventies:  
- Het verbeteren van de leesbaarheid van de code.       
- Het eenvoudiger maken van het onderhouden van code.  

## Verklaring regels:  
Algemene regels voor eenvoudige verklaringen:

Eindig een eenvoudige instructie altijd met een puntkomma.  
```js
```

Algemene regels voor complexe (samengestelde) uitspraken:  

- Plaats de openingshaak aan het einde van de eerste regel.
- Gebruik een spatie voor de openingshaak.
- Zet het sluithaakje op een nieuwe regel, zonder voorloopspaties.
- Eindig een complexe instructie niet met een puntkomma.

Functies:  
```js
function setup() {
  createCanvas(width, height);
```

Loops:  
```js
for (let e = 0; e < enemies.length; e++) {
  enemies[e].update();
  enemies[e].show();
}
```

Conditionals (if-else):            
```js
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

## Bronnen:  
- [waarom coderingsconventies gebruiken?](https://en.wikipedia.org/wiki/Coding_conventions)    
- [welke coderingsconventies gebruiken?](https://www.w3schools.com/js/js_conventions.asp)    


