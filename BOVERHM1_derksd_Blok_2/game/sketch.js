let player;

let bullets = [];
let bulletDamage = 40;
let bulletsBack = [];
let bulletAmount = 1;

let attractors = [];

let enemies = [];
let enemies2 = [];
let enemies3 = [];
let enemies4 = [];
let enemies5 = [];
let enemies6 = [];
let enemies7 = [];

let enemy1Damage = 60;
let enemy2Damage = 30;
let enemy3Damage = 90;
let enemy4Damage = 45;
let enemy5Damage = 70;
let enemy6Damage = 80;
let enemy7Damage = 500;

let enemy7Speed = 0.5;
let enemy6Speed = 0.95;
let enemy5Speed = 0.85;
let enemy4Speed = 1.5;
let enemy3Speed = 0.8;
let enemy2Speed = 2.5;
let enemy1Speed = 1;

let enemy1Health = 100;
let enemy2Health = 20;
let enemy3Health = 200;
let enemy4Health = 60;
let enemy5Health = 140;
let enemy6Health = 180;
let enemy7Health = 1000;

let enemy1Amount = 1000;
let enemy2Amount = 500;
let enemy3Amount = 1200;
let enemy4Amount = 900;
let enemy5Amount = 1080;
let enemy6Amount = 1120;

let crystalChange1 = 3;
let crystalChange2 = 2;
let crystalChange3 = 4;
let crystalChange4 = 2;
let crystalChange5 = 3;
let crystalChange6 = 4;
let crystalChange7 = 10;

let enemy1Killed = false;
let enemy2Killed = false;
let enemy3Killed = false;
let enemy4Killed = false;
let enemy5Killed = false;
let enemy6Killed = false;
let enemy7Killed = false;
let enemyKilled;

let enemyKilledTotal = 0;

let randomRarity;
let randomCommon;
let randomUncommom;
let randomRare;
let randomEpic;
let randomLegandary;
let randomCritical = 0;
let criticalChange = false;
let rarity = 0;

let wait;
let last = 0;
let delaytime = 300;

let crystal = 10000;
let points = 0;
let scores = [];

let upgradeScreen = false;


let lightUpR;
let lightUpG;
let lightUpB;
let lightUpR2;
let lightUpG2;
let lightUpB2;
let lightUpR3;
let lightUpG3;
let lightUpB3;

let shield = 0;
let shieldImage;

let timer = 5;

let hitbox1Visible = true;

let home = true;
let start = false;
let controls = false;
let score = false;

let naam = "";
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let enter = false;

let inGame = false;

let clickSound;
let gameStartSound;
let playerDamagedSound;
let playerShootSound;

let boss = false;

let timePlayedMinutes = 0;
let timePlayedSeconds = 1;

let bulletsfired = 0;



function preload() {
  shieldImage = loadImage("shield.png");
  playerimage = loadImage("Basepicture.png");

  clickSound = loadSound("mouse-click.mp3");
  gameStartSound = loadSound("game-start.mp3");
  playerDamagedSound = loadSound("player-damaged.mp3");
  playerShootSound = loadSound("player-shoot.mp3");
  playerUpgradeSound = loadSound("player-upgrade.mp3");
}

function setup() {
  createCanvas(min(window.innerWidth, window.innerHeight), window.innerHeight);
  player = new Player();
  attractors.push(createVector(width / 2, height / 2));

  setInterval(moreEnemies, 1000);

  // Initialize Firebase
  firebase.initializeApp({
    apiKey: "AIzaSyBqFki5QuIbYHOVtjOR6YTDprjRV_tariw",
    authDomain: "no-time-like-the-past.firebaseapp.com",
    databaseURL:
      "https://no-time-like-the-past-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "no-time-like-the-past",
    storageBucket: "no-time-like-the-past.appspot.com",
    messagingSenderId: "698564784123",
  });

  // Get the scores from the database
  firebase
    .database()
    .ref("scores")
    .on("value", function (snapshot) {
      snapshot.forEach(function (score) {
        scores.push(score.val());
      });
    });
}

