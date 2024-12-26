# gameOver

## Introduction:    
Het is van groot belang dat het spel uitgespeeld kan worden. Hierdoor voegen we een functie toe genaamd gameOver() die hiervoor kan zorgen. Deze functie moet de score en kristallen van de speler weergeven.

Het is van groot belang dat het spel uitgespeeld kan worden

## gameOver() function:     
```js
function gameOver() {
  fill(255); // Tekstkleur
  background(0); // Achtergrond
  textSize(45); // Lettergrootte
  textAlign(CENTER);
  text("GAME OVER ", width/2, height/2); // Tekst
  text("THANKS FOR PLAYING ", width/2, height/2 + 45); // Tekst
  text("Your Score: " + points, width/2, height/2 + 120); // Tekst + Score
  text("Your Crystals: " + crystal, width/2 + 22, height/2 + 165); // Tekst + Kristallen
  noLoop();
}
``` 
De functie gameOver() zorgt ervoor dat alles op het scherm verdwijnt en er nieuwe tekst zichtbaar wordt. Ook de hoeveelheid verzamelde punten en verzamelde kristallen.  

## gameOver() if-statement:      
```js
if (player.hitpoint <= 0) {
    gameOver();
}
```
De if-statement in de functie setup() zorgt ervoor dat wanneer de speler geen levens hebt dat de functie gameOver() gaat plaatsnemen. De tijdmachine verliest levens wanneer iemand van de oppositie het raakt.      
