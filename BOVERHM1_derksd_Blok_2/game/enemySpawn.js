function enemySpawn() {
  rectMode(CORNER);
  
  //enemy1
  for (let e = 0; e < enemies.length; e++) {
    for (let j = 0; j < attractors.length; j++) {
      enemies[e].attracted(attractors[j]);
    }
    enemies[e].update();
    enemies[e].show();
  }


    if (int(random(1, enemy1Amount)) == 1) {
      var enemy = new Enemy1();
      enemies.push(enemy);
    }
   
   
   
    for (let i = 0; i < bullets.length; ++i) {
  for (let e = 0; e < enemies.length; e++) {
    if (bullets[i] === undefined) {
      continue;
    }
     
        var d = dist(
          bullets[i].x,
          bullets[i].y,
          enemies[e].pos.x,
          enemies[e].pos.y
        );
     
      if (d + 32 < bullets[i].r + enemies[e].r) {
        bullets.splice(i, 1);
        enemies[e].damage();
      }
      if (enemies[e].hitpoint <= 0) {
        enemies.splice(e, 1);
        enemyKilledTotal += 1

        points += 300;
        if (int(random(0, 3)) == 2) {
          crystal += int(random(1, crystalChange1));
        }
      }
    }
  }

 for (let e = 0; e < enemies.length; e++) {
    var p = dist(player.x, player.y, enemies[e].pos.x, enemies[e].pos.y);

    if (p + 75 < player.r + enemies[e].r) {
      enemies.splice(e, 1);
      if(shield == 0){
        playerDamagedSound.play();
        
        player.hitpoint -= enemy1Damage;
        
        if (player.hitpoint <= 0){
          enemy1Killed = true
          
        }
      }
      
      else{
        playerDamagedSound.play();
        player.hitpoint -= enemy1Damage/2;
        shield -= 1
        if (player.hitpoint <= 0){
          enemy1Killed = true
        }
      }
    }
  }



  //enemy2
    for (let e2 = 0; e2 < enemies2.length; e2++) {
      for (let j = 0; j < attractors.length; j++) {
        enemies2[e2].attracted(attractors[j]);
      }
      enemies2[e2].update();
      enemies2[e2].show();
    }

    if (int(random(1, enemy2Amount)) == 1) {
      var enemy = new Enemy2();
      enemies2.push(enemy);
    }


    for (let i = 0; i < bullets.length; ++i) {
    for (let e2 = 0; e2 < enemies2.length; e2++) {
      if (bullets[i] === undefined) {
        continue;
      }
       
          var d = dist(
            bullets[i].x,
            bullets[i].y,
            enemies2[e2].pos.x,
            enemies2[e2].pos.y
          );
        
        if (d + 25 < bullets[i].r + enemies2[e2].r) {
          bullets.splice(i, 1);
          enemies2[e2].damage();
        }
        if (enemies2[e2].hitpoint <= 0) {
          enemies2.splice(e2, 1);
          enemyKilledTotal += 1
          points += 100;

          if (int(random(0, 3)) == 0) {
            crystal += int(random(1, crystalChange2));
          }
        }
      }
    }

    for (let e2 = 0; e2 < enemies2.length; e2++) {
      var p = dist(player.x, player.y, enemies2[e2].pos.x, enemies2[e2].pos.y);

      if (p + 62 < player.r + enemies2[e2].r) {
        enemies2.splice(e2, 1);
        if(shield == 0){
        playerDamagedSound.play();
        player.hitpoint -= enemy2Damage;
        if (player.hitpoint <= 0){
          enemy2Killed = true
        }
      }
      
      else{
        playerDamagedSound.play();
        player.hitpoint -= enemy2Damage/2;
        shield -= 1
        if (player.hitpoint <= 0){
          enemy2Killed = true
        }
      }
      }
    }


    //enemy3
    for (let e3 = 0; e3 < enemies3.length; e3++) {
      for (let j = 0; j < attractors.length; j++) {
        enemies3[e3].attracted(attractors[j]);
      }
      enemies3[e3].update();
      enemies3[e3].show();
    }

    if (int(random(1, enemy3Amount)) == 1) {
      var enemy = new Enemy3();
      enemies3.push(enemy);
    }

    for (let i = 0; i < bullets.length; ++i) {
    for (let e3 = 0; e3 < enemies3.length; e3++) {
      if (bullets[i] === undefined) {
        continue;
      }
       
          var d = dist(
            bullets[i].x,
            bullets[i].y,
            enemies3[e3].pos.x,
            enemies3[e3].pos.y
          );
      
        if (d + 40 < bullets[i].r + enemies3[e3].r) {
          bullets.splice(i, 1);

          enemies3[e3].damage();
        }
        if (enemies3[e3].hitpoint <= 0) {
          enemies3.splice(e3, 1);
          enemyKilledTotal += 1
          points += 600;
          if (int(random(0, 2)) == 0) {
            crystal += int(random(1, crystalChange3));
          }
        }
      }
    }

    for (let e3 = 0; e3 < enemies3.length; e3++) {
      var p = dist(player.x, player.y, enemies3[e3].pos.x, enemies3[e3].pos.y);

      if (p + 88 < player.r + enemies3[e3].r) {
        enemies3.splice(e3, 1);
       if(shield == 0){
        playerDamagedSound.play();
        player.hitpoint -= enemy3Damage;
        if (player.hitpoint <= 0){
          enemy3Killed = true
        }
      }
      
      else{
        playerDamagedSound.play();
        player.hitpoint -= enemy3Damage/2;
        shield -= 1
        if (player.hitpoint <= 0){
          enemy3Killed = true
        }
      }
      }
    }
  





        //enemy4
        for (let e4 = 0; e4 < enemies4.length; e4++) {
          for (let j = 0; j < attractors.length; j++) {
            enemies4[e4].attracted(attractors[j]);
          }
          enemies4[e4].update();
          enemies4[e4].show();
        }
    
        if (int(random(1, enemy4Amount)) == 1) {
          var enemy = new Enemy4();
          enemies4.push(enemy);
        }
    for (let i = 0; i < bullets.length; ++i) {
        for (let e4 = 0; e4 < enemies4.length; e4++) {
          if (bullets[i] === undefined) {
            continue;
          }
          
              var d = dist(
                bullets[i].x,
                bullets[i].y,
                enemies4[e4].pos.x,
                enemies4[e4].pos.y
              );
           
            if (d + 25 < bullets[i].r + enemies4[e4].r) {
              bullets.splice(i, 1);
    
              enemies4[e4].damage();

              
            }
            if (enemies4[e4].hitpoint <= 0) {
              enemies4.splice(e4, 1);
              enemyKilledTotal += 1
              points += 200;
              if (int(random(0, 2)) == 0) {
                crystal += int(random(1, crystalChange4));
              }
            }
          }
        }
    
        for (let e4 = 0; e4 < enemies4.length; e4++) {
          var p = dist(player.x, player.y, enemies4[e4].pos.x, enemies4[e4].pos.y);
    
          if (p + 69 < player.r + enemies4[e4].r) {
            enemies4.splice(e4, 1);
           if(shield == 0){
            playerDamagedSound.play();
            player.hitpoint -= enemy4Damage;
            if (player.hitpoint <= 0){
              enemy4Killed = true
            }
          }
          
          else{
            playerDamagedSound.play();
            player.hitpoint -= enemy4Damage/2;
            shield -= 1
            if (player.hitpoint <= 0){
              enemy4Killed = true
            }
          }
          }
        }





  //enemy5

  for (let e5 = 0; e5 < enemies5.length; e5++) {
    for (let j = 0; j < attractors.length; j++) {
      enemies5[e5].attracted(attractors[j]);
    }
    enemies5[e5].update();
    enemies5[e5].show();
  }

  if (int(random(1, enemy5Amount)) == 1) {
    var enemy = new Enemy5();
    enemies5.push(enemy);
  }

  for (let i = 0; i < bullets.length; ++i) {
  for (let e5 = 0; e5 < enemies5.length; e5++) {
    if (bullets[i] === undefined) {
      continue;
    }
    
      var d = dist(
        bullets[i].x,
        bullets[i].y,
        enemies5[e5].pos.x,
        enemies5[e5].pos.y
      );

      if (d + 45 < bullets[i].r + enemies5[e5].r) {
        bullets.splice(i, 1);

        enemies5[e5].damage();
      }
      if (enemies5[e5].hitpoint <= 0) {
        enemies5.splice(e5, 1);
        enemyKilledTotal += 1
        points += 400;
        if (int(random(0, 2)) == 0) {
          crystal += int(random(1, crystalChange5));
        }
      }
    }
  }

  for (let e5 = 0; e5 < enemies5.length; e5++) {
    var p = dist(player.x, player.y, enemies5[e5].pos.x, enemies5[e5].pos.y);

    if (p + 65 < player.r + enemies5[e5].r) {
      enemies5.splice(e5, 1);
      if (shield == 0) {
        playerDamagedSound.play();
        player.hitpoint -= enemy5Damage;
        if (player.hitpoint <= 0){
          enemy5Killed = true
        }
      } else {
        playerDamagedSound.play();
        player.hitpoint -= enemy5Damage / 2;
        shield -= 1;
        if (player.hitpoint <= 0){
          enemy5Killed = true
        }
      }
    }
  }






  
  //enemy6
  for (let e6 = 0; e6 < enemies6.length; e6++) {
    for (let j = 0; j < attractors.length; j++) {
      enemies6[e6].attracted(attractors[j]);
    }
    enemies6[e6].update();
    enemies6[e6].show();
  }

  if (int(random(1, enemy6Amount)) == 1) {
    var enemy = new Enemy6();
    enemies6.push(enemy);
  }

  for (let i = 0; i < bullets.length; ++i) {
    for (let e6 = 0; e6 < enemies6.length; e6++) {
      if (bullets[i] === undefined) {
        continue;
      }

      var d = dist(
        bullets[i].x,
        bullets[i].y,
        enemies6[e6].pos.x,
        enemies6[e6].pos.y
      );

      if (d + 40 < bullets[i].r + enemies6[e6].r) {
        bullets.splice(i, 1);

        enemies6[e6].damage();
      }

      if (enemies6[e6].hitpoint <= 0) {
        enemies6.splice(e6, 1);
        enemyKilledTotal += 1
        points += 500;
        if (int(random(0, 2)) == 0) {
          crystal += int(random(1, crystalChange6));
        }
      }
    }
  }

  for (let e6 = 0; e6 < enemies6.length; e6++) {
    var p = dist(player.x, player.y, enemies6[e6].pos.x, enemies6[e6].pos.y);

    if (p + 83 < player.r + enemies6[e6].r) {
      enemies6.splice(e6, 1);
      if (shield == 0) {
        playerDamagedSound.play();
        player.hitpoint -= enemy6Damage;
        if (player.hitpoint <= 0){
          enemy6Killed = true
        }

      } else {
        playerDamagedSound.play();
        player.hitpoint -= enemy6Damage / 2;
        shield -= 1;
        if (player.hitpoint <= 0){
          enemy6Killed = true
        }
      }
    }
  }










    //enemy7
    for (let e7 = 0; e7 < enemies7.length; e7++) {
      for (let j = 0; j < attractors.length; j++) {
        enemies7[e7].attracted(attractors[j]);
      }
      enemies7[e7].update();
      enemies7[e7].show();
    }
  
    if (boss == true) {
      var enemy = new Enemy7();
      enemies7.push(enemy);
      boss = false
    }
  
    for (let i = 0; i < bullets.length; ++i) {
      for (let e7 = 0; e7 < enemies7.length; e7++) {
        if (bullets[i] === undefined) {
          continue;
        }
  
        var d = dist(
          bullets[i].x,
          bullets[i].y,
          enemies7[e7].pos.x,
          enemies7[e7].pos.y
        );
  
        if (d*2 + 10 < bullets[i].r + enemies7[e7].r) {
          bullets.splice(i, 1);
  
          enemies7[e7].damage();
        }
  
        if (enemies7[e7].hitpoint <= 0) {
          enemies7.splice(e7, 1);
          enemyKilledTotal += 1
          points += 10000;
          if (int(random(0, 2)) == 0) {
            crystal += int(random(1, crystalChange7));
          }
        }
      }
    }
  
    for (let e7 = 0; e7 < enemies7.length; e7++) {
      var p = dist(player.x, player.y, enemies7[e7].pos.x, enemies7[e7].pos.y);
  
      if (p *2 < player.r + enemies7[e7].r) {
        enemies7.splice(e7, 1);
        if (shield == 0) {
          playerDamagedSound.play();
          player.hitpoint -= enemy7Damage;

          
        } else {
          playerDamagedSound.play();
          player.hitpoint -= enemy7Damage / 2;
          shield -= 1;
        }
      }
    }
}