function draw() {
  loop();

  if (randomCritical > 100) {
    randomCritical = 100;
  }

  if (rarity > 975) {
    rarity = 975;
  }

  scores.sort((a, b) => b.score - a.score);

  enemy7Speed = width / 1600;
  enemy6Speed = width / 842;
  enemy5Speed = width / 941;
  enemy4Speed = width / 533;
  enemy3Speed = width / 1000;
  enemy2Speed = width / 320;
  enemy1Speed = width / 800;

  if (home) {
    homeScreen();
  }

  if (controls) {
    controlsScreen();
  }

  if (score) {
    scoreScreen();
  }

  if (start) {
    background(0);

    if (frameCount % 60 == 0 && timePlayedSeconds > -1) {
      timePlayedSeconds++;
    }

    if (upgradeScreen == false) {
      enemySpawn();

      updateHUD();

      wait = millis() - last;

      player.show();

      noFill();
      noStroke();

      for (let i = 0; i < attractors.length; i++) {
        point(attractors[i].x, attractors[i].y);
      }

      for (let i = 0; i < bullets.length; ++i) {
        bullets[i].show();
        bullets[i].update();

        if (
          bullets[i].x > -bullets[i].r &&
          bullets[i].x < width + bullets[i].r &&
          bullets[i].y > -bullets[i].r &&
          bullets[i].y < height + bullets[i].r
        ) {
        } else {
          bullets.splice(i, 1);
        }
      }

      lightUpR = crystal >= 10 ? 255 : 0;
      lightUpG = 20;
      lightUpB = 0;

      lightUpR2 = crystal >= 20 ? 255 : 0;
      lightUpG2 = 20;
      lightUpB2 = 0;

      lightUpR3 = crystal >= 30 ? 255 : 0;
      lightUpG3 = 20;
      lightUpB3 = 0;

      if (player.hitpoint <= 0) {
        gameOver();
      }
    } else {
      upgrade();
    }
  }
}

function touchStarted() {
  // schiet kogel
  //------------------------------------------
  if (upgradeScreen == false) {
    if (wait >= delaytime) {
      if (inGame) {
        playerShootSound.play();
      }

      for (let a = 0; a < bulletAmount; a++) {
        let angle = map(a, 0, bulletAmount, 0, TWO_PI);
        let bullet = new Bullet(angle);
        bullet.shoot(mouseX, mouseY);
        bullets.push(bullet);
        if (inGame) {
          bulletsfired += 1 * bulletAmount;
        }
      }
      last = millis();
    }
  }
  //------------------------------------------

  //vul naam in en klik op enter
  //------------------------------------------
  if (player.hitpoint <= 0) {
    if (
      mouseX > width / 2 - 50 &&
      mouseX < width / 2 + 60 &&
      mouseY > height / 1.5 + 80 &&
      mouseY < height / 1.4 + 80
    ) {
      enter = true;
    }

    if (naam.length <= 10) {
      for (let n = 0; n < alphabet.length; n++) {
        if (
          mouseX > 10 + n * 30 &&
          mouseX < 10 + (n + 1) * 30 &&
          mouseY > 100 &&
          mouseY < 132
        ) {
          naam += alphabet[n];
          break;
        }
      }
    }
  }
  //------------------------------------------

  //extra kogel hitbox
  if (
    crystal >= 20 &&
    mouseX >= width - width / 3 &&
    mouseX <= width &&
    mouseY <= height &&
    mouseY >= height / 1.2
  ) {
    bulletAmount += 1;
    crystal -= 20;
  }

  // spawn boss hitbox
  if (
    crystal >= 30 &&
    mouseX >= width / 2 - 50 &&
    mouseX <= width / 2 + 50 &&
    mouseY <= height &&
    mouseY >= height / 1.2
  ) {
    boss = true;
    crystal -= 30;
  }

  // upgrade scherm gekocht
  if (
    hitbox1Visible &&
    crystal >= 10 &&
    mouseX >= 0 &&
    mouseX <= width / 3 &&
    mouseY <= height &&
    mouseY >= height / 1.2
  ) {
    hitbox1Visible = false;

    crystal -= 10;
    upgradeScreen = true;
  }


  if (upgradeScreen == true) {

    console.log(currentUpgrades);

  //upgrade vakje hitbox 1
    if (
      mouseX >= width / 10 &&
      mouseX <= width * 0.9 &&
      mouseY >= height / 10 &&
      mouseY <= height / 2.86
    ) {
      playerUpgradeSound.play();

      applySelectedUpgrade(0);


    }
  

  //upgrade vakje hitbox 2
    if (
      mouseX >= width / 10 &&
      mouseX <= width * 0.9 &&
      mouseY >= height / 2.8 &&
      mouseY <= height / 1.559
    ) {
      playerUpgradeSound.play();

      applySelectedUpgrade(1);

    }
  

  //hitbox upgrade 3
  if (
    mouseX >= width / 10 &&
    mouseX <= width * 0.9 &&
    mouseY >= height / 1.55 &&
    mouseY <= height * 0.9
  ) {
    if (upgradeScreen == true) {
      playerUpgradeSound.play();

      applySelectedUpgrade(2);
          
    }
  }
}



  if (timePlayedSeconds >= 60) {
    timePlayedSeconds -= 60;
    timePlayedMinutes += 1;
  }
}

