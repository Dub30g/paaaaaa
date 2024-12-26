# startgame

## Introduction:
De speler kan vanuit het begin scherm op een knop genaamd "start" klikken om aan het spel te beginnen.

## Sketch-bestand:    
### Losse variabele en function draw():  
```js
let start = false;
let home = true;
let controls = false;
``` 
```js
if(home){ // Hier begint het begin scherm
    homeScreen();
  };
  
  if(controls){ // Hier begint het uitleg scherm
    controlsScreen();
  };
  
  if(score){ // Hier begint het score scherm
    scoreScreen();
  };

  if (start){ // Hier begint het spel scherm
    background(0); 
    };
  };
};
```
De speler kan vanuit het begin scherm kiezen om ons spel te spelen. De code voor ons spel staat tussen de if-statement if(start) {} en de achtergrond is zwart. Hier tussen staan de losse functies die ons spel maken.       
