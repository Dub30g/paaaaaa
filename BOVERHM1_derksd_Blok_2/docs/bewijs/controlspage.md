# controlsScreen()

## Introduction:
Ik wou de speler een korte uitleg geven over het spel. Op het begin scherm staat een knop genaamd "controls" die de speler naar een uitleg scherm hoort te brengen. Op het uitleg scherm krijgt de speler drie keuzes: het spel spelen, de scores bekijken en terug naar het begin scherm te gaan.

### controlsScreen() function:    
```js
function controlsScreen() {
  fill(255);
  strokeWeight(1);
  textFont("Calibri");
  background(0);
  textAlign(LEFT);
  textSize(width / 30);
  text("TAP OR CLICK THE SCREEN TO FIRE", 0.075 * width, 0.100 * height);
  text("HAVE A CHANCE TO EARN CRYSTALS BY KILLING ENEMIES", 0.075 * width, 0.175 * height);
  text("COLLECT 10 OR MORE CRYSTALS TO UPGRADE TIME -", 0.075 * width, 0.225 * height);
  text("MACHINE", 0.075 * width, 0.275 * height);
  text("EARN POINTS BY KILLING ENEMIES", 0.075 * width, 0.350 * height);
  text("YOU LOSE HEALTH WHEN ENEMIES TOUCH YOU", 0.075 * width, 0.425 * height);
  text("THE AMOUNT OF DAMAGE DEPENDS ON THE ENEMY", 0.075 * width, 0.475 * height);
  text("WHEN HEALTH REACHES 0 YOU LOSE", 0.075 * width, 0.525 * height);
  textAlign(CENTER);
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(0.05 * width, 0.05 * height, 0.9 * width, 0.671 * height);
  // start knop
  fill(255);
  strokeWeight(2);
  textSize(width / 30);
  text("START", 0.3 * width, 0.8 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.3 * width, 0.8 * height, 0.285 * width, 0.107 * height);
  // score knop
  fill(255);
  strokeWeight(2);
  text("SCORE", 0.7 * width, 0.8 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.7 * width, 0.8 * height, 0.285 * width, 0.107 * height);
  // home knop
  fill(255);
  strokeWeight(2);
  text("HOME", 0.30 * width, 0.95 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.30 * width, 0.95 * height, 0.285 * width, 0.107 * height);
  
  // start knop kunnen klikken
    if(mouseX > 0.157 * width && mouseX < 0.442 * width && mouseY < 0.853 * height && mouseY > 0.746 * height){
      if(mouseIsPressed) {
        controls = false;
        start = true;
      }
    }

  // score knop kunnen klikken
    if(mouseX > 0.557 * width && mouseX < 0.842 * width && mouseY < 0.853 * height && mouseY > 0.746 * height){
      if(mouseIsPressed) {
        controls = false;
        score = true;
      }
    }  

  // home knop kunnen klikken
    if(mouseX > 0.157 * width && mouseX < 0.442 * width && mouseY < 1.003 * height && mouseY > 0.896 * height){
      if(mouseIsPressed) {
        controls = false;
        home = true;
      }
    }
}
```
In de volgende twee koppen wordt alle code stap voor stap uitgelegd.

### controlsScreen() display:
![](docs/images/controlsScreen.png)    
```js
  fill(255);
  strokeWeight(1);
  textFont("Calibri");
  background(0);
  textAlign(LEFT);
  textSize(width / 30);
  text("TAP OR CLICK THE SCREEN TO FIRE", 0.075 * width, 0.100 * height);
  text("HAVE A CHANCE TO EARN CRYSTALS BY KILLING ENEMIES", 0.075 * width, 0.175 * height);
  text("COLLECT 10 OR MORE CRYSTALS TO UPGRADE TIME -", 0.075 * width, 0.225 * height);
  text("MACHINE", 0.075 * width, 0.275 * height);
  text("EARN POINTS BY KILLING ENEMIES", 0.075 * width, 0.350 * height);
  text("YOU LOSE HEALTH WHEN ENEMIES TOUCH YOU", 0.075 * width, 0.425 * height);
  text("THE AMOUNT OF DAMAGE DEPENDS ON THE ENEMY", 0.075 * width, 0.475 * height);
  text("WHEN HEALTH REACHES 0 YOU LOSE", 0.075 * width, 0.525 * height);
  textAlign(CENTER);
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(0.05 * width, 0.05 * height, 0.9 * width, 0.671 * height);
  // start knop
  fill(255);
  strokeWeight(2);
  textSize(width / 30);
  text("START", 0.3 * width, 0.8 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.3 * width, 0.8 * height, 0.285 * width, 0.107 * height);
  // score knop
  fill(255);
  strokeWeight(2);
  text("SCORE", 0.7 * width, 0.8 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.7 * width, 0.8 * height, 0.285 * width, 0.107 * height);
  // home knop
  fill(255);
  strokeWeight(2);
  text("HOME", 0.30 * width, 0.95 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.30 * width, 0.95 * height, 0.285 * width, 0.107 * height);
```
Hier leg ik stap voor stap elke functie uit. De functies fill() en background() kleuren de tekst/ellipse en achtergrond. De functies text(), textFont() en textSize() maken de letters, bepalen het lettertype en de lettergrootte. De functies noFill(), stroke() en strokeWeight() zorgen ervoor dat de ellipse van binnen leeg is, de kleur en dikte van de buitenste ring. Voor het invullen van waardes (geen kleuren) gebruik ik geen vaste getallen.

### controlsScreen() collision:  
```js
  // start knop kunnen klikken
    if(mouseX > 0.157 * width && mouseX < 0.442 * width && mouseY < 0.853 * height && mouseY > 0.746 * height){
      if(mouseIsPressed) {
        controls = false;
        start = true;
      }
    }

  // score knop kunnen klikken
    if(mouseX > 0.557 * width && mouseX < 0.842 * width && mouseY < 0.853 * height && mouseY > 0.746 * height){
      if(mouseIsPressed) {
        controls = false;
        score = true;
      }
    }  

  // home knop kunnen klikken
    if(mouseX > 0.157 * width && mouseX < 0.442 * width && mouseY < 1.003 * height && mouseY > 0.896 * height){
      if(mouseIsPressed) {
        controls = false;
        home = true;
      }
    }
```
Wanneer de variabele controls op true staat ben je op het uitleg scherm. Wanneer de andere variabele op true staan en controls op false verandert het scherm. Met de muis of vinger kan je op de knoppen klikken.

## Sources:    
- [Code example Jeroen & Benjamin](https://propedeuse-gd.dev.hihva.nl/2022-2023/blok-2/drosbj_oudshoj5_Blok_2/Sprint%202/startscherm/)
Ik heb aan het begin gebruik gemaakt van vergelijkbare code maar aan het einde mijn eigen draai hier aan gegeven zodat het er niet te veel op leek.         