function moreEnemies() {
  if (enemy1Amount != 20) {
    enemy1Amount -= 1;
  }
  if (enemy2Amount != 20) {
    enemy2Amount -= 1;
  }
  if (enemy3Amount != 20) {
    enemy3Amount -= 1;
  }
  if (enemy4Amount != 20) {
    enemy4Amount -= 1;
  }
  if (enemy5Amount != 20) {
    enemy5Amount -= 1;
  }
  if (enemy6Amount != 20) {
    enemy6Amount -= 1;
  }
}

function updateHUD() {
  rectMode(CORNER);

  textAlign(CENTER);
  noStroke();
  fill(255, 255, 0);
  textSize(width / 25);
  text("points: " + int(points), width / 2, 40);

  textAlign(LEFT);

  noStroke();
  fill(255, 0, 0);

  text("crystals: " + int(crystal), 10, 40);

  noStroke();
  fill(0, 255, 0);

  text("health: " + int(player.hitpoint), width / 1.2698, 40);

  if (shield >= 1) {
    image(shieldImage, width - 150, 80, 50, 50);
    text("x " + shield, width - 90, 115);
  }

  if (hitbox1Visible) {
    noFill();
    strokeWeight(3);
    stroke(lightUpR, lightUpG, lightUpB);
    rect(-3, height / 1.2, width / 3, height / 3);
  }

  noStroke();
  fill(lightUpR, lightUpG, lightUpB);
  text("Upgrade", width / 12, height / 1.1);
  text("(10 crystals)", width / 24, height / 1.03);

  noFill();
  strokeWeight(3);
  stroke(lightUpR2, lightUpG2, lightUpB2);
  rect(width - width / 3 + 3, height / 1.2, width / 3, height / 3);

  noStroke();
  fill(lightUpR2, lightUpG2, lightUpB2);
  text("extra bullet", width / 1.35, height / 1.1);
  text("(20 crystals)", width / 1.37, height / 1.03);

  noFill();
  strokeWeight(3);
  stroke(lightUpR3, lightUpG3, lightUpB3);
  rect(width / 3, height / 1.2, width / 3, height / 3);

  noStroke();
  fill(lightUpR3, lightUpG3, lightUpB3);
  textSize(width / 30);
  text("boss enemie", width / 2.4, height / 1.13);
  text(
    "Contains 10000 points\n         (30 crystals)",
    width / 2.9,
    height / 1.08
  );
}

function gameOver() {
  inGame = false;

  stroke(0, 255, 255);
  fill(255);
  background(0);
  textSize(45);
  textAlign(CENTER);
  text("GAME OVER ", width / 2, height / 2);
  text("THANKS FOR PLAYING ", width / 2, height / 2 + 45);
  text("Your Score: " + points, width / 2, height / 2 + 120);
  text("Your Crystals: " + crystal, width / 2 + 22, height / 2 + 165);

  textSize(32);
  text(`Name: ${naam}`, width / 2, 50);

  text(`ENTER`, width / 2, height / 1.2);

  for (let i = 0; i < alphabet.length; i++) {
    strokeWeight(1);
    noFill();
    fill(255);
    text(alphabet[i], 25 + i * 30, 100);
    rect(10 + i * 30, 100, 32);
  }

  if (enter == true) {
    enter = false;

    if (naam == "") {
      naam = "John Doe";
    }

    if (enemy1Killed == true) {
      enemyKilled = "Enemy 1 (orange)";
    } else if (enemy2Killed == true) {
      enemyKilled = "Enemy 2 (pink)";
    } else if (enemy3Killed == true) {
      enemyKilled = "Enemy 3 (red)";
    } else if (enemy4Killed == true) {
      enemyKilled = "Enemy 4 (purple)";
    } else if (enemy5Killed == true) {
      enemyKilled = "Enemy 5 (blue)";
    } else if (enemy6Killed == true) {
      enemyKilled = "Enemy 6 (dark blue)";
    } else {
      enemyKilled = "Enemy 7 (dark red)";
    }

    points += crystal * 40;

    firebase
      .database()
      .ref("scores")
      .push({
        name: naam,
        score: points,
        timePlayed: timePlayedMinutes + "m " + timePlayedSeconds + "s",
        enemykilled: enemyKilled,
        bulletsFired: bulletsfired,
        playerDamage: int((bulletDamage / 40) * 100) + "%",
        totalEnemiesKilled: enemyKilledTotal,
      });

    document.location.reload();
  }
}

