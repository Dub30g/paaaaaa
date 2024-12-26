# homeScreen()

# Introductie:         
De speler moet op het titel scherm zitten aan het begin van het spel. Vanuit het titel scherm moet de speler de volgende dingen kunnen doen:
- Het spel kunnen spelen.    
- De hoogste score kunnen bekijken.    
- De spelregels kunnen bekijken.        

## Stappen:    
- Stap 1: Ik maak een functie aan genaamd homeScreen().
- Stap 2: Ik stop deze functie in een bestand genaamd screen.js en voeg deze toe in de index.  
- Stap 3: Ik maak een variabel aan genaamd home boven de functie setup() en zet deze op true.   
```js
let home = true;
```

- Stap 3: Vul de functie homeScreen() in:      
```js
function homeScreen() {
  
  var textgrote1 = width / 20;
  var textgrote2 = width / 30;
  textFont("Calibri");
  background(0);
  
  stroke(255);
  strokeWeight(1);
  line(0, height * 0.1, width, height * 0.1);
  line(0, height * 0.7375, width, height * 0.7375);
  noFill();
  
  // Titel op titel scherm
  fill(255);
  strokeWeight(1);
  textSize(textgrote1);
  textAlign(CENTER);
  text("NO TIME LIKE THE PAST", width * 0.5, height * 0.06);

  // Start knop op titel scherm
  textSize(textgrote2);
  text("START GAME", width * 0.5, 0.2083375 * height);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(width * 0.5, height * 0.2083375, width * 0.5, height * 0.15);

  // Spelregels knop op titel scherm
  fill(255);
  strokeWeight(1);
  textSize(textgrote2);
  text("TUTORIAL", width * 0.5, 0.416675 * height);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(width * 0.5, height * 0.416675, width * 0.5, height * 0.15);

  // Score knop op titel scherm
  fill(255);
  strokeWeight(1);
  textSize(textgrote2);
  text("SCOREBOARD", width * 0.5, 0.625 * height);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(width * 0.5, 0.625 * height, 0.5 * width, 0.15 * height);
}
```  
Door te vermenigvuldigen of te delen staan de posities vast. Dit heet soft code. De kleur van de ellips is 255 en is leeg van binnen.              

- stap 4: Koppel home met homeScreen() en stop deze in draw():      
```js
  if(home){
    homeScreen();
  }
``` 
Zolang home op true staat dan sta je op het titel scherm.  

- stap 5: Maak nieuwe variabelen aan:  
```js
let start = false;
let score = false;
let controls = false;
let inGame = false;
```
Variabelen voor de andere schermen.  

- stap 6: Maak de collisie voor de andere knoppen:   
```js
// Botsing tussen muis en start knop
  if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.2833375 * height && mouseY > 0.1333375 * height){
    if(mouseIsPressed) {
      home = false;
      start = true;
      inGame = true;
    }
  }
```
De hitbox voor de muis van de speler. Zet home op false, start en inGame op true.   

```js
// Botsing tussen muis en controls knop
  if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.491675 * height && mouseY > 0.341675 * height){
    if(mouseIsPressed) {
      home = false;
      controls = true;
    }
  }
```
De hitbox voor de muis van de speler. Zet home op false en controls op true.  

```js
// Botsing tussen muis en score knop
  if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.7 * height && mouseY > 0.55 * height){
    if(mouseIsPressed) {
      home = false;
      score = true;
    }
  }
```
De hitbox voor de muis van de speler. Zet home op false en score op true.       

