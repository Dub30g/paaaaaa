function homeScreen() {
  
  var textgrote1 = width / 20;
  var textgrote2 = width / 30;
  textFont("Calibri");
  background(0);
  
  stroke(255, 255, 0);
  strokeWeight(1);
  line(0, height * 0.1, width, height * 0.1);
  stroke(0, 255, 0);
  strokeWeight(1);
  line(0, height * 0.7375, width, height * 0.7375);
  
  // Title on Home screen
  fill(255,0,0);
  noStroke()
  textSize(textgrote1);
  textAlign(CENTER);
  text("GEFELICITEERD PAPA!!", width * 0.5, height * 0.06);
  
  // Start button on Home screen
  fill(255,0,0)
  noStroke()
  textSize(textgrote2);
  text("START GAME", width * 0.5, 0.2083375 * height);
  noFill();
  stroke(255,0,0);
  strokeWeight(2);
  ellipse(width * 0.5, height * 0.2083375, width * 0.5, height * 0.15);
  // rect(width * 0.25, height * 0.1333375, width * 0.5, height * 0.15);
  
  // Start button collision
  if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.2833375 * height && mouseY > 0.1333375 * height){
      if(mouseIsPressed) {
        gameStartSound.play();
        home = false;
        start = true;
        inGame = true;
      }
    }


  // Controls button on Home screen
  fill(255,255,0);
  noStroke()
  textSize(textgrote2);
  text("TUTORIAL", width * 0.5, 0.416675 * height);
  noFill();
  stroke(255,255,0);
  strokeWeight(2);
  ellipse(width * 0.5, height * 0.416675, width * 0.5, height * 0.15);
  // rect(width * 0.25, height * 0.341675, width * 0.5, height * 0.15);
  
  // Controls button collision
  if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.491675 * height && mouseY > 0.341675 * height){
      if(mouseIsPressed) {
        clickSound.play();
        home = false;
        controls = true;
      }
    }

  // Score button on Home screen
  fill(0,255,0);
  noStroke()
  textSize(textgrote2);
  text("SCOREBOARD", width * 0.5, 0.625 * height);
  noFill();
  stroke(0,255,0);
  strokeWeight(2);
  ellipse(width * 0.5, 0.625 * height, 0.5 * width, 0.15 * height);
  // rect(width * 0.25, height * 0.55, width * 0.5, height * 0.15);
  
  // Score button collision
  if(mouseX > 0.25 * width && mouseX < 0.75 * width && mouseY < 0.7 * height && mouseY > 0.55 * height){
    if(mouseIsPressed) {
      clickSound.play();
      home = false;
      score = true;
    }
  }
}