function drawUpgradeRect(u, color, upgradeVakjeValue) {
  // Add stroke for outlines if individual rectangles should have them
  stroke(255, 255, 255); // White outline for visibility
  strokeWeight(2); // Adjust weight as needed for visibility

  fill(color);
  let positions = [height / 4.4, height / 2, height / 1.297];
  rect(width / 2, positions[u - 1], width * 0.8, height / 3.9);

  window[`upgradeVakje${u}`] = upgradeVakjeValue;
}

function displayUpgradeText(u, message) {
  noStroke();
  fill(0);
  textSize(width / 30);

  // Calculate text positioning and wrapping
  let textX = width / 2;
  let textY = (height / 4) * u;
  let maxWidth = width * 0.7; // Set the maximum width for text wrapping

  textAlign(CENTER, CENTER); // Center the text horizontally and vertically
  text(message, textX, textY, maxWidth); // Pass maxWidth as the fourth parameter to enable wrapping
}

let currentUpgrades = []; // Stores upgrades for each hitbox

function upgrade() {
  background(0);
  rectMode(CENTER);
  textAlign(CENTER);
  currentUpgrades = []; // Reset current upgrades info

  for (let u = 1; u <= 3; u++) {
    let randomRarity = int(random(rarity, 1000));
    let chosenType = randomRarity <= 600 ? "common" :
                     randomRarity <= 800 ? "uncommon" :
                     randomRarity <= 900 ? "rare" :
                     randomRarity <= 975 ? "epic" : "legendary";
    
    let upgradeInfo = upgradeTypes[chosenType];
    let randomIndex = int(random(0, upgradeInfo.upgrades.length)); // Choose a random upgrade from the type
    let chosenUpgrade = upgradeInfo.upgrades[randomIndex];

    // Store chosen upgrade info for application
    currentUpgrades.push({
      text: chosenUpgrade, // The description of the upgrade
      rarity: chosenType, // The rarity of the upgrade
      effectIndex: randomIndex + 1, // Assuming effect index aligns with upgradeEffects keys
      color: upgradeInfo.color // The color associated with the upgrade's rarity
    });

    // Now draw the upgrade box and text
    drawUpgradeRect(u, upgradeInfo.color, randomIndex + 1); // Adjusted to pass the index for identification
    displayUpgradeText(u, chosenUpgrade); // Shows the upgrade description
  }

  noLoop(); // To stop the draw loop if needed
}


