# Analyseren gameplay
Om te observeren wat mensen in onze game doen hebben wij wat extra functies toegevoegd aan onze database. Deze scores zijn belangrijk want ze maken het makkelijker om te kijken wat mensen doen en zodat we deze data dan kunnen gebruiken. Al weten we namelijk informatie over wat er gebeurd is in iemands gameplay dan kunnen we er achter komen wat we kunnen veranderen om het beter te maken.

## Functies in onze database

### Naam
De naam is vooral belangrijk voor de speler zelf. Ze kunnen namelijk een naam toevoegen aan hun score zodat ze deze terug kunnen zien op de leaderboard. Dit maakt de ervaring voor de speler meer gepersonaliseerd en kunnen ze blij zijn met de score die aan hun naam is gelinked. Ook maakt dit het makkelijk om te zien of spelers meerdere keren spelen want veel mensen kiezen vaak de zelfde naam.

Code:
```js
let naam = "";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

textSize(32);
  text(`Name: ${naam}`, width / 2, 50);

  for (let i = 0; i < alphabet.length; i++) {
    strokeWeight(1);
    noFill();
    fill(255);
    text(alphabet[i], 25 + i * 30, 100);
    rect(10 + i * 30, 100, 32);
  }
```

### score
De score is belangrijk omdat het een grote motivatie is in het spelen van de game. Veel spelers zijn erg competatief en willen graag een zo hoog mogelijke score. Deze score kunnen ze dan vergelijken met andere maar ook met hun eigen score en zo kunnen ze zien of ze betere worden.

Code:
```js
let points = 0;

//voorbeeld voor waneer je een enemie killed
points += 300;
```

### Aantal kogels afgevuurd
We houden ook het aantal geschoten kogels bij. Dit is vooral zodat we achter een paar dingen kunnen komen namelijk: hoevaak moet een speler klikken in een bepaalde tijd en is dit te veel of te weinig, hoeveel kogels krijgt een speler zodat we kunnnen bijhouden of dit uit de hand loopt of niet en wat kunnen we het best aanpassen op het punt van kogels.

Code:
```js
let bulletsfired = 0

//waneer geschoten word
bulletsfired += 1 * bulletAmount;
```

### Door welke enemie gekilled
We kijken door welke enemie de speler gekilled word omdat we dan kunnen weten of bepaalde enemies te goed of te slecht zijn. Als 1 enemie dan constant de boosdoener is dan kunnen we die wat makkelijker maken en ook andersom.

Code:
```js
let enemy1Killed = false
let enemy2Killed = false
let enemy3Killed = false
let enemy4Killed = false
let enemy5Killed = false
let enemy6Killed = false
let enemy7Killed = false
let enemyKilled

//voorbeeld waneer een enemy je killed
 enemy4Killed = true

     if(enemy1Killed == true){
      enemyKilled = "Enemy 1 (orange)"
    }
    else if(enemy2Killed == true){
      enemyKilled = "Enemy 2 (pink)"
    }
    else if(enemy3Killed == true){
      enemyKilled = "Enemy 3 (red)"
    }
    else if(enemy4Killed == true){
      enemyKilled = "Enemy 4 (purple)"
    }
    else if(enemy5Killed == true){
      enemyKilled = "Enemy 5 (blue)"
    }
    else if(enemy6Killed == true){
      enemyKilled = "Enemy 6 (dark blue)"
    }
    else{
      enemyKilled = "Enemy 7 (dark red)"
    }
```

### De damage van de speler
We houden vooral de damage van de speler bij om te kijken of dit niet te groot word. Als iemand dan een bizar aantal damage krijgt kunnen we erachter komen hoe dit zo uit de hand is gelopen.

Code:
```js
//dit word berekend in de database code onderaan
```

### Hoe lang de speler speelt
Hoe lang de speler speelt is belangerijk vanwege veel redenen. Het is ten eerste gewoon fijn om te weten hoe lang een speler gemiddeld bezig is met spelen. We willen namelijk dat spelers niet te lang of te kort spelen. Ook werkt het handig samen met de andere variabelen zo kan je namelijk weten wat dus gebeurd in een bepaald aantal tijd. Hoe lang duurt het om een bepaald aantal score te krijgen? of een bepaald aantal kogels afgevuurd.

Code:
```js
    if (frameCount % 60 == 0 && timePlayedSeconds > -1) {
      timePlayedSeconds++;
    }

    if(timePlayedSeconds == 60){
        timePlayedMinutes += 1
        timePlayedSeconds -= 60
    }
```

### Hoeveel enemies de speler heeft gekilled
Dit is handig om te weten zodat we er achter kunnen komen hoeveel enemies gemiddeld gekilled worden en of dit te veel of te weinig is. Ook komen we hiermee achter hoe moeilijk de game ongeveer is en of we daar wat aan moeten veranderen

Code:
```js
let enemyKilledTotal = 0

//voorbeeld waneer je een enemie killed
enemyKilledTotal += 1
```

Code inzetten database:
```js
      firebase
        .database()
        .ref("scores")
        .push({
          name: naam,
          score: points,
          timePlayed: timePlayedMinutes + "m " + timePlayedSeconds + "s",
          enemykilled: enemyKilled,
          bulletsFired: bulletsfired,
          playerDamage: int(bulletDamage / 40 * 100) + "%",
          totalEnemiesKilled: enemyKilledTotal
        });
    
```
