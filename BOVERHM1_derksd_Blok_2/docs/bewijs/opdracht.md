# game opdracht 
Aan het begin van dit blok in sprint 1 moesten we bedenken wat voor soort game we wouden maken. Dit is alleen niet helemaal een open opdracht dus is het belangrijk om duidelijk op een rijtje te krijgen wat de opdarcht en de vereisten zijn zodat we hierop onze game kunnen baseren. 


## Arch Game Studios
De opdrachtgevers in ons geval zijn Arch Games Studios. Dit is een studio binnen hva die een voorbeeld moet staan van hoe een gamestudio te werk gaat. Ze geven dan aan wat de opdracht van het blok is oftewel wat voor soort game ze willen zien wat de benodigheden en vereisten zijn en welk devices het op moest werken.

### wensen/eisen opdrachtgever
1. De game is zowel speelbaar op de desktop als op een smartphone in portrait stand.

actie:
We hebben gezorgd dat de game op telefoon en laptop speelbaar is door te zorgen dat de code werkt onder elke grote van het scherm. Ook hebben we een handige regel code toegevoegt die zorgt dat het scherm altijd vierkant is maakt niet uit hoe groot het scherm is. Deze code is dit:
```js
createCanvas(min(window.innerWidth, window.innerHeight), window.innerHeight);
```
Ook baseren we dan de snelheid van de enemies op de grote van het scherm dit zorgt ervoor dat er geen verschil is in moeilijkheid als je op andere devices speelt die een wat minder groot scherm hebben. Dit gaat dan met deze code:
```js
   enemy7Speed = width/1600;
   enemy6Speed = width/842;
   enemy5Speed = width/941;
   enemy4Speed = width/533;
   enemy3Speed = width/1000;
   enemy2Speed = width/320;
   enemy1Speed = width/800;
```


2. De game betreft een remake van een beperkte klassieke arcade game, met een duidelijke twist, volledig ander artwork. Bij klassieke arcade games beperkt een stage of level zich vaak tot 1 scherm en is er variatie in moeilijk d.m.v. snelheid en introductie van een beperkt aantal nieuwe enemies en power-ups.

actie:
Met onze doelgroepanalyse die je [hier](https://propedeuse-gd.dev.hihva.nl/2022-2023/blok-2/BOVERHM1_derksd_Blok_2/doelgroep%20analyse/
) kunt vinden kwamen we erachter wat voor soort game we het best konden maken om deze doelgroep te bereiken. We wouden dan dus een retrogame vinden die te maken had met shooter/strategie en werd gespeeld door jong volwassenen. 

De game waar we dan op uitkwamen was galaga. Deze game paste niet alleen bij onze doelgroep maar ook bij de andere eisen. Zo kan je het beperken tot 1 scherm en kan je de game steeds moeilijker maken. Je kan verschillende nieuwe enemies toevoegen en ook upgrades kan je er in doen. Dit paste dus perfect bij de opdracht. Ook was een twist toevoegen redelijk makkelijk. zo hebben wij het schip in het midden van het scherm en kan het om zich heen schieten.

3. De controls zijn beperkt tot muis en touchscreen en zijn vergelijkbaar tussen desktop en smartphone.

actie:
Dit vonden wij een lastige eis aan het begin want er zijn niet heel veel game types. We wisten dus dat het belangrijk was om een game te hebben waar wijnig soorten input nodig zijn. Dit hielp dus ook met onze keuze voor galaga met een twist want hier had je alleen de muis voor nodig. Je hoeft namelijk alleen te schieten en op de upgrades te klikken.

4. Het scherm past zich aan aan de resolutie en het device zonder nadelige gevolgen voor de gameplay.

actie:
Hier had ik eerder al een actie voor geschreven maar we hebben dus alles in onze game gebaseerd op de grote van het scherm. Dit zorgt ervoor dat de grote van het scherm niet meer uitmaakt. 

5. Denk na over features die de retentie van spelers kunnen vergroten. Zoals het opslaan van highscores die je ook mee kunt nemen naar een ander device (van desktop naar je mobiel of vice versa).

actie:
Deze tip hebben wij zeker meegenomen. Ik heb een scoreboard toegevoegt die de scores van de speler opslaat en hiervoor heb ik dan ook een database voor gemaakt. Als je hier meer info over wil kun je dat [hier](https://propedeuse-gd.dev.hihva.nl/2022-2023/blok-2/BOVERHM1_derksd_Blok_2/database%20tutorial/) vinden.

6. Casual games werken vaak met extra veel (visuele) feedback

actie:
Wij werken vooral met feedback doormiddel van geluid. Zo weet je zeker waneer je iets doet maar we hebben ook feedback door waardes die we laten zien zoals de crystals en de hp van de speler. Ook hebben de enemies healthbars.

7. Verzamel objectieve data en statistieken over de kwaliteit van je game in een database en maak die inzichtelijk.

actie:
Wij focussen vooral op de naam, score en hoelang de speler heeft gespeeld. Hierdoor weten we redelijk wat of de speler en hebben we dus data verzameld.

8. Je documenteert en onderbouwt de ontwerpkeuzes die je maakt

actie: Op onze pages documenteren wij alles wat belangerijk is voor dit blok en voor ons project.

9. Je documenteert de technieken die je hebt gebruikt. Richt je met name op zaken die nieuw zijn ten opzichte van blok 1.

actie: Op onze pages documenteren wij alles wat belangerijk is voor dit blok en voor ons project.