// Include the effects for all upgrade identifiers, as shown above, for the complete upgrade logic.
const upgradeEffects = {
  // Common Upgrades
  1: () => {
    delaytime *= 0.9;
  },
  2: () => {
    player.hitpoint += 60;
  },
  3: () => {
    bulletDamage *= 1.15;
  },
  4: () => {
    criticalChance = true;
    randomCritical += 10;
  },
  5: () => {
    enemy1Damage *= 0.9;
    enemy2Damage *= 0.9;
    enemy3Damage *= 0.9;
    enemy4Damage *= 0.9;
    enemy5Damage *= 0.9;
    enemy6Damage *= 0.9;
  },
  6: () => {
    rarity += 50;
  },
  8: () => {
    enemy1Speed *= 0.9;
    enemy2Speed *= 0.9;
    enemy3Speed *= 0.9;
    enemy4Speed *= 0.9;
    enemy5Speed *= 0.9;
    enemy6Speed *= 0.9;
  },
  9: () => {
    enemy1Health *= 0.9;
    enemy2Health *= 0.9;
    enemy3Health *= 0.9;
    enemy4Health *= 0.9;
    enemy5Health *= 0.9;
    enemy6Health *= 0.9;
  },
  10: () => {
    shield += 1;
  },

  // Uncommon Upgrades
  12: () => {
    delaytime *= 0.85;
  },
  13: () => {
    player.hitpoint += 100;
  },
  14: () => {
    bulletDamage *= 1.2;
  },
  15: () => {
    criticalChance = true;
    randomCritical += 15;
  },
  16: () => {
    enemy1Damage *= 0.85;
    enemy2Damage *= 0.85;
    enemy3Damage *= 0.85;
    enemy4Damage *= 0.85;
    enemy5Damage *= 0.85;
    enemy6Damage *= 0.85;
  },
  17: () => {
    rarity += 100;
  },
  19: () => {
    enemy1Speed *= 0.85;
    enemy2Speed *= 0.85;
    enemy3Speed *= 0.85;
    enemy4Speed *= 0.85;
    enemy5Speed *= 0.85;
    enemy6Speed *= 0.85;
  },
  20: () => {
    enemy1Health *= 0.85;
    enemy2Health *= 0.85;
    enemy3Health *= 0.85;
    enemy4Health *= 0.85;
    enemy5Health *= 0.85;
    enemy6Health *= 0.85;
  },
  21: () => {
    shield += 2;
  },

  // Rare Upgrades
  22: () => {
    delaytime *= 0.8;
  },
  23: () => {
    player.hitpoint += 150;
  },
  24: () => {
    bulletDamage *= 1.3;
  },
  25: () => {
    criticalChance = true;
    randomCritical += 20;
  },
  26: () => {
    enemy1Damage *= 0.8;
    enemy2Damage *= 0.8;
    enemy3Damage *= 0.8;
    enemy4Damage *= 0.8;
    enemy5Damage *= 0.8;
    enemy6Damage *= 0.8;
  },
  27: () => {
    rarity += 150;
  },
  29: () => {
    enemy1Speed *= 0.8;
    enemy2Speed *= 0.8;
    enemy3Speed *= 0.8;
    enemy4Speed *= 0.8;
    enemy5Speed *= 0.8;
    enemy6Speed *= 0.8;
  },
  30: () => {
    enemy1Health *= 0.8;
    enemy2Health *= 0.8;
    enemy3Health *= 0.8;
    enemy4Health *= 0.8;
    enemy5Health *= 0.8;
    enemy6Health *= 0.8;
  },
  31: () => {
    shield += 3;
  },

  // Epic Upgrades
  32: () => {
    delaytime *= 0.75;
  },
  33: () => {
    player.hitpoint += 200;
  },
  34: () => {
    bulletDamage *= 1.4;
  },
  35: () => {
    criticalChance = true;
    randomCritical += 25;
  },
  36: () => {
    enemy1Damage *= 0.75;
    enemy2Damage *= 0.75;
    enemy3Damage *= 0.75;
    enemy4Damage *= 0.75;
    enemy5Damage *= 0.75;
    enemy6Damage *= 0.75;
  },
  37: () => {
    rarity += 200;
  },
  38: () => {
    crystalChance1 += 1;
    crystalChance2 += 1;
    crystalChance3 += 1;
    crystalChance4 += 1;
    crystalChance5 += 1;
    crystalChance6 += 1;
  },
  39: () => {
    enemy1Speed *= 0.75;
    enemy2Speed *= 0.75;
    enemy3Speed *= 0.75;
    enemy4Speed *= 0.75;
    enemy5Speed *= 0.75;
    enemy6Speed *= 0.75;
  },
  40: () => {
    enemy1Health *= 0.75;
    enemy2Health *= 0.75;
    enemy3Health *= 0.75;
    enemy4Health *= 0.75;
    enemy5Health *= 0.75;
    enemy6Health *= 0.75;
  },
  41: () => {
    shield += 4;
  },

  // Legendary Upgrades
  42: () => {
    delaytime *= 0.7;
  },
  43: () => {
    player.hitpoint += 300;
  },
  44: () => {
    bulletDamage *= 1.5;
  },
  45: () => {
    criticalChance = true;
    randomCritical += 30;
  },
  46: () => {
    enemy1Damage *= 0.7;
    enemy2Damage *= 0.7;
    enemy3Damage *= 0.7;
    enemy4Damage *= 0.7;
    enemy5Damage *= 0.7;
    enemy6Damage *= 0.7;
  },
  47: () => {
    rarity += 250;
  },
  48: () => {
    crystalChance1 += 2;
    crystalChance2 += 2;
    crystalChance3 += 2;
    crystalChance4 += 2;
    crystalChance5 += 2;
    crystalChance6 += 2;
  },
  49: () => {
    enemy1Speed *= 0.7;
    enemy2Speed *= 0.7;
    enemy3Speed *= 0.7;
    enemy4Speed *= 0.7;
    enemy5Speed *= 0.7;
    enemy6Speed *= 0.7;
  },
  50: () => {
    enemy1Health *= 0.7;
    enemy2Health *= 0.7;
    enemy3Health *= 0.7;
    enemy4Health *= 0.7;
    enemy5Health *= 0.7;
    enemy6Health *= 0.7;
  },
  51: () => {
    shield += 5;
  },
};