### function homeScreen():      
```js
function homeScreen() {

  // Start knop op titel scherm
  fill(255);
  strokeWeight(1);
  textFont("Calibri");
  background(0);
  textSize(width / 20);
  text("NO TIME LIKE THE PAST", 0.5 * width, 0.075 * height);
  textSize(width / 30);
  textAlign(CENTER);
  text("START", 0.5 * width, 0.2 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.5 * width, 0.2 * height, 0.5 * width, 0.142 * height);

  // Controls knop op titel scherm
  fill(255);
  strokeWeight(2);
  text("CONTROLS", 0.5 * width, 0.4 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.5 * width, 0.4 * height, 0.5 * width, 0.142 * height);

  // Score knop op titel scherm
  fill(255);
  strokeWeight(2);
  text("SCORE", 0.5 * width, 0.6 * height);
  noFill();
  stroke(255);
  strokeWeight(4);
  ellipse(0.5 * width, 0.6 * height, 0.5 * width, 0.142 * height);
    
  // Botsing tussen muis en start knop
    if(mouseX > 0.1 * width && mouseX < 0.9 * width && mouseY < 0.271 * height && mouseY > 0.128 * height){
      if(mouseIsPressed) {
        home = false;
        start = true;
      }
    }

  // Botsing tussen muis en controls knop
    if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.471 * height && mouseY > 0.328 * height){
      if(mouseIsPressed) {
        home = false;
        controls = true;
      }
    }
    
  // Botsing tussen muis en score knop
    if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.671 * height && mouseY > 0.528 * height){
      if(mouseIsPressed) {
        home = false;
        score = true;
      }
    }
}
```

### homeScreen() display:        
![titel scherm](https://cdn.discordapp.com/attachments/1042023788881133631/1063402887654420491/image-7.png)
```js
function homeScreen() {
  
  var textgrote1 = width / 20;
  var textgrote2 = width / 30;
  textFont("Calibri");
  background(0);
  
  stroke(255);
  strokeWeight(1);
  line(0, height * 0.1, width, height * 0.1);
  line(0, height * 0.7375, width, height * 0.7375);
  noFill();
  
  // Titel op titel scherm
  fill(255);
  strokeWeight(1);
  textSize(textgrote1);
  textAlign(CENTER);
  text("NO TIME LIKE THE PAST", width * 0.5, height * 0.06);
  
// Start knop op titel scherm
  textSize(textgrote2);
  text("START GAME", width * 0.5, 0.2083375 * height);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(width * 0.5, height * 0.2083375, width * 0.5, height * 0.15);

// Spelregels knop op titel scherm
  fill(255);
  strokeWeight(1);
  textSize(textgrote2);
  text("TUTORIAL", width * 0.5, 0.416675 * height);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(width * 0.5, height * 0.416675, width * 0.5, height * 0.15);

// Score knop op titel scherm
  fill(255);
  strokeWeight(1);
  textSize(textgrote2);
  text("SCOREBOARD", width * 0.5, 0.625 * height);
  noFill();
  stroke(255);
  strokeWeight(2);
  ellipse(width * 0.5, 0.625 * height, 0.5 * width, 0.15 * height);
}
```
Ik heb de width en height vermenigvuldigd of gedeeld. Zo maakt het niet uit op welk apparaat je ons spel speelt. De functie background(0) maakt de achtergrond zwart. De functie fill(255) kleurt de ellipsen en de letter. De functie text("") gaat tussenin de functie ellipse() staan.    

### homeScreen() collision:        
```js
  // Botsing muis en start knop
    if(mouseX > 0.1 * width && mouseX < 0.9 * width && mouseY < 0.271 * height && mouseY > 0.128 * height){
      if(mouseIsPressed) {
        home = false;
        start = true;
      }
    }

  // Botsing muis en spelregels knop
    if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.471 * height && mouseY > 0.328 * height){
      if(mouseIsPressed) {
        home = false;
        controls = true;
      }
    }
    
  // Botsing muis en score knop
    if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.671 * height && mouseY > 0.528 * height){
      if(mouseIsPressed) {
        home = false;
        score = true;
      }
    }
```
De speler kan met de muis op een knop klikken en de verschillende variabelen van true naar false of false naar true zetten. Zo kan de speler van scherm veranderen. Door gebruik te maken van losse variabele en if-statements kan het scherm worden bepaald waar de speler op zit.  

## Bronnen:    
- [hoe maak je een titel scherm?](https://www.youtube.com/watch?v=BC1IEGY__w4)  
- [hoe maak je van scherm naar scherm gaan?](https://www.youtube.com/watch?v=TgHhEzKlLb4)          

