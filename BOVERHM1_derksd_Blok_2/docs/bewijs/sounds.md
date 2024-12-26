# sound

## Introductie:  
Geluid en muziek is verplicht in spellen. Het roept een bepaald gevoel op bij de speler en vult een leegte in het spel.  

## preload() functie en losse variabelen:      
```js
let clickSound;
let gameStartSound;
let playerDamagedSound;
let playerShootSound;
```
```js
function preload() {
  clickSound = loadSound("mouse-click.mp3");
  gameStartSound = loadSound("game-start.mp3");
  playerDamagedSound = loadSound("player-damaged.mp3");
  playerShootSound = loadSound("player-shoot.mp3");
  playerUpgradeSound = loadSound("player-upgrade.mp3");
};
```
In Gitlab heb ik een aantal mp3 bestanden geupload. In Visual Studio Code heb ik vervolgens gepulled. Hier na hoef ik naar geen folder te verwijzen.  

## Spel geluid:        
### homeScreen() botsing:  
```js
function homeScreen() {
  // knop start game kunnen klikken
    if(mouseX > 0.1 * width && mouseX < 0.9 * width && mouseY < 0.271 * height && mouseY > 0.128 * height){
      if(mouseIsPressed) {
        gameStartSound.play(); // Plays a sound when collision happens
        home = false;
        start = true;
        inGame = true;
      };
    };

  // knop controls kunnen klikken
    if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.471 * height && mouseY > 0.328 * height){
      if(mouseIsPressed) {
        clickSound.play(); // Plays a sound when collision happens
        home = false;
        controls = true;
      };
    };
    
  // knop score kunnen klikken
    if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.671 * height && mouseY > 0.528 * height){
      if(mouseIsPressed) {
        clickSound.play(); // Plays a sound when collision happens
        home = false;
        score = true;
      };
    };    
};
```

### controlsScreen() botsing:  
```js
function controlsScreen() {
// start knop kunnen klikken
    if(mouseX > 0.157 * width && mouseX < 0.442 * width && mouseY < 0.853 * height && mouseY > 0.746 * height){
      if(mouseIsPressed) {
        gameStartSound.play(); // Plays a sound when collision happens
        controls = false;
        start = true;
        inGame = true
      };
    };

  // score knop kunnen klikken
    if(mouseX > 0.557 * width && mouseX < 0.842 * width && mouseY < 0.853 * height && mouseY > 0.746 * height){
      if(mouseIsPressed) {
        clickSound.play(); // Plays a sound when collision happens
        controls = false;
        score = true;
      };
    };  

  // home knop kunnen klikken
    if(mouseX > 0.157 * width && mouseX < 0.442 * width && mouseY < 1.003 * height && mouseY > 0.896 * height){
      if(mouseIsPressed) {
        clickSound.play(); // Plays a sound when collision happens
        controls = false;
        home = true;
      };
    };
};
```

### touchStarted() collision:  
```js
function touchStarted() {
  if (upgradeScreen == false) {

    if (wait >= delaytime) {
      playerShootSound.play(); // Plays a sound when collision happens
    for (let a = 0; a < bulletAmount; a++) {
      let angle = map(a, 0, bulletAmount, 0, TWO_PI);
      let bullet = new Bullet(angle);
      bullet.shoot(mouseX, mouseY);
      bullets.push(bullet);
    };
      last = millis();
    };
  };
```
```js
//hitbox upgrade 3
  else if (
    mouseX >= width / 10 &&
    mouseX <= width * 0.9 &&
    mouseY >= height / 1.55 &&
    mouseY <= height * 0.9
  ) {
    playerUpgradeSound.play();
```
```js
//upgrade vakje hitbox 1
  if (upgradeScreen == true) {
    if (
      mouseX >= width / 10 &&
      mouseX <= width * 0.9 &&
      mouseY >= height / 10 &&
      mouseY <= height / 2.86
    ) {
      playerUpgradeSound.play();
```
```js
//upgrade vakje hitbox 2
  if (upgradeScreen == true) {
    if (
      mouseX >= width / 10 &&
      mouseX <= width * 0.9 &&
      mouseY >= height / 2.8 &&
      mouseY <= height / 1.559
    ) {
      playerUpgradeSound.play();
```

### enemySpawn() botsing (1-7):          
```js
for (let e = 0; e < enemies.length; e++) {
    var p = dist(player.x, player.y, enemies[e].pos.x, enemies[e].pos.y);

    if (p + 75 < player.r + enemies[e].r) {
      enemies.splice(e, 1);
      if(shield == 0){
        playerDamagedSound.play(); // Plays a sound when collision happens
        player.hitpoint -= enemy1Damage;
      }
      
      else{
        playerDamagedSound.play();
        player.hitpoint -= enemy1Damage/2;
        shield -= 1
      };
    };
  };
```

### Bronnen:  
- [link1](https://eu.aoc.com/en/gaming/news/why-good-sound-is-important-for-gaming#:~:text=No%20matter%20what%20genre%20of,are%20further%20triggered%20through%20audio.)
- [link2](https://www.gamedesigning.org/learn/video-game-sound/)
- [link3](https://scholarworks.sjsu.edu/cgi/viewcontent.cgi?article=1025&context=art108)