function controlsScreen() {
  
  var textgrote2 = width / 30;

  fill(0,255,0);
  strokeWeight(1);
  stroke(255,255,0);
  textFont("Calibri");
  background(0);
  textAlign(LEFT);
  textSize(width / 30);
  text("HEY PAP GEFELICITEERD MET JE VERJAARDAG", 0.075 * width, 0.100 * height);
  text("IK BEN HEEL BLIJ DAT JE MIJN GAME ZO LEUK VIND", 0.075 * width, 0.175 * height);
  text("DUS HEB IK EEN SPECIALE VERSIE VOOR JOUW GEMAAKT", 0.075 * width, 0.225 * height);
  text("IK HOOP DAT JE EEN GOEDE VERJAARDAG HEBT", 0.075 * width, 0.350 * height);
  text("EN SUCCES OM HOGE SCORES TE HALEN", 0.075 * width, 0.425 * height);
  textAlign(CENTER);
  noFill();
  stroke(255,0,0);
  strokeWeight(4);
  rect(0.05 * width, 0.05 * height, 0.9 * width, 0.671 * height);










  // Start button on Controls screen
  fill(255,0,0);
  noStroke()
  textSize(textgrote2);
  text("START", 0.3 * width, 0.81 * height);
  noFill();
  stroke(255,0,0);
  strokeWeight(2);
  ellipse(0.3 * width, 0.81 * height, 0.3 * width, 0.1 * height);
  
  // Start button collision
  if(mouseX > 0.15 * width && mouseX < 0.45 * width && mouseY < 0.86 * height && mouseY > 0.76 * height){
    if(mouseIsPressed) {
      gameStartSound.play();
      controls = false;
      start = true;
      inGame = true
    }
  }
  
  // Score button on Controls screen
  fill(255,255,0);
  noStroke()
  text("SCOREBOARD", 0.7 * width, 0.81 * height);
  noFill();
  stroke(255,255,0);
  strokeWeight(2);
  ellipse(0.7 * width, 0.81 * height, 0.3 * width, 0.1 * height);
  
  // Score button collision
  if(mouseX > 0.55 * width && mouseX < 0.85 * width && mouseY < 0.86 * height && mouseY > 0.76 * height){
    if(mouseIsPressed){
      clickSound.play();
      controls = false;
      score = true;
    }
  }
  
  // Home button on Controls screen
  fill(0,255,0);
  noStroke()
  text("HOME", 0.3 * width, 0.94 * height);
  noFill();
  stroke(0,255,0);
  strokeWeight(2);
  ellipse(0.3 * width, 0.94 * height, 0.3 * width, 0.1 * height);
  
  // Home button collision
  if(mouseX > 0.15 * width && mouseX < 0.45 * width && mouseY < 0.99 * height && mouseY > 0.89 * height){
    if(mouseIsPressed) {
      clickSound.play();
      controls = false;
      home = true;
    }
  }
}



  function scoreScreen() {
  
  var textgrote2 = width / 30;
  background(0);
  
  // Start knop on Controls screen
  fill(255,0,0);
  noStroke()
  textSize(textgrote2);
  text("START", 0.3 * width, 0.81 * height);
  noFill();
  stroke(255,0,0);
  strokeWeight(2);
  ellipse(0.3 * width, 0.81 * height, 0.3 * width, 0.1 * height);
  
  // Start button collision
  if(mouseX > 0.15 * width && mouseX < 0.45 * width && mouseY < 0.86 * height && mouseY > 0.76 * height){
    if(mouseIsPressed) {
      gameStartSound.play();
      score = false;
      start = true;
      inGame = true;
    }
  }
  
  // Home button on Controls screen
  fill(255,255,0);
  noStroke()
  text("HOME", 0.3 * width, 0.94 * height);
  noFill();
  stroke(255,255,0);
  strokeWeight(2);
  ellipse(0.3 * width, 0.94 * height, 0.3 * width, 0.1 * height);
  
  // Home button collision
  if(mouseX > 0.15 * width && mouseX < 0.45 * width && mouseY < 0.99 * height && mouseY > 0.89 * height){
    if(mouseIsPressed) {
      clickSound.play();
      score = false;
      home = true;
    }
  }
  
  // Controls button on Score screen
  fill(0,255,0);
  noStroke();
  text("CONTROLS", 0.7 * width, 0.94 * height);
  noFill();
  stroke(0,255,0);
  strokeWeight(2);
  ellipse(0.7 * width, 0.94 * height, 0.285 * width, 0.1 * height);
  
  // Controls button collision
  if(mouseX > 0.55 * width && mouseX < 0.85 * width && mouseY < 0.99 * height && mouseY > 0.89 * height){
    if(mouseIsPressed) {
      clickSound.play();
      score = false;
      controls = true;
    }
  }


  scores.sort((a, b) => b.score - a.score);

 noStroke();
 fill(255);
 textSize(50);
 text("Scoreboard", width / 4.4, 80);

  for (let s = 0; s < scores.length; s++) {
    if (s <= 9) {
      noStroke();
      fill(255);
      textSize(30);
      text(s + 1 + ".   ", width / 14, 150 + 45 * s);
      textSize(30 - scores[s].name.length);
      text(scores[s].name + ":", width / 7, 150 + 45 * s);
      text(scores[s].score + " points", width / 3, 150 + 45 * s);
    }
  }




  noStroke();
  fill(0, 255, 0);
  textSize(50);
  text("Coolboard", width / 1.35, 80);
 
  textSize(30);
   for (let s = 0; s < 10; s++) {
  if(s == 0 || s == 3 || s == 6 || s == 9){
    fill(255,0,0);
  }

  if(s == 1 || s == 4 || s == 7){
    fill(255,255,0);
  }

  if(s == 2 || s == 5 || s == 8){
    fill(0,255,0);
  }

    text(s + 1 + ".   ", width / 1.85, 150 + 45 * s);
    }

       noStroke();
       textSize(30);
       fill(255,0,0);
       text("hobbol:", width / 1.55, 150);
       text("100000 points", width / 1.18, 150);

       fill(255,255,0);
       text("remi:", width / 1.55, 195);
       text("950000 points", width / 1.18, 195);

       fill(0,255,0);
       textSize(22);
       text("epic reggea dj:", width / 1.5, 240);
       text("880000 points", width / 1.18, 240);

       fill(255,0,0);
       textSize(30);
       text("Rambo", width / 1.55, 285);
       text("850000 points", width / 1.18, 285);

       fill(255,255,0);
       textSize(18);
       text("humble daddy hobbol", width /1.5, 330);
       text("820000 points", width / 1.18, 330);

       fill(0,255,0);
       text("klusjesman skank", width / 1.55, 375);
       text("780000 points", width / 1.18, 375);

       fill(255,0,0);
       textSize(22);
       text("back-a-wall", width / 1.55, 425);
       text("760000 points", width / 1.18, 425);

       fill(255,255,0);
       textSize(30);
       text("marijn:", width / 1.55, 470);
       text("600000 points", width / 1.18, 470);

       fill(0,255,0);
       textSize(22);
       text("papa hobbol:", width / 1.55, 515);
       text("570000 points", width / 1.18, 515);

       fill(255,0,0);
       text("pro opschepper:", width / 1.55, 560);
       text("500000 points", width / 1.18, 560);


     
    




}