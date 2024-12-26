# wiskunde

## Vector:  
Een vector is een entiteit met grootte en richting. De datatype die echter slaat op de componenten van de vector (x, y voor 2D) voor onze game. Als u bijvoorbeeld kijkt naar een object die over het scherm beweegt, heeft deze op elk moment een positie (een vector die van de oorsprong naar zijn locatie wijst), een snelheid (de snelheid waarmee de positie van het object per tijdseenheid verandert, uitgedrukt als een vector) en versnelling (de snelheid waarmee de snelheid van het object per tijdseenheid verandert, uitgedrukt als een vector).  

## Bronnen:  
[Vector p5.js](https://p5js.org/reference/#/p5.Vector)


# Schiet functie in de game

De functie schiet een aantal kogels af in de richting van de muispositie. In de for-loop wordt de hoek van elke kogel berekend en een nieuwe Bullet instantie aangemaakt. De shoot() functie van de Bullet klasse geeft de beginpositie van de kogel en berekent de hoek van de kogel ten opzichte van de muispositie. De show() functie tekent de kogel op het scherm en de update() functie beweegt de kogel in de richting van de berekende hoek met de snelheid die in de constructor is gedefinieerd.

## Code
```js
for (let a = 0; a < bulletAmount; a++) {
        let angle = map(a, 0, bulletAmount, 0, TWO_PI);
        let bullet = new Bullet(angle);
        bullet.shoot(mouseX, mouseY);
        bullets.push(bullet);
       }
```
En de bullet class waar naar verwezen word:
```js
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
```

## Uitleg

1. In de for-loop wordt `bulletAmount` aantal kogels afgeschoten. Voor elke iteratie van de loop wordt de hoek van de kogel berekend met de `map()` functie. `map()` is een utility functie die een waarde van een bereik naar een ander bereik "mapt" (omzetten). In dit geval wordt de huidige iteratie van de loop, `a`, van het bereik `0` tot `bulletAmount` naar het bereik van `0` tot `TWO_PI` gemapt. Dit betekent dat elke kogel een unieke hoek zal hebben die de volle cirkel van `0` tot `360 graden` beslaat.

2. Vervolgens wordt een nieuwe instantie van de Bullet klasse aangemaakt en de berekende hoek beslist dan de richting.

3. De `shoot()` functie wordt aangeroepen met de huidige muispositie als plek waar het naar moet gaan. Binnen deze functie wordt de beginpositie van de kogel ingesteld op de huidige positie van de speler. Vervolgens wordt de hoek van de kogel berekend ten opzichte van de muispositie met behulp van de `atan2()` functie. De `atan2()` functie is een variant van de arctangent functie die de hoek tussen twee punten op een 2D-coördinatenstelsel berekent. De `atan2()` functie neemt twee argumenten aan, de y-coördinaat van het doelpunt en de x-coördinaat van het doelpunt en geeft de hoek terug in radialen.

4. Tenslotte wordt de `update()` functie aangeroepen die de positie van de kogel bijwerkt met behulp van de berekende hoek en snelheid. Hiervoor wordt de `cos()` en `sin()` functies gebruikt. Deze functies geven de x en y componenten van een vector terug met een bepaalde grootte en hoek. Dus door de snelheid te vermenigvuldigen met de cosinus van de hoek en te verhogen met de x-positie, wordt de x-positie van de kogel bijgewerkt en hetzelfde geldt voor de y-positie met de sinus van de hoek.

In samenvatting, de code maakt gebruik van de trigonometrie zoals `atan2()`, `cos()` en `sin()` om de richting van de kogels te bepalen.

## formules

De map-functie in de for-lus kan wiskundig worden geschreven als:

```math
newValue = (oldValue - oldMin) * (newMax - newMin) / (oldMax - oldMin) + newMin
```

De atan2-functie in de shoot-methode kan wiskundig worden geschreven als:
```math
angle = atan2(y2 - y1, x2 - x1)
```

De cos- en sin-functies in de update-methode kunnen wiskundig worden geschreven als:
```math
x += speed * cos(angle)
y += speed * sin(angle)
```


