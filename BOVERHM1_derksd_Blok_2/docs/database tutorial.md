# firebase tutorial

## reden
Dit is een stap voor stap uitleg over hoe je een database kan gebruiken voor je p5.js game. Ik heb deze tutorial aangemaakt zodat ik andere mensen hiermee kan helpen al proberen ze dit te doen maar ook om te bewijzen dat ik het zelf kan en snap. Al kan ik stap voor stap uitleggen hoe je dit kan doen en iedereen begrijpt het is het voor mij duidelijk dat ik weet hoe het werkt.

### stappen
1. Ga naar de Firebase website [hier](https://firebase.google.com/) en klik op "Start vandaag nog" om een nieuw Firebase-project te maken.

2. Volg de prompts om je project in te stellen. Dit omvat het geven van een naam aan je project en het kiezen van een Google Cloud Platform (GCP)-project.

3. Zodra je project is ingesteld, klik je op de optie "Database" in het linkermenu.

4. Kies of je Cloud Firestore of Realtime Database wilt gebruiken als je database. Voor deze tutorial gebruiken we Realtime Database.

5. Klik op de knop "Maak database" in de sectie Realtime Database.

6. Ga eerst naar de project setting bij het tandwiel linksboven. scroll naarbeneden en klik op de knop "Voeg app toe".

7. Selecteer het icoon </> voor je app en volg de prompts om de Firebase SDK in te stellen.

8. Zodra de Firebase SDK is ingesteld, moet je je app authenticatie verlenen met Firebase. Dit stelt je app in staat om toegang te krijgen tot de gegevens in je database.

9. maak een array aan waar je je data in kan opslaan
```js
let scores = []
```

10. In je setup gebruik je de volgende code om Firebase te initialiseren en een referentie te krijgen tot de database:
```js
// Initializeer Firebase
firebase.initializeApp({
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
});
```

Zorg ervoor dat je de placeholderwaarden (bijv. "your-api-key") vervangt door de configuratiewaarden van je eigen Firebase-project. Je kunt deze waarden vinden in de Firebase-console onder het menu "Instellingen" hier kan je bij general naar beneden scrollen en dan krijg je jou informatie bij your apps te zien.

11. Om dit te laten werken moet je twee librarys in je p5.js zetten namelijk:

```html
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>
```
Deze library zorgt dat je data van je database in je code kan verwerken.
```html
<script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>
```
Deze library zorgt dat de data naar de database verstuurd kan worden

12. Gebruik de volgende code om gegevens uit de database te lezen:

```js
firebase.database().ref("scores").on("value", function(snapshot) {
  snapshot.forEach(function(score) {
    scores.push(score.val());
  });
});
```


Deze code gebruikt de "on"-methode om te kijken naar wijzigingen in de datase en zet deze gegevens in de console.

13. Gebruik de volgende code om gegevens naar de database te schrijven:
```js
firebase.database().ref("scores").push({
  name: bert,
  score: 100
});
```
Dit code voegt de gegevens "name: 'bert', score: 100" toe aan het scores-knooppunt. Al wil je verschil in naam en in code kan je er variabelen van maken en het dan veranderen.


14. Gebruik de volgende code om de score in de database te sorteren van hoog naar laag
```js
scores.sort((a, b) => b.score - a.score);
```

15. Gebruik de score om een leaderboard te maken. Dit doe je met deze code:
```js
 for (let s = 0; s < scores.length; s++) {
    if (s <= 9) {
      noStroke();
      fill(255);
      textSize(30);
      text(s + 1 + ".   ", width / 3, 50 + 45 * s);
      textSize(30 - scores[s].name.length);
      text(scores[s].name + ":", width / 2.3, 50 + 45 * s);
      text(scores[s].score + " points", width / 1.6, 50 + 45 * s);
    }
  }
```
Dit is een voorbeeld van hoe ik het doe. Ik gebruik dan een for loop voor de 10 scores die ik wil laten zien. Ik gebruik dan de s variabel om te beslissen hoe groot de tekst is en waar de tekst staat. Ik laat deze score zien door de array aan te roepen waar de data instaat en dan te verwijzen naar het belangrijke punt zoals name en score. dit ziet er dan zo uit:
![](docs/images/scoreScreen.png)









