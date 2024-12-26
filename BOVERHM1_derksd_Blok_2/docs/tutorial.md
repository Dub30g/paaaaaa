# Code stappenplan/uitleg

### P5.js functies die je in dit stappenplan/uitleg van onze code leert
1. hoe werkt createCanvas()
2. hoe werkt background()

### Grote scherm (1)
Zodra je een p5.js file opent heb je naast de functies setup() en draw() 2 regels aan code staan.   
Dit zijn namelijk:   
1. createCanvas(400, 400);  
2. background(220);    

De grote van je scherm word beslist door de createCanvas. De eerste 400 staat voor de breedte van het scherm en de 2de 400 staat voor de lengte van het scherm. Dit betekent dus dat het scherm 400 pixels lang en 400 pixels breed is. Om aan onze game te gaan werken zijn we begoonen met de grote 900 pixels breed en 900 pixels lang omdat we willen dat de game vierkant en groot is zodat we er makkelijk aan kunnen werken. dus dan word de nieuwe code:  
```
createCanvas(900, 900);  
```
### Achtergrond zwart (2)
Zodra je een p5.js file opent heb je naast de functies setup() en draw() 2 regels aan code staan.   
Dit zijn:   
1. createCanvas(400, 400);  
2. background(220);    

de kleur/achtergrond van je scherm word beslist met de background functie. hier geeft het nummer de tint aan en dan is compleet wit het nummer 255 en compleet zwart het nummer 0 en alles er tussen in de andere kleuren dit noemen we grayscale. Als je dit onoverzichtelijk vind kan je ook rgb gebruiken. Om een zwarte achtergrond te maken moet je het nummer 220 dus verplaatsen met de kleur zwart oftewel:  
```
background(0);    
```
of  
```
background(0, 0, 0);    
```

### Tijdmachine maken 
In onze game is de base een tijdmachine dus daarom heet het kopje tijdmachine maken. De bedoeling is dat we zoveel mogelijk vooruit denken zo is het later bedoeling dat de tijdmachine ook echt kan verplaatsen. Om dit voor elkaar te krijgen gaan we een class aanmaken voor het schip zodat we het neer kunnen zetten waar we willen. We maken dan dus een functie aan waar we de locatie en groote vastzetten met variabelen zodat we die later kunnen veranderen. Dit ziet er dan dus zo uit:  
```
function Player() {
  this.x = width / 2;
  this.y = height / 2;
  this.r = 100;
  };
}
```  
Hier zeggen we dat de x waarde gelijk is aan width / 2. Width betekent het breedte van het scherm dus als je createCanvas 900, 900 is dan is de width 900. Als je dit dan deelt door 2 oftewel / 2 dan komt het in het midden van het scherm dus 450. Dit zorgt ervoor dat hoe groot het scherm ook maar is dat de base altijd in het midden staat tot je dit verandert. We doen dan het zelfde voor de y waarde want daar willen we ook dat de base in het midden staat maar dan met height want dat is de lengte van het scherm. Als laatst zetten we this.r wat staat voor radius naar 100 wat dus zorgt dat de machine 100 pixels in de radius is.  
  
Nu moeten we nog zorgen dat de tijdmachine zichtbaar is in het scherm. Om dit te doen moeten we een functie aanmaken in de class waarin we het schip maken. ----------------------------------------------------------------- typ hier meer nadat tijdmachine af is

### Tijdmachine laten schieten
Om te zorgen dat de tijdmachine schiet zoals wij willen moeten we een paar dingen bereiken.  
- We moeten zorgen dat de tijdmachine vanaf het midden een kogel kan maken
- De kogel moet richting de muis bewegen 
- De kogel verdwijnt zodra het het scherm uitgaat