const upgradeTypes = {
  common: {
    color: [192, 192, 192], // Light grey
    upgrades: [
      "Your cannon reloads 10% faster",
      "You have 60 more health",
      "You do 15% more damage",
      "You have a +10% more chance to critical hit (critical hit does +100% damage)",
      "Enemies do 10% less damage",
      "You are more likely to find rarer upgrades",
      "Enemies move 10% slower",
      "Enemies spawn in with 10% less health",
      "You get a shield that blocks 50% damage the next time you get hit"
    ]
  },
  uncommon: {
    color: [127, 255, 0], // Green
    upgrades: [
      "Your cannon reloads 15% faster",
      "You have 100 more health",
      "You do 20% more damage",
      "You have a +15% more chance to critical hit (critical hit does +100% damage)",
      "Enemies do 15% less damage",
      "You are more likely to find rarer upgrades",
      "Enemies move 15% slower",
      "Enemies spawn in with 15% less health",
      "You get 2 shields that block 50% damage the next time you get hit"
    ]
  },
  rare: {
    color: [0, 112, 221], // Blue
    upgrades: [
      "Your cannon reloads 20% faster",
      "You have 150 more health",
      "You do 30% more damage",
      "You have a +20% more chance to critical hit (critical hit does +100% damage)",
      "Enemies do 20% less damage",
      "You are more likely to find rarer upgrades",
      "Enemies move 20% slower",
      "Enemies spawn in with 20% less health",
      "You get 3 shields that block 50% damage the next time you get hit"
    ]
  },
  epic: {
    color: [163, 53, 238], // Purple
    upgrades: [
      "Your cannon reloads 25% faster",
      "You have 200 more health",
      "You do 40% more damage",
      "You have a +25% more chance to critical hit (critical hit does +100% damage)",
      "Enemies do 25% less damage",
      "You are more likely to find rarer upgrades",
      "Enemies move 25% slower",
      "Enemies spawn in with 25% less health",
      "You get 4 shields that block 50% damage the next time you get hit"
    ]
  },
  legendary: {
    color: [255, 128, 0], // Orange
    upgrades: [
      "Your cannon reloads 30% faster",
      "You have 300 more health",
      "You do 50% more damage",
      "You have a +30% more chance to critical hit (critical hit does +100% damage)",
      "Enemies do 30% less damage",
      "You are more likely to find rarer upgrades",
      "Enemies move 30% slower",
      "Enemies spawn in with 30% less health",
      "You get 5 shields that block 50% damage the next time you get hit"
    ]
  }
};


function applyUpgrade(effectIndex) {
  let effectFunction = upgradeEffects[effectIndex];
  if (effectFunction) {
    effectFunction(); // Apply the effect
  } else {
    console.error("Upgrade effect not found for index:", effectIndex);
  }
}

function applySelectedUpgrade(index) {
  if (index >= 0 && index < currentUpgrades.length) {
    let upgrade = currentUpgrades[index];
    if (upgrade && upgrade.effectIndex !== undefined) {
      applyUpgrade(upgrade.effectIndex);
      playerUpgradeSound.play();
      upgradeScreen = false; // Close the upgrade screen
    } else {
      console.error("Upgrade data missing for index:", index);
    }
  } else {
    console.error("Invalid upgrade index:", index);
  }
}
